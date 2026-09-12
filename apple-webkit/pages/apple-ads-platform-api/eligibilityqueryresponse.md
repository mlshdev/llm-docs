> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/eligibilityqueryresponse](https://developer.apple.com/documentation/apple-ads-platform-api/eligibilityqueryresponse)

# EligibilityQueryResponse

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

The paginated response object for an app eligibility query.

## Declaration

```
object EligibilityQueryResponse
```

## Properties

- `result` — `[EligibilityResponse]`: Array of [EligibilityResponse](eligibilityresponse.md) records matching the supplied filter criteria. Read-only.
- `pagination` — `QueryPaginationResult`: Pagination metadata for the response, including `offset`, `pageSize`, and `totalCount`. See [QueryPaginationResult](querypaginationresult.md). Read-only.
- `error` — `Error`: Error information if the request encountered an error. See [Error](error.md). Read-only.

<a id="Discussion"></a>

## Discussion

The eligibility query endpoint returns `EligibilityQueryResponse` as the paginated response.

To iterate through large result sets, use the `totalCount` and `offset` fields on the embedded `QueryPaginationResult` object.

<a id="Example"></a>

### Example

```json
{
  "result": [
    {
      "adamId": 10738622087,
      "supplyPlacement": "APPSTORE_SEARCH_RESULTS",
      "supplySource": "APPSTORE",
      "minAge": 18,
      "state": "ELIGIBLE",
      "countryOrRegion": "US",
      "deviceClass": "IPHONE",
      "creationTime": "2026-02-05T08:30:00.000",
      "modificationTime": "2026-03-05T08:30:00.000"
    },
    {
      "adamId": 10738622087,
      "supplyPlacement": "APPSTORE_SEARCH_RESULTS",
      "supplySource": "APPSTORE",
      "minAge": 18,
      "state": "INELIGIBLE",
      "countryOrRegion": "BR",
      "deviceClass": "IPHONE",
      "creationTime": "2026-02-05T08:30:00.000",
      "modificationTime": "2026-03-05T08:30:00.000"
    }
  ],
  "pagination": {
    "pageSize": 20,
    "offset": 0,
    "totalCount": 2
  }
}
```

## See Also

- [EligibilityQueryRequest](eligibilityqueryrequest.md): The request body for querying app eligibility.
- [RejectionReasonResponse](rejectionreasonresponse.md): The response object for a rejection reason operation.
- [AppDetailsResponse](appdetailsresponse.md): The response object for a get app details operation.
- [AppDetails](appdetails.md): Application details and metadata.
- [EligibilityResponse](eligibilityresponse.md): The response object describing an app’s eligibility for a specific supply placement, supply source, country or region, and device class.
