> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/subscriptionintroductoryofferresponse](https://developer.apple.com/documentation/appstoreconnectapi/subscriptionintroductoryofferresponse)

# SubscriptionIntroductoryOfferResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.0+

The response body for endpoints that create, read, or modify a single subscription introductory offer.

## Declaration

```
object SubscriptionIntroductoryOfferResponse
```

## Properties

- `data` — `SubscriptionIntroductoryOffer` (required):
- `included` — `[*]`: **Allowed types:** `SubscriptionPricePoint`, `Subscription`, `Territory`
- `links` — `DocumentLinks` (required):

## See Also

### Objects

- [SubscriptionIntroductoryOfferCreateRequest](subscriptionintroductoryoffercreaterequest.md): The request body you use to create a subscription introductory offer.
- [SubscriptionIntroductoryOfferInlineCreate](subscriptionintroductoryofferinlinecreate.md): An inline object for specifying an introductory offer when creating or updating a subscription.
- [SubscriptionIntroductoryOfferUpdateRequest](subscriptionintroductoryofferupdaterequest.md): The request body you use to update a subscription introductory offer update request.
