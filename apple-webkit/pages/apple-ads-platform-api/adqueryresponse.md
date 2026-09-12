> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/adqueryresponse](https://developer.apple.com/documentation/apple-ads-platform-api/adqueryresponse)

# AdQueryResponse

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

The response object for an Ad query, containing matched results and pagination metadata.

## Declaration

```
object AdQueryResponse
```

## Properties

- `result` — `[Ad]`: Array of [Ad](ad.md). Read-only.
- `pagination` — `QueryPaginationResult`: Pagination metadata for the response, including `offset`, `pageSize`, and `totalCount`. See [QueryPaginationResult](querypaginationresult.md). Read-only.
- `error` — `Error`: Error information if the request encountered an error. See [Error](error.md). Read-only.

<a id="Discussion"></a>

## Discussion

The ads query endpoint returns `AdQueryResponse`, which contains the filtered, sorted, and paginated set of `Ad` objects matching the request.

To scope results by `adGroupId`, `campaignId`, `status`, or other filterable fields, use the `QueryRequest` body with `filters`.

<a id="Example"></a>

### Example

```json
{
  "result": [
    {
      "id": 777888999,
      "adAccountId": 123456789,
      "campaignId": 444555666,
      "adGroupId": 555666777,
      "creativeId": 666777888,
      "name": "AwayFinder - Default Product Page",
      "status": "ENABLED",
      "systemStatus": "RUNNING",
      "systemStatusReasons": [],
      "systemStatusLimitingReasons": [],
      "deleted": false,
      "creationTime": "2025-09-01T08:00:00.000",
      "modificationTime": "2025-09-01T08:00:00.000"
    }
  ],
  "pagination": {
    "offset": 0,
    "pageSize": 20,
    "totalCount": 1
  }
}
```

## See Also

- [Ad](ad.md): Ad entity that links an ad creative to an ad group for serving.
- [AdCreate](adcreate.md): The request body for creating a new Ad object.
- [AdUpdate](adupdate.md): The request body for updating an existing Ad object.
- [AdResponse](adresponse.md): The response object for an Ad operation.
