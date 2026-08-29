> Release-pinned source for ZITADEL v4.17.1: [apps/docs/content/guides/manage/user/self-deletion.mdx](https://zitadel.com/docs/guides/manage/user/self-deletion)

ZITADEL lets a user delete their own account. This is useful if you are building a "Delete my account" feature into your application, or if you need to comply with data deletion requests (e.g. GDPR right to erasure).

> **Note**
>
> Self-deletion requires the `user.self.delete` permission, which is granted through roles such as [ORG\_USER\_SELF\_MANAGER](https://zitadel.com/docs/guides/manage/console/administrators) or SELF\_MANAGEMENT\_GLOBAL. A user without this permission cannot delete their own account.

> **Note**
>
> Deletion is permanent. Once a user is deleted, all authentication tokens are revoked, the user can no longer log in, and the operation cannot be undone.

## Delete the currently authenticated user

Use the [Delete User](https://zitadel.com/docs/reference/api/user/zitadel.user.v2.UserService.DeleteUser) endpoint from the User v2 API. The state of the user will be changed to `deleted`, the user will not be able to log in anymore, and endpoints requesting this user will return a "User not found" error.

```bash
curl --request DELETE \
  --url ${CUSTOM_DOMAIN}/v2/users/{user_id} \
  --header 'Authorization: Bearer {token}'
```

Replace `{user_id}` with the ID of the user to delete and `{token}` with a valid access token.

## Deleting via the ZITADEL Console

ZITADEL's own Console UI (under *$CUSTOM\_DOMAIN/ui/console/users/me*) also offers a **Delete Account** button on the user's own profile page. It calls the same User v2 `DeleteUser` endpoint described above, so it enforces the same `user.self.delete` permission requirement.

## What happens after deletion

- The user's state is set to `deleted`.
- All of the user's sessions and authentication tokens are invalidated.
- Subsequent requests referencing the user return a "User not found" error.
- The user can no longer authenticate against ZITADEL.

## Building a "Delete my account" flow

When integrating this into your own application:

1. Require the user to be freshly authenticated (e.g. re-prompt for login or a second factor) before showing the delete option, since the action is irreversible.
2. Ask for explicit confirmation before calling the API.
3. Call the [Delete User](https://zitadel.com/docs/reference/api/user/zitadel.user.v2.UserService.DeleteUser) endpoint using the user's own access token, scoped to their own `user_id`.
4. After a successful response, clear any local session state and log the user out of your application.

If you need to retain a record of deletion requests for compliance purposes (e.g. GDPR/CCPA), log the request in your own application before calling the API. ZITADEL admins can still audit the deletion afterward via the [Event API](https://zitadel.com/docs/guides/integrate/zitadel-apis/event-api).
