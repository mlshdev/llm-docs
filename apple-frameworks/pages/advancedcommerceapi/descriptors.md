> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/advancedcommerceapi/descriptors](https://developer.apple.com/documentation/advancedcommerceapi/descriptors)

# Descriptors

**Interface language:** Data

**Framework:** Advanced Commerce API  
**Kind:** Object  
**Availability:** Advanced Commerce API 1.0+

The display name and description of a subscription product.

## Declaration

```
object Descriptors
```

## Properties

- `description` — `description` (required): A string that contains a description of the product. This string is not displayed to customers.
  **Maximum length:** `45`
- `displayName` — `displayName` (required): A string that contains the name of the product, suitable for display to customers.
  **Maximum length:** `30`

## See Also

### Objects

- [Offer](offer.md): A discount offer for an auto-renewable subscription.
- [RequestInfo](requestinfo.md): The metadata to include in server requests.
- [SubscriptionModifyAddItem](subscriptionmodifyadditem.md): The data your app provides to add items when it makes changes to an auto-renewable subscription.
- [SubscriptionModifyChangeItem](subscriptionmodifychangeitem.md): The data your app provides to change an item of an auto-renewable subscription.
- [SubscriptionModifyDescriptors](subscriptionmodifydescriptors.md): The data your app provides to change the description and display name of an auto-renewable subscription.
- [SubscriptionModifyPeriodChange](subscriptionmodifyperiodchange.md): The data your app provides to change the period of an auto-renewable subscription.
- [SubscriptionModifyRemoveItem](subscriptionmodifyremoveitem.md): The data your app provides to remove an item from an auto-renewable subscription.
- [SubscriptionPriceChangeItem](subscriptionpricechangeitem.md): The data your app provides to change a subscription price.
