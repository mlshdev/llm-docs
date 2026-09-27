> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-33695ec62253; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/inapppurchaselocalizationcreaterequest

# InAppPurchaseLocalizationCreateRequest

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.0+ (deprecated in 4.4.1)

The request body you use to create an In-App Purchase localization.

> This object is deprecated. Use [InAppPurchaseLocalizationV2CreateRequest](inapppurchaselocalizationv2createrequest.md) instead.

## Declaration

```
object InAppPurchaseLocalizationCreateRequest
```

## Properties

- `data` — `InAppPurchaseLocalizationCreateRequest.Data` (required):

## Topics

### Objects

- [InAppPurchaseLocalizationCreateRequest.Data](inapppurchaselocalizationcreaterequest/data-data.dictionary.md): The request body you use to create an In-App Purchase localization.

## See Also

### Objects

- [InAppPurchaseContentResponse](inapppurchasecontentresponse.md): A response containing a single hosted content record for an In-App Purchase.
- [InAppPurchaseContent](inapppurchasecontent.md): Hosted downloadable content associated with a non-consumable In-App Purchase.
- [InAppPurchaseLocalizationUpdateRequest](inapppurchaselocalizationupdaterequest.md): Deprecated. The request body you use to update an In-App Purchase localization update request.
- [InAppPurchaseLocalizationsResponse](inapppurchaselocalizationsresponse.md): Deprecated. The response body for endpoints that list localizations for an In-App Purchase.
- [InAppPurchaseLocalization](inapppurchaselocalization.md): Deprecated. The localized display name and description for an In-App Purchase shown to customers in a specific language.
