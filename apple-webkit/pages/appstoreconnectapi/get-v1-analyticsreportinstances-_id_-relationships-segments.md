> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-analyticsreportinstances-_id_-relationships-segments](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-analyticsreportinstances-_id_-relationships-segments)

# Read segment ids for a report

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

Get Ids for a specific analytics report segment.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/analyticsReportInstances/{id}/relationships/segments
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `limit` — `integer`: **Maximum:** `200`

## Response Codes

- `200` OK — `AnalyticsReportInstanceSegmentsLinkagesResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Reading Reports, Instances, and Segments

- [Read Report Information](get-v1-analyticsreports-_id_.md): Get details for a specific analytics report.
- [Read a List of Instances of a Report](get-v1-analyticsreports-_id_-instances.md): Read list of all the granularity options for a specific type of analytics report.
- [Read Report Instance Information](get-v1-analyticsreportinstances-_id_.md): Get details for a specific instance of an analytics report.
- [Read the Segments for a Report](get-v1-analyticsreportinstances-_id_-segments.md): Get details for a specific analytics report segment.
- [Read the Details for a Report Segment](get-v1-analyticsreportsegments-_id_.md): Get details and download information for a specific analytics report segment.
- [Read a list of a report instance ids](get-v1-analyticsreports-_id_-relationships-instances.md): Read list of all the instance IDs for a specific type of analytics report.
