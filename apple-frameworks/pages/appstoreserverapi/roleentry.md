> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreserverapi/roleentry

# RoleEntry

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Object  
**Availability:** App Store Server API 1.22+

A customer’s role for a single product within a group.

## Declaration

```
object RoleEntry
```

## Properties

- `productId` — `productId`: The product identifier of the in-app purchase that the role applies to.
- `role` — `role`: The customer’s role for the product.

## Mentioned In

- [App Store Server API changelog](app-store-server-api-changelog.md)

<a id="Discussion"></a>

## Discussion

Each [GroupEntry](groupentry.md) contains an array of `RoleEntry` values. The array contains one role entry for each of your products for which the group provides the customer access.

Read the [role](https://developer.apple.com/documentation/appstoreserverapi/roleentry/role) for the [productId](https://developer.apple.com/documentation/appstoreserverapi/roleentry/productid) you’re evaluating. A customer can hold the `ADMIN` role for one product and the `NONE` role for another within the same group.

## See Also

### Response data types

- [GroupEntry](groupentry.md): The identifier, type, and per-product roles for a group that a customer belongs to.
