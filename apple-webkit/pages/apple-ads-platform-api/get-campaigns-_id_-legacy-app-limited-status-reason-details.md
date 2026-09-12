> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/get-campaigns-_id_-legacy-app-limited-status-reason-details](https://developer.apple.com/documentation/apple-ads-platform-api/get-campaigns-_id_-legacy-app-limited-status-reason-details)

# Get Legacy App Limited Status Reason Details

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Web Service Endpoint  
**Availability:** Apple Ads Platform API 1.0+

Return a map of country or region codes to their associated limited-status reason for legacy app campaigns.

## URL

```http
GET https://api.ads.apple.com/v1/campaigns/{id}/legacy-app-limited-status-reason-details
```

## Path Parameters

- `id` — `string` (required):

## Header Parameters

- `X-Ap-Context` — `string` (required):

## Response Codes

- `200` OK — `LegacyAppLimitedStatusReasonDetailsResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` Too Many Requests — `ErrorResponse`:
- `500` Internal Server Error — `ErrorResponse`:

<a id="Discussion"></a>

## Discussion

This endpoint helps diagnose why specific campaigns aren’t delivering in one or more countries or regions. The response contains information on why delivery is limited in each market.

<a id="Payload-Examples"></a>

## Payload Examples

**Legacy App Limited Status Reason Details**

Returns limited-status reasons per country or region for legacy app campaigns in the scoped ad account.

<a id="Request"></a>

### Request

No request body is required. Include the `X-Ap-Context` header with your `adAccountId`.

```
GET https://api.ads.apple.com/v1/campaigns/{id}/legacy-app-limited-status-reason-details
```

<a id="Response"></a>

### Response

```json
{
 "result": {
   "countryOrRegionLimitedStatusReasons": {
     "US": [
       "APP_NOT_ELIGIBLE_SUPPLY_PLACEMENT",
       "APP_NOT_PUBLISHED_YET"
     ],
     "GB": [
       "APP_NOT_PUBLISHED_YET"
     ],
     "AU": []
   }
 }
}
```

## See Also

- [Create a Campaign](post-campaigns.md): Create a new advertising campaign with a promoted object, budget, targeting, and bid strategy configuration.
- [Query Campaigns](post-campaigns-query.md): Query campaigns using filters, sorting, and pagination.
- [Get a Campaign](get-campaigns-_id_.md): Retrieve a single campaign by its unique identifier.
- [Update a Campaign](put-campaigns-_id_.md): Update a campaign’s name, status, budget, targeting, or bid strategy.
- [Delete a Campaign](delete-campaigns-_id_.md): Soft-delete a campaign by its unique identifier, cascading to its ad groups, keywords, and ads.
