> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/inapppurchaseversion/attributes-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/inapppurchaseversion/attributes-data.dictionary)

# InAppPurchaseVersion.Attributes

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.4.1+

Attributes that describe an in-app purchase version resource.

## Declaration

```
object InAppPurchaseVersion.Attributes
```

## Properties

- `version` — `integer`:
- `state` — `string`: **Allowed values:** `PREPARE_FOR_SUBMISSION`, `READY_FOR_REVIEW`, `WAITING_FOR_REVIEW`, `IN_REVIEW`, `ACCEPTED`, `APPROVED`, `REPLACED_WITH_NEW_VERSION`, `REJECTED`, `DEVELOPER_REJECTED`

## See Also

### Objects and types

- [InAppPurchaseVersion.Relationships](relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.
