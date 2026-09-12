> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/advancedcommerceapi/subscriptioncreateitem](https://developer.apple.com/documentation/advancedcommerceapi/subscriptioncreateitem)

# SubscriptionCreateItem

**Interface language:** Data

**Framework:** Advanced Commerce API  
**Kind:** Object  
**Availability:** Advanced Commerce API 1.0+

The data that describes a subscription item.

## Declaration

```
object SubscriptionCreateItem
```

## Properties

- `SKU` — `SKU` (required): The item’s product identifier, which you define.
  **Maximum length:** `128`
- `description` — `description` (required): **Maximum length:** `45`
- `displayName` — `displayName` (required): **Maximum length:** `30`
- `offer` — `Offer`:
- `price` — `price` (required):

## Mentioned In

- [Creating SKUs for the Mini Apps Partner Program](creating-skus-for-the-mini-app-partner-program.md)

## See Also

### Subscription creation in the app

- [SubscriptionCreateRequest](subscriptioncreaterequest.md): The request data your app provides when a customer purchases an auto-renewable subscription.
