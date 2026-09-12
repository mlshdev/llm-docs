> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appstoreversioncreaterequest/data-data.dictionary/attributes-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/appstoreversioncreaterequest/data-data.dictionary/attributes-data.dictionary)

# AppStoreVersionCreateRequest.Data.Attributes

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.2+

Attributes that you set that describe the new resource.

## Declaration

```
object AppStoreVersionCreateRequest.Data.Attributes
```

## Properties

- `copyright` — `string`:
- `earliestReleaseDate` — `date-time`:
- `platform` — `Platform` (required):
- `releaseType` — `string`: **Allowed values:** `MANUAL`, `AFTER_APPROVAL`, `SCHEDULED`
- `reviewType` — `string`: **Allowed values:** `APP_STORE`, `NOTARIZATION`
- `usesIdfa` — `boolean`:
- `versionString` — `string` (required):

## See Also

### Objects

- [AppStoreVersionCreateRequest.Data.Relationships](relationships-data.dictionary.md): The relationships to other resources that you can set with this request.
