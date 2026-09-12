> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/analyticsreportrequestcreaterequest/data-data.dictionary/relationships-data.dictionary/app-data.dictionary/data-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/analyticsreportrequestcreaterequest/data-data.dictionary/relationships-data.dictionary/app-data.dictionary/data-data.dictionary)

# AnalyticsReportRequestCreateRequest.Data.Relationships.App.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.4+

The resource linkage identifying the app to associate with an analytics report request create operation.

## Declaration

```
object AnalyticsReportRequestCreateRequest.Data.Relationships.App.Data
```

## Properties

- `id` — `string` (required): The opaque resource ID that uniquely identifies the Apps resource. Obtain the app resource ID from the [List apps](../../../../get-v1-apps.md) response.
- `type` — `string` (required): **Allowed values:** `apps`
