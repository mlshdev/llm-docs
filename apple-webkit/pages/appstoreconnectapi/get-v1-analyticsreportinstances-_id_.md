> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-analyticsreportinstances-_id_](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-analyticsreportinstances-_id_)

# Read Report Instance Information

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.4+

Get details for a specific instance of an analytics report.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/analyticsReportInstances/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the analytics report instance resource ID from the [Read a List of Instances of a Report](get-v1-analyticsreports-_id_-instances.md) response.

## Query Parameters

- `fields[analyticsReportInstances]` — `[string]`: Additional fields to include for each analytics report instances resource returned by the response.
  **Allowed values:** `granularity`, `processingDate`, `segments`

## Response Codes

- `200` OK — `AnalyticsReportInstanceResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

<a id="Discussion"></a>

## Discussion

> **Note**

>  If you don’t retrieve data for a long time, a report request changes to `stoppedDueToInactivity`. You need to make a new request to resume getting reports.

<a id="Examples-Request-and-Response"></a>

### Examples Request and Response

**Request**

```
https://api.appstoreconnect.apple.com/v1/analyticsReportInstances/d4a141c8-7647-4bdf-b9ae-04cab705d641
```

**Response**

```json
{
  "data": {
    "type": "analyticsReportInstances",
    "id": "d4a141c8-7647-4bdf-b9ae-04cab705d641",
    "attributes": {
      "granularity": "DAILY",
      "processingDate": "2024-01-25"
    },
    "relationships": {
      "segments": {
        "links": {
          "self": "https://api.appstoreconnect.apple.com/v1/analyticsReportInstances/d4a141c8-7647-4bdf-b9ae-04cab705d641/relationships/segments",
          "related": "https://api.appstoreconnect.apple.com/v1/analyticsReportInstances/d4a141c8-7647-4bdf-b9ae-04cab705d641/segments"
        }
      }
    },
    "links": {
      "self": "https://api.appstoreconnect.apple.com/v1/analyticsReportInstances/d4a141c8-7647-4bdf-b9ae-04cab705d641"
    }
  },
  "links": {
    "self": "https://api.appstoreconnect.apple.com/v1/analyticsReportInstances/d4a141c8-7647-4bdf-b9ae-04cab705d641"
  }
}

```

## See Also

### Reading Reports, Instances, and Segments

- [Read Report Information](get-v1-analyticsreports-_id_.md): Get details for a specific analytics report.
- [Read a List of Instances of a Report](get-v1-analyticsreports-_id_-instances.md): Read list of all the granularity options for a specific type of analytics report.
- [Read the Segments for a Report](get-v1-analyticsreportinstances-_id_-segments.md): Get details for a specific analytics report segment.
- [Read segment ids for a report](get-v1-analyticsreportinstances-_id_-relationships-segments.md): Get Ids for a specific analytics report segment.
- [Read the Details for a Report Segment](get-v1-analyticsreportsegments-_id_.md): Get details and download information for a specific analytics report segment.
- [Read a list of a report instance ids](get-v1-analyticsreports-_id_-relationships-instances.md): Read list of all the instance IDs for a specific type of analytics report.
