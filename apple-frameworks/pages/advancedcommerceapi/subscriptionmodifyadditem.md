> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/advancedcommerceapi/subscriptionmodifyadditem](https://developer.apple.com/documentation/advancedcommerceapi/subscriptionmodifyadditem)

# SubscriptionModifyAddItem

**Interface language:** Data

**Framework:** Advanced Commerce API  
**Kind:** Object  
**Availability:** Advanced Commerce API 1.0+

The data your app provides to add items when it makes changes to an auto-renewable subscription.

## Declaration

```
object SubscriptionModifyAddItem
```

## Properties

- `SKU` — `SKU` (required): **Maximum length:** `128`
- `description` — `description` (required): **Maximum length:** `45`
- `displayName` — `displayName` (required): **Maximum length:** `30`
- `offer` — `Offer`:
- `price` — `price` (required):
- `proratedPrice` — `proratedPrice`:

## See Also

### Subscription modification in the app

- [SubscriptionModifyInAppRequest](subscriptionmodifyinapprequest.md): The request data your app provides to make changes to an auto-renewable subscription.
- [SubscriptionModifyChangeItem](subscriptionmodifychangeitem.md): The data your app provides to change an item of an auto-renewable subscription.
- [SubscriptionModifyRemoveItem](subscriptionmodifyremoveitem.md): The data your app provides to remove an item from an auto-renewable subscription.
- [SubscriptionModifyPeriodChange](subscriptionmodifyperiodchange.md): The data your app provides to change the period of an auto-renewable subscription.
