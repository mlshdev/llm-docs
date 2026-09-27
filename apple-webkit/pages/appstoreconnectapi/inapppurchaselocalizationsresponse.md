> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-33695ec62253; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/inapppurchaselocalizationsresponse

# InAppPurchaseLocalizationsResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.0+ (deprecated in 4.4.1)

The response body for endpoints that list localizations for an In-App Purchase.

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

- [InAppPurchaseContentResponse](inapppurchasecontentresponse.md): A response containing a single hosted content record for an In-App Purchase.
- [InAppPurchaseContent](inapppurchasecontent.md): Hosted downloadable content associated with a non-consumable In-App Purchase.
- [InAppPurchaseLocalizationCreateRequest](inapppurchaselocalizationcreaterequest.md): Deprecated. The request body you use to create an In-App Purchase localization.
- [InAppPurchaseLocalizationUpdateRequest](inapppurchaselocalizationupdaterequest.md): Deprecated. The request body you use to update an In-App Purchase localization update request.
- [InAppPurchaseLocalization](inapppurchaselocalization.md): Deprecated. The localized display name and description for an In-App Purchase shown to customers in a specific language.
