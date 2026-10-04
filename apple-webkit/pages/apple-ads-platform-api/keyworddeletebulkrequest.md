> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f22abf4916e5; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/apple-ads-platform-api/keyworddeletebulkrequest

# KeywordDeleteBulkRequest

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+ · apple-ads-platform-api 1.0+

A bulk request to delete multiple Keyword objects by their identifiers.

## Declaration

```
object KeywordDeleteBulkRequest
```

## Properties

- `allowPartialSuccess` — `boolean`: If `true`, allows some operations in the batch to succeed while others fail.
- `items` — `[KeywordDeleteBulkRequestItem]`: Array of bulk item objects specifying which keywords to delete. Each item’s `data` field contains the identifier of the keyword to delete.

<a id="Discussion"></a>

## Discussion

`KeywordDeleteBulkRequest` allows deleting multiple keywords in a single API call.

<a id="Example"></a>

### Example

```json
{
  "allowPartialSuccess": true,
  "items": [
    {
      "correlationId": 0,
      "data": {
        "id": 888999000
      }
    },
    {
      "correlationId": 1,
      "data": {
        "id": 888999001
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
- [KeywordDeleteBulkResponse](keyworddeletebulkresponse.md): The response from a bulk Keyword deletion request.
- [KeywordUpdateBulkRequest](keywordupdatebulkrequest.md): A bulk request to update multiple Keyword objects.
- [KeywordUpdateBulkResponse](keywordupdatebulkresponse.md): The response from a bulk Keyword update request, containing results for each item.
- [NegativeKeywordCreateBulkRequest](negativekeywordcreatebulkrequest.md): A bulk request to create multiple negative keywords.
- [NegativeKeywordCreateBulkResponse](negativekeywordcreatebulkresponse.md): The response from a bulk negative keyword creation request, containing results for each item.
- [NegativeKeywordDeleteBulkRequest](negativekeyworddeletebulkrequest.md): A bulk request to delete multiple negative keywords by their identifiers.
- [NegativeKeywordDeleteBulkResponse](negativekeyworddeletebulkresponse.md): The response from a bulk negative keyword deletion request.
