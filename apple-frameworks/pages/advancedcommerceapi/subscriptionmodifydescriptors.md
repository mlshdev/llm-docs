> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/advancedcommerceapi/subscriptionmodifydescriptors](https://developer.apple.com/documentation/advancedcommerceapi/subscriptionmodifydescriptors)

# SubscriptionModifyDescriptors

**Interface language:** Data

**Framework:** Advanced Commerce API  
**Kind:** Object  
**Availability:** Advanced Commerce API 1.0+

The data your app provides to change the description and display name of an auto-renewable subscription.

## Declaration

```
object SubscriptionModifyDescriptors
```

## Properties

- `description` — `description`: **Maximum length:** `45`
- `displayName` — `displayName`: **Maximum length:** `30`
- `effective` — `effective` (required):

## See Also

### Objects

- [Descriptors](descriptors.md): The display name and description of a subscription product.
- [Offer](offer.md): A discount offer for an auto-renewable subscription.
- [RequestInfo](requestinfo.md): The metadata to include in server requests.
- [SubscriptionModifyAddItem](subscriptionmodifyadditem.md): The data your app provides to add items when it makes changes to an auto-renewable subscription.
- [SubscriptionModifyChangeItem](subscriptionmodifychangeitem.md): The data your app provides to change an item of an auto-renewable subscription.
- [SubscriptionModifyPeriodChange](subscriptionmodifyperiodchange.md): The data your app provides to change the period of an auto-renewable subscription.
- [SubscriptionModifyRemoveItem](subscriptionmodifyremoveitem.md): The data your app provides to remove an item from an auto-renewable subscription.
- [SubscriptionPriceChangeItem](subscriptionpricechangeitem.md): The data your app provides to change a subscription price.
