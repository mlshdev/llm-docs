> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/keywordupdatebulkresponse](https://developer.apple.com/documentation/apple-ads-platform-api/keywordupdatebulkresponse)

# KeywordUpdateBulkResponse

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

The response from a bulk Keyword update request, containing results for each item.

## Declaration

```
object KeywordUpdateBulkResponse
```

## Properties

- `result` — `[BulkItemResultKeyword]`: Array of per-item keyword update results, one entry per item in the original request. Each entry includes `correlationId`, `operation`, `success`, and on success the full updated `Keyword` entity. See [BulkItemResultKeyword](bulkitemresultkeyword.md). Read-only.
- `error` — `Error`: See [Error](error.md). Read-only.

<a id="Discussion"></a>

## Discussion

The bulk keyword update endpoint returns `KeywordUpdateBulkResponse` as its response envelope. The response populates `error` only when the system rejects the overall request before processing any items.

<a id="Example"></a>

### Example

```json
{
  "result": [
    {
      "correlationId": 0,
      "operation": "UPDATE",
      "success": true,
      "result": {
        "id": 888999000,
        "adAccountId": 123456789,
        "campaignId": 444555666,
        "adGroupId": 555666777,
        "text": "photo editor",
        "matchType": "EXACT",
        "bid": {
          "amount": "3.00",
          "currency": "USD"
        },
        "status": "ENABLED",
        "displayStatus": "RUNNING",
        "deleted": false,
        "creationTime": "2025-06-01T10:00:00.000",
        "modificationTime": "2025-06-15T09:00:00.000"
      }
    },
    {
      "correlationId": 1,
      "operation": "UPDATE",
      "success": false,
      "result": null,
      "error": {
        "code": "INVALID_BID",
        "message": "Bid amount is below the minimum allowed value.",
        "details": []
      }
    }
  ]
}
```

## See Also

- [BaseBulkRequest](basebulkrequest.md): Base type for all bulk operation requests.
- [BulkOperationRequest](bulkoperationrequest.md): Container for a bulk operation request.
- [BulkItemResult](bulkitemresult.md): The base result envelope for a single item in a bulk operation response.
- [BulkItemResultKeyword](bulkitemresultkeyword.md): A bulk operation result item that includes the affected Keyword entity.
- [BulkItemResultNegativeKeyword](bulkitemresultnegativekeyword.md): A bulk operation result item that includes the affected NegativeKeyword entity.
- [BulkResponse](bulkresponse.md): The generic response envelope returned by all bulk operations.
- [KeywordCreateBulkRequest](keywordcreatebulkrequest.md): A bulk request to create multiple Keyword objects.
- [KeywordCreateBulkResponse](keywordcreatebulkresponse.md): The response from a bulk Keyword creation request, containing results for each item.
- [KeywordUpdateBulkRequest](keywordupdatebulkrequest.md): A bulk request to update multiple Keyword objects.
- [NegativeKeywordCreateBulkRequest](negativekeywordcreatebulkrequest.md): A bulk request to create multiple negative keywords.
- [NegativeKeywordCreateBulkResponse](negativekeywordcreatebulkresponse.md): The response from a bulk negative keyword creation request, containing results for each item.
- [NegativeKeywordUpdateBulkRequest](negativekeywordupdatebulkrequest.md): A bulk request to update multiple negative keywords.
- [NegativeKeywordUpdateBulkResponse](negativekeywordupdatebulkresponse.md): The response from a bulk negative keyword update request, containing results for each item.
- [BulkKeywordCreate](bulkkeywordcreate.md): The `data` payload for a single keyword-create item within a bulk create request.
- [BulkKeywordUpdate](bulkkeywordupdate.md): The payload for a single keyword-update.
