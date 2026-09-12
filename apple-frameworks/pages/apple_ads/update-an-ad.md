> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/apple_ads/update-an-ad](https://developer.apple.com/documentation/apple_ads/update-an-ad)

# Update an Ad

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Web Service Endpoint  
**Availability:** Search Ads 5.0+

Updates an ad in an ad group.

## URL

```http
PUT https://api.searchads.apple.com/api/v5/campaigns/{campaignId}/adgroups/{adgroupId}/ads/{adId}
```

## Path Parameters

- `adId` — `int64` (required): A unique identifier representing the assignment relationship between an ad group and an [Ad](ad.md).
- `adgroupId` — `int64` (required): The unique identifier for the ad group.
- `campaignId` — `int64` (required): The unique identifier for the campaign.

## HTTP Body

Content type: `application/json`

Type: `AdUpdate`

The request body that includes the details of the [Creative](creative.md).

## Response Codes

- `200` OK — `AdResponse`: If the call succeeds, the API returns the [AdResponse](adresponse.md) object in the response payload with an HTTP status code of `200(OK)`. If unsuccessful, the HTTP status code indicates the error with details in the error message.
- `400` Bad Request — `ApiErrorResponse`: An invalid query or missing required parameters.
- `401` Unauthorized — `ApiErrorResponse`: An unauthenticated call fails to get the requested response.
- `403` Forbidden — `ApiErrorResponse`: Insufficient rights to the resource.
- `404` Not Found — `ApiErrorResponse`: The API can’t locate the resource.
- `429` — `ApiErrorResponse`: The API calls exceed rate-limit thresholds. See the Rate Limits subsection of [Calling the Apple Ads API](calling-the-apple-search-ads-api.md).
- `500` Internal Server Error — `ApiErrorResponse`: The Apple Ads server is temporarily down or unreachable. The request may be valid, but you need to retry it later.

## Mentioned In

- [Apple Ads Campaign Management API 4](apple-search-ads-campaign-management-api-4.md)

<a id="Discussion"></a>

## Discussion

Use this endpoint to update or replace an [Ad](ad.md). Use your `adId` in the resource path. The follow-up step is to create an [Ad](ad.md) using your `creativeId`. See [Create an Ad](create-an-ad.md). You can assign one active custom product page to an ad group. For information about how to edit a subset of object properties without having to include all object properties in the payload, see the Use Partial Updates section in [Using Apple Ads API Functionality](using-apple-search-ads-api-functionality.md).

<a id="Payload-example-Update-an-ad"></a>

### Payload example: Update an ad

**Request**

```
PUT https://api.searchads.apple.com/api/v5/campaigns/{campaignId}/adgroups/{adgroupId}/ads/{adId}

{
  "name": "Trip Trek custom product page variation",
  "status": "PAUSED"
}
```

**Response**

```json
{
  "id": 573408745,
  "orgId": 39872140,
  "campaignId": 570798765,
  "adGroupId": 427916203,
  "creativeId": 94895512,
  "name": "Trip Trek custom product page variation",
  "creativeType": "CUSTOM_PRODUCT_PAGE",
  "status": "PAUSED",
  "servingStatus": "NOT_RUNNING",
  "servingStateReasons": [
    "PAUSED_BY_USER"
  ],
  "deleted": false,
  "creationTime": "2024-11-16T01:15:32.412Z",
  "modificationTime": "2024-11-16T01:15:32.412Z"
}
```

## See Also

### Ad Endpoints

- [Create an Ad](create-an-ad.md): Creates an ad in an ad group with a creative.
- [Find Ads](find-ads.md): Finds ads within a campaign by selector criteria.
- [Find Ads (org-level)](find-ads-%28org-level%29.md): Fetches ads within an organization by selector criteria.
- [Get an Ad](get-an-ad.md): Fetches an ad assigned to an ad group by identifier.
- [Get All Ads](get-all-ads.md): Fetches all ads assigned to an ad group.
- [Delete an Ad](delete-an-ad.md): Deletes an ad from an ad group.
