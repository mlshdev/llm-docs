> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f22abf4916e5; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/apple-ads-platform-api/post-keywords-bulk-delete

# Bulk Delete Keywords

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Web Service Endpoint  
**Availability:** Apple Ads Platform API 1.0+ · apple-ads-platform-api 1.0+

Soft-deletes multiple keywords in a single request.

## URL

```http
POST https://api.ads.apple.com/v1/keywords/bulk-delete
```

## Header Parameters

- `X-Ap-Context` — `string` (required):

## HTTP Body

Content type: `application/json`

Type: `KeywordDeleteBulkRequest`

## Response Codes

- `200` OK — `KeywordDeleteBulkResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` Too Many Requests — `ErrorResponse`:
- `500` Internal Server Error — `ErrorResponse`:

<a id="Discussion"></a>

## Discussion

This endpoint soft-deletes multiple keywords in a single request. Each item in the `items` array specifies the `id` of a keyword to delete. The system marks deleted keywords `deleted: true`, and they stop serving. The response doesn’t include the deleted keyword, just each item’s success status.

To stop a keyword from serving temporarily, set `status: PAUSED` with the bulk update endpoint instead.

<a id="Payload-Examples"></a>

## Payload Examples

**Bulk Delete**

<a id="Request"></a>

### Request

Soft-delete two keywords.

```json
{
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

<a id="Response"></a>

### Response

```json
{
 "result": [
   {
     "correlationId": 0,
     "operation": "DELETE",
     "success": true
   },
   {
     "correlationId": 1,
     "operation": "DELETE",
     "success": true
   }
 ]
}
```

## See Also

### Keywords

- [Bulk Create Keywords](post-keywords-bulk-create.md): Creates multiple keywords in a single request.
- [Bulk Update Keywords](post-keywords-bulk-update.md): Updates multiple keywords in a single request.
