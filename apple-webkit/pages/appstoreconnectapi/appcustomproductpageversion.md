> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appcustomproductpageversion](https://developer.apple.com/documentation/appstoreconnectapi/appcustomproductpageversion)

# AppCustomProductPageVersion

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.7+

A version of a custom App Store product page, containing its localizations and review status.

## Declaration

```
object AppCustomProductPageVersion
```

## Properties

- `attributes` — `AppCustomProductPageVersion.Attributes`:
- `id` — `string` (required):
- `links` — `ResourceLinks`:
- `relationships` — `AppCustomProductPageVersion.Relationships`:
- `type` — `string` (required): **Allowed values:** `appCustomProductPageVersions`

## Topics

### Objects

- [AppCustomProductPageVersion.Attributes](appcustomproductpageversion/attributes-data.dictionary.md): Attributes that describe an app custom product page version resource.
- [AppCustomProductPageVersion.Relationships](appcustomproductpageversion/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.

## See Also

### Objects

- [AppCustomProductPageVersionCreateRequest](appcustomproductpageversioncreaterequest.md): The request body you use to create an app custom product page version.
- [AppCustomProductPageVersionInlineCreate](appcustomproductpageversioninlinecreate.md): An inline object for specifying a custom product page version when creating or updating a related resource.
- [AppCustomProductPageVersionUpdateRequest](appcustomproductpageversionupdaterequest.md): The request body you use to update an app custom product page version.
- [AppCustomProductPageVersionResponse](appcustomproductpageversionresponse.md): The response body for endpoints that create, read, or modify a single custom product page version.
- [AppCustomProductPageVersionsResponse](appcustomproductpageversionsresponse.md): The response body for endpoints that list versions of a custom App Store product page.
- [AppCustomProductPageVersionAppCustomProductPageLocalizationsLinkagesResponse](appcustomproductpageversionappcustomproductpagelocalizationslinkagesresponse.md)
