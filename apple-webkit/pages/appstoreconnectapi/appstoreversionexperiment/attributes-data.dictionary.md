> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/appstoreversionexperiment/attributes-data.dictionary

# AppStoreVersionExperiment.Attributes

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.7+ (deprecated in 2.4)

> This object is deprecated.

## Declaration

```
object AppStoreVersionExperiment.Attributes
```

## Properties

- `endDate` — `date-time`:
- `name` — `string`:
- `reviewRequired` — `boolean`:
- `startDate` — `date-time`:
- `state` — `string`: **Allowed values:** `PREPARE_FOR_SUBMISSION`, `READY_FOR_REVIEW`, `WAITING_FOR_REVIEW`, `IN_REVIEW`, `ACCEPTED`, `APPROVED`, `REJECTED`, `COMPLETED`, `STOPPED`
- `trafficProportion` — `integer`:

## See Also

### Objects

- [AppStoreVersionExperiment.Relationships](relationships-data.dictionary.md): Deprecated.
