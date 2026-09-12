> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/adresponse](https://developer.apple.com/documentation/apple-ads-platform-api/adresponse)

# AdResponse

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

The response object for an Ad operation.

## Declaration

```
object AdResponse
```

## Properties

- `result` — `Ad`: The full `Ad` object, populated on success. Absent on failure. See [Ad](ad.md). Read-only.
- `error` — `Error`: Describes the problem when the operation fails. Absent on success. See [Error](error.md). Read-only.

<a id="Discussion"></a>

## Discussion

Ad create, read, update, and delete operations return `AdResponse`, the single-item response envelope.

<a id="Example"></a>

### Example

```json
{
  "result": {
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
    "displayStatus": "RUNNING",
    "deleted": false,
    "creationTime": "2025-09-01T08:00:00.000",
    "modificationTime": "2025-09-01T08:00:00.000"
  }
}
```

## See Also

- [Ad](ad.md): Ad entity that links an ad creative to an ad group for serving.
- [AdCreate](adcreate.md): The request body for creating a new Ad object.
- [AdUpdate](adupdate.md): The request body for updating an existing Ad object.
- [AdQueryResponse](adqueryresponse.md): The response object for an Ad query, containing matched results and pagination metadata.
