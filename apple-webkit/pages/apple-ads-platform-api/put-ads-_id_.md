> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/put-ads-_id_](https://developer.apple.com/documentation/apple-ads-platform-api/put-ads-_id_)

# Update an Ad

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Web Service Endpoint  
**Availability:** Apple Ads Platform API 1.0+

Updates the name or status of an existing ad by its unique identifier.

## URL

```http
PUT https://api.ads.apple.com/v1/ads/{id}
```

## Path Parameters

- `id` — `string` (required):

## Header Parameters

- `X-Ap-Context` — `string` (required):

## HTTP Body

Content type: `application/json`

Type: `AdUpdate`

## Response Codes

- `200` OK — `AdResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` Too Many Requests — `ErrorResponse`:
- `500` Internal Server Error — `ErrorResponse`:

<a id="Discussion"></a>

## Discussion

This endpoint updates an existing ad. Only `name` and `status` are mutable. The `creativeId` and `adGroupId` fields can’t be changed after the ad is created. The system modifies only the fields included in the request body. Omitted fields retain their current values.

To change which ad creative an ad group serves, create a new ad with the desired `creativeId` and delete the old one. This pattern ensures ad delivery history remains traceable per ad.

<a id="Payload-Examples"></a>

## Payload Examples

**Pause Ad**

Pause an ad by setting `status` to `PAUSED`. Send only the field you want to change.

<a id="Request"></a>

### Request

```json
PUT /v1/ads/777888999

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
   "adGroupId": 555666777,
   "creativeId": 666777888,
   "name": "AwayFinder - Default Product Page",
   "status": "PAUSED",
   "systemStatus": "NOT_RUNNING",
   "systemStatusReasons": [
     "PAUSED_BY_USER"
   ],
   "systemStatusLimitingReasons": [],
   "displayStatus": "PAUSED",
   "deleted": false,
   "creationTime": "2025-09-01T08:00:00.000",
   "modificationTime": "2025-10-01T10:00:00.000"
 }
}
```

**Rename Ad**

Rename an ad by sending only the `name` field. Status and all other fields remain unchanged.

<a id="Request"></a>

### Request

```json
PUT /v1/ads/777888999

{
 "name": "AwayFinder - Holiday Product Page"
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
   "adGroupId": 555666777,
   "creativeId": 666777888,
   "name": "AwayFinder - Holiday Product Page",
   "status": "ENABLED",
   "systemStatus": "RUNNING",
   "systemStatusReasons": [],
   "systemStatusLimitingReasons": [],
   "displayStatus": "RUNNING",
   "deleted": false,
   "creationTime": "2025-09-01T08:00:00.000",
   "modificationTime": "2025-10-15T14:00:00.000"
 }
}
```

## See Also

- [Create an Ad](post-ads.md): Creates a new ad that links an ad creative to an ad group for delivery.
- [Query Ads](post-ads-query.md): Searches and filters ads using structured query criteria including field filters, sorting, and pagination.
- [Get an Ad](get-ads-_id_.md): Retrieves a single ad by its unique identifier.
- [Delete an Ad](delete-ads-_id_.md): Soft-deletes an ad by its unique identifier, stopping delivery and removing it from active results.
