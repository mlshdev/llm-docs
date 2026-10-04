> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f22abf4916e5; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/apple-ads-platform-api/bulk-data-objects

# Bulk Data Objects

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** API Collection  
**Availability:** Apple Ads Platform API 1.0+

Use these objects to build bulk keyword and negative keyword requests and read their responses.

## Topics

- [BaseBulkRequest](basebulkrequest.md): Base type for all bulk operation requests.
- [BulkOperationRequest](bulkoperationrequest.md): Container for a bulk operation request.
- [BulkItemResult](bulkitemresult.md): The base result envelope for a single item in a bulk operation response.
- [BulkItemResultKeyword](bulkitemresultkeyword.md): A bulk operation result item that includes the affected Keyword entity.
- [BulkItemResultNegativeKeyword](bulkitemresultnegativekeyword.md): A bulk operation result item that includes the affected NegativeKeyword entity.
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
- [NegativeKeywordUpdateBulkRequest](negativekeywordupdatebulkrequest.md): A bulk request to update multiple negative keywords.
- [NegativeKeywordUpdateBulkResponse](negativekeywordupdatebulkresponse.md): The response from a bulk negative keyword update request, containing results for each item.
- [BulkEntityDeleteIdLong](bulkentitydeleteidlong.md): The `data` payload for a bulk delete item, containing the identifier of the entity to remove.
- [BulkKeywordCreate](bulkkeywordcreate.md): The `data` payload for a single keyword-create item within a bulk create request.
- [BulkKeywordUpdate](bulkkeywordupdate.md): The payload for a single keyword-update.
- [BulkNegativeKeywordCreate](bulknegativekeywordcreate.md): The `data` payload for a single negative-keyword-create item within a bulk create request.
- [BulkNegativeKeywordUpdate](bulknegativekeywordupdate.md): The `data` payload for a single negative-keyword-update item within a bulk update request, identifying the record by `id`.
- [BulkOperationRequestItem](bulkoperationrequestitem.md): Base item wrapper for bulk operation requests, carrying only the client-supplied `correlationId`.
- [KeywordCreateBulkRequestItem](keywordcreatebulkrequestitem.md): A single item in a keyword bulk-create request.
- [KeywordDeleteBulkRequestItem](keyworddeletebulkrequestitem.md): A single item in a keyword bulk-delete request.
- [KeywordUpdateBulkRequestItem](keywordupdatebulkrequestitem.md): A single item in a keyword bulk-update request.
- [NegativeKeywordCreateBulkRequestItem](negativekeywordcreatebulkrequestitem.md): A single item in a negative-keyword bulk-create request.
- [NegativeKeywordDeleteBulkRequestItem](negativekeyworddeletebulkrequestitem.md): A single item in a negative-keyword bulk-delete request.
- [NegativeKeywordUpdateBulkRequestItem](negativekeywordupdatebulkrequestitem.md): A single item in a negative-keyword bulk-update request.

## See Also

### Bulk Operations

- [Bulk Operations Endpoints](bulk-operations-endpoints.md): Create, update, and delete keywords and negative keywords in bulk through these endpoints.
