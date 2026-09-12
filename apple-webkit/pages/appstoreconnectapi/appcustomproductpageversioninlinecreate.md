> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appcustomproductpageversioninlinecreate](https://developer.apple.com/documentation/appstoreconnectapi/appcustomproductpageversioninlinecreate)

# AppCustomProductPageVersionInlineCreate

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.7+

An inline object for specifying a custom product page version when creating or updating a related resource.

## Declaration

```
object AppCustomProductPageVersionInlineCreate
```

## Properties

- `attributes` — `AppCustomProductPageVersionInlineCreate.Attributes`:
- `id` — `string`:
- `relationships` — `AppCustomProductPageVersionInlineCreate.Relationships`:
- `type` — `string` (required): **Allowed values:** `appCustomProductPageVersions`

## Topics

### Objects

- [AppCustomProductPageVersionInlineCreate.Attributes](appcustomproductpageversioninlinecreate/attributes-data.dictionary.md): Attributes that describe an app custom product page version inline create resource.
- [AppCustomProductPageVersionInlineCreate.Relationships](appcustomproductpageversioninlinecreate/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.

## See Also

### Objects

- [AppCustomProductPageVersion](appcustomproductpageversion.md): A version of a custom App Store product page, containing its localizations and review status.
- [AppCustomProductPageVersionCreateRequest](appcustomproductpageversioncreaterequest.md): The request body you use to create an app custom product page version.
- [AppCustomProductPageVersionUpdateRequest](appcustomproductpageversionupdaterequest.md): The request body you use to update an app custom product page version.
- [AppCustomProductPageVersionResponse](appcustomproductpageversionresponse.md): The response body for endpoints that create, read, or modify a single custom product page version.
- [AppCustomProductPageVersionsResponse](appcustomproductpageversionsresponse.md): The response body for endpoints that list versions of a custom App Store product page.
- [AppCustomProductPageVersionAppCustomProductPageLocalizationsLinkagesResponse](appcustomproductpageversionappcustomproductpagelocalizationslinkagesresponse.md)
