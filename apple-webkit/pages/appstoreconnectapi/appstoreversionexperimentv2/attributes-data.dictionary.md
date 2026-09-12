> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appstoreversionexperimentv2/attributes-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/appstoreversionexperimentv2/attributes-data.dictionary)

# AppStoreVersionExperimentV2.Attributes

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.4+

Attributes that describe an app store version experiment v2 resource.

## Declaration

```
object AppStoreVersionExperimentV2.Attributes
```

## Properties

- `endDate` — `date-time`:
- `name` — `string`:
- `platform` — `Platform`:
- `reviewRequired` — `boolean`:
- `startDate` — `date-time`:
- `state` — `string`: **Allowed values:** `PREPARE_FOR_SUBMISSION`, `READY_FOR_REVIEW`, `WAITING_FOR_REVIEW`, `IN_REVIEW`, `ACCEPTED`, `APPROVED`, `REJECTED`, `COMPLETED`, `STOPPED`
- `trafficProportion` — `integer`:

## See Also

### Objects

- [AppStoreVersionExperimentV2.Relationships](relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.
