> Release-pinned source for ZITADEL v4.17.3: [apps/docs/content/concepts/structure/instance.mdx](https://zitadel.com/docs/concepts/structure/instance)

> **Terminology update**
>
> The term Instance replaces IAM; they all refer to the same functionality.

## Instance Structure

An instance is the top node in ZITADEL's data hierarchy.
Within an instance all the default [settings](https://zitadel.com/docs/concepts/structure/policies),
such as branding, login policy, password policy, etc. for the system can be configured.
One instance normally runs on one domain and represents one issuer (e.g. login.customer.com).

One instance can contain multiple [organizations](https://zitadel.com/docs/guides/manage/console/organizations-overview),
which in turn can represent your own company (e.g. departments), your business customers or a consumer organization.

Read more about how to configure your instance in our [instance guide](https://zitadel.com/docs/guides/manage/console/default-settings).

![](https://raw.githubusercontent.com/zitadel/zitadel/41b11149c6997eddd7e38390912e12ff5f918a73/apps/docs/public/img/concepts/objects/object_overview.png)

This overview shows the general structure of ZITADEL.
You will find more detailed explanations around the different concepts in the following sections.

## Multiple Virtual Instances

ZITADEL has the concept of virtual instances.
When installing ZITADEL from scratch, one instance is always automatically created for you.
Nevertheless, you can add more virtual instances via the [system API](https://zitadel.com/docs/reference/api/system).
This is useful if you have business customers, which in turn have their business customers with self-service and Custom Domain demands.
By providing a virtual ZITADEL instances, your customers have all the customization options available in ZITADEL.
Scaling ZITADEL instances virtually enables you to easily distribute your limited compute resources to all your customers.

![](https://raw.githubusercontent.com/zitadel/zitadel/41b11149c6997eddd7e38390912e12ff5f918a73/apps/docs/public/img/concepts/objects/instances.png)
