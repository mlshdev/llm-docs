> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/get-negative-keywords-_id_](https://developer.apple.com/documentation/apple-ads-platform-api/get-negative-keywords-_id_)

# Get a Negative Keyword

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Web Service Endpoint  
**Availability:** Apple Ads Platform API 1.0+

Retrieve a single negative keyword by its unique identifier.

## URL

```http
GET https://api.ads.apple.com/v1/negative-keywords/{id}
```

## Path Parameters

- `id` — `string` (required):

## Header Parameters

- `X-Ap-Context` — `string` (required):

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

This endpoint retrieves a single negative keyword by its ID. The response indicates whether the record is a campaign-level or ad-group-level exclusion based on the presence of the `adGroupId` field. Campaign-level negatives don’t include `adGroupId` in the response. Ad-group-level negatives include it.

The presence of `adGroupId` in the response distinguishes which level the negative keyword applies to.

| Condition | Level |
| --- | --- |
| `adGroupId` is absent from the response | Campaign-level negative keyword: applies to all ad groups in the campaign |
| `adGroupId` is present in the response | Ad-group-level negative keyword: scoped to a single ad group |

Deleted negative keywords remain retrievable by ID and never expose a `bid` field.

| Constraint | Detail |
| --- | --- |
| Deleted negative keywords are returned | A deleted negative keyword is returned with `deleted: true`. The record is not removed from GET by ID responses. |
| Use query endpoint for listing | `GET /negative-keywords/{id}` returns a single record. Use `POST /negative-keywords/query` to filter and list. |
| No `bid` field | Negative keywords never have a bid field in the response. |

<a id="Payload-Examples"></a>

## Payload Examples

**Campaign-Level Response**

<a id="Request"></a>

### Request

A campaign-level negative keyword. The `adGroupId` field is absent. This exclusion applies across all ad groups in the campaign.

```
GET https://api.ads.apple.com/v1/negative-keywords/777888999
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
   "status": "ENABLED",
   "deleted": false,
   "creationTime": "2025-01-10T08:00:00.000",
   "modificationTime": "2025-01-10T08:00:00.000"
 }
}
```

**Ad Group-Level Response**

<a id="Request"></a>

### Request

An ad-group-level negative keyword. The `adGroupId` field is present. This exclusion is scoped to that ad group only.

```
GET https://api.ads.apple.com/v1/negative-keywords/777888998
```

<a id="Response"></a>

### Response

```json
{
 "result": {
   "id": 777888998,
   "adAccountId": 123456789,
   "campaignId": 444555666,
   "adGroupId": 555666777,
   "text": "cheap downloads",
   "matchType": "EXACT",
   "status": "ENABLED",
   "deleted": false,
   "creationTime": "2025-01-10T08:05:00.000",
   "modificationTime": "2025-01-10T08:05:00.000"
 }
}
```

## See Also

- [Create a Negative Keyword](post-negative-keywords.md): Create a negative keyword at the campaign or ad group level to prevent ads from showing for unwanted search terms.
- [Query Negative Keywords](post-negative-keywords-query.md): Query negative keywords using structured filters, sorting, and pagination.
- [Update a Negative Keyword](put-negative-keywords-_id_.md): Update a negative keyword’s status to enable or pause its search term exclusion.
- [Delete a Negative Keyword](delete-negative-keywords-_id_.md): Soft-delete a negative keyword by ID.
