> Pinned source for Runpod main: [hub/overview.mdx](https://github.com/runpod/docs/blob/fa4985146919262a6e9cdb946c50eec1ed81ffc9/hub/overview.mdx)
> Canonical documentation: https://docs.runpod.io/hub/overview

# Overview

Discover, deploy, and share preconfigured AI repos using the Runpod Hub. Review publishing and management guidance for the Runpod Hub.

The [Runpod Hub](https://console.runpod.io/hub) is a centralized repository for discovering, sharing, and deploying preconfigured AI repos optimized for Serverless and Pod infrastructure.

![](https://raw.githubusercontent.com/runpod/docs/fa4985146919262a6e9cdb946c50eec1ed81ffc9/images/hub-homepage.png)

## Why use the Hub?

**For users:**

- **Production-ready solutions**: Vetted, open-source repos with minimal setup required.
- **One-click deployment**: Go from discovery to running services in minutes.
- **Configurable**: Customize parameters without diving into code.

**For creators:**

- **Showcase your work**: Share projects with the AI community.
- **Automated pipeline**: The Hub builds and tests your releases automatically.
- **Earn revenue**: Generate up to 7% of compute revenue when users deploy your repos. See [revenue sharing](https://docs.runpod.io/hub/revenue-sharing).

## Public Endpoints

The Hub also offers Public Endpoints for popular AI models. These are ready-to-use APIs with instant access, interactive playgrounds, and usage-based pricing. Browse available models in the [model reference](https://docs.runpod.io/public-endpoints/reference).

## Deploy a repo

1. Go to the [Hub](https://www.console.runpod.io/hub) and select a repo.
2. Review hardware requirements and configuration options.
3. Click **Deploy** → **Create Endpoint**.

Your endpoint will be ready for integration within minutes.

1. Go to the [Hub](https://www.console.runpod.io/hub) and select a repo.
2. Click **Deploy**, select **Pod** as the deployment type.
3. Click **Deploy Pod**.

After deployment, find a sample request in the Pod details pane:

```python
import requests

response = requests.post(
    'https://POD_ID-80.proxy.runpod.net/v2/LOCAL/run',
    headers={
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_API_KEY'
    },
    json={'input': {"prompt": "Your prompt"}}
)
```

## Publish your own repo

Publish your GitHub repository on the Hub by preparing a worker with a handler function and `Dockerfile`.

> **Tip**
>
> New to building Serverless workers? Follow the [quickstart guide](https://docs.runpod.io/serverless/quickstart).

1. Add configuration files in a `.runpod` directory per the [publishing guide](https://docs.runpod.io/hub/publishing-guide).
2. Create a GitHub release.
3. Submit your repository through the Runpod console.
4. After review and approval, your repo appears in the Hub.

Once published, earn revenue from user deployments. Link your GitHub profile to your Runpod account for verified maintainer status. Revenue tiers range from 1% (100-999 compute hours) to 7% (10,000+ hours), paid monthly as Runpod credits.

## How Hub repos work

1. **Repository integration**: Connects with GitHub repos using releases (not commits) for versioning.
2. **Configuration**: Repos use `hub.json` and `tests.json` in a `.runpod` directory to define metadata and test procedures.
3. **Automated pipeline**: The Hub builds and tests repos on submission and monitors for new releases.
4. **Deployment**: Users browse, customize, and deploy with minimal configuration.
