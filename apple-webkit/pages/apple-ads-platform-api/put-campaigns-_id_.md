> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/put-campaigns-_id_](https://developer.apple.com/documentation/apple-ads-platform-api/put-campaigns-_id_)

# Update a Campaign

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Web Service Endpoint  
**Availability:** Apple Ads Platform API 1.0+

Update a campaign’s name, status, budget, targeting, or bid strategy.

## URL

```http
PUT https://api.ads.apple.com/v1/campaigns/{id}
```

## Path Parameters

- `id` — `string` (required):

## Header Parameters

- `X-Ap-Context` — `string` (required):

## HTTP Body

Content type: `application/json`

Type: `CampaignUpdate`

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

This endpoint updates an existing campaign. It changes only the fields included in the request body. Omitted fields retain their current values. The `promotedObjectType` and `promotedObjectId` fields are **not** part of the `CampaignUpdate` schema. They’re immutable after campaign creation, so this endpoint can’t change them.

<a id="Payload-Examples"></a>

## Payload Examples

**Update Status**

Pause a campaign by setting `status` to `PAUSED`. Send only the fields you want to change.

<a id="Request"></a>

### Request

Pauses a campaign by setting `status` to `PAUSED`. The request body needs only the changed field.

```json
PUT /v1/campaigns/{id}

{
 "status": "PAUSED"
}
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
   "status": "PAUSED",
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
   "modificationTime": "2025-06-01T10:00:00.000",
   "creationTime": "2025-01-15T10:30:00.000",
   "deleted": false
 }
}
```

**Update Budget**

Increase the daily budget by sending only the `dailyBudget` field. All other campaign fields remain unchanged.

<a id="Request"></a>

### Request

Updates only the `dailyBudget` field to raise the campaign’s daily spend limit to $1,200. All other campaign fields remain unchanged.

```json
PUT /v1/campaigns/{id}

{
 "dailyBudget": {
   "value": {
     "amount": "1200.00",
     "currency": "USD"
   }
 }
}
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
       "amount": "1200.00",
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
   "modificationTime": "2025-06-01T11:00:00.000",
   "creationTime": "2025-01-15T10:30:00.000",
   "deleted": false
 }
}
```

**Update Name**

Rename a campaign by sending only the `name` field.

<a id="Request"></a>

### Request

Renames a campaign by sending only the `name` field. No other fields change.

```json
PUT /v1/campaigns/{id}

{
 "name": "AwayFinder Apple Maps Campaign — Summer 2025"
}
```

<a id="Response"></a>

### Response

```json
{
 "result": {
   "id": 111222333,
   "name": "AwayFinder Apple Maps Campaign — Summer 2025",
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
   "modificationTime": "2025-06-01T12:00:00.000",
   "creationTime": "2025-01-15T10:30:00.000",
   "deleted": false
 }
}
```

**Error — Not Found**

The API returns this error when the campaign ID doesn’t exist or the campaign has been deleted.

<a id="Request"></a>

### Request

```json
PUT /v1/campaigns/999999999

{
 "status": "PAUSED"
}
```

<a id="Response"></a>

### Response

```json
{
 "error": {
   "errors": [
     {
       "code": "CAMPAIGN_NOT_FOUND",
       "message": "Campaign with id '999999999' not found."
     }
   ]
 }
}
```

## See Also

- [Create a Campaign](post-campaigns.md): Create a new advertising campaign with a promoted object, budget, targeting, and bid strategy configuration.
- [Query Campaigns](post-campaigns-query.md): Query campaigns using filters, sorting, and pagination.
- [Get a Campaign](get-campaigns-_id_.md): Retrieve a single campaign by its unique identifier.
- [Delete a Campaign](delete-campaigns-_id_.md): Soft-delete a campaign by its unique identifier, cascading to its ad groups, keywords, and ads.
- [Get Legacy App Limited Status Reason Details](get-campaigns-_id_-legacy-app-limited-status-reason-details.md): Return a map of country or region codes to their associated limited-status reason for legacy app campaigns.
