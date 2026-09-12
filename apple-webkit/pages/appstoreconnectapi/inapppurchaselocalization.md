> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/inapppurchaselocalization](https://developer.apple.com/documentation/appstoreconnectapi/inapppurchaselocalization)

# InAppPurchaseLocalization

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.0+ (deprecated in 4.4.1)

The localized display name and description for an in-app purchase shown to customers in a specific language.

> This object is deprecated. Use [InAppPurchaseLocalizationV2](inapppurchaselocalizationv2.md) instead.

## Declaration

```
object InAppPurchaseLocalization
```

## Properties

- `attributes` — `InAppPurchaseLocalization.Attributes`:
- `id` — `string` (required):
- `links` — `ResourceLinks`:
- `relationships` — `InAppPurchaseLocalization.Relationships`:
- `type` — `string` (required): **Allowed values:** `inAppPurchaseLocalizations`

## Topics

### Objects and types

- [InAppPurchaseLocalization.Attributes](inapppurchaselocalization/attributes-data.dictionary.md): Attributes that describe an in-app purchase localization resource.
- [InAppPurchaseLocalization.Relationships](inapppurchaselocalization/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.

## See Also

### Objects

- [InAppPurchaseContentResponse](inapppurchasecontentresponse.md): A response containing a single hosted content record for an in-app purchase.
- [InAppPurchaseContent](inapppurchasecontent.md): Hosted downloadable content associated with a non-consumable in-app purchase.
- [InAppPurchaseLocalizationCreateRequest](inapppurchaselocalizationcreaterequest.md): Deprecated. The request body you use to create an in-app purchase localization.
- [InAppPurchaseLocalizationUpdateRequest](inapppurchaselocalizationupdaterequest.md): Deprecated. The request body you use to update an in-app purchase localization update request.
- [InAppPurchaseLocalizationsResponse](inapppurchaselocalizationsresponse.md): Deprecated. The response body for endpoints that list localizations for an in-app purchase.
