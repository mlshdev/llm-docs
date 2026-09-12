> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appstoreversionupdaterequest/data-data.dictionary/attributes-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/appstoreversionupdaterequest/data-data.dictionary/attributes-data.dictionary)

# AppStoreVersionUpdateRequest.Data.Attributes

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.2+

Attributes whose values you’re changing as part of the update request.

## Declaration

```
object AppStoreVersionUpdateRequest.Data.Attributes
```

## Properties

- `copyright` — `string`:
- `earliestReleaseDate` — `date-time`:
- `releaseType` — `string`: **Allowed values:** `MANUAL`, `AFTER_APPROVAL`, `SCHEDULED`
- `versionString` — `string`:
- `downloadable` — `boolean`:
- `reviewType` — `string`: `NOTARIZATION` is alternative app marketplace distribution. All eligible app versions default to both `APP_STORE` and `NOTARIZATION.` An app can be distributed on either or both.
  **Allowed values:** `APP_STORE`, `NOTARIZATION`
- `usesIdfa` — `boolean`:

## Mentioned In

- [Configuring alternative marketplaces and alternative marketplace apps](../../configuring-alternative-marketplaces-and-alternative-marketplace-apps.md)

## See Also

### Objects

- [AppStoreVersionUpdateRequest.Data.Relationships](relationships-data.dictionary.md): The data and links that describe the relationship between the resources.
