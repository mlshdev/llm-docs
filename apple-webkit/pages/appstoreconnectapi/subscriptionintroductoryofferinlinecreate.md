> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/subscriptionintroductoryofferinlinecreate](https://developer.apple.com/documentation/appstoreconnectapi/subscriptionintroductoryofferinlinecreate)

# SubscriptionIntroductoryOfferInlineCreate

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.0+

An inline object for specifying an introductory offer when creating or updating a subscription.

## Declaration

```
object SubscriptionIntroductoryOfferInlineCreate
```

## Properties

- `attributes` — `SubscriptionIntroductoryOfferInlineCreate.Attributes` (required):
- `id` — `string`:
- `relationships` — `SubscriptionIntroductoryOfferInlineCreate.Relationships`:
- `type` — `string` (required): **Allowed values:** `subscriptionIntroductoryOffers`

## Topics

### Objects

- [SubscriptionIntroductoryOfferInlineCreate.Attributes](subscriptionintroductoryofferinlinecreate/attributes-data.dictionary.md): Attributes that describe a subscription introductory offer inline create resource.
- [SubscriptionIntroductoryOfferInlineCreate.Relationships](subscriptionintroductoryofferinlinecreate/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.

## See Also

### Objects

- [SubscriptionIntroductoryOfferCreateRequest](subscriptionintroductoryoffercreaterequest.md): The request body you use to create a subscription introductory offer.
- [SubscriptionIntroductoryOfferResponse](subscriptionintroductoryofferresponse.md): The response body for endpoints that create, read, or modify a single subscription introductory offer.
- [SubscriptionIntroductoryOfferUpdateRequest](subscriptionintroductoryofferupdaterequest.md): The request body you use to update a subscription introductory offer update request.
