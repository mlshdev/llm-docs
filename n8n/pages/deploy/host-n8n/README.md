> Commit-pinned source for n8n main: [docs/deploy/host-n8n/README.md](https://github.com/n8n-io/n8n-docs/blob/b732ee99d015bf1b55668862de6e07bbcb573c0c/docs/deploy/host-n8n/README.md)

# Self-hosting n8n <a id="self-hosting-n8n"></a>

You can self-host n8n on your own infrastructure, on-premises, or in a private cloud, using Docker Compose, one-line setup, or other deployment methods. Not sure if self-hosting is right for you? See [Choose how to use n8n](https://docs.n8n.io/get-started/choose-how-to-use-n8n).

All self-hosted installations use the same core product. Without a license key, n8n runs as the free Community edition. Adding a Business or Enterprise license key enables those editions. See [Compare editions](https://docs.n8n.io/deploy/host-n8n/community-edition-features) for the differences between the self-hosted editions.

## Choose your installation method <a id="choose-your-installation-method"></a>

Select the installation method that best fits your technical requirements and infrastructure:

- **One-line setup**

  **Best for:** Quick setup with minimal configuration.

  **Requirements:** Linux or macOS system with curl installed.

  Automated installation script that handles all dependencies and configuration for you.

  [One-line setup guide](https://docs.n8n.io/deploy/host-n8n/install-options/one-line-setup)

- **Docker Compose**

  **Best for:** Production deployments with databases and additional services.

  **Requirements:** Docker and Docker Compose installed on your system.

  Multi-container setup ideal for robust deployments with persistent data and scalability.

  [Docker Compose guide](https://docs.n8n.io/deploy/host-n8n/install-options/install-using-docker-compose)

- **AWS**

  Deploy on Amazon Web Services using EC2, ECS, or other AWS services.

  [AWS setup guide](https://docs.n8n.io/deploy/host-n8n/install-options/use-a-cloud-provider/deploy-to-aws)

- **Azure**

  Host n8n on Microsoft Azure with container instances or virtual machines.

  [Azure setup guide](https://docs.n8n.io/deploy/host-n8n/install-options/use-a-cloud-provider/deploy-to-azure)

- **Google Cloud**

  Run n8n on Google Cloud using Cloud Run or Kubernetes Engine.

  [Google Cloud Run](https://docs.n8n.io/deploy/host-n8n/install-options/use-a-cloud-provider/deploy-to-google-cloud-run) | [Kubernetes Engine](https://docs.n8n.io/deploy/host-n8n/install-options/use-a-cloud-provider/deploy-to-google-kubernetes)

- **DigitalOcean**

  Simple droplet-based hosting ideal for small to medium deployments.

  [DigitalOcean setup guide](https://docs.n8n.io/deploy/host-n8n/install-options/use-a-cloud-provider/deploy-to-digital-ocean)

- **Hetzner**

  Cost-effective European hosting option with excellent performance.

  [Hetzner setup guide](https://docs.n8n.io/deploy/host-n8n/install-options/use-a-cloud-provider/deploy-to-hetzner)

- **Heroku**

  Platform-as-a-service option for quick deployment with minimal configuration.

  [Heroku setup guide](https://docs.n8n.io/deploy/host-n8n/install-options/use-a-cloud-provider/deploy-to-heroku)

- **OpenShift**

  Enterprise Kubernetes platform for containerized applications.

  [OpenShift setup guide](https://docs.n8n.io/deploy/host-n8n/install-options/use-a-cloud-provider/deploy-to-openshift-local-crc)

- **npm**

  **Best for:** Local development or testing.

  **Requirements:** Node.js installed on your system.

  npm installation is deprecated from n8n 3.0. Consider using Docker Compose or one-line setup instead.

  Installs n8n directly using Node Package Manager. Quick to set up but requires managing Node.js versions and dependencies yourself.

  [npm installation guide](https://docs.n8n.io/deploy/host-n8n/install-options/install-with-npm)
