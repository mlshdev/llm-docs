> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appeventupdaterequest/data-data.dictionary/attributes-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/appeventupdaterequest/data-data.dictionary/attributes-data.dictionary)

# AppEventUpdateRequest.Data.Attributes

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.7+

Attributes that describe an app event update request resource.

## Declaration

```
object AppEventUpdateRequest.Data.Attributes
```

## Properties

- `badge` — `string`: **Allowed values:** `LIVE_EVENT`, `PREMIERE`, `CHALLENGE`, `COMPETITION`, `NEW_SEASON`, `MAJOR_UPDATE`, `SPECIAL_EVENT`
- `deepLink` — `uri`:
- `primaryLocale` — `string`:
- `priority` — `string`: **Allowed values:** `HIGH`, `NORMAL`
- `purchaseRequirement` — `string`:
- `purpose` — `string`: **Allowed values:** `APPROPRIATE_FOR_ALL_USERS`, `ATTRACT_NEW_USERS`, `KEEP_ACTIVE_USERS_INFORMED`, `BRING_BACK_LAPSED_USERS`
- `referenceName` — `string`:
- `territorySchedules` — `[AppEventUpdateRequest.Data.Attributes.TerritorySchedules]`:

## Topics

### Objects

- [AppEventUpdateRequest.Data.Attributes.TerritorySchedules](attributes-data.dictionary/territoryschedules-data.dictionary.md): The per-territory schedule attributes within an app event update request, specifying the start, end, publish dates, and targeted territories.
