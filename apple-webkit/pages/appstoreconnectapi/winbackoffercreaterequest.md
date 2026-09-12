> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/winbackoffercreaterequest](https://developer.apple.com/documentation/appstoreconnectapi/winbackoffercreaterequest)

# WinBackOfferCreateRequest

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.6+

The request body you use to create a winback offer.

## Declaration

```
object WinBackOfferCreateRequest
```

## Properties

- `data` — `WinBackOfferCreateRequest.Data` (required):
- `included` — `[WinBackOfferPriceInlineCreate]`:

## Topics

### Objects

- [WinBackOfferCreateRequest.Data](winbackoffercreaterequest/data-data.dictionary.md): The data element of the request body.
- [WinBackOfferPriceInlineCreate](winbackofferpriceinlinecreate.md): An inline object for specifying territory-specific pricing when creating or updating a win-back offer.

## See Also

### Objects

- [WinBackOffer](winbackoffer.md): A promotional offer targeting lapsed subscribers, providing a discount or free trial to encourage them to resubscribe.
- [WinBackOfferPrice](winbackofferprice.md): The territory-specific customer price and duration for a win-back subscription offer.
- [WinBackOfferPriceInlineCreate](winbackofferpriceinlinecreate.md): An inline object for specifying territory-specific pricing when creating or updating a win-back offer.
- [WinBackOfferPricesResponse](winbackofferpricesresponse.md): The response body for endpoints that list prices for a win-back offer.
- [WinBackOfferResponse](winbackofferresponse.md): The response body for endpoints that create, read, or modify a single win-back offer for a subscription.
- [WinBackOfferUpdateRequest](winbackofferupdaterequest.md): The request body you use to update a win-back offer.
- [WinBackOffersResponse](winbackoffersresponse.md): The response body for endpoints that list win-back offers for a subscription.
- [IntegerRange](integerrange.md): Describe the upper and lower integer bound of the attribute.
- [WinBackOfferPricesLinkagesResponse](winbackofferpriceslinkagesresponse.md)
- [SubscriptionWinBackOffersLinkagesResponse](subscriptionwinbackofferslinkagesresponse.md)
