> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appcustomproductpageversion/attributes-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/appcustomproductpageversion/attributes-data.dictionary)

# AppCustomProductPageVersion.Attributes

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.7+

Attributes that describe an app custom product page version resource.

## Declaration

```
object AppCustomProductPageVersion.Attributes
```

## Properties

- `deepLink` — `uri`:
- `state` — `string`: **Allowed values:** `PREPARE_FOR_SUBMISSION`, `READY_FOR_REVIEW`, `WAITING_FOR_REVIEW`, `IN_REVIEW`, `ACCEPTED`, `APPROVED`, `REPLACED_WITH_NEW_VERSION`, `REJECTED`
- `version` — `string`:

## See Also

### Objects

- [AppCustomProductPageVersion.Relationships](relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.
