> Commit-pinned source for Docker main: [content/manuals/scout/integrations/ci/_index.md](https://github.com/docker/docs/blob/ca60e92629079de412f38632876ab208d84267ef/content/manuals/scout/integrations/ci/_index.md)

# Using Docker Scout in continuous integration

You can analyze Docker images in continuous integration pipelines as you build
them using a GitHub action or the Docker Scout CLI plugin.

Available integrations:

- [GitHub Actions](https://docs.docker.com/scout/integrations/ci/gha/)
- [GitLab](https://docs.docker.com/scout/integrations/ci/gitlab/)
- [Microsoft Azure DevOps Pipelines](https://docs.docker.com/scout/integrations/ci/azure/)
- [Circle CI](https://docs.docker.com/scout/integrations/ci/circle-ci/)
- [Jenkins](https://docs.docker.com/scout/integrations/ci/jenkins/)

You can also add runtime integration as part of your CI/CD pipeline, which lets
you assign an image to an environment, such as `production` or `staging`, when
you deploy it. For more information, see [Environment monitoring](https://docs.docker.com/scout/integrations/environment/).
