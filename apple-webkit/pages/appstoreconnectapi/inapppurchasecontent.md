> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-33695ec62253; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/inapppurchasecontent

# InAppPurchaseContent

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.0+

Hosted downloadable content associated with a non-consumable In-App Purchase.

## Declaration

```
object InAppPurchaseContent
```

## Properties

- `attributes` — `InAppPurchaseContent.Attributes`:
- `id` — `string` (required):
- `links` — `ResourceLinks`:
- `relationships` — `InAppPurchaseContent.Relationships`:
- `type` — `string` (required): **Allowed values:** `inAppPurchaseContents`

## Topics

### Objects

- [InAppPurchaseContent.Attributes](inapppurchasecontent/attributes-data.dictionary.md): Attributes that describe an In-App Purchase content resource.
- [InAppPurchaseContent.Relationships](inapppurchasecontent/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.

## See Also

### Objects

- [InAppPurchaseContentResponse](inapppurchasecontentresponse.md): A response containing a single hosted content record for an In-App Purchase.
- [InAppPurchaseLocalizationCreateRequest](inapppurchaselocalizationcreaterequest.md): Deprecated. The request body you use to create an In-App Purchase localization.
- [InAppPurchaseLocalizationUpdateRequest](inapppurchaselocalizationupdaterequest.md): Deprecated. The request body you use to update an In-App Purchase localization update request.
- [InAppPurchaseLocalizationsResponse](inapppurchaselocalizationsresponse.md): Deprecated. The response body for endpoints that list localizations for an In-App Purchase.
- [InAppPurchaseLocalization](inapppurchaselocalization.md): Deprecated. The localized display name and description for an In-App Purchase shown to customers in a specific language.
