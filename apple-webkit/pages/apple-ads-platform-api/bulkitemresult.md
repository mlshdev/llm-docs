> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/bulkitemresult](https://developer.apple.com/documentation/apple-ads-platform-api/bulkitemresult)

# BulkItemResult

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

The base result envelope for a single item in a bulk operation response.

## Declaration

```
object BulkItemResult
```

## Properties

- `correlationId` — `int64`: The client-supplied integer from the corresponding request item. Use this to map each response entry back to its input. Read-only.
- `operation` — `string`: The operation performed on this item: `CREATE`, `UPDATE`, or `DELETE`. Read-only.
- `success` — `boolean`: Whether this individual item operation succeeded. Read-only.
- `error` — `Error`: Per-item error details when this item failed. Null on success. See [Error](error.md). Read-only.
- `result` — `Response.Result`: The response payload. Type depends on the specific response subtype. See [Response.Result](response/result-data.dictionary.md). Absent when the request fails.

<a id="Discussion"></a>

## Discussion

The `BulkItemResult` object is the shared result wrapper that the API returns for each item in a bulk create, update, or delete response. It extends the standard `Response` envelope with per-item operation metadata. All keyword and negative keyword bulk response types extend this schema by adding a typed `result` field.

When `allowPartialSuccess` is `true` in the request, inspect `success` on each entry individually. A `false` value indicates that the specific item failed.

<a id="Example"></a>

### Example

```json
{
  "correlationId": 2,
  "operation": "UPDATE",
  "success": false,
  "error": {
    "code": "INVALID_FIELD",
    "message": "bid.amount must be greater than 0",
    "details": []
  }
}
```

## See Also

- [BaseBulkRequest](basebulkrequest.md): Base type for all bulk operation requests.
- [BulkOperationRequest](bulkoperationrequest.md): Container for a bulk operation request.
- [BulkItemResultKeyword](bulkitemresultkeyword.md): A bulk operation result item that includes the affected Keyword entity.
- [BulkItemResultNegativeKeyword](bulkitemresultnegativekeyword.md): A bulk operation result item that includes the affected NegativeKeyword entity.
- [BulkResponse](bulkresponse.md): The generic response envelope returned by all bulk operations.
- [KeywordCreateBulkRequest](keywordcreatebulkrequest.md): A bulk request to create multiple Keyword objects.
- [KeywordCreateBulkResponse](keywordcreatebulkresponse.md): The response from a bulk Keyword creation request, containing results for each item.
- [KeywordUpdateBulkRequest](keywordupdatebulkrequest.md): A bulk request to update multiple Keyword objects.
- [KeywordUpdateBulkResponse](keywordupdatebulkresponse.md): The response from a bulk Keyword update request, containing results for each item.
- [NegativeKeywordCreateBulkRequest](negativekeywordcreatebulkrequest.md): A bulk request to create multiple negative keywords.
- [NegativeKeywordCreateBulkResponse](negativekeywordcreatebulkresponse.md): The response from a bulk negative keyword creation request, containing results for each item.
- [NegativeKeywordUpdateBulkRequest](negativekeywordupdatebulkrequest.md): A bulk request to update multiple negative keywords.
- [NegativeKeywordUpdateBulkResponse](negativekeywordupdatebulkresponse.md): The response from a bulk negative keyword update request, containing results for each item.
- [BulkKeywordCreate](bulkkeywordcreate.md): The `data` payload for a single keyword-create item within a bulk create request.
- [BulkKeywordUpdate](bulkkeywordupdate.md): The payload for a single keyword-update.
