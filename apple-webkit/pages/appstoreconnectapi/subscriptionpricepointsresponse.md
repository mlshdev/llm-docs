> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/subscriptionpricepointsresponse](https://developer.apple.com/documentation/appstoreconnectapi/subscriptionpricepointsresponse)

# SubscriptionPricePointsResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.0+

The response body for endpoints that list available price points for a subscription.

## Declaration

```
object SubscriptionPricePointsResponse
```

## Properties

- `data` — `[SubscriptionPricePoint]` (required):
- `included` — `[Territory]`:
- `links` — `PagedDocumentLinks` (required):
- `meta` — `PagingInformation`:

## See Also

### Objects and types

- [SubscriptionPricePointResponse](subscriptionpricepointresponse.md): The response body for endpoints that read a single subscription price point.
- [SubscriptionPricePoint](subscriptionpricepoint.md): A standard price tier for auto-renewable subscriptions, defining the customer price and developer proceeds.
- [SubscriptionPriceCreateRequest](subscriptionpricecreaterequest.md): The request body you use to create a subscription price.
- [SubscriptionPriceInlineCreate](subscriptionpriceinlinecreate.md): An inline object for specifying a territory-specific subscription price within a price schedule.
- [SubscriptionPriceResponse](subscriptionpriceresponse.md): The response body for endpoints that create a single subscription price.
- [SubscriptionPricePointInlineCreate](subscriptionpricepointinlinecreate.md): An inline object for specifying a price point when creating a subscription pricing configuration.
