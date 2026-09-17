> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/appcustomproductpagecreaterequest

# AppCustomProductPageCreateRequest

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.7+

The request body you use to create an app custom product page.

## Declaration

```
object AppCustomProductPageCreateRequest
```

## Properties

- `data` — `AppCustomProductPageCreateRequest.Data` (required):
- `included` — `[*]`: **Allowed types:** `AppCustomProductPageLocalizationInlineCreate`, `AppCustomProductPageVersionInlineCreate`

## Topics

### Objects

- [AppCustomProductPageCreateRequest.Data](appcustomproductpagecreaterequest/data-data.dictionary.md): The request body you use to create an app custom product page.

## See Also

### Objects

- [AppCustomProductPage](appcustomproductpage.md): A custom variant of an app’s App Store product page, used for targeted marketing campaigns.
- [AppCustomProductPageResponse](appcustomproductpageresponse.md): The response body for endpoints that create, read, or modify a single custom App Store product page.
- [AppCustomProductPageUpdateRequest](appcustomproductpageupdaterequest.md): The request body you use to update an app custom product page.
- [AppCustomProductPagesResponse](appcustomproductpagesresponse.md): The response body for endpoints that list custom App Store product pages for an app.
- [AppCustomProductPageAppCustomProductPageVersionsLinkagesResponse](appcustomproductpageappcustomproductpageversionslinkagesresponse.md): A response containing the resource identifiers of versions for a custom App Store product page.
