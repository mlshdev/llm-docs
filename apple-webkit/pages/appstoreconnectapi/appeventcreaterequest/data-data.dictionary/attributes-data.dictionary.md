> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appeventcreaterequest/data-data.dictionary/attributes-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/appeventcreaterequest/data-data.dictionary/attributes-data.dictionary)

# AppEventCreateRequest.Data.Attributes

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.7+

Attributes that describe an app event create request resource.

## Declaration

```
object AppEventCreateRequest.Data.Attributes
```

## Properties

- `badge` — `string`: **Allowed values:** `LIVE_EVENT`, `PREMIERE`, `CHALLENGE`, `COMPETITION`, `NEW_SEASON`, `MAJOR_UPDATE`, `SPECIAL_EVENT`
- `deepLink` — `uri`:
- `primaryLocale` — `string`:
- `priority` — `string`: **Allowed values:** `HIGH`, `NORMAL`
- `purchaseRequirement` — `string`:
- `purpose` — `string`: **Allowed values:** `APPROPRIATE_FOR_ALL_USERS`, `ATTRACT_NEW_USERS`, `KEEP_ACTIVE_USERS_INFORMED`, `BRING_BACK_LAPSED_USERS`
- `referenceName` — `string` (required):
- `territorySchedules` — `[AppEventCreateRequest.Data.Attributes.TerritorySchedules]`:

## Topics

### Objects

- [AppEventCreateRequest.Data.Attributes.TerritorySchedules](attributes-data.dictionary/territoryschedules-data.dictionary.md): The per-territory schedule attributes within an app event create request, specifying the start, end, publish dates, and targeted territories.

## See Also

### Objects

- [AppEventCreateRequest.Data.Relationships](relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.
