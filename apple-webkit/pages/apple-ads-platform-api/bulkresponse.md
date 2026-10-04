> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f22abf4916e5; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/apple-ads-platform-api/bulkresponse

# BulkResponse

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

The generic response envelope returned by all bulk operations.

## Declaration

```
object BulkResponse
```

## Properties

- `result` — `Response.Result`: `BulkResponse` inherits `result` as a generic nullable object from the `Response` base schema. The array-of-items typing (for example, array of `BulkItemResultKeyword`) is defined by typed response subclasses such as `KeywordCreateBulkResponse`, not by `BulkResponse` itself. Each entry contains the operation outcome and, on failure, per-item error details. Read-only.
- `error` — `Error`: Top-level error if the entire bulk request was rejected before processing. `null` when the request was accepted (even with per-item failures). See [Error](error.md). Read-only.

<a id="Discussion"></a>

## Discussion

The `BulkResponse` object is the standard response wrapper for bulk create, update, and delete operations. The `result` array is parallel to the `items` array in the corresponding `BulkOperationRequest`: element at index `n` in `result` corresponds to element at index `n` in the request. To correlate results back to their originating request item, use the `correlationId` field on each result entry.

When `allowPartialSuccess` is `true` in the request, individual item failures appear in the `result` array rather than the top-level `error`.

<a id="Example"></a>

### Example

```json
{
  "result": [
    {
      "correlationId": 0,
      "operation": "CREATE",
      "success": true
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
- [KeywordCreateBulkRequest](keywordcreatebulkrequest.md): A bulk request to create multiple Keyword objects.
- [KeywordCreateBulkResponse](keywordcreatebulkresponse.md): The response from a bulk Keyword creation request, containing results for each item.
- [KeywordDeleteBulkRequest](keyworddeletebulkrequest.md): A bulk request to delete multiple Keyword objects by their identifiers.
- [KeywordDeleteBulkResponse](keyworddeletebulkresponse.md): The response from a bulk Keyword deletion request.
- [KeywordUpdateBulkRequest](keywordupdatebulkrequest.md): A bulk request to update multiple Keyword objects.
- [KeywordUpdateBulkResponse](keywordupdatebulkresponse.md): The response from a bulk Keyword update request, containing results for each item.
- [NegativeKeywordCreateBulkRequest](negativekeywordcreatebulkrequest.md): A bulk request to create multiple negative keywords.
- [NegativeKeywordCreateBulkResponse](negativekeywordcreatebulkresponse.md): The response from a bulk negative keyword creation request, containing results for each item.
- [NegativeKeywordDeleteBulkRequest](negativekeyworddeletebulkrequest.md): A bulk request to delete multiple negative keywords by their identifiers.
- [NegativeKeywordDeleteBulkResponse](negativekeyworddeletebulkresponse.md): The response from a bulk negative keyword deletion request.
