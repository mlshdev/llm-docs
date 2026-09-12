> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/advancedcommerceapi/subscriptionmigrateitem](https://developer.apple.com/documentation/advancedcommerceapi/subscriptionmigrateitem)

# SubscriptionMigrateItem

**Interface language:** Data

**Framework:** Advanced Commerce API  
**Kind:** Object  
**Availability:** Advanced Commerce API 1.1+

The SKU, description, and display name to use for a migrated subscription item.

## Declaration

```
object SubscriptionMigrateItem
```

## Properties

- `SKU` — `SKU` (required): The SKU to use for the migrated item.
  **Maximum length:** `128`
- `description` — `description` (required): The description of the SKU.
  **Maximum length:** `45`
- `displayName` — `displayName` (required): The display name of the SKU.
  **Maximum length:** `30`

## See Also

### Migration from the server

- [Migrate a Subscription to Advanced Commerce API](migrate-subscription-to-advanced-commerce-api.md): Migrate a subscription that a customer purchased through In-App Purchase to a subscription you manage using the Advanced Commerce API.
- [SubscriptionMigrateRequest](subscriptionmigraterequest.md): The subscription details you provide to migrate a subscription from In-App Purchase to the Advanced Commerce API, such as descriptors, items, storefront, and more.
- [SubscriptionMigrateResponse](subscriptionmigrateresponse.md): A response that contains signed renewal and transaction information after a subscription successfully migrates to the Advanced Commerce API.
- [SubscriptionMigrateRenewalItem](subscriptionmigraterenewalitem.md): The item information that replaces a migrated subscription item when the subscription renews.
- [SubscriptionMigrateDescriptors](subscriptionmigratedescriptors.md): The description and display name of the subscription to migrate to that you manage.
