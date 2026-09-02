> Commit-pinned source for Docker main: [content/manuals/compose/how-tos/environment-variables/best-practices.md](https://github.com/docker/docs/blob/ff96ad1711065cf2e9c3f1d701dad04775834f70/content/manuals/compose/how-tos/environment-variables/best-practices.md)

# Best practices for working with environment variables in Docker Compose

#### Handle sensitive information securely

Be cautious about including sensitive data in environment variables. Consider using [Secrets](https://docs.docker.com/compose/how-tos/use-secrets/) for managing sensitive information.

#### Understand environment variable precedence

Be aware of how Docker Compose handles the [precedence of environment variables](https://docs.docker.com/compose/how-tos/environment-variables/envvars-precedence/) from different sources (`.env` files, shell variables, Dockerfiles).

#### Use specific environment files

Consider how your application adapts to different environments. For example development, testing, production, and use different `.env` files as needed.

#### Know interpolation

Understand how [interpolation](https://docs.docker.com/compose/how-tos/environment-variables/variable-interpolation/) works within compose files for dynamic configurations.

#### Command line overrides

Be aware that you can [override environment variables](https://docs.docker.com/compose/how-tos/environment-variables/set-environment-variables/#cli) from the command line when starting containers. This is useful for testing or when you have temporary changes.
