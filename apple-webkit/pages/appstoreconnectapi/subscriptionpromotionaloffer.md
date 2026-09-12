> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/subscriptionpromotionaloffer](https://developer.apple.com/documentation/appstoreconnectapi/subscriptionpromotionaloffer)

# SubscriptionPromotionalOffer

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.0+

A discounted or free trial offer for an auto-renewable subscription, available to eligible existing or former subscribers.

## Declaration

```
object SubscriptionPromotionalOffer
```

## Properties

- `attributes` — `SubscriptionPromotionalOffer.Attributes`:
- `id` — `string` (required):
- `links` — `ResourceLinks`:
- `relationships` — `SubscriptionPromotionalOffer.Relationships`:
- `type` — `string` (required): **Allowed values:** `subscriptionPromotionalOffers`

## Topics

### Objects

- [SubscriptionPromotionalOffer.Attributes](subscriptionpromotionaloffer/attributes-data.dictionary.md): Attributes that describe a subscription promotional offer resource.
- [SubscriptionPromotionalOffer.Relationships](subscriptionpromotionaloffer/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.

## See Also

### Objects

- [SubscriptionPromotionalOfferCreateRequest](subscriptionpromotionaloffercreaterequest.md): The request body you use to create a subscription promotional offer.
- [SubscriptionPromotionalOfferInlineCreate](subscriptionpromotionalofferinlinecreate.md): An inline object for specifying a promotional offer when creating or updating a subscription.
- [SubscriptionPromotionalOfferPrice](subscriptionpromotionalofferprice.md): The territory-specific customer price and duration for a subscription promotional offer.
- [SubscriptionPromotionalOfferPriceInlineCreate](subscriptionpromotionalofferpriceinlinecreate.md): An inline object for specifying territory pricing when creating a subscription promotional offer.
- [SubscriptionPromotionalOfferPricesResponse](subscriptionpromotionalofferpricesresponse.md): A response containing a list of territory-specific prices for a subscription promotional offer.
- [SubscriptionPromotionalOfferResponse](subscriptionpromotionalofferresponse.md): The response body for endpoints that create, read, or modify a single subscription promotional offer.
- [SubscriptionPromotionalOfferUpdateRequest](subscriptionpromotionalofferupdaterequest.md): The request body you use to update a subscription promotional offer update request.
- [SubscriptionPromotionalOffersResponse](subscriptionpromotionaloffersresponse.md): The response body for endpoints that list promotional offers for a subscription.
