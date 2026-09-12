> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/winbackofferpriceinlinecreate](https://developer.apple.com/documentation/appstoreconnectapi/winbackofferpriceinlinecreate)

# WinBackOfferPriceInlineCreate

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.6+

An inline object for specifying territory-specific pricing when creating or updating a win-back offer.

## Declaration

```
object WinBackOfferPriceInlineCreate
```

## Properties

- `id` — `string`: The opaque resource ID that uniquely identifies the resource.
- `type` — `string` (required): The resource type.
  **Allowed values:** `winBackOfferPrices`

## See Also

### Objects

- [WinBackOffer](winbackoffer.md): A promotional offer targeting lapsed subscribers, providing a discount or free trial to encourage them to resubscribe.
- [WinBackOfferCreateRequest](winbackoffercreaterequest.md): The request body you use to create a winback offer.
- [WinBackOfferPrice](winbackofferprice.md): The territory-specific customer price and duration for a win-back subscription offer.
- [WinBackOfferPricesResponse](winbackofferpricesresponse.md): The response body for endpoints that list prices for a win-back offer.
- [WinBackOfferResponse](winbackofferresponse.md): The response body for endpoints that create, read, or modify a single win-back offer for a subscription.
- [WinBackOfferUpdateRequest](winbackofferupdaterequest.md): The request body you use to update a win-back offer.
- [WinBackOffersResponse](winbackoffersresponse.md): The response body for endpoints that list win-back offers for a subscription.
- [IntegerRange](integerrange.md): Describe the upper and lower integer bound of the attribute.
- [WinBackOfferPricesLinkagesResponse](winbackofferpriceslinkagesresponse.md)
- [SubscriptionWinBackOffersLinkagesResponse](subscriptionwinbackofferslinkagesresponse.md)
