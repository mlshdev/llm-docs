> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/apple_ads/get-a-single-impression-share-report](https://developer.apple.com/documentation/apple_ads/get-a-single-impression-share-report)

# Get a Single Impression Share Report

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Web Service Endpoint  
**Availability:** Search Ads 5.0+

Fetches a single Impression Share report containing metrics and metadata.

## URL

```http
GET https://api.searchads.apple.com/api/v5/custom-reports/{reportId}
```

## Path Parameters

- `reportId` — `int64` (required): Use a `reportId` as a resource in the URI.

## Response Codes

- `200` OK — `CustomReportResponseBody`: If the call succeeds, the API returns the [CustomReportResponseBody](customreportresponsebody.md) object in the response payload with an HTTP status code of `200(OK)`. If unsuccessful, the HTTP status code indicates the error with details in the error message.
- `400` Bad Request — `ApiErrorResponse`: An invalid query or missing required parameters.
- `401` Unauthorized — `ApiErrorResponse`: An unauthenticated call fails to get the requested response.
- `403` Forbidden — `ApiErrorResponse`: Insufficient rights to the resource.
- `404` Not Found — `ApiErrorResponse`: The API can’t locate the resource.
- `429` — `ApiErrorResponse`: The API calls exceed rate-limit thresholds. See the Rate Limits subsection of [Calling the Apple Ads API](calling-the-apple-search-ads-api.md).
- `500` Internal Server Error — `ApiErrorResponse`: The Apple Ads server is temporarily down or unreachable. The request may be valid, but you need to retry it later.

<a id="Discussion"></a>

## Discussion

<a id="Payload-example-A-single-impression-share-report"></a>

### Payload example: A single impression share report

**Request**

```
HTTP GET https://api.searchads.apple.com/api/v5/custom-reports/{reportId}
```

**Response**

```json
{
  "data": {
    "id": 7615231,
    "name": "impression_share_API_report_example_2",
    "startTime": "2024-06-01",
    "endTime": "2024-06-30",
    "granularity": "DAILY",
    "downloadUri": "https://ads-...us-west-2.amazonaws.com/ext-sov-reports/",
    "dimensions": [
      "appName",
      "adamId",
      "countryOrRegion",
      "searchTerm"
    ],
    "metrics": [
      "lowImpressionShare",
      "highImpressionShare",
      "rank",
      "searchPopularity"
    ],
    "selector": {
      "conditions": [
        {
          "field": "adamId",
          "operator": "IN",
          "values": [
            "1252497129",
            "282614216"
          ]
        },
        {
          "field": "countryOrRegion",
          "operator": "IN",
          "values": [
            "US",
            "AU"
          ]
        }
      ]
    },
    "state": "COMPLETED",
    "creationTime": "2024-02-07T09:14:46.235",
    "modificationTime": "2024-02-07T09:14:53.173",
    "dateRange": "LAST_2_WEEKS"
  },
  "pagination": null,
  "error": null
}
```

## See Also

### Impression Share Report Endpoints

- [Impression Share Report](impression-share-report.md): Obtain a report ID.
- [Get All Impression Share Reports](get-all-impression-share-reports.md): Fetches all Impression Share reports containing metrics and metadata.
