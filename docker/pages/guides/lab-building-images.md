> Commit-pinned source for Docker main: [content/guides/lab-building-images.md](https://github.com/docker/docs/blob/c596433b17b6e062376dcd24395336f316e1714a/content/guides/lab-building-images.md)

# Lab: Building Container Images

Take a working but naïve Dockerfile and progressively improve it into a
production-grade image. Each section introduces one technique, applied to
a real Python Flask app, so you can see the impact directly.

## Launch the lab

```console
$ docker compose -p labspace -f oci://dockersamples/labspace-building-images up -d
```

Open <http://localhost> in your browser.

```console
$ docker compose -p labspace down
```

## What you'll learn

By the end of this Labspace, you will have completed the following:

- Read an image's layer history and understand the layer cleanup pitfall
- Restructure a Dockerfile for fast, cache-efficient incremental builds
- Write a `.dockerignore` file and run containers as a non-root user
- Use multi-stage builds to run tests as a build gate and dramatically reduce image size
- Choose the right base image for production, including Docker Hardened Images
- Inject secrets safely at build time using `--mount=type=secret`

## Modules

| # | Module                     | Description                                                            |
| - | -------------------------- | ---------------------------------------------------------------------- |
| 1 | Welcome & Your First Build | Explore the sample app and build the initial image                     |
| 2 | Understanding Image Layers | Inspect layers with `docker history` and see the layer cleanup pitfall |
| 3 | Dockerfile Best Practices  | Fix cache ordering, add `.dockerignore`, and switch to a non-root user |
| 4 | Multi-Stage Builds         | Run tests as a build gate and use a slim base for the production stage |
| 5 | Choosing a Base Image      | Compare slim, Alpine, and Docker Hardened Images                       |
| 6 | Build Secrets              | Show why `ARG` leaks secrets and use `--mount=type=secret` safely      |
| 7 | Wrap-up                    | Review the complete best-practices checklist and next steps            |
