> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appcustomproductpageversionresponse](https://developer.apple.com/documentation/appstoreconnectapi/appcustomproductpageversionresponse)

# AppCustomProductPageVersionResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.7+

The response body for endpoints that create, read, or modify a single custom product page version.

## Declaration

```
object AppCustomProductPageVersionResponse
```

## Properties

- `data` — `AppCustomProductPageVersion` (required):
- `included` — `[*]`: **Allowed types:** `AppCustomProductPageLocalization`, `AppCustomProductPage`
- `links` — `DocumentLinks` (required):

## See Also

### Objects

- [AppCustomProductPageVersion](appcustomproductpageversion.md): A version of a custom App Store product page, containing its localizations and review status.
- [AppCustomProductPageVersionCreateRequest](appcustomproductpageversioncreaterequest.md): The request body you use to create an app custom product page version.
- [AppCustomProductPageVersionInlineCreate](appcustomproductpageversioninlinecreate.md): An inline object for specifying a custom product page version when creating or updating a related resource.
- [AppCustomProductPageVersionUpdateRequest](appcustomproductpageversionupdaterequest.md): The request body you use to update an app custom product page version.
- [AppCustomProductPageVersionsResponse](appcustomproductpageversionsresponse.md): The response body for endpoints that list versions of a custom App Store product page.
- [AppCustomProductPageVersionAppCustomProductPageLocalizationsLinkagesResponse](appcustomproductpageversionappcustomproductpagelocalizationslinkagesresponse.md)
