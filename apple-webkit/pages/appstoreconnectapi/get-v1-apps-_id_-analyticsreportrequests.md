> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-apps-_id_-analyticsreportrequests](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-apps-_id_-analyticsreportrequests)

# Read Report Requests

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.4+

Read analytics report requests for a specific app.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/apps/{id}/analyticsReportRequests
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the app resource ID from the [List apps](get-v1-apps.md) response.

## Query Parameters

- `fields[analyticsReportRequests]` — `[string]`: Additional fields to include for each analytics report request resource returned by the response.
  **Allowed values:** `accessType`, `stoppedDueToInactivity`, `reports`
- `fields[analyticsReports]` — `[string]`: Additional fields to include for each analytics report resource returned by the response.
  **Allowed values:** `name`, `category`, `instances`
- `filter[accessType]` — `[string]`: Filter the returned analytics report requests by access type.
  **Allowed values:** `ONE_TIME_SNAPSHOT`, `ONGOING`
- `include` — `[string]`: The relationship data to include in the response.
  **Allowed values:** `reports`
- `limit` — `integer`: The maximum number of analytics report request resources to return.
  **Maximum:** `200`
- `limit[reports]` — `integer`: The maximum number of related reports resources to return.
  **Maximum:** `50`

## Response Codes

- `200` OK — `AnalyticsReportRequestsResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## Mentioned In

- [Downloading Analytics Reports](downloading-analytics-reports.md)

<a id="Discussion"></a>

## Discussion

<a id="Examples-Request-and-Response"></a>

### Examples Request and Response

**Request**

```
GET https://api.appstoreconnect.apple.com/v1/apps/1476097583/analyticsReportRequests
```

**Response**

```json
{
  "data": [
    {
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
    {
      "type": "analyticsReportRequests",
      "id": "A157dd7a-4fe2-479b-8d25-a8e4228c5b81",
      "attributes": {
        "accessType": "ONE_TIME_SNAPSHOT",
        "stoppedDueToInactivity": false
      },
      "relationships": {
        "reports": {
          "links": {
            "self": "https://api.appstoreconnect.apple.com/v1/analyticsReportRequests/A157dd7a-4fe2-479b-8d25-a8e4228c5b81/relationships/reports",
            "related": "https://api.appstoreconnect.apple.com/v1/analyticsReportRequests/A157dd7a-4fe2-479b-8d25-a8e4228c5b81/reports"
          }
        }
      },
      "links": {
        "self": "https://api.appstoreconnect.apple.com/v1/analyticsReportRequests/A157dd7a-4fe2-479b-8d25-a8e4228c5b81"
      }
    }
  ],
  "links": {
    "self": "https://api.appstoreconnect.apple.com/v1/apps/389801252/analyticsReportRequests"
  },
  "meta": {
    "paging": {
      "total": 2,
      "limit": 50
    }
  }
}
```

## See Also

### Making, Reading, and Deleting Requests

- [Request Reports](post-v1-analyticsreportrequests.md): Request analytics reports for your apps.
- [Read Report Request Information](get-v1-analyticsreportrequests-_id_.md): Get details for and the state of a specific analytics report request.
- [Read Reports for a Specific Request](get-v1-analyticsreportrequests-_id_-reports.md): Get a list of reports generated from a specific analytics report request.
- [Read reports ids for a specific request](get-v1-analyticsreportrequests-_id_-relationships-reports.md): Get a list of reports Ids from a specific analytics report request.
- [Delete a Report Request](delete-v1-analyticsreportrequests-_id_.md): Remove a specific analytics report request.
