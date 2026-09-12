> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/subscriptionpromotionalofferupdaterequest](https://developer.apple.com/documentation/appstoreconnectapi/subscriptionpromotionalofferupdaterequest)

# SubscriptionPromotionalOfferUpdateRequest

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.0+

The request body you use to update a subscription promotional offer update request.

## Declaration

```
object SubscriptionPromotionalOfferUpdateRequest
```

## Properties

- `data` — `SubscriptionPromotionalOfferUpdateRequest.Data` (required):
- `included` — `[SubscriptionPromotionalOfferPriceInlineCreate]`:

## Topics

### Objects

- [SubscriptionPromotionalOfferUpdateRequest.Data](subscriptionpromotionalofferupdaterequest/data-data.dictionary.md): The request body you use to update a subscription promotional offer update request.

## See Also

### Objects

- [SubscriptionPromotionalOffer](subscriptionpromotionaloffer.md): A discounted or free trial offer for an auto-renewable subscription, available to eligible existing or former subscribers.
- [SubscriptionPromotionalOfferCreateRequest](subscriptionpromotionaloffercreaterequest.md): The request body you use to create a subscription promotional offer.
- [SubscriptionPromotionalOfferInlineCreate](subscriptionpromotionalofferinlinecreate.md): An inline object for specifying a promotional offer when creating or updating a subscription.
- [SubscriptionPromotionalOfferPrice](subscriptionpromotionalofferprice.md): The territory-specific customer price and duration for a subscription promotional offer.
- [SubscriptionPromotionalOfferPriceInlineCreate](subscriptionpromotionalofferpriceinlinecreate.md): An inline object for specifying territory pricing when creating a subscription promotional offer.
- [SubscriptionPromotionalOfferPricesResponse](subscriptionpromotionalofferpricesresponse.md): A response containing a list of territory-specific prices for a subscription promotional offer.
- [SubscriptionPromotionalOfferResponse](subscriptionpromotionalofferresponse.md): The response body for endpoints that create, read, or modify a single subscription promotional offer.
- [SubscriptionPromotionalOffersResponse](subscriptionpromotionaloffersresponse.md): The response body for endpoints that list promotional offers for a subscription.
