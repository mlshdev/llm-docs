> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/put-negative-keywords-_id_](https://developer.apple.com/documentation/apple-ads-platform-api/put-negative-keywords-_id_)

# Update a Negative Keyword

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Web Service Endpoint  
**Availability:** Apple Ads Platform API 1.0+

Update a negative keyword’s status to enable or pause its search term exclusion.

## URL

```http
PUT https://api.ads.apple.com/v1/negative-keywords/{id}
```

## Path Parameters

- `id` — `string` (required):

## Header Parameters

- `X-Ap-Context` — `string` (required):

## HTTP Body

Content type: `application/json`

Type: `NegativeKeywordUpdate`

## Response Codes

- `200` OK — `NegativeKeywordResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` Too Many Requests — `ErrorResponse`:
- `500` Internal Server Error — `ErrorResponse`:

<a id="Discussion"></a>

## Discussion

This endpoint updates an existing negative keyword. The `NegativeKeywordUpdate` schema accepts only the `status` field. Negative keywords don’t have a `bid` field, and `text` and `matchType` are immutable after creation. To change a negative keyword’s text or match type, delete it and create a new one.

<a id="Payload-Examples"></a>

## Payload Examples

**Pause Negative Keyword**

Pause a negative keyword to temporarily suspend its search term exclusion. The term can be re-enabled without recreating it.

<a id="Request"></a>

### Request

```json
PUT /v1/negative-keywords/{id}

{
 "status": "PAUSED"
}
```

<a id="Response"></a>

### Response

```json
{
 "result": {
   "id": 777888999,
   "adAccountId": 123456789,
   "campaignId": 444555666,
   "text": "free app",
   "matchType": "BROAD",
   "status": "PAUSED",
   "deleted": false,
   "creationTime": "2025-01-10T08:00:00.000",
   "modificationTime": "2025-06-01T10:00:00.000"
 }
}
```

## See Also

- [Create a Negative Keyword](post-negative-keywords.md): Create a negative keyword at the campaign or ad group level to prevent ads from showing for unwanted search terms.
- [Query Negative Keywords](post-negative-keywords-query.md): Query negative keywords using structured filters, sorting, and pagination.
- [Get a Negative Keyword](get-negative-keywords-_id_.md): Retrieve a single negative keyword by its unique identifier.
- [Delete a Negative Keyword](delete-negative-keywords-_id_.md): Soft-delete a negative keyword by ID.
