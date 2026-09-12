> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/bulkitemresultkeyword](https://developer.apple.com/documentation/apple-ads-platform-api/bulkitemresultkeyword)

# BulkItemResultKeyword

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

A bulk operation result item that includes the affected Keyword entity.

## Declaration

```
object BulkItemResultKeyword
```

## Properties

- `correlationId` — `int64`: Client-supplied integer from the corresponding request item. Read-only.
- `operation` — `string`: The operation performed: `CREATE` or `UPDATE`. Read-only.
- `success` — `boolean`: Whether this item operation succeeded. Read-only.
- `result` — `Keyword`: The Keyword entity affected by this operation. Null when `success` is `false`. See [Keyword](keyword.md). Read-only.
- `error` — `Error`: Per-item error details when this item failed. Null on success. See [Error](error.md). Read-only.

<a id="Discussion"></a>

## Discussion

The `BulkItemResultKeyword` object extends [BulkItemResult](bulkitemresult.md) with a typed `result` field containing the `Keyword` object the operation created or updated. This type appears as array items in `KeywordCreateBulkResponse` and `KeywordUpdateBulkResponse`.

On success, `result` contains the full `Keyword` entity as it exists after the operation. On failure, `success` is `false` and `error` carries per-item details.

<a id="Example"></a>

### Example

```json
{
  "correlationId": 0,
  "operation": "CREATE",
  "success": true,
  "result": {
    "id": 888999000,
    "adAccountId": 123456789,
    "campaignId": 444555666,
    "adGroupId": 555666777,
    "text": "photo editor",
    "matchType": "EXACT",
    "bid": {
      "amount": "2.50",
      "currency": "USD"
    },
    "status": "ENABLED",
    "deleted": false,
    "creationTime": "2025-06-01T10:00:00.000",
    "modificationTime": "2025-06-01T10:00:00.000"
  }
}
```

## See Also

- [BaseBulkRequest](basebulkrequest.md): Base type for all bulk operation requests.
- [BulkOperationRequest](bulkoperationrequest.md): Container for a bulk operation request.
- [BulkItemResult](bulkitemresult.md): The base result envelope for a single item in a bulk operation response.
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
