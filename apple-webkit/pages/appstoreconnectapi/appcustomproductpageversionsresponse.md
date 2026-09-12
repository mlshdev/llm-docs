> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appcustomproductpageversionsresponse](https://developer.apple.com/documentation/appstoreconnectapi/appcustomproductpageversionsresponse)

# AppCustomProductPageVersionsResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.7+

The response body for endpoints that list versions of a custom App Store product page.

## Declaration

```
object AppCustomProductPageVersionsResponse
```

## Properties

- `data` — `[AppCustomProductPageVersion]` (required):
- `included` — `[*]`: **Allowed types:** `AppCustomProductPageLocalization`, `AppCustomProductPage`
- `links` — `PagedDocumentLinks` (required):
- `meta` — `PagingInformation`:

## See Also

### Objects

- [AppCustomProductPageVersion](appcustomproductpageversion.md): A version of a custom App Store product page, containing its localizations and review status.
- [AppCustomProductPageVersionCreateRequest](appcustomproductpageversioncreaterequest.md): The request body you use to create an app custom product page version.
- [AppCustomProductPageVersionInlineCreate](appcustomproductpageversioninlinecreate.md): An inline object for specifying a custom product page version when creating or updating a related resource.
- [AppCustomProductPageVersionUpdateRequest](appcustomproductpageversionupdaterequest.md): The request body you use to update an app custom product page version.
- [AppCustomProductPageVersionResponse](appcustomproductpageversionresponse.md): The response body for endpoints that create, read, or modify a single custom product page version.
- [AppCustomProductPageVersionAppCustomProductPageLocalizationsLinkagesResponse](appcustomproductpageversionappcustomproductpagelocalizationslinkagesresponse.md)
