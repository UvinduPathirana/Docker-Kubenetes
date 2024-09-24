## Build a Dockerfile

**`-t` or `--tag`**: This option assigns a name (or "tag") to the image that you're building. In this example, `my-node-webapp` is the name you're giving the Docker image.

```docker
docker build -t my-node-webapp .
```

## Run a container from a Dockerfile

```docker
docker run -p 3000:3000 my-node-webapp
```

## See running containers

```docker
docker ps
```

## See all containers

```docker
docker ps -a
```