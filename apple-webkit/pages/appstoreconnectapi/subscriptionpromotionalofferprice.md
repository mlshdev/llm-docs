> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/subscriptionpromotionalofferprice](https://developer.apple.com/documentation/appstoreconnectapi/subscriptionpromotionalofferprice)

# SubscriptionPromotionalOfferPrice

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.0+

The territory-specific customer price and duration for a subscription promotional offer.

## Declaration

```
object SubscriptionPromotionalOfferPrice
```

## Properties

- `id` — `string` (required):
- `links` — `ResourceLinks`:
- `relationships` — `SubscriptionPromotionalOfferPrice.Relationships`:
- `type` — `string` (required): **Allowed values:** `subscriptionPromotionalOfferPrices`

## Topics

### Objects

- [SubscriptionPromotionalOfferPrice.Relationships](subscriptionpromotionalofferprice/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.

## See Also

### Objects

- [SubscriptionPromotionalOffer](subscriptionpromotionaloffer.md): A discounted or free trial offer for an auto-renewable subscription, available to eligible existing or former subscribers.
- [SubscriptionPromotionalOfferCreateRequest](subscriptionpromotionaloffercreaterequest.md): The request body you use to create a subscription promotional offer.
- [SubscriptionPromotionalOfferInlineCreate](subscriptionpromotionalofferinlinecreate.md): An inline object for specifying a promotional offer when creating or updating a subscription.
- [SubscriptionPromotionalOfferPriceInlineCreate](subscriptionpromotionalofferpriceinlinecreate.md): An inline object for specifying territory pricing when creating a subscription promotional offer.
- [SubscriptionPromotionalOfferPricesResponse](subscriptionpromotionalofferpricesresponse.md): A response containing a list of territory-specific prices for a subscription promotional offer.
- [SubscriptionPromotionalOfferResponse](subscriptionpromotionalofferresponse.md): The response body for endpoints that create, read, or modify a single subscription promotional offer.
- [SubscriptionPromotionalOfferUpdateRequest](subscriptionpromotionalofferupdaterequest.md): The request body you use to update a subscription promotional offer update request.
- [SubscriptionPromotionalOffersResponse](subscriptionpromotionaloffersresponse.md): The response body for endpoints that list promotional offers for a subscription.
