> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/negativekeywordcreatebulkresponse](https://developer.apple.com/documentation/apple-ads-platform-api/negativekeywordcreatebulkresponse)

# NegativeKeywordCreateBulkResponse

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

The response from a bulk negative keyword creation request, containing results for each item.

## Declaration

```
object NegativeKeywordCreateBulkResponse
```

## Properties

- `result` — `[BulkItemResultNegativeKeyword]`: Array of per-item negative keyword creation results, one entry per item in the original request. Each entry includes `correlationId`, `operation`, `success`, and on success the created `NegativeKeyword` entity. See [BulkItemResultNegativeKeyword](bulkitemresultnegativekeyword.md). Read-only.
- `error` — `Error`: See [Error](error.md). Read-only.

<a id="Discussion"></a>

## Discussion

The bulk negative keyword creation endpoint returns `NegativeKeywordCreateBulkResponse` as its response envelope. When `allowPartialSuccess` is `true` in the request, inspect each item’s `success` field to determine which negative keywords were created. The response populates `error` only when the system rejects the overall request before processing any items.

<a id="Example"></a>

### Example

```json
{
  "result": [
    {
      "correlationId": 1,
      "operation": "CREATE",
      "success": true,
      "result": {
        "adAccountId": 123456789,
        "campaignId": 444555666,
        "adGroupId": null,
        "text": "free awayfinder",
        "matchType": "EXACT",
        "status": "ENABLED",
        "id": 987654321,
        "creationTime": "2025-01-10T08:00:00.000",
        "modificationTime": "2025-01-10T08:00:00.000",
        "deleted": false
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
- [KeywordUpdateBulkResponse](keywordupdatebulkresponse.md): The response from a bulk Keyword update request, containing results for each item.
- [NegativeKeywordCreateBulkRequest](negativekeywordcreatebulkrequest.md): A bulk request to create multiple negative keywords.
- [NegativeKeywordUpdateBulkRequest](negativekeywordupdatebulkrequest.md): A bulk request to update multiple negative keywords.
- [NegativeKeywordUpdateBulkResponse](negativekeywordupdatebulkresponse.md): The response from a bulk negative keyword update request, containing results for each item.
- [BulkKeywordCreate](bulkkeywordcreate.md): The `data` payload for a single keyword-create item within a bulk create request.
- [BulkKeywordUpdate](bulkkeywordupdate.md): The payload for a single keyword-update.
