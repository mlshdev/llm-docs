> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appevent/attributes-data.dictionary/territoryschedules-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/appevent/attributes-data.dictionary/territoryschedules-data.dictionary)

# AppEvent.Attributes.TerritorySchedules

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.7+

The per-territory schedule attributes within an app event, defining the start, end, publish dates, and targeted territories.

## Declaration

```
object AppEvent.Attributes.TerritorySchedules
```

## Properties

- `eventEnd` — `date-time`:
- `eventStart` — `date-time`:
- `publishStart` — `date-time`:
- `territories` — `[string]`:

## See Also

### Objects

- [AppEvent.Attributes.ArchivedTerritorySchedules](archivedterritoryschedules-data.dictionary.md): The archived per-territory schedule attributes within an app event, representing previously active territory schedules.
