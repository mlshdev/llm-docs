> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/apple_ads/create-an-ad](https://developer.apple.com/documentation/apple_ads/create-an-ad)

# Create an Ad

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Web Service Endpoint  
**Availability:** Search Ads 5.0+

Creates an ad in an ad group with a creative.

## URL

```http
POST https://api.searchads.apple.com/api/v5/campaigns/{campaignId}/adgroups/{adgroupId}/ads
```

## Path Parameters

- `adgroupId` — `int64` (required): The unique identifier for the ad group.
- `campaignId` — `int64` (required): The unique identifier for the campaign.

## HTTP Body

Content type: `application/json`

Type: `AdCreate`

The request body that includes the details of the [Ad](ad.md) object creation request.

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

Use this endpoint to create an [Ad](ad.md) object using your `creativeId` in the request payload. To obtain a `creativeId`, use the [Create a Creative](create-a-creative.md) endpoint. See [Update an Ad](update-an-ad.md) to update or replace the ad group assignment of an [Ad](ad.md) object.

In API version 5.2, this endpoint supports default product page ads. For more information, see [Apple Ads Campaign Management API 5](apple-search-ads-campaign-management-api-5.md).

The `Id` in the response is your `adId`, representing the assignment of a creative to an [AdGroup](adgroup.md). Use your `adId` in the resource path with [Get an Ad](get-an-ad.md), [Update an Ad](update-an-ad.md), [Delete an Ad](delete-an-ad.md), and in [Get Ad-Level Reports](get-ad-level-reports.md). Your `adId` is also output in the [AdServices](../adservices.md) attribution framework.

<a id="Payload-example-Create-an-ad"></a>

### Payload example: Create an ad

**Request**

```
POST https://api.searchads.apple.com/api/v5/campaigns/{campaignId}/adgroups/{adgroupId}/ads

{
  "creativeId": 94895512,
  "name": "Trip Trek custom product page variation",
  "status": "ENABLED"
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
  "status": "ENABLED",
  "servingStatus": "RUNNING",
  "statusReasons": [],
  "deleted": false,
  "creationTime": "2024-10-09 21:25:33",
  "modificationTime": "2024-10-09 21:25:33"
}
```

## See Also

### Ad Endpoints

- [Find Ads](find-ads.md): Finds ads within a campaign by selector criteria.
- [Find Ads (org-level)](find-ads-%28org-level%29.md): Fetches ads within an organization by selector criteria.
- [Get an Ad](get-an-ad.md): Fetches an ad assigned to an ad group by identifier.
- [Get All Ads](get-all-ads.md): Fetches all ads assigned to an ad group.
- [Update an Ad](update-an-ad.md): Updates an ad in an ad group.
- [Delete an Ad](delete-an-ad.md): Deletes an ad from an ad group.
