> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/inapppurchaselocalizationsresponse](https://developer.apple.com/documentation/appstoreconnectapi/inapppurchaselocalizationsresponse)

# InAppPurchaseLocalizationsResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.0+ (deprecated in 4.4.1)

The response body for endpoints that list localizations for an in-app purchase.

> This object is deprecated. Use [InAppPurchaseLocalizationsV2Response](inapppurchaselocalizationsv2response.md) instead.

## Declaration

```
object InAppPurchaseLocalizationsResponse
```

## Properties

- `data` — `[InAppPurchaseLocalization]` (required):
- `included` — `[InAppPurchaseV2]`:
- `links` — `PagedDocumentLinks` (required):
- `meta` — `PagingInformation`:

## See Also

### Objects

- [InAppPurchaseContentResponse](inapppurchasecontentresponse.md): A response containing a single hosted content record for an in-app purchase.
- [InAppPurchaseContent](inapppurchasecontent.md): Hosted downloadable content associated with a non-consumable in-app purchase.
- [InAppPurchaseLocalizationCreateRequest](inapppurchaselocalizationcreaterequest.md): Deprecated. The request body you use to create an in-app purchase localization.
- [InAppPurchaseLocalizationUpdateRequest](inapppurchaselocalizationupdaterequest.md): Deprecated. The request body you use to update an in-app purchase localization update request.
- [InAppPurchaseLocalization](inapppurchaselocalization.md): Deprecated. The localized display name and description for an in-app purchase shown to customers in a specific language.
