> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-analyticsreportrequests-_id_-relationships-reports](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-analyticsreportrequests-_id_-relationships-reports)

# Read reports ids for a specific request

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

Get a list of reports Ids from a specific analytics report request.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/analyticsReportRequests/{id}/relationships/reports
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `limit` — `integer`: **Maximum:** `200`

## Response Codes

- `200` OK — `AnalyticsReportRequestReportsLinkagesResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Making, Reading, and Deleting Requests

- [Request Reports](post-v1-analyticsreportrequests.md): Request analytics reports for your apps.
- [Read Report Requests](get-v1-apps-_id_-analyticsreportrequests.md): Read analytics report requests for a specific app.
- [Read Report Request Information](get-v1-analyticsreportrequests-_id_.md): Get details for and the state of a specific analytics report request.
- [Read Reports for a Specific Request](get-v1-analyticsreportrequests-_id_-reports.md): Get a list of reports generated from a specific analytics report request.
- [Delete a Report Request](delete-v1-analyticsreportrequests-_id_.md): Remove a specific analytics report request.
