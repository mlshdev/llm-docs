> Pinned source for ZITADEL v4.19.3: [apps/docs/content/guides/integrate/identity-providers/additional-information.mdx](https://github.com/zitadel/zitadel/blob/2c6acd8c033319be6d73ad484ed5c8e0743afd6d/apps/docs/content/guides/integrate/identity-providers/additional-information.mdx)
> Canonical documentation: https://zitadel.com/docs/guides/integrate/identity-providers/additional-information

## Automatically pre-fill user data

You can use a ZITADEL action if you want to prefill the fields specific fields like firstname, lastname and email verified with your providers data.

1. Go to the users target organizations settings page.
2. Add a new action with the body below. Make sure the action name equals the scripts function name. Also change the id in the script to match your provider settings id.
3. Add the action to the flow "External Authentication" and trigger it on "Post Authentication"

This action is an example for OKTA. You can also use it for any other provider

[Code example on GitHub](https://github.com/zitadel/actions/blob/main/examples/okta_identity_provider.js)
