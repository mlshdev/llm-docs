> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appcustomproductpage](https://developer.apple.com/documentation/appstoreconnectapi/appcustomproductpage)

# AppCustomProductPage

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.7+

A custom variant of an app’s App Store product page, used for targeted marketing campaigns.

## Declaration

```
object AppCustomProductPage
```

## Properties

- `attributes` — `AppCustomProductPage.Attributes`:
- `id` — `string` (required):
- `links` — `ResourceLinks`:
- `relationships` — `AppCustomProductPage.Relationships`:
- `type` — `string` (required): **Allowed values:** `appCustomProductPages`

## Topics

### Objects

- [AppCustomProductPage.Attributes](appcustomproductpage/attributes-data.dictionary.md): Attributes that describe an app custom product page resource.
- [AppCustomProductPage.Relationships](appcustomproductpage/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.

## See Also

### Objects

- [AppCustomProductPageCreateRequest](appcustomproductpagecreaterequest.md): The request body you use to create an app custom product page.
- [AppCustomProductPageResponse](appcustomproductpageresponse.md): The response body for endpoints that create, read, or modify a single custom App Store product page.
- [AppCustomProductPageUpdateRequest](appcustomproductpageupdaterequest.md): The request body you use to update an app custom product page.
- [AppCustomProductPagesResponse](appcustomproductpagesresponse.md): The response body for endpoints that list custom App Store product pages for an app.
- [AppCustomProductPageAppCustomProductPageVersionsLinkagesResponse](appcustomproductpageappcustomproductpageversionslinkagesresponse.md): A response containing the resource identifiers of versions for a custom App Store product page.
