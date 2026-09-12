> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/inapppurchasecontent](https://developer.apple.com/documentation/appstoreconnectapi/inapppurchasecontent)

# InAppPurchaseContent

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.0+

Hosted downloadable content associated with a non-consumable in-app purchase.

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

- [InAppPurchaseContent.Attributes](inapppurchasecontent/attributes-data.dictionary.md): Attributes that describe an in-app purchase content resource.
- [InAppPurchaseContent.Relationships](inapppurchasecontent/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.

## See Also

### Objects

- [InAppPurchaseContentResponse](inapppurchasecontentresponse.md): A response containing a single hosted content record for an in-app purchase.
- [InAppPurchaseLocalizationCreateRequest](inapppurchaselocalizationcreaterequest.md): Deprecated. The request body you use to create an in-app purchase localization.
- [InAppPurchaseLocalizationUpdateRequest](inapppurchaselocalizationupdaterequest.md): Deprecated. The request body you use to update an in-app purchase localization update request.
- [InAppPurchaseLocalizationsResponse](inapppurchaselocalizationsresponse.md): Deprecated. The response body for endpoints that list localizations for an in-app purchase.
- [InAppPurchaseLocalization](inapppurchaselocalization.md): Deprecated. The localized display name and description for an in-app purchase shown to customers in a specific language.
