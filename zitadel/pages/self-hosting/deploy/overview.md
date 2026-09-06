> Release-pinned source for ZITADEL v4.17.3: [apps/docs/content/self-hosting/deploy/overview.mdx](https://zitadel.com/docs/self-hosting/deploy/overview)

Choose your platform and run ZITADEL with the most minimal configuration possible.

- [Linux](https://zitadel.com/docs/self-hosting/deploy/linux)
- [MacOS](https://zitadel.com/docs/self-hosting/deploy/macos)
- [Docker Compose](https://zitadel.com/docs/self-hosting/deploy/compose)
- [Kubernetes](https://zitadel.com/docs/self-hosting/deploy/kubernetes)

## Prerequisites

- For test environments, ZITADEL does not need many resources, 1 CPU and 512MB memory are more than enough. (With more CPU, the password hashing might be faster)
- A PostgreSQL instance. Make sure to check the **database configuration options** in our [Production Guide](https://zitadel.com/docs/self-hosting/manage/production#prefer-postgre-sql).

## Releases

The easiest way to use ZITADEL is to run one of our container releases

- ZITADEL does provide latest and stable [container images](https://github.com/zitadel/zitadel/pkgs/container/zitadel)
- **stable** is the current **production** release of ZITADEL.
- **latest** is the **last created** release from our pipelines that gets updated in a high frequency.

## Production Setup

After you have successfully created your first test environment using one of the deployment guides in this section,
you might want to configure ZITADEL for production and embed it into your system landscape.
To do so, jump straight to the [production setup guide](https://zitadel.com/docs/self-hosting/manage/production).

To achieve high availability, we recommend using a [Kubernetes](https://kubernetes.io/docs/home/) Cluster.
We have an official [Helm chart](https://artifacthub.io/packages/helm/zitadel/zitadel) for easy deployment and maintenance.
