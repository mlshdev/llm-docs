> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/advancedcommerceapi/subscriptionpricechangerequest](https://developer.apple.com/documentation/advancedcommerceapi/subscriptionpricechangerequest)

# SubscriptionPriceChangeRequest

**Interface language:** Data

**Framework:** Advanced Commerce API  
**Kind:** Object  
**Availability:** Advanced Commerce API 1.0+

The request body you use to change the price of an auto-renewable subscription.

## Declaration

```
object SubscriptionPriceChangeRequest
```

## Properties

- `currency` — `currency`: The currency of the prices.
- `items` — `[SubscriptionPriceChangeItem]` (required): An array that contains one or more SKUs and the changed price for each SKU.
- `requestInfo` — `RequestInfo` (required): Metadata that identifies the request.
- `storefront` — `storefront`: The App Store storefront of the subscription.

<a id="Discussion"></a>

### Discussion

This is the request body for the [Change Subscription Price](change-subscription-price.md) endpoint.

The items array contains [SubscriptionPriceChangeItem](subscriptionpricechangeitem.md). Include one entry for each SKU within the subscription that has a price change.

## See Also

### Subscription price change from the server

- [Change Subscription Price](change-subscription-price.md): Increase or decrease the price of an auto-renewable subscription, a bundle, or individual items within a subscription at the next renewal.
- [SubscriptionPriceChangeResponse](subscriptionpricechangeresponse.md): A response that contains signed JWS renewal and JWS transaction information after a subscription price change request.
