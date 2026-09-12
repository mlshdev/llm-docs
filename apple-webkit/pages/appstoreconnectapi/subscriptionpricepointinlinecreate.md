> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/subscriptionpricepointinlinecreate](https://developer.apple.com/documentation/appstoreconnectapi/subscriptionpricepointinlinecreate)

# SubscriptionPricePointInlineCreate

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.0+

An inline object for specifying a price point when creating a subscription pricing configuration.

## Declaration

```
object SubscriptionPricePointInlineCreate
```

## Properties

- `id` — `string`:
- `type` — `string` (required): **Allowed values:** `subscriptionPricePoints`

## See Also

### Objects and types

- [SubscriptionPricePointResponse](subscriptionpricepointresponse.md): The response body for endpoints that read a single subscription price point.
- [SubscriptionPricePoint](subscriptionpricepoint.md): A standard price tier for auto-renewable subscriptions, defining the customer price and developer proceeds.
- [SubscriptionPricePointsResponse](subscriptionpricepointsresponse.md): The response body for endpoints that list available price points for a subscription.
- [SubscriptionPriceCreateRequest](subscriptionpricecreaterequest.md): The request body you use to create a subscription price.
- [SubscriptionPriceInlineCreate](subscriptionpriceinlinecreate.md): An inline object for specifying a territory-specific subscription price within a price schedule.
- [SubscriptionPriceResponse](subscriptionpriceresponse.md): The response body for endpoints that create a single subscription price.
