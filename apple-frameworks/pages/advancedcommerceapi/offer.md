> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/advancedcommerceapi/offer](https://developer.apple.com/documentation/advancedcommerceapi/offer)

# Offer

**Interface language:** Data

**Framework:** Advanced Commerce API  
**Kind:** Object  
**Availability:** Advanced Commerce API 1.0+

A discount offer for an auto-renewable subscription.

## Declaration

```
object Offer
```

## Properties

- `period` — `string` (required): The period of the offer.
  **Allowed values:** `P3D`, `P1W`, `P2W`, `P1M`, `P2M`, `P3M`, `P6M`, `P9M`, `P1Y`
- `periodCount` — `int32` (required): The number of periods the offer is active.
  **Minimum:** `1`  
  **Maximum:** `12`
- `price` — `price` (required): The offer price, in milliunits.
- `reason` — `string` (required): The reason for the offer.
  **Allowed values:** `ACQUISITION`, `WIN_BACK`, `RETENTION`

## See Also

### Objects

- [Descriptors](descriptors.md): The display name and description of a subscription product.
- [RequestInfo](requestinfo.md): The metadata to include in server requests.
- [SubscriptionModifyAddItem](subscriptionmodifyadditem.md): The data your app provides to add items when it makes changes to an auto-renewable subscription.
- [SubscriptionModifyChangeItem](subscriptionmodifychangeitem.md): The data your app provides to change an item of an auto-renewable subscription.
- [SubscriptionModifyDescriptors](subscriptionmodifydescriptors.md): The data your app provides to change the description and display name of an auto-renewable subscription.
- [SubscriptionModifyPeriodChange](subscriptionmodifyperiodchange.md): The data your app provides to change the period of an auto-renewable subscription.
- [SubscriptionModifyRemoveItem](subscriptionmodifyremoveitem.md): The data your app provides to remove an item from an auto-renewable subscription.
- [SubscriptionPriceChangeItem](subscriptionpricechangeitem.md): The data your app provides to change a subscription price.
