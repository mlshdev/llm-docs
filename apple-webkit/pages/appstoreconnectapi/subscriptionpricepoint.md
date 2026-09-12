> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/subscriptionpricepoint](https://developer.apple.com/documentation/appstoreconnectapi/subscriptionpricepoint)

# SubscriptionPricePoint

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.0+

A standard price tier for auto-renewable subscriptions, defining the customer price and developer proceeds.

## Declaration

```
object SubscriptionPricePoint
```

## Properties

- `attributes` — `SubscriptionPricePoint.Attributes`:
- `id` — `string` (required):
- `links` — `ResourceLinks`:
- `relationships` — `SubscriptionPricePoint.Relationships`:
- `type` — `string` (required): **Allowed values:** `subscriptionPricePoints`

## Topics

### Objects

- [SubscriptionPricePoint.Attributes](subscriptionpricepoint/attributes-data.dictionary.md): Attributes that describe a subscription price point resource.
- [SubscriptionPricePoint.Relationships](subscriptionpricepoint/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.

## See Also

### Objects and types

- [SubscriptionPricePointResponse](subscriptionpricepointresponse.md): The response body for endpoints that read a single subscription price point.
- [SubscriptionPricePointsResponse](subscriptionpricepointsresponse.md): The response body for endpoints that list available price points for a subscription.
- [SubscriptionPriceCreateRequest](subscriptionpricecreaterequest.md): The request body you use to create a subscription price.
- [SubscriptionPriceInlineCreate](subscriptionpriceinlinecreate.md): An inline object for specifying a territory-specific subscription price within a price schedule.
- [SubscriptionPriceResponse](subscriptionpriceresponse.md): The response body for endpoints that create a single subscription price.
- [SubscriptionPricePointInlineCreate](subscriptionpricepointinlinecreate.md): An inline object for specifying a price point when creating a subscription pricing configuration.
