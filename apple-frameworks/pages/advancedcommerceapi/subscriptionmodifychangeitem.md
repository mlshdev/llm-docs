> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/advancedcommerceapi/subscriptionmodifychangeitem](https://developer.apple.com/documentation/advancedcommerceapi/subscriptionmodifychangeitem)

# SubscriptionModifyChangeItem

**Interface language:** Data

**Framework:** Advanced Commerce API  
**Kind:** Object  
**Availability:** Advanced Commerce API 1.0+

The data your app provides to change an item of an auto-renewable subscription.

## Declaration

```
object SubscriptionModifyChangeItem
```

## Properties

- `SKU` — `SKU` (required): **Maximum length:** `128`
- `currentSKU` — `SKU` (required): **Maximum length:** `128`
- `description` — `description` (required): **Maximum length:** `45`
- `displayName` — `displayName` (required): **Maximum length:** `30`
- `effective` — `effective` (required):
- `offer` — `Offer`:
- `price` — `price` (required):
- `proratedPrice` — `proratedPrice`:
- `reason` — `string` (required): **Allowed values:** `UPGRADE`, `DOWNGRADE`, `APPLY_OFFER`

## See Also

### Subscription modification in the app

- [SubscriptionModifyInAppRequest](subscriptionmodifyinapprequest.md): The request data your app provides to make changes to an auto-renewable subscription.
- [SubscriptionModifyAddItem](subscriptionmodifyadditem.md): The data your app provides to add items when it makes changes to an auto-renewable subscription.
- [SubscriptionModifyRemoveItem](subscriptionmodifyremoveitem.md): The data your app provides to remove an item from an auto-renewable subscription.
- [SubscriptionModifyPeriodChange](subscriptionmodifyperiodchange.md): The data your app provides to change the period of an auto-renewable subscription.
