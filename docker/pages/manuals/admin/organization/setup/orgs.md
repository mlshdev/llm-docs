> Commit-pinned source for Docker main: [content/manuals/admin/organization/setup/orgs.md](https://github.com/docker/docs/blob/c596433b17b6e062376dcd24395336f316e1714a/content/manuals/admin/organization/setup/orgs.md)

# Create your organization

**Admin orgs requirements**

- Subscription: Team, Business
- For: Administrators

There are multiple ways to create an organization. You can either:

- Create a new organization using the **Create Organization** option in the
  Docker Home
- Convert an existing user account to an organization

## Prerequisites

- Before you create an organization, you need a [Docker ID](https://docs.docker.com/accounts/create-account/).
- For prerequisites and detailed instructions on converting an existing user account to an organization, see
  [Convert an account into an organization](https://docs.docker.com/admin/organization/setup/convert-account/).

> \[!TIP]
> Need a different plan for your team's needs? Review different [Docker subscriptions and features](https://www.docker.com/pricing?ref=Docs\&refAction=DocsAdminOrgs) to choose a subscription for your organization.

## Create an organization

1. Sign in to [Docker Home](https://app.docker.com/) and navigate to the bottom
   of the organization list. Select **Create new organization**.
2. Choose a subscription for your organization, a billing cycle, and specify how many seats you need. See [Docker Pricing](https://www.docker.com/pricing?ref=Docs\&refAction=DocsAdminOrgs) for details on the features offered in the Team and Business subscription.
3. Select **Continue to profile**, then **Create an organization** to create a new organization.
4. Enter an **Organization namespace**. This is the official, unique name for
   your organization in Docker Hub.
   - It's not possible to change the name of the organization after you've created it.
   - Your Docker ID and organization can't share the same name.
   - If you want to use your Docker ID as the organization name, then you must first [convert your account into an organization](https://docs.docker.com/admin/organization/setup/convert-account/).
5. Enter your **Company name**. This is the full name of your company.
   - Docker displays the company name on your organization page and in the details of any
     public images you publish.
   - You can update the company name anytime by navigating to your organization's **Settings** page.
6. Select **Continue to billing** to continue, then enter your organization's billing information. Select **Continue to payment** to continue to the billing portal.
7. Provide your payment details and select **Purchase**.

You've now created an organization.

## View an organization

To view an organization:

1. Sign in to [Docker Home](https://app.docker.com) and select your
   organization.

Docker Home contains many options that let you to
configure your organization.

## Merge organizations

> \[!WARNING]
>
> If you are merging organizations, it is recommended to do so at the *end* of
> your billing cycle. When you merge an organization and downgrade another, you
> will lose seats on your downgraded organization. Docker does not offer
> refunds for downgrades.

If you have multiple organizations that you want to merge into one, complete
the following steps:

1. Based on the number of seats from the secondary organization, [purchase additional seats](https://docs.docker.com/admin/organization/manage/manage-seats/) for the primary organization account that you want to keep.
2. Manually add users to the primary organization and remove existing users from the secondary organization.
3. Manually move over your data, including all repositories.
4. Once you're done moving all of your users and data, [downgrade](https://docs.docker.com/subscription/plans/docker/#cancel-a-docker-plan) the secondary account to a free subscription. Note that Docker does not offer refunds for downgrading organizations mid-billing cycle.

If your organization has a Docker Business subscription with a purchase
order, contact Support or your Account Manager at Docker.

## More resources

- [Video: Docker Hub Organizations](https://www.youtube.com/watch?v=WKlT1O-4Du8)
