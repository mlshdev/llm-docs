> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreserverapi/groupentry

# GroupEntry

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Object  
**Availability:** App Store Server API 1.22+

The identifier, type, and per-product roles for a group that a customer belongs to.

## Declaration

```
object GroupEntry
```

## Properties

- `groupId` — `groupId`: The identifier of the group.
- `groupType` — `groupType`: The type of the group.
- `roles` — `[RoleEntry]`: An optional array of the customer’s roles in this group, one for each of your products that the group provides access to. This array is present for a group with a [groupType](https://developer.apple.com/documentation/appstoreserverapi/groupentry/grouptype) of `ORGANIZATION`, and absent for a group with a `groupType` of `CONSUMER`.

## Mentioned In

- [App Store Server API changelog](app-store-server-api-changelog.md)

<a id="Discussion"></a>

## Discussion

The [Get Customer Groups](get-customer-groups.md) endpoint returns a `GroupEntry` for each group a customer belongs to.

A customer’s role can differ per product, so `roles` is an array of [RoleEntry](roleentry.md) values rather than a single role. Read the [role](https://developer.apple.com/documentation/appstoreserverapi/roleentry/role) for the [productId](https://developer.apple.com/documentation/appstoreserverapi/roleentry/productid) you’re evaluating rather than assuming a single role applies across your products.

## Topics

### Group data types

- [RoleEntry](roleentry.md): A customer’s role for a single product within a group.

## See Also

### Response data types

- [RoleEntry](roleentry.md): A customer’s role for a single product within a group.
