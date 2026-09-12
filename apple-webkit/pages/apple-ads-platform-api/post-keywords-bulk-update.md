> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/post-keywords-bulk-update](https://developer.apple.com/documentation/apple-ads-platform-api/post-keywords-bulk-update)

# Bulk Update Keywords

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Web Service Endpoint  
**Availability:** Apple Ads Platform API 1.0+

Updates multiple keywords in a single request.

## URL

```http
POST https://api.ads.apple.com/v1/keywords/bulk-update
```

## Header Parameters

- `X-Ap-Context` — `string` (required):

## HTTP Body

Content type: `application/json`

Type: `KeywordUpdateBulkRequest`

## Response Codes

- `200` OK — `KeywordUpdateBulkResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` Too Many Requests — `ErrorResponse`:
- `500` Internal Server Error — `ErrorResponse`:

<a id="Discussion"></a>

## Discussion

This endpoint updates multiple keywords in a single request. Each item in the `items` array must include the keyword `id`. You can update only `bid` and `status` per keyword. The keyword `text` and `matchType` are immutable after creation.

This endpoint is well-suited for batch bid adjustments. For example, raise bids on high-performing keywords after a performance review, or pause a set of underperforming keywords in one call.

<a id="Payload-Examples"></a>

## Payload Examples

**Bulk Update Bids**

<a id="Request"></a>

### Request

Raise bids on two keywords and pause a third.

```json
{
 "items": [
   {
     "correlationId": 0,
     "data": {
       "id": 888999000,
       "bid": {
         "amount": "3.00",
         "currency": "USD"
       }
     }
   },
   {
     "correlationId": 1,
     "data": {
       "id": 888999001,
       "bid": {
         "amount": "2.25",
         "currency": "USD"
       },
       "status": "ENABLED"
     }
   },
   {
     "correlationId": 2,
     "data": {
       "id": 888999002,
       "status": "PAUSED"
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
       "deleted": false,
       "creationTime": "2025-06-01T10:00:00.000",
       "modificationTime": "2025-06-15T09:00:00.000"
     }
   },
   {
     "correlationId": 1,
     "operation": "UPDATE",
     "success": true,
     "result": {
       "id": 888999001,
       "adAccountId": 123456789,
       "campaignId": 444555666,
       "adGroupId": 555666777,
       "text": "photo editing app",
       "matchType": "BROAD",
       "bid": {
         "amount": "2.25",
         "currency": "USD"
       },
       "status": "ENABLED",
       "deleted": false,
       "creationTime": "2025-06-01T10:00:00.000",
       "modificationTime": "2025-06-15T09:00:00.000"
     }
   },
   {
     "correlationId": 2,
     "operation": "UPDATE",
     "success": true,
     "result": {
       "id": 888999002,
       "adAccountId": 123456789,
       "campaignId": 444555666,
       "adGroupId": 555666777,
       "text": "best photo editor",
       "matchType": "EXACT",
       "bid": {
         "amount": "3.00",
         "currency": "USD"
       },
       "status": "PAUSED",
       "deleted": false,
       "creationTime": "2025-06-01T10:00:00.000",
       "modificationTime": "2025-06-15T09:00:00.000"
     }
   }
 ]
}
```

## See Also

### Keywords

- [Bulk Create Keywords](post-keywords-bulk-create.md): Creates multiple keywords in a single request.
