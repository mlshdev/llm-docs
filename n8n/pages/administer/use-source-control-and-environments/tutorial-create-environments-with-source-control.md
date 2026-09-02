> Commit-pinned source for n8n main: [docs/administer/use-source-control-and-environments/tutorial-create-environments-with-source-control.md](https://github.com/n8n-io/n8n-docs/blob/50a2c8dc6704c114ca2b241eac1e72867ed718fe/docs/administer/use-source-control-and-environments/tutorial-create-environments-with-source-control.md)

# Tutorial: Create environments with source control <a id="tutorial-create-environments-with-source-control"></a>

> **Info**
> **Feature availability**
>
> - Available on Business and Enterprise plans.
> - You must be an n8n instance owner or instance admin to enable and configure source control.
> - Instance owners and instance admins can push changes to and pull changes from the connected repository.
> - Project admins can push changes to the connected repository. They can't pull changes from the repository.

This tutorial walks through the process of setting up environments end-to-end. You'll create two environments: development and production. It uses GitHub as the Git provider. The process is similar for other providers.

n8n has built its environments feature on top of Git, a version control software. You link an n8n instance to a Git branch, and use a push-pull pattern to move work between environments. You should have some understanding of environments and Git. If you need more information on these topics, refer to:

- [Environments in n8n](https://docs.n8n.io/administer/use-source-control-and-environments/work-with-environments): the purpose of environments, and how they work in n8n.
- [Git and n8n](https://docs.n8n.io/administer/use-source-control-and-environments/use-git-in-n8n): Git concepts and source control in n8n.

## Choose your source control pattern <a id="choose-your-source-control-pattern"></a>

Before setting up source control and environments, you need to plan your environments, and how they relate to Git branches. n8n supports different [Branch patterns](https://docs.n8n.io/administer/use-source-control-and-environments/choose-branching-patterns). For environments, you need to choose between two patterns: multi-instance, multi-branch, or multi-instance, single-branch. This tutorial covers both patterns.

> **Info**
> **Recommendation: don't push and pull to the same n8n instance**
>
> You can push work from an instance to a branch, and pull to the same instance. n8n doesn't recommend this. To reduce the risk of merge conflicts and overwriting work, try to create a process where work goes in one direction: either to Git, or from Git, but not both.

### Multiple instances, multiple branches <a id="multiple-instances-multiple-branches"></a>

![Development n8n instance linked to a development branch and production instance linked to a production branch](https://raw.githubusercontent.com/n8n-io/n8n-docs/50a2c8dc6704c114ca2b241eac1e72867ed718fe/docs/administer/.gitbook/assets/vc-multi-multi.png)

The advantages of this pattern are:

- An added safety layer to prevent changes getting into your production environment by mistake. You have to do a pull request in GitHub to copy work between environments.
- It supports more than two instances.

The disadvantage is more manual steps to copy work between environments.

### Multiple instances, one branch <a id="multiple-instances-one-branch"></a>

![Development and production n8n instances both connected to the same Git branch](https://raw.githubusercontent.com/n8n-io/n8n-docs/50a2c8dc6704c114ca2b241eac1e72867ed718fe/docs/administer/.gitbook/assets/vc-multi-one.png)

The advantage of this pattern is that work is instantly available to other environments when you push from one instance.

The disadvantages are:

- If you push by mistake, there is a risk the work will make it into your production instance. If you [use a GitHub Action to automate pulls](https://docs.n8n.io/administer/use-source-control-and-environments/tutorial-create-environments-with-source-control#optional-use-a-github-action-to-automate-pulls) to production, you must either use the multi-instance, multi-branch pattern, or be careful to never push work that you don't want in production.
- Pushing and pulling to the same instance can cause data loss as changes are overridden when performing these actions. You should set up processes to ensure content flows in one direction.

## Set up your repository <a id="set-up-your-repository"></a>

Once you've chosen your pattern, you need to set up your GitHub repository.

**Multi-branch**

1. [Create a new repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository).
   - Make sure the repository is private, unless you want your workflows, tags, and variable and credential stubs exposed to the internet.
   - Create the new repository with a README so you can immediately create branches.
2. Create one branch named `production` and another named `development`. Refer to [Creating and deleting branches within your repository](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository) for guidance.

**Single-branch**

[Create a new repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository).

- Make sure the repository is private, unless you want your workflows, tags, and variable and credential stubs exposed to the internet.
- Create the new repository with a README. This creates the `main` branch, which you'll connect to.

## Connect your n8n instances to your repository <a id="connect-your-n8n-instances-to-your-repository"></a>

Create two n8n instances, one for development, one for production.

### Configure Git in n8n <a id="configure-git-in-n8n"></a>

1. Go to **Settings** > **Environments**.
2. Choose your connection method:
   - **SSH**: In **Git repository URL**, enter the SSH URL for your repository (for example, `git@github.com:username/repo.git`).
   - **HTTPS**: In **Git repository URL** enter the HTTPS URL for your repository (for example, `https://github.com/username/repo.git`).
3. Configure authentication based on your connection method:
   - **For SSH**: n8n supports ED25519 and RSA public key algorithms. ED25519 is the default. Select **RSA** under **SSH Key** if your git host requires RSA. Copy the SSH key.
   - **For HTTPS**: Enter your credentials:
     - **Username**: Your Git provider username.
     - **Token**: Your Personal Access Token (PAT) from your Git provider.

### Set up a deploy key <a id="set-up-a-deploy-key"></a>

Set up SSH access by creating a deploy key for the repository using the SSH key from n8n. The key must have write access. Refer to [GitHub | Managing deploy keys](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/managing-deploy-keys) for guidance.

### Connect n8n and configure your instance <a id="connect-n8n-and-configure-your-instance"></a>

**Multi-branch**

1. In **Settings** > **Environments** in n8n, select **Connect**. n8n connects to your Git repository.
2. Under **Instance settings**, choose which branch you want to use for the current n8n instance. Connect the production branch to the production instance, and the development branch to the development instance.
3. Production instance only: select **Protected instance** to prevent users editing workflows in this instance.
4. Select **Save settings**.

**Single-branch**

1. In **Settings** > **Environments** in n8n, select **Connect**.
2. Under **Instance settings**, select the main branch.
3. Production instance only: select **Protected instance** to prevent users editing workflows in this instance.
4. Select **Save settings**.

## Push work from development <a id="push-work-from-development"></a>

In your development instance, create a few workflows, tags, variables, and credentials.

To push work to Git:

1. Select **Push** ![Push icon](https://raw.githubusercontent.com/n8n-io/n8n-docs/50a2c8dc6704c114ca2b241eac1e72867ed718fe/docs/reusable-content/.gitbook/assets/push-icon.png) in the main menu.
2. In the **Commit and push changes** modal, select which workflows and data tables you want to push. You can filter by status (new, modified, deleted) and search for items. n8n automatically pushes tags, and variable and credential stubs.

   n8n pushes the current saved version, not the published version, of the workflow. You need to then separately publish versions on the remote server.
3. Enter a commit message. This should be a one sentence description of the changes you're making.
4. Select **Commit and Push**. n8n sends the work to Git, and displays a success message on completion.

## Pull work to production <a id="pull-work-to-production"></a>

Your work is now in GitHub. If you're using a multi-branch setup, it's on the development branch. If you chose the single-branch setup, it's on main.

**Multi-branch**

1. In GitHub, create a pull request to merge development into production.
2. Merge the pull request.
3. In your production instance, select **Pull** ![Pull icon](https://raw.githubusercontent.com/n8n-io/n8n-docs/50a2c8dc6704c114ca2b241eac1e72867ed718fe/docs/administer/.gitbook/assets/pull-icon.png) in the main menu.

**Single-branch**

In your production instance, select **Pull** ![Pull icon](https://raw.githubusercontent.com/n8n-io/n8n-docs/50a2c8dc6704c114ca2b241eac1e72867ed718fe/docs/administer/.gitbook/assets/pull-icon.png) in the main menu.

<details>

<summary>View screenshot</summary>

![](https://raw.githubusercontent.com/n8n-io/n8n-docs/50a2c8dc6704c114ca2b241eac1e72867ed718fe/docs/reusable-content/.gitbook/assets/pull-push-menu-closed.png)
*Pull and push buttons when menu is closed*

![](https://raw.githubusercontent.com/n8n-io/n8n-docs/50a2c8dc6704c114ca2b241eac1e72867ed718fe/docs/reusable-content/.gitbook/assets/pull-push-menu-open.png)
*Pull and push buttons when menu is open*

</details>

### Optional: Use a GitHub Action to automate pulls <a id="optional-use-a-github-action-to-automate-pulls"></a>

If you want to avoid logging in to your production instance to pull, you can use a [GitHub Action](https://docs.github.com/en/actions/creating-actions/about-custom-actions) and the [n8n API](https://docs.n8n.io/connect/n8n-api) to automatically pull every time you push new work to your production or main branch.

A GitHub Action example:

```yaml
name: CI
on:
  # Trigger the workflow on push or pull request events for the "production" branch
  push:
    branches: [ "production" ]
  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:
jobs:
  run-pull:
    runs-on: ubuntu-latest
    steps:
      - name: PULL
                # Use GitHub secrets to protect sensitive information
        run: >
          curl --location '${{ secrets.INSTANCE_URL }}/version-control/pull' --header
          'Content-Type: application/json' --header 'X-N8N-API-KEY: ${{ secrets.INSTANCE_API_KEY }}'
```

## Next steps <a id="next-steps"></a>

Learn more about:

- [Environments in n8n](https://docs.n8n.io/administer/use-source-control-and-environments/work-with-environments) and [Git and n8n](https://docs.n8n.io/administer/use-source-control-and-environments/use-git-in-n8n)
- [Source control patterns](https://docs.n8n.io/administer/use-source-control-and-environments/choose-branching-patterns)
