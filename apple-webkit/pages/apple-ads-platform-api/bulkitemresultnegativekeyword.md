> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f22abf4916e5; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/apple-ads-platform-api/bulkitemresultnegativekeyword

# BulkItemResultNegativeKeyword

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

A bulk operation result item that includes the affected NegativeKeyword entity.

## Declaration

```
object BulkItemResultNegativeKeyword
```

## Properties

- `correlationId` — `int64`: Client-supplied integer from the corresponding request item. Read-only.
- `operation` — `string`: The operation performed: `CREATE` or `UPDATE`. Read-only.
- `success` — `boolean`: Whether this item operation succeeded. Read-only.
- `result` — `NegativeKeyword`: The NegativeKeyword entity affected by this operation. Null when `success` is `false`. See [NegativeKeyword](negativekeyword.md). Read-only.
- `error` — `Error`: Per-item error details when this item failed. Null on success. See [Error](error.md). Read-only.

<a id="Discussion"></a>

## Discussion

The `BulkItemResultNegativeKeyword` object extends [BulkItemResult](bulkitemresult.md) with a typed `result` field containing the `NegativeKeyword` object the operation created or updated. Used by `NegativeKeywordCreateBulkResponse` and `NegativeKeywordUpdateBulkResponse`; bulk delete doesn’t return the entity (see [NegativeKeywordDeleteBulkResponse](negativekeyworddeletebulkresponse.md)).

On success, `result` contains the full `NegativeKeyword` entity as it exists after the operation. On failure, `success` is `false` and `error` carries per-item details.

<a id="Example"></a>

### Example

```json
{
  "correlationId": 1,
  "operation": "CREATE",
  "success": true,
  "result": {
    "id": 555666777,
    "adAccountId": 123456789,
    "campaignId": 987654321,
    "adGroupId": null,
    "text": "AwayFinder competitor app",
    "matchType": "EXACT",
    "status": "ENABLED",
    "creationTime": "2025-01-10T08:00:00.000",
    "modificationTime": "2025-01-10T08:00:00.000",
    "deleted": false
  }
}
```

## See Also

- [BaseBulkRequest](basebulkrequest.md): Base type for all bulk operation requests.
- [BulkOperationRequest](bulkoperationrequest.md): Container for a bulk operation request.
- [BulkItemResult](bulkitemresult.md): The base result envelope for a single item in a bulk operation response.
- [BulkItemResultKeyword](bulkitemresultkeyword.md): A bulk operation result item that includes the affected Keyword entity.
- [BulkResponse](bulkresponse.md): The generic response envelope returned by all bulk operations.
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
