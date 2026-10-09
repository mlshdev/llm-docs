> Pinned source for Docker main: [content/manuals/testcontainers.md](https://github.com/docker/docs/blob/18bbfeeb249da011f359d558dba84c4b6dc3a335/content/manuals/testcontainers.md)

# Testcontainers

Testcontainers is a set of open source libraries that provides easy and lightweight APIs for bootstrapping local development and test dependencies with real services wrapped in Docker containers.
Using Testcontainers, you can write tests that depend on the same services you use in production without mocks or in-memory services.

- [What is Testcontainers?](https://testcontainers.com/getting-started/#what-is-testcontainers): Learn about what Testcontainers does and its key benefits
- [The Testcontainers workflow](https://testcontainers.com/getting-started/#testcontainers-workflow): Understand the Testcontainers workflow

## Quickstart

### Supported languages

Testcontainers provide support for the most popular languages, and Docker sponsors the development of the following Testcontainers implementations:

- [Go](https://golang.testcontainers.org/quickstart/)
- [Java](https://java.testcontainers.org/quickstart/junit_5_quickstart/)

The rest are community-driven and maintained by independent contributors.

### Prerequisites

Testcontainers requires a Docker-API compatible container runtime.
During development, Testcontainers is actively tested against recent versions of Docker on Linux, as well as against Docker Desktop on Mac and Windows.
These Docker environments are automatically detected and used by Testcontainers without any additional configuration being necessary.

It is possible to configure Testcontainers to work for other Docker setups, such as a remote Docker host or Docker alternatives.
However, these are not actively tested in the main development workflow, so not all Testcontainers features might be available
and additional manual configuration might be necessary.

If you have further questions about configuration details for your setup or whether it supports running Testcontainers-based tests,
contact the Testcontainers team and other users from the Testcontainers community on [Slack](https://slack.testcontainers.org/).

- [Testcontainers for Go](https://golang.testcontainers.org/quickstart/): A Go package that makes it simple to create and clean up container-based dependencies for automated integration/smoke tests.
- [Testcontainers for Java](https://java.testcontainers.org/): A Java library that supports JUnit tests, providing lightweight, throwaway instances of anything that can run in a Docker container.

## Guides

Explore hands-on Testcontainers guides to learn how to use Testcontainers
with different languages and popular frameworks:

- [Getting started with Testcontainers for .NET](https://docs.docker.com/guides/testcontainers-dotnet-getting-started/)
- [Getting started with Testcontainers for Go](https://docs.docker.com/guides/testcontainers-go-getting-started/)
- [Getting started with Testcontainers for Java](https://docs.docker.com/guides/testcontainers-java-getting-started/)
- [Getting started with Testcontainers for Node.js](https://docs.docker.com/guides/testcontainers-nodejs-getting-started/)
- [Getting started with Testcontainers for Python](https://docs.docker.com/guides/testcontainers-python-getting-started/)
- [Testing a Spring Boot REST API with Testcontainers](https://docs.docker.com/guides/testcontainers-java-spring-boot-rest-api/)
- [Testcontainers container lifecycle management](https://docs.docker.com/guides/testcontainers-java-lifecycle/)
- [Replace H2 with a real database for testing](https://docs.docker.com/guides/testcontainers-java-replace-h2/)
- [Configuration of services running in a container](https://docs.docker.com/guides/testcontainers-java-service-configuration/)
- [Testing an ASP.NET Core web app](https://docs.docker.com/guides/testcontainers-dotnet-aspnet-core/)
