> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-analyticsreportrequests-_id_](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-analyticsreportrequests-_id_)

# Read Report Request Information

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.4+

Get details for and the state of a specific analytics report request.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/analyticsReportRequests/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the analytics report request resource ID from the [Read Report Requests](get-v1-apps-_id_-analyticsreportrequests.md) response.

## Query Parameters

- `fields[analyticsReportRequests]` — `[string]`: Additional fields to include for each analytics report requests resource returned by the response.
  **Allowed values:** `accessType`, `stoppedDueToInactivity`, `reports`
- `fields[analyticsReports]` — `[string]`: Additional fields to include for each analytics reports resource returned by the response.
  **Allowed values:** `name`, `category`, `instances`
- `include` — `[string]`: The relationship data to include in the response.
  **Allowed values:** `reports`
- `limit[reports]` — `integer`: The maximum number of related reports resources to return.
  **Maximum:** `50`

## Response Codes

- `200` OK — `AnalyticsReportRequestResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## Mentioned In

- [Downloading Analytics Reports](downloading-analytics-reports.md)

<a id="Discussion"></a>

## Discussion

> **Note**

>  If you don’t retrieve data for a long time, a report request changes to `stoppedDueToInactivity`. You need to make a new request to resume getting reports.

<a id="Examples-Request-and-Response"></a>

### Examples Request and Response

**Request**

```
GET https://api.appstoreconnect.apple.com/v1/analyticsReportRequests/d48c69c5-9bcb-4592-abbd-08a9411b0231
```

**Response**

```json
{
  "data": {
    "type": "analyticsReportRequests",
    "id": "d48c69c5-9bcb-4592-abbd-08a9411b0231",
    "attributes": {
      "accessType": "ONGOING",
      "stoppedDueToInactivity": false
    },
    "relationships": {
      "reports": {
        "links": {
          "self": "https://api.appstoreconnect.apple.com/v1/analyticsReportRequests/d48c69c5-9bcb-4592-abbd-08a9411b0231/relationships/reports",
          "related": "https://api.appstoreconnect.apple.com/v1/analyticsReportRequests/d48c69c5-9bcb-4592-abbd-08a9411b0231/reports"
        }
      }
    },
    "links": {
      "self": "https://api.appstoreconnect.apple.com/v1/analyticsReportRequests/d48c69c5-9bcb-4592-abbd-08a9411b0231"
    }
  },
  "links": {
    "self": "https://api.appstoreconnect.apple.com/v1/analyticsReportRequests/d48c69c5-9bcb-4592-abbd-08a9411b0231"
  }
}
```

## See Also

### Making, Reading, and Deleting Requests

- [Request Reports](post-v1-analyticsreportrequests.md): Request analytics reports for your apps.
- [Read Report Requests](get-v1-apps-_id_-analyticsreportrequests.md): Read analytics report requests for a specific app.
- [Read Reports for a Specific Request](get-v1-analyticsreportrequests-_id_-reports.md): Get a list of reports generated from a specific analytics report request.
- [Read reports ids for a specific request](get-v1-analyticsreportrequests-_id_-relationships-reports.md): Get a list of reports Ids from a specific analytics report request.
- [Delete a Report Request](delete-v1-analyticsreportrequests-_id_.md): Remove a specific analytics report request.
