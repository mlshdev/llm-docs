> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/winbackoffercreaterequest/data-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/winbackoffercreaterequest/data-data.dictionary)

# WinBackOfferCreateRequest.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.6+

The data element of the request body.

## Declaration

```
object WinBackOfferCreateRequest.Data
```

## Properties

- `attributes` — `WinBackOfferCreateRequest.Data.Attributes` (required): The attributes that describes the request that creates a win-back offer resource.
- `relationships` — `WinBackOfferCreateRequest.Data.Relationships` (required): The navigational links to related data and included resource types and IDs.
- `type` — `string` (required): The resource type.
  **Allowed values:** `winBackOffers`

## Topics

### Objects

- [WinBackOfferCreateRequest.Data.Attributes](data-data.dictionary/attributes-data.dictionary.md): Attributes that describe a winback offer resource.
- [WinBackOfferCreateRequest.Data.Relationships](data-data.dictionary/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.

## See Also

### Objects

- [WinBackOfferPriceInlineCreate](../winbackofferpriceinlinecreate.md): An inline object for specifying territory-specific pricing when creating or updating a win-back offer.
