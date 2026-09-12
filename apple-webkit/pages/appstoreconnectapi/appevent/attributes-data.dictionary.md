> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appevent/attributes-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/appevent/attributes-data.dictionary)

# AppEvent.Attributes

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.7+

The attributes that describe an In-App event.

## Declaration

```
object AppEvent.Attributes
```

## Properties

- `archivedTerritorySchedules` — `[AppEvent.Attributes.ArchivedTerritorySchedules]`:
- `badge` — `string`: **Allowed values:** `LIVE_EVENT`, `PREMIERE`, `CHALLENGE`, `COMPETITION`, `NEW_SEASON`, `MAJOR_UPDATE`, `SPECIAL_EVENT`
- `deepLink` — `uri`:
- `eventState` — `string`: **Allowed values:** `DRAFT`, `READY_FOR_REVIEW`, `WAITING_FOR_REVIEW`, `IN_REVIEW`, `REJECTED`, `ACCEPTED`, `APPROVED`, `PUBLISHED`, `PAST`, `ARCHIVED`
- `primaryLocale` — `string`:
- `priority` — `string`: **Allowed values:** `HIGH`, `NORMAL`
- `purchaseRequirement` — `string`: Possible values: `NO_COST_ASSOCIATED`, `IN_APP_PURCHASE`
- `purpose` — `string`: **Allowed values:** `APPROPRIATE_FOR_ALL_USERS`, `ATTRACT_NEW_USERS`, `KEEP_ACTIVE_USERS_INFORMED`, `BRING_BACK_LAPSED_USERS`
- `referenceName` — `string`:
- `territorySchedules` — `[AppEvent.Attributes.TerritorySchedules]`:

## Mentioned In

- [App Store Connect API 3.6 release notes](../app-store-connect-api-3-6-release-notes.md)

## Topics

### Objects

- [AppEvent.Attributes.ArchivedTerritorySchedules](attributes-data.dictionary/archivedterritoryschedules-data.dictionary.md): The archived per-territory schedule attributes within an app event, representing previously active territory schedules.
- [AppEvent.Attributes.TerritorySchedules](attributes-data.dictionary/territoryschedules-data.dictionary.md): The per-territory schedule attributes within an app event, defining the start, end, publish dates, and targeted territories.

## See Also

### Objects

- [AppEvent.Relationships](relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.
