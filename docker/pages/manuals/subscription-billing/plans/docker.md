> Pinned source for Docker main: [content/manuals/subscription-billing/plans/docker.md](https://github.com/docker/docs/blob/1d503f8b7c2b2008da6cbc08bb5be163666c84bf/content/manuals/subscription-billing/plans/docker.md)

# Docker plans

Docker plans upgrade your account from the free Docker Personal plan to a
paid plan with higher usage limits, commercial licensing, and expanded
features.

- Docker Personal is free for individual developers. Docker Pro adds
  unlimited private repositories, Docker Build Cloud, and commercial Docker
  Desktop use.
- Docker Team and Docker Business are plans for organizations. Team adds
  audit logs and role-based access control. Business adds single sign-on
  (SSO), SCIM, Hardened Docker Desktop, and Image Access Management.

To upgrade to Docker Pro, go to the <a id="dkr_docs_pricing_docker_pro"></a>Docker pricing page
and select **Buy now**. To upgrade to Docker Team or Docker Business, see
[Manage plans](https://docs.docker.com/subscription-billing/manage/plans/).

## Usage

Docker Personal and Docker Pro apply to individual accounts. Docker Team and
Docker Business apply to organization accounts. For a full feature and
pricing comparison, see the <a id="dkr_docs_index_pricing_docker_plans"></a>Docker pricing page.

> \[!TIP]
> If you're upgrading from a Personal plan to a Team plan and want to keep
> your username,
> [convert your user account into an organization](https://docs.docker.com/accounts/organization/setup/convert-account/).

## Billing cycle

Docker plans are billed at a flat rate per user per month, with monthly or
annual billing options. Upgrading your plan immediately extends access to
all features and entitlements.

### Switch to annual billing

When you manage the subscription yourself and the plan is billed monthly,
the action menu includes **Switch to annual billing**. The review shows the
annual total and a **Prorated credit** for the unused part of the current
monthly period. The amount due today is labeled **Prorated for this year**.

1. Sign in to [Docker Home](https://app.docker.com/) and go to **Billing**.
2. From **Active subscriptions**, select the action menu next to your Docker
   plan.
3. Select **Switch to annual billing**.
4. Review the annual total and prorated credit, then complete checkout.

### Organization seats

For Docker Team and Docker Business, each seat extends your paid plan to one
more member. You can remove only unused seats. To remove more, first
[remove members](https://docs.docker.com/accounts/organization/manage/members/#remove-member-from-organization)
from your organization.

To add or remove seats:

1. Sign in to [Docker Home](https://app.docker.com/), then choose your
   organization account.
2. Go to **Billing** to view the Overview page, then go to
   **Active subscriptions**.
3. From the Docker Team or Docker Business tile, select the action menu, then
   select **Add seats** or **Remove seats**.
4. Choose the number of seats and review your new total.
5. For added seats, verify your billing details, continue to payment, and
   complete checkout.

To learn how to manage seats from Docker Home, see
[Manage seats](https://docs.docker.com/accounts/organization/manage/manage-seats/).

### Docker Offload licenses

[Docker Offload](https://docs.docker.com/offload/) licenses are available for
Docker Team and Docker Business plans. Once assigned to your account,
organization owners can
[manage licenses](https://docs.docker.com/accounts/organization/manage/manage-licenses/)
in Docker Home.

To add Docker Offload licenses, you must <a id="dkr_docs_cs_plans_docker_offload"></a>contact sales.

### Docker Build Cloud minutes

Each plan includes a base allocation of
[Docker Build Cloud](https://docs.docker.com/build-cloud/) build minutes per
month. Base minutes reset on an annual or monthly cadence and don't
accumulate. Additional purchased minutes expire at the end of your billing
period.

To purchase additional minutes:

1. From [Docker Home](https://app.docker.com/), choose your organization.
2. Select **Build Cloud**, then **Build minutes**.
3. From the **Minute breakdown** table, select **Add minutes**.
4. Choose your additional minute amount.
5. Verify your billing details, continue to payment, and complete checkout.

Your additional minutes appear on the Build minutes page immediately.

### Testcontainers Cloud minutes

Each plan includes a base allocation of Testcontainers Cloud runtime minutes
per month. Base minutes reset monthly and don't accumulate.

You can add Testcontainers Cloud runtime minutes in two ways:

- <a id="dkr_docs_cs_plans_docker_testcontainers"></a>Contact sales to
  pre-purchase runtime minutes at $3 per 100 minutes. Pre-purchased minutes
  expire at the end of your billing period.
- Use on-demand runtime minutes at $4 per 100 minutes, billed at the end of
  each monthly cycle.

## Cancel a Docker plan

> \[!NOTE]
> If you have a sales-assisted Docker Business plan, contact your account
> manager to cancel.

You can cancel at any time before your renewal date, but you can't pause or
delay a plan. The unused portion of your plan isn't refundable, but you keep
access to paid features until the end of the current billing cycle. If an
invoice isn't paid by the due date, a 15-day grace period starts from the
due date.

> \[!NOTE]
>
> Billing periods are calculated in UTC. If your time zone is behind UTC,
> for example US Pacific Time at UTC−7 or UTC−8, canceling or making changes
> late in your local day can fall into the next billing day.

Canceling a paid plan can affect collaborators and organization members:

- Docker Pro private repository collaborators are removed, and additional
  private repositories are locked.
- Docker Team or Docker Business members provisioned through SCIM without a
  password are locked out. Remove SSO connections and verified domains if
  your organization uses single sign-on.
- For paid individual and organization plans, you must convert private
  repositories to fit your new plan limits.

Canceling a paid plan returns your account to Docker Personal or a basic
organization account. To cancel your plan:

1. Sign in to [Docker Home](https://app.docker.com/) and go to **Billing**.
2. From **Active subscriptions**, select the action menu next to your Docker
   plan.
3. Select **Cancel plan** and complete the feedback survey.

If you cancel and the plan is still in its current billing cycle, the action
menu includes **Reactivate**.

## Next steps

- To add or upgrade a plan, see
  [Manage plans](https://docs.docker.com/subscription-billing/manage/plans/)
- To manage seats for your organization, see
  [Manage seats](https://docs.docker.com/accounts/organization/manage/manage-seats/)
- To track usage across plans, see
  [Usage](https://docs.docker.com/subscription-billing/manage/#usage)
