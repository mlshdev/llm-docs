> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/analyticsreportrequestcreaterequest/data-data.dictionary/attributes-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/analyticsreportrequestcreaterequest/data-data.dictionary/attributes-data.dictionary)

# AnalyticsReportRequestCreateRequest.Data.Attributes

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.4+

Attributes that describe an analytics report create request resource.

## Declaration

```
object AnalyticsReportRequestCreateRequest.Data.Attributes
```

## Properties

- `accessType` — `string` (required): The `accessType` `ONGOING` provides current data and is the most typical. It generates reports daily, weekly and monthly. Use `ONE_TIME_SNAPSHOT` to get historical data.
  **Allowed values:** `ONE_TIME_SNAPSHOT`, `ONGOING`

## See Also

### Objects

- [AnalyticsReportRequestCreateRequest.Data.Relationships](relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.
