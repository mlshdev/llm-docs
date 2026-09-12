> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/inapppurchaselocalizationcreaterequest/data-data.dictionary/attributes-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/inapppurchaselocalizationcreaterequest/data-data.dictionary/attributes-data.dictionary)

# InAppPurchaseLocalizationCreateRequest.Data.Attributes

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.0+

Attributes that describe an in-app purchase localization create request resource.

## Declaration

```
object InAppPurchaseLocalizationCreateRequest.Data.Attributes
```

## Properties

- `description` — `string`: Include this field before submitting, even though it’s optional when creating the resource.
- `locale` — `string` (required): The specified locale. To learn more, see [Managing metadata in your app by using locale shortcodes](../../managing-metadata-in-your-app-by-using-locale-shortcodes.md).
- `name` — `string` (required):

## See Also

### Objects

- [InAppPurchaseLocalizationCreateRequest.Data.Relationships](relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.
