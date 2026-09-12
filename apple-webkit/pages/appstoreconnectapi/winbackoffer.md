> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/winbackoffer](https://developer.apple.com/documentation/appstoreconnectapi/winbackoffer)

# WinBackOffer

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.6+

A promotional offer targeting lapsed subscribers, providing a discount or free trial to encourage them to resubscribe.

## Declaration

```
object WinBackOffer
```

## Properties

- `attributes` — `WinBackOffer.Attributes`: The resource’s attributes.
- `id` — `string` (required): The opaque resource ID that uniquely identifies the resource.
- `relationships` — `WinBackOffer.Relationships`: Navigational links to related data and included resource types and IDs.
- `type` — `string` (required): The resource type.
  **Allowed values:** `winBackOffers`
- `links` — `ResourceLinks`: Navigational links that include the self-link.

## Topics

### Objects

- [WinBackOffer.Attributes](winbackoffer/attributes-data.dictionary.md): Attributes that describe a winback offer resource.
- [WinBackOffer.Relationships](winbackoffer/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.

## See Also

### Objects

- [WinBackOfferCreateRequest](winbackoffercreaterequest.md): The request body you use to create a winback offer.
- [WinBackOfferPrice](winbackofferprice.md): The territory-specific customer price and duration for a win-back subscription offer.
- [WinBackOfferPriceInlineCreate](winbackofferpriceinlinecreate.md): An inline object for specifying territory-specific pricing when creating or updating a win-back offer.
- [WinBackOfferPricesResponse](winbackofferpricesresponse.md): The response body for endpoints that list prices for a win-back offer.
- [WinBackOfferResponse](winbackofferresponse.md): The response body for endpoints that create, read, or modify a single win-back offer for a subscription.
- [WinBackOfferUpdateRequest](winbackofferupdaterequest.md): The request body you use to update a win-back offer.
- [WinBackOffersResponse](winbackoffersresponse.md): The response body for endpoints that list win-back offers for a subscription.
- [IntegerRange](integerrange.md): Describe the upper and lower integer bound of the attribute.
- [WinBackOfferPricesLinkagesResponse](winbackofferpriceslinkagesresponse.md)
- [SubscriptionWinBackOffersLinkagesResponse](subscriptionwinbackofferslinkagesresponse.md)
