> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/nominationcreaterequest/data-data.dictionary/attributes-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/nominationcreaterequest/data-data.dictionary/attributes-data.dictionary)

# NominationCreateRequest.Data.Attributes

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.6+

## Declaration

```
object NominationCreateRequest.Data.Attributes
```

## Properties

- `description` — `string` (required):
- `deviceFamilies` — `[DeviceFamily]`:
- `hasInAppEvents` — `boolean`:
- `launchInSelectMarketsFirst` — `boolean`:
- `locales` — `[string]`:
- `name` — `string` (required):
- `notes` — `string`:
- `preOrderEnabled` — `boolean`:
- `publishEndDate` — `date-time`:
- `publishStartDate` — `date-time` (required):
- `submitted` — `boolean` (required):
- `supplementalMaterialsUris` — `[uri]`:
- `type` — `string` (required): **Allowed values:** `APP_LAUNCH`, `APP_ENHANCEMENTS`, `NEW_CONTENT`
