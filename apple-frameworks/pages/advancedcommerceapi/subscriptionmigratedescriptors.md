> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/advancedcommerceapi/subscriptionmigratedescriptors](https://developer.apple.com/documentation/advancedcommerceapi/subscriptionmigratedescriptors)

# SubscriptionMigrateDescriptors

**Interface language:** Data

**Framework:** Advanced Commerce API  
**Kind:** Object  
**Availability:** Advanced Commerce API 1.1+

The description and display name of the subscription to migrate to that you manage.

## Declaration

```
object SubscriptionMigrateDescriptors
```

## Properties

- `description` — `description` (required): The description of the subscription to migrate to. This string doesn’t display to customers.
  **Maximum length:** `45`
- `displayName` — `displayName` (required): The display name of the subscription to migrate to. This string displays to customers.
  **Maximum length:** `30`

## See Also

### Migration from the server

- [Migrate a Subscription to Advanced Commerce API](migrate-subscription-to-advanced-commerce-api.md): Migrate a subscription that a customer purchased through In-App Purchase to a subscription you manage using the Advanced Commerce API.
- [SubscriptionMigrateRequest](subscriptionmigraterequest.md): The subscription details you provide to migrate a subscription from In-App Purchase to the Advanced Commerce API, such as descriptors, items, storefront, and more.
- [SubscriptionMigrateResponse](subscriptionmigrateresponse.md): A response that contains signed renewal and transaction information after a subscription successfully migrates to the Advanced Commerce API.
- [SubscriptionMigrateItem](subscriptionmigrateitem.md): The SKU, description, and display name to use for a migrated subscription item.
- [SubscriptionMigrateRenewalItem](subscriptionmigraterenewalitem.md): The item information that replaces a migrated subscription item when the subscription renews.
