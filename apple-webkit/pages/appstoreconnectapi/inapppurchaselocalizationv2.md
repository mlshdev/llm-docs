> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/inapppurchaselocalizationv2](https://developer.apple.com/documentation/appstoreconnectapi/inapppurchaselocalizationv2)

# InAppPurchaseLocalizationV2

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.4.1+

The localized display name and description for an in-app purchase configured with the v2 API, shown to customers in a specific language.

## Declaration

```
object InAppPurchaseLocalizationV2
```

## Properties

- `type` — `string` (required): **Allowed values:** `inAppPurchaseLocalizations`
- `id` — `string` (required):
- `attributes` — `InAppPurchaseLocalizationV2.Attributes`:
- `relationships` — `InAppPurchaseLocalizationV2.Relationships`:
- `links` — `ResourceLinks`:

## Topics

### Objects and types

- [InAppPurchaseLocalizationV2.Attributes](inapppurchaselocalizationv2/attributes-data.dictionary.md): Attributes that describe an in-app purchase localization resource.
- [InAppPurchaseLocalizationV2.Relationships](inapppurchaselocalizationv2/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.

## See Also

### Objects

- [InAppPurchaseLocalizationV2CreateRequest](inapppurchaselocalizationv2createrequest.md): The request body you use to create an in-app purchase localization with the v2 API.
- [InAppPurchaseLocalizationV2Response](inapppurchaselocalizationv2response.md): The response body for endpoints that create, read, or modify an in-app purchase localization with the v2 API.
- [InAppPurchaseLocalizationV2UpdateRequest](inapppurchaselocalizationv2updaterequest.md): The request body you use to update an in-app purchase localization with the v2 API.
- [InAppPurchaseLocalizationsV2Response](inapppurchaselocalizationsv2response.md): The response body for endpoints that list in-app purchase localizations configured with the v2 API.
