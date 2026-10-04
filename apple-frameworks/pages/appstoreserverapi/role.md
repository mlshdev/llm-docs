> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreserverapi/role

# role

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Type  
**Availability:** App Store Server API 1.22+

A string that identifies a customer’s role for a product within a group.

## Declaration

```
string role
```

## Possible Values

- `NONE`: The customer has a seat in the group but doesn’t administer it.
- `ADMIN`: The customer administers the group for the product.

## Mentioned In

- [App Store Server API changelog](app-store-server-api-changelog.md)

<a id="Discussion"></a>

## Discussion

Each [RoleEntry](roleentry.md) that the [Get Customer Groups](get-customer-groups.md) endpoint returns includes a `role` for a single [productId](productid.md). A customer can hold a different role for each of your products within the same group.

Roles apply only to a group with a [groupType](grouptype.md) of `ORGANIZATION`. A group with a `groupType` of `CONSUMER` doesn’t report roles.

This value is informational. Determine access to content based on the customer’s transactions. Use `role` if you want to offer an administrator something the other members don’t get, such as naming the team or configuring an experience for the whole group.

## See Also

### Group membership

- [GroupEntry](groupentry.md): The identifier, type, and per-product roles for a group that a customer belongs to.
- [GroupMemberEntry](groupmemberentry.md): A customer that belongs to a group.
- [RoleEntry](roleentry.md): A customer’s role for a single product within a group.
- [groupId](groupid.md): The unique identifier of a group, within the scope of your app.
- [groupType](grouptype.md): A string that describes the kind of multiseat purchase a customer’s access comes from.
- [limit](limit.md): The maximum number of group members to return in a single response.
