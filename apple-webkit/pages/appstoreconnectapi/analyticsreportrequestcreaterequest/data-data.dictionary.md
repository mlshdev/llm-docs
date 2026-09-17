> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/analyticsreportrequestcreaterequest/data-data.dictionary

# AnalyticsReportRequestCreateRequest.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.4+

The data object within an analytics report request create request containing the resource type, attributes, and relationships for the create operation.

## Declaration

```
object AnalyticsReportRequestCreateRequest.Data
```

## Properties

- `attributes` — `AnalyticsReportRequestCreateRequest.Data.Attributes` (required):
- `relationships` — `AnalyticsReportRequestCreateRequest.Data.Relationships` (required):
- `type` — `string` (required): **Allowed values:** `analyticsReportRequests`

## Topics

### Objects

- [AnalyticsReportRequestCreateRequest.Data.Attributes](data-data.dictionary/attributes-data.dictionary.md): Attributes that describe an analytics report create request resource.
- [AnalyticsReportRequestCreateRequest.Data.Relationships](data-data.dictionary/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.
