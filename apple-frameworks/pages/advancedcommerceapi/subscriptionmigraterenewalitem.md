> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/advancedcommerceapi/subscriptionmigraterenewalitem](https://developer.apple.com/documentation/advancedcommerceapi/subscriptionmigraterenewalitem)

# SubscriptionMigrateRenewalItem

**Interface language:** Data

**Framework:** Advanced Commerce API  
**Kind:** Object  
**Availability:** Advanced Commerce API 1.1+

The item information that replaces a migrated subscription item when the subscription renews.

## Declaration

```
object SubscriptionMigrateRenewalItem
```

## Properties

- `SKU` — `SKU` (required): The SKU that the subscription item renews to at the next renewal period.
  **Maximum length:** `128`
- `description` — `description` (required): The description of the renewing SKU.
  **Maximum length:** `45`
- `displayName` — `displayName` (required): The display name of the renewing SKU.
  **Maximum length:** `30`

<a id="Discussion"></a>

## Discussion

If you migrate a subscription that is to renew to another SKU, provide the item that is to renew in the `SubscriptionMigrateRenewalItem`.
For example, if a customer downgrades a subscription, the subscription continues unchanged until the end of the billing period, and downgrades when it renews. If you migrate a subscription in this state before the end of the billing period, you need to provide the item that renews.

## See Also

### Migration from the server

- [Migrate a Subscription to Advanced Commerce API](migrate-subscription-to-advanced-commerce-api.md): Migrate a subscription that a customer purchased through In-App Purchase to a subscription you manage using the Advanced Commerce API.
- [SubscriptionMigrateRequest](subscriptionmigraterequest.md): The subscription details you provide to migrate a subscription from In-App Purchase to the Advanced Commerce API, such as descriptors, items, storefront, and more.
- [SubscriptionMigrateResponse](subscriptionmigrateresponse.md): A response that contains signed renewal and transaction information after a subscription successfully migrates to the Advanced Commerce API.
- [SubscriptionMigrateItem](subscriptionmigrateitem.md): The SKU, description, and display name to use for a migrated subscription item.
- [SubscriptionMigrateDescriptors](subscriptionmigratedescriptors.md): The description and display name of the subscription to migrate to that you manage.
