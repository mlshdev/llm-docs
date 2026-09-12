> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/inapppurchaselocalizationsv2response](https://developer.apple.com/documentation/appstoreconnectapi/inapppurchaselocalizationsv2response)

# InAppPurchaseLocalizationsV2Response

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.4.1+

The response body for endpoints that list in-app purchase localizations configured with the v2 API.

## Declaration

```
object InAppPurchaseLocalizationsV2Response
```

## Properties

- `data` — `[InAppPurchaseLocalizationV2]` (required):
- `included` — `[InAppPurchaseVersion]`:
- `links` — `PagedDocumentLinks` (required):
- `meta` — `PagingInformation`:

## See Also

### Objects

- [InAppPurchaseLocalizationV2](inapppurchaselocalizationv2.md): The localized display name and description for an in-app purchase configured with the v2 API, shown to customers in a specific language.
- [InAppPurchaseLocalizationV2CreateRequest](inapppurchaselocalizationv2createrequest.md): The request body you use to create an in-app purchase localization with the v2 API.
- [InAppPurchaseLocalizationV2Response](inapppurchaselocalizationv2response.md): The response body for endpoints that create, read, or modify an in-app purchase localization with the v2 API.
- [InAppPurchaseLocalizationV2UpdateRequest](inapppurchaselocalizationv2updaterequest.md): The request body you use to update an in-app purchase localization with the v2 API.
