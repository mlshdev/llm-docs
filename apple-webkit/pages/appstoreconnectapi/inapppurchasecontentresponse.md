> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-33695ec62253; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/inapppurchasecontentresponse

# InAppPurchaseContentResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.0+

A response containing a single hosted content record for an In-App Purchase.

## Declaration

```
object InAppPurchaseContentResponse
```

## Properties

- `data` — `InAppPurchaseContent` (required):
- `included` — `[InAppPurchaseV2]`:
- `links` — `DocumentLinks` (required):

## See Also

### Objects

- [InAppPurchaseContent](inapppurchasecontent.md): Hosted downloadable content associated with a non-consumable In-App Purchase.
- [InAppPurchaseLocalizationCreateRequest](inapppurchaselocalizationcreaterequest.md): Deprecated. The request body you use to create an In-App Purchase localization.
- [InAppPurchaseLocalizationUpdateRequest](inapppurchaselocalizationupdaterequest.md): Deprecated. The request body you use to update an In-App Purchase localization update request.
- [InAppPurchaseLocalizationsResponse](inapppurchaselocalizationsresponse.md): Deprecated. The response body for endpoints that list localizations for an In-App Purchase.
- [InAppPurchaseLocalization](inapppurchaselocalization.md): Deprecated. The localized display name and description for an In-App Purchase shown to customers in a specific language.
