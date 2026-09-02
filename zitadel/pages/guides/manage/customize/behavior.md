> Release-pinned source for ZITADEL v4.17.2: [apps/docs/content/guides/manage/customize/behavior.mdx](https://zitadel.com/docs/guides/manage/customize/behavior)

In this guide, you will create a [ZITADEL action](https://zitadel.com/docs/concepts/features/actions).
After users register using an external identity provider, the action assigns them a role.

## Prerequisites

Before you start, make sure you have everything set up correctly.

- You need to be at least a ZITADEL *ORG\_OWNER*
- Your ZITADEL organization needs to have the actions feature enabled. - [Your ZITADEL organization needs to have at least one external identity provider enabled](https://zitadel.com/docs/guides/integrate/identity-providers/introduction)
- You need to have at least one role configured for a project

## Copy some information for the action

1. Select the **Projects** navigation item.
2. Select a project that has a role configured.
3. Copy the Project ID on the screens top right.
4. Scroll to the **ROLES** section and note some roles key.

## Create the action

1. Select the **Actions** navigation item.
2. In the **Actions&#x20;**&#x20;section, select the **+ New** button.
3. Give the new action the name `addGrant`.
4. Paste this snippet into the multiline text-field.
5. Replace the snippets placeholders and select **Save**.

[Code example on GitHub](https://github.com/zitadel/actions/blob/main/examples/add_user_grant.js)

## Run the action when a user registers

Now, make the action hook into the [external authentication flow](https://zitadel.com/docs/apis/actions/external-authentication).

1. In the **Flows&#x20;**&#x20;section, select the **+ New** button.
2. Select the **Flow Type** *External Authentication*.
3. Select the **Trigger Type** *Post Creation*.
4. In the **Actions** dropdown, check *addGrant*.
5. Select the **Save** button.

New users automatically are assigned a role now if they register by authenticating with an external identity provider.

## What's next?

- [Read more about the concepts around actions](https://zitadel.com/docs/concepts/features/actions)
- [Read more about all the options you have with actions](https://zitadel.com/docs/guides/manage/console/actions-overview)
