> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/get-campaigns-_id_](https://developer.apple.com/documentation/apple-ads-platform-api/get-campaigns-_id_)

# Get a Campaign

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Web Service Endpoint  
**Availability:** Apple Ads Platform API 1.0+

Retrieve a single campaign by its unique identifier.

## URL

```http
GET https://api.ads.apple.com/v1/campaigns/{id}
```

## Path Parameters

- `id` — `string` (required):

## Header Parameters

- `X-Ap-Context` — `string` (required):

## Response Codes

- `200` OK — `CampaignResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` Too Many Requests — `ErrorResponse`:
- `500` Internal Server Error — `ErrorResponse`:

<a id="Discussion"></a>

## Discussion

This endpoint retrieves a single campaign by its ID and returns the latest persisted state of the [Campaign](campaign.md) object. The response includes all campaign fields, including `promotedObjectType` and `promotedObjectId`, which are read-only (immutable) after being set at campaign creation. Campaigns are returned regardless of their `deleted` status.

<a id="Payload-Examples"></a>

## Payload Examples

**App Store Campaign**

<a id="Request"></a>

### Request

Response for a campaign promoting an App Store app. The `promotedObjectType` field is `APPSTORE_APP` and `promotedObjectId` is the app’s `adamId`.

```
GET https://api.ads.apple.com/v1/campaigns/444555681
```

<a id="Response"></a>

### Response

```json
{
 "result": {
   "id": 444555681,
   "name": "AwayFinder App Campaign",
   "adAccountId": 123456789,
   "promotedObjectType": "APPSTORE_APP",
   "promotedObjectId": "123456789",
   "status": "ENABLED",
   "billingEvent": "TAPS",
   "startTime": "2025-09-01T00:00:00.000",
   "endTime": "2025-12-31T23:59:59.000",
   "dailyBudget": {
     "value": {
       "amount": "100.00",
       "currency": "USD"
     }
   },
   "targeting": {
     "countryOrRegion": {
       "include": [
         "US"
       ]
     },
     "supplyPlacement": {
       "include": [
         "APPSTORE_SEARCH_RESULTS"
       ]
     }
   },
   "bidStrategy": {
     "bidStrategyType": "MAX_CONVERSIONS",
     "bidStrategyGoal": "INSTALL"
   },
   "regulationResponses": [
     {
       "regulationType": "CAMPAIGN_SAPIN_LAW",
       "responseValue": "NOT_AGENT"
     }
   ],
   "creationTime": "2025-01-10T08:00:00.000",
   "modificationTime": "2025-01-10T08:00:00.000",
   "deleted": false,
   "paymentModel": "PAYG",
   "systemStatus": "RUNNING",
   "systemStatusReasons": [],
   "systemStatusLimitingReasons": [],
   "displayStatus": "RUNNING"
 }
}
```

**Apple Maps Campaign**

<a id="Request"></a>

### Request

Response for a campaign promoting a brand on Apple Maps. The `promotedObjectType` field is `BUSINESS_BRAND` and `promotedObjectId` is the brand’s unique ID.

```
GET https://api.ads.apple.com/v1/campaigns/111222333
```

<a id="Response"></a>

### Response

```json
{
 "result": {
   "id": 111222333,
   "name": "AwayFinder Apple Maps Campaign",
   "adAccountId": 123456789,
   "promotedObjectType": "BUSINESS_BRAND",
   "promotedObjectId": "987654321",
   "status": "ENABLED",
   "billingEvent": "TAPS",
   "startTime": "2025-09-01T00:00:00.000",
   "endTime": "2025-12-31T23:59:59.000",
   "dailyBudget": {
     "value": {
       "amount": "900.00",
       "currency": "USD"
     }
   },
   "targeting": {
     "supplySource": {
       "include": [
         "MAPS"
       ]
     },
     "supplyPlacement": {
       "include": [
         "MAPS_SEARCH_RESULTS"
       ]
     }
   },
   "bidStrategy": {
     "bidStrategyType": "MAX_ENGAGEMENTS",
     "bidStrategyGoal": "TAP"
   },
   "creationTime": "2025-01-15T10:30:00.000",
   "modificationTime": "2025-01-20T14:45:00.000",
   "deleted": false,
   "paymentModel": "PAYG",
   "systemStatus": "RUNNING",
   "systemStatusReasons": [],
   "systemStatusLimitingReasons": [],
   "displayStatus": "RUNNING"
 }
}
```

## See Also

- [Create a Campaign](post-campaigns.md): Create a new advertising campaign with a promoted object, budget, targeting, and bid strategy configuration.
- [Query Campaigns](post-campaigns-query.md): Query campaigns using filters, sorting, and pagination.
- [Update a Campaign](put-campaigns-_id_.md): Update a campaign’s name, status, budget, targeting, or bid strategy.
- [Delete a Campaign](delete-campaigns-_id_.md): Soft-delete a campaign by its unique identifier, cascading to its ad groups, keywords, and ads.
- [Get Legacy App Limited Status Reason Details](get-campaigns-_id_-legacy-app-limited-status-reason-details.md): Return a map of country or region codes to their associated limited-status reason for legacy app campaigns.
