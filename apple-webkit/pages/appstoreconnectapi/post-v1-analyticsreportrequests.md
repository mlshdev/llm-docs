> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-analyticsreportrequests](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-analyticsreportrequests)

# Request Reports

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.4+

Request analytics reports for your apps.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/analyticsReportRequests
```

## HTTP Body

Content type: `application/json`

Type: `AnalyticsReportRequestCreateRequest`

## Response Codes

- `201` Created — `AnalyticsReportRequestResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## Mentioned In

- [Downloading Analytics Reports](downloading-analytics-reports.md)

<a id="Discussion"></a>

## Discussion

When making a request with this endpoint, the `accessType` `ONGOING` is most common and provides current data. This report request generates reports daily for each granularity: daily, weekly, and monthly. Use `ONE_TIME_SNAPSHOT` to get historical data.

<a id="Example-Request-and-Response"></a>

### Example Request and Response

**Request**

```
POST https://api.appstoreconnect.apple.com/v1/analyticsReportRequests 
{
  "data": {
    "type": "analyticsReportRequests",
    "attributes": {
          "accessType": "ONGOING"
    },
    "relationships": {
      "app": {
        "data": {
          "type": "apps",
          "id": "1476097583"
        }
      }
    }
  }
}
```

**Response**

```json
{
  "data" : {
    "type" : "analyticsReportRequests",
    "id" : "d48c69c5-9bcb-4592-abbd-08a9411b0231",
    "attributes" : {
      "accessType" : "ONGOING",
      "stoppedDueToInactivity" : false
    },
    "relationships" : {
      "reports" : {
        "links" : {
          "self" : "https://api.appstoreconnect.apple.com/v1/analyticsReportRequests/d48c69c5-9bcb-4592-abbd-08a9411b0231/relationships/reports",
          "related" : "https://api.appstoreconnect.apple.com/v1/analyticsReportRequests/d48c69c5-9bcb-4592-abbd-08a9411b0231/reports"
        }
      }
    },
    "links" : {
      "self" : "https://api.appstoreconnect.apple.com/v1/analyticsReportRequests/d48c69c5-9bcb-4592-abbd-08a9411b0231"
    }
  },
  "links" : {
    "self" : "https://api.appstoreconnect.apple.com/v1/analyticsReportRequests"
  }
}
```

## See Also

### Making, Reading, and Deleting Requests

- [Read Report Requests](get-v1-apps-_id_-analyticsreportrequests.md): Read analytics report requests for a specific app.
- [Read Report Request Information](get-v1-analyticsreportrequests-_id_.md): Get details for and the state of a specific analytics report request.
- [Read Reports for a Specific Request](get-v1-analyticsreportrequests-_id_-reports.md): Get a list of reports generated from a specific analytics report request.
- [Read reports ids for a specific request](get-v1-analyticsreportrequests-_id_-relationships-reports.md): Get a list of reports Ids from a specific analytics report request.
- [Delete a Report Request](delete-v1-analyticsreportrequests-_id_.md): Remove a specific analytics report request.
