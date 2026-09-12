> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/apple_ads/get-an-ad](https://developer.apple.com/documentation/apple_ads/get-an-ad)

# Get an Ad

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Web Service Endpoint  
**Availability:** Search Ads 5.0+

Fetches an ad assigned to an ad group by identifier.

## URL

```http
GET https://api.searchads.apple.com/api/v5/campaigns/{campaignId}/adgroups/{adgroupId}/ads/{adId}
```

## Path Parameters

- `adId` — `int64` (required): A unique identifier representing the assignment relationship between an ad group and an [Ad](ad.md).
- `adgroupId` — `int64` (required): The unique identifier for the ad group.
- `campaignId` — `int64` (required): The unique identifier for the campaign.

## Response Codes

- `200` OK — `AdResponse`: If the call succeeds, the API returns the [AdResponse](adresponse.md) object in the response payload with an HTTP status code of `200(OK)`. If unsuccessful, the HTTP status code indicates the error with details in the error message.
- `400` Bad Request — `ApiErrorResponse`: An invalid query or missing required parameters.
- `401` Unauthorized — `ApiErrorResponse`: An unauthenticated call fails to get the requested response.
- `403` Forbidden — `ApiErrorResponse`: Insufficient rights to the resource.
- `404` Not Found — `ApiErrorResponse`: The API can’t locate the resource.
- `429` — `ApiErrorResponse`: The API calls exceed rate-limit thresholds. See the Rate Limits subsection of [Calling the Apple Ads API](calling-the-apple-search-ads-api.md).
- `500` Internal Server Error — `ApiErrorResponse`: The Apple Ads server is temporarily down or unreachable. The request may be valid, but you need to retry it later.

<a id="Discussion"></a>

## Discussion

Use this endpoint to fetch an [Ad](ad.md) assigned to an ad group. Use your `adId` in the resource path.

<a id="Payload-example-Get-an-ad"></a>

### Payload example: Get an ad

**Request**

```
GET https://api.searchads.apple.com/api/v5/campaigns/{campaignId}/adgroups/{adgroupId}/ads/{adId}
```

**Response**

```json
{
    "id": 573408745,
    "orgId": 39872140,
    "campaignId": 570798765,
    "adGroupId": 570798765,
    "creativeId": 94895512,
    "name": "Trip Trek custom product page variation",
    "creativeType": "CUSTOM_PRODUCT_PAGE",
    "status": "PAUSED",
    "servingStatus": "NOT_RUNNING",
    "servingStateReasons": [
      "PAUSED_BY_USER"
      ],
    "deleted": false,
    "creationTime": "2024-10-08T00:18:37.606Z",
    "modificationTime": "2024-10-09T00:18:37.606Z"
}

```

## See Also

### Ad Endpoints

- [Create an Ad](create-an-ad.md): Creates an ad in an ad group with a creative.
- [Find Ads](find-ads.md): Finds ads within a campaign by selector criteria.
- [Find Ads (org-level)](find-ads-%28org-level%29.md): Fetches ads within an organization by selector criteria.
- [Get All Ads](get-all-ads.md): Fetches all ads assigned to an ad group.
- [Update an Ad](update-an-ad.md): Updates an ad in an ad group.
- [Delete an Ad](delete-an-ad.md): Deletes an ad from an ad group.
