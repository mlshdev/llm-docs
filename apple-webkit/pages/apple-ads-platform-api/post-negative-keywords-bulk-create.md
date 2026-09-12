> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/post-negative-keywords-bulk-create](https://developer.apple.com/documentation/apple-ads-platform-api/post-negative-keywords-bulk-create)

# Bulk Create Negative Keywords

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Web Service Endpoint  
**Availability:** Apple Ads Platform API 1.0+

Create multiple negative keywords in a single request.

## URL

```http
POST https://api.ads.apple.com/v1/negative-keywords/bulk-create
```

## Header Parameters

- `X-Ap-Context` — `string` (required):

## HTTP Body

Content type: `application/json`

Type: `NegativeKeywordCreateBulkRequest`

## Response Codes

- `200` OK — `NegativeKeywordCreateBulkResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` Too Many Requests — `ErrorResponse`:
- `500` Internal Server Error — `ErrorResponse`:

<a id="Discussion"></a>

## Discussion

This endpoint creates multiple negative keywords in a single API call. The request body contains an `items` array where each item wraps a `BulkNegativeKeywordCreate` object with a `correlationId`. You can mix campaign-level and ad-group-level negatives in the same request. The API processes each item independently.

When `allowPartialSuccess: true` is set in the request, this endpoint uses partial success semantics: if some items in the request fail validation (for example, a duplicate text and matchType combination), the API still creates the successful items. When omitted or `false`, any single item failure rejects the entire batch. The response includes a per-item result array with each item’s `correlationId`, success status, the created object, and any error details for failures.

<a id="Payload-Examples"></a>

## Payload Examples

**Bulk Create**

<a id="Request"></a>

### Request

Create two negative keywords in one request: one campaign-level and one ad-group-level. Each item in `items` maps to a result in the response by `correlationId`.

```json
POST /v1/negative-keywords/bulk-create

{
 "items": [
   {
     "correlationId": 0,
     "data": {
       "campaignId": 444555666,
       "text": "free app",
       "matchType": "BROAD",
       "status": "ENABLED"
     }
   },
   {
     "correlationId": 1,
     "data": {
       "campaignId": 444555666,
       "adGroupId": 555666777,
       "text": "cheap downloads",
       "matchType": "EXACT",
       "status": "ENABLED"
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
     "operation": "CREATE",
     "success": true,
     "result": {
       "id": 777888999,
       "adAccountId": 123456789,
       "campaignId": 444555666,
       "text": "free app",
       "matchType": "BROAD",
       "status": "ENABLED",
       "deleted": false,
       "creationTime": "2025-01-10T08:00:00.000",
       "modificationTime": "2025-01-10T08:00:00.000"
     }
   },
   {
     "correlationId": 1,
     "operation": "CREATE",
     "success": true,
     "result": {
       "id": 777888998,
       "adAccountId": 123456789,
       "campaignId": 444555666,
       "adGroupId": 555666777,
       "text": "cheap downloads",
       "matchType": "EXACT",
       "status": "ENABLED",
       "deleted": false,
       "creationTime": "2025-01-10T08:00:00.000",
       "modificationTime": "2025-01-10T08:00:00.000"
     }
   }
 ]
}
```

## See Also

### Negative Keywords

- [Bulk Update Negative Keywords](post-negative-keywords-bulk-update.md): Update multiple negative keywords in a single request.
