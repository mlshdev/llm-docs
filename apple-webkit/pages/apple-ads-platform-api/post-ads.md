> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/post-ads](https://developer.apple.com/documentation/apple-ads-platform-api/post-ads)

# Create an Ad

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Web Service Endpoint  
**Availability:** Apple Ads Platform API 1.0+

Creates a new ad that links an ad creative to an ad group for delivery.

## URL

```http
POST https://api.ads.apple.com/v1/ads
```

## Header Parameters

- `X-Ap-Context` — `string` (required):

## HTTP Body

Content type: `application/json`

Type: `AdCreate`

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

This endpoint creates an ad that links an ad creative to an ad group.

- `adGroupId` and `creativeId` are required at creation and are **immutable**: you can’t change them after creating the ad.
- The ad creative defines the visual content (product page or Apple Maps ad creative).
- The ad controls the `name` and `status`.
- An ad group can contain multiple ads, but only one ad per ad group can be `ENABLED` at a time.

The ad’s `displayStatus` is an aggregate of campaign-level, ad group-level, and ad-level state, combined with ad creative eligibility.

The `systemStatus` will be `NOT_RUNNING` if the ad creative is in `PENDING` state (awaiting system validation, policy determination, or asset CDN availability), or if Apple has rejected the ad creative (`INVALID`).

<a id="Payload-Examples"></a>

## Payload Examples

**App Store Ad**

An ad linking an App Store ad creative to an ad group in an App Store campaign.

<a id="Request"></a>

### Request

```json
POST /v1/ads

{
 "name": "AwayFinder - Default Product Page",
 "adGroupId": 555666777,
 "creativeId": 666777888,
 "status": "ENABLED"
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
   "status": "ENABLED",
   "systemStatus": "RUNNING",
   "systemStatusReasons": [],
   "systemStatusLimitingReasons": [],
   "displayStatus": "RUNNING",
   "deleted": false,
   "creationTime": "2025-09-01T08:00:00.000",
   "modificationTime": "2025-09-01T08:00:00.000"
 }
}
```

**Apple Maps Ad**

An ad linking an Apple Maps ad creative to an ad group in an Apple Maps campaign.

<a id="Request"></a>

### Request

```json
POST /v1/ads

{
 "name": "AwayFinder - Maps Creative",
 "adGroupId": 555666777,
 "creativeId": 666777888,
 "status": "ENABLED"
}
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
   "creativeId": 666777888,
   "name": "AwayFinder - Maps Creative",
   "status": "ENABLED",
   "systemStatus": "NOT_RUNNING",
   "systemStatusReasons": [
     "AD_APPROVAL_PENDING"
   ],
   "systemStatusLimitingReasons": [],
   "displayStatus": "PROCESSING",
   "deleted": false,
   "creationTime": "2025-09-01T09:00:00.000",
   "modificationTime": "2025-09-01T09:00:00.000"
 }
}
```

## See Also

- [Query Ads](post-ads-query.md): Searches and filters ads using structured query criteria including field filters, sorting, and pagination.
- [Get an Ad](get-ads-_id_.md): Retrieves a single ad by its unique identifier.
- [Update an Ad](put-ads-_id_.md): Updates the name or status of an existing ad by its unique identifier.
- [Delete an Ad](delete-ads-_id_.md): Soft-deletes an ad by its unique identifier, stopping delivery and removing it from active results.
