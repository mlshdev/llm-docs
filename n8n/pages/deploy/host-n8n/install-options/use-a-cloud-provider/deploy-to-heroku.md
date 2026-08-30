> Commit-pinned source for n8n main: [docs/deploy/host-n8n/install-options/use-a-cloud-provider/deploy-to-heroku.md](https://github.com/n8n-io/n8n-docs/blob/0ece31e57a42e63cf2a2c7f9a33b42888e09a5b3/docs/deploy/host-n8n/install-options/use-a-cloud-provider/deploy-to-heroku.md)

# Hosting n8n on Heroku <a id="hosting-n8n-on-heroku"></a>

This hosting guide shows you how to self-host n8n on Heroku. It uses:

- [Docker Compose](https://docs.docker.com/compose/) to create and define the application components and how they work together.
- [Heroku's PostgreSQL service](https://devcenter.heroku.com/categories/heroku-postgres) to host n8n's data storage.
- A **Deploy to Heroku** button offering a one click, with minor configuration, deployment.

> **Info**
> **Self-hosting knowledge prerequisites**
>
> Self-hosting n8n requires technical knowledge, including:
>
> - Setting up and configuring servers and containers
> - Managing application resources and scaling
> - Securing servers and applications
> - Configuring n8n
>
> n8n recommends self-hosting for expert users. Mistakes can lead to data loss, security issues, and downtime. If you aren't experienced at managing servers, n8n recommends [n8n Cloud](https://n8n.io/cloud/).

> **Info**
> **Stable and Beta versions**
>
> n8n releases a new minor version most weeks. The `stable` version is for production use. `beta` is the most recent release. The `beta` version may be unstable. To report issues, use the [forum](https://community.n8n.io/c/questions/12).
>
> Current `stable`: 2.36.8
> Current `beta`: 2.37.4

## Use the deployment template to create a Heroku project <a id="use-the-deployment-template-to-create-a-heroku-project"></a>

The quickest way to get started with deploying n8n to Heroku is using the **Deploy to Heroku** button:

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://dashboard.heroku.com/new?template=https://github.com/n8n-io/n8n-heroku/tree/main)

This opens the **Create New App** page on Heroku. Set a name for the project, and choose the region to deploy the project to.

### Configure environment variables <a id="configure-environment-variables"></a>

Heroku pre-fills the configuration options defined in the `env` section of the `app.json` file, which also sets default values for the environment variables n8n uses.

You can change any of these values to suit your needs. You must change the following values:

- **N8N\_ENCRYPTION\_KEY**, which n8n uses to [encrypt user account details](https://docs.n8n.io/deploy/host-n8n/configure-n8n/basic-configuration/use-environment-variables/deployment) before saving to the database.
- **WEBHOOK\_URL** should match the application name you create to ensure that webhooks have the correct URL.

### Deploy n8n <a id="deploy-n8n"></a>

Select **Deploy app**.

After Heroku builds and deploys the app it provides links to **Manage App** or **View** the application.

> **Info**
> **Heroku and DNS**
>
> Refer to the [Heroku documentation](https://devcenter.heroku.com/categories/networking-dns) to find out how to connect your domain to a Heroku application.

## Changing the deployment template <a id="changing-the-deployment-template"></a>

You can make changes to the deployment template by forking the [repository](https://github.com/n8n-io/n8n-heroku) and deploying from you fork.

### The Dockerfile <a id="the-dockerfile"></a>

By default the Dockerfile pulls the latest n8n image, if you want to use a different or fixed version, then update the image tag on the top line of the `Dockerfile`.

### Heroku and exposing ports <a id="heroku-and-exposing-ports"></a>

Heroku doesn't allow Docker-based applications to define an exposed port with the `EXPOSE` command. Instead, Heroku provides a `PORT` environment variable that it dynamically populates at application runtime. The `entrypoint.sh` file overrides the default Docker image command to instead set the port variable that Heroku provides. You can then access n8n on port 80 in a web browser.

> **Info**
> **Docker limitations with Heroku**
>
> [Read this guide](https://devcenter.heroku.com/articles/container-registry-and-runtime#unsupported-dockerfile-commands) for more details on the limitations of using Docker with Heroku.

### Configuring Heroku <a id="configuring-heroku"></a>

The `heroku.yml` file defines the application you want to create on Heroku. It consists of two sections:

- `setup` > `addons` defines the Heroku addons to use. In this case, the PostgreSQL database addon.
- The `build` section defines how Heroku builds the application. In this case it uses the Docker buildpack to build a `web` service based on the supplied `Dockerfile`.

## Next steps <a id="next-steps"></a>

- Learn more about [configuring](https://docs.n8n.io/deploy/host-n8n/configure-n8n/basic-configuration/use-environment-variables) and [scaling](https://docs.n8n.io/deploy/host-n8n/configure-n8n/scaling) n8n.
- Or explore using n8n: try the [Quickstarts](https://docs.n8n.io/get-started/build-your-first-workflow).
