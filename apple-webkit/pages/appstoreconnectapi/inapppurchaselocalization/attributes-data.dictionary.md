> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/inapppurchaselocalization/attributes-data.dictionary

# InAppPurchaseLocalization.Attributes

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.0+

Attributes that describe an in-app purchase localization resource.

## Declaration

```
object InAppPurchaseLocalization.Attributes
```

## Properties

- `description` — `string`:
- `locale` — `string`: The specified locale. To learn more, see [Managing metadata in your app by using locale shortcodes](../managing-metadata-in-your-app-by-using-locale-shortcodes.md).
- `name` — `string`:
- `state` — `string`: **Allowed values:** `PREPARE_FOR_SUBMISSION`, `WAITING_FOR_REVIEW`, `APPROVED`, `REJECTED`

## See Also

### Objects and types

- [InAppPurchaseLocalization.Relationships](relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.
