> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/subscriptionpriceinlinecreate](https://developer.apple.com/documentation/appstoreconnectapi/subscriptionpriceinlinecreate)

# SubscriptionPriceInlineCreate

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.0+

An inline object for specifying a territory-specific subscription price within a price schedule.

## Declaration

```
object SubscriptionPriceInlineCreate
```

## Properties

- `attributes` — `SubscriptionPriceInlineCreate.Attributes`:
- `id` — `string`:
- `relationships` — `SubscriptionPriceInlineCreate.Relationships`:
- `type` — `string` (required): **Allowed values:** `subscriptionPrices`

## Topics

### Objects

- [SubscriptionPriceInlineCreate.Attributes](subscriptionpriceinlinecreate/attributes-data.dictionary.md): Attributes that describe a subscription price inline create resource.
- [SubscriptionPriceInlineCreate.Relationships](subscriptionpriceinlinecreate/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.

## See Also

### Objects and types

- [SubscriptionPricePointResponse](subscriptionpricepointresponse.md): The response body for endpoints that read a single subscription price point.
- [SubscriptionPricePoint](subscriptionpricepoint.md): A standard price tier for auto-renewable subscriptions, defining the customer price and developer proceeds.
- [SubscriptionPricePointsResponse](subscriptionpricepointsresponse.md): The response body for endpoints that list available price points for a subscription.
- [SubscriptionPriceCreateRequest](subscriptionpricecreaterequest.md): The request body you use to create a subscription price.
- [SubscriptionPriceResponse](subscriptionpriceresponse.md): The response body for endpoints that create a single subscription price.
- [SubscriptionPricePointInlineCreate](subscriptionpricepointinlinecreate.md): An inline object for specifying a price point when creating a subscription pricing configuration.
