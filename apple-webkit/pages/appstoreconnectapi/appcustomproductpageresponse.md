> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appcustomproductpageresponse](https://developer.apple.com/documentation/appstoreconnectapi/appcustomproductpageresponse)

# AppCustomProductPageResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.7+

The response body for endpoints that create, read, or modify a single custom App Store product page.

## Declaration

```
object AppCustomProductPageResponse
```

## Properties

- `data` — `AppCustomProductPage` (required):
- `included` — `[*]`: **Allowed types:** `AppCustomProductPageLocalization`, `AppCustomProductPageVersion`, `App`
- `links` — `DocumentLinks` (required):

## See Also

### Objects

- [AppCustomProductPage](appcustomproductpage.md): A custom variant of an app’s App Store product page, used for targeted marketing campaigns.
- [AppCustomProductPageCreateRequest](appcustomproductpagecreaterequest.md): The request body you use to create an app custom product page.
- [AppCustomProductPageUpdateRequest](appcustomproductpageupdaterequest.md): The request body you use to update an app custom product page.
- [AppCustomProductPagesResponse](appcustomproductpagesresponse.md): The response body for endpoints that list custom App Store product pages for an app.
- [AppCustomProductPageAppCustomProductPageVersionsLinkagesResponse](appcustomproductpageappcustomproductpageversionslinkagesresponse.md): A response containing the resource identifiers of versions for a custom App Store product page.
