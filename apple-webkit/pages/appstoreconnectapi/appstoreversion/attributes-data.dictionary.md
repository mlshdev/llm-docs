> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appstoreversion/attributes-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/appstoreversion/attributes-data.dictionary)

# AppStoreVersion.Attributes

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.2+

Attributes that describe an App Store Versions resource.

## Declaration

```
object AppStoreVersion.Attributes
```

## Properties

- `platform` — `Platform`:
- `appStoreState` — `AppStoreVersionState`: This attribute is deprecated. Use [AppVersionState](../appversionstate.md) instead.
- `copyright` — `string`:
- `earliestReleaseDate` — `date-time`:
- `releaseType` — `string`: **Allowed values:** `MANUAL`, `AFTER_APPROVAL`, `SCHEDULED`
- `versionString` — `string`:
- `createdDate` — `date-time`:
- `downloadable` — `boolean`:
- `appVersionState` — `AppVersionState`:
- `reviewType` — `string`: **Allowed values:** `APP_STORE`, `NOTARIZATION`
- `usesIdfa` — `boolean`:

## Mentioned In

- [App Store Connect API 3.3 release notes](../app-store-connect-api-3-3-release-notes.md)
- [App Store Connect API 3.7 release notes](../app-store-connect-api-3-7-release-notes.md)

## See Also

### Objects

- [AppStoreVersion.Relationships](relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.
