
FROM node:15 as build-stage
WORKDIR /app
COPY /web/package.json /app/
RUN yarn install
COPY /web/ /app/
RUN yarn run build


FROM python:3.8
COPY Pipfile prestart.sh ./
COPY --from=build-stage /app/build /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
WORKDIR app
COPY api .
RUN pip install --upgrade pip && pip install pipenv
RUN pipenv install --deploy
CMD [ "pipenv", "run", "gunicorn", "-w", "3", "-b", ":80", "main:app" ]

STOPSIGNAL SIGTERM
EXPOSE 80


