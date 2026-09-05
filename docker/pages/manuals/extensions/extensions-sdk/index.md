> Commit-pinned source for Docker main: [content/manuals/extensions/extensions-sdk/_index.md](https://github.com/docker/docs/blob/034d46977dac45d2a9493f2465b08108ac3cf87b/content/manuals/extensions/extensions-sdk/_index.md)

# Overview of the Extensions SDK

> \[!IMPORTANT]
>
> New submissions to the Docker Extensions Marketplace are paused while Docker reviews Marketplace security. You can still update existing extensions, and private Marketplace extensions are unaffected. Contact <extensions@docker.com> if you have additional questions.

The resources in this section help you create your own Docker extension.

The Docker CLI tool provides a set of commands to help you build and publish your extension, packaged as a
specially formatted Docker image.

At the root of the image filesystem is a `metadata.json` file which describes the content of the extension.
It's a fundamental element of a Docker extension.

An extension can contain a UI part and backend parts that run either on the host or in the Desktop virtual machine.
For further information, see [Architecture](https://docs.docker.com/extensions/extensions-sdk/architecture/).

You distribute extensions through Docker Hub. However, you can develop them locally without the need to push
the extension to Docker Hub. See [Extensions distribution](https://docs.docker.com/extensions/extensions-sdk/extensions/DISTRIBUTION/) for further details.

> Already built an extension?
>
> Let us know about your experience using the [feedback form](https://survey.alchemer.com/s3/7184948/Publishers-Feedback-Form).

- [The build and publish process](https://docs.docker.com/extensions/extensions-sdk/process/): Understand the process for building and publishing an extension.
- [Quickstart guide](https://docs.docker.com/extensions/extensions-sdk/quickstart/): Follow the quickstart guide to create a basic Docker extension quickly.
- [View the design guidelines](https://docs.docker.com/extensions/extensions-sdk/design/design-guidelines/): Ensure your extension aligns to Docker's design guidelines and principles.
- [Publish your extension](https://docs.docker.com/extensions/extensions-sdk/extensions/): Understand how to publish your extension to the Marketplace.
- [Interacting with Kubernetes](https://docs.docker.com/extensions/extensions-sdk/guides/kubernetes/): Find information on how to interact indirectly with a Kubernetes cluster from your Docker extension.
- [Multi-arch extensions](https://docs.docker.com/extensions/extensions-sdk/extensions/multi-arch/): Build your extension for multiple architectures.
