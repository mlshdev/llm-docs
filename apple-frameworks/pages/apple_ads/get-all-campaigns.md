> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/apple_ads/get-all-campaigns](https://developer.apple.com/documentation/apple_ads/get-all-campaigns)

# Get all Campaigns

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Web Service Endpoint  
**Availability:** Search Ads 5.0+

Fetches all of an organization’s assigned campaigns.

## URL

```http
GET https://api.searchads.apple.com/api/v5/campaigns
```

## Query Parameters

- `limit` — `int32`: The number of items to return per request. The maximum is 1000 for most objects.
  **Default:** `20`
- `offset` — `int32`: The offset pagination that limits the number of returned records. The start of each page is offset by the specified number.
  **Default:** `0`

## Response Codes

- `200` OK — `CampaignListResponse`: If the call succeeds, the API returns a list of [Campaign](campaign.md) objects in the response payload with an HTTP status code of `200(OK)`. If unsuccessful, the HTTP status code indicates the error with details in the error message.
- `401` Unauthorized — `ApiErrorResponse`: An unauthenticated call fails to get the requested response.
- `403` Forbidden — `ApiErrorResponse`: Insufficient rights to the resource.
- `429` — `ApiErrorResponse`: The API calls exceed rate-limit thresholds. See the Rate Limits subsection of [Calling the Apple Ads API](calling-the-apple-search-ads-api.md).
- `500` Internal Server Error — `ApiErrorResponse`: The Apple Ads server is temporarily down or unreachable. The request may be valid, but you need to retry it later.

<a id="Discussion"></a>

## Discussion

This endpoint returns data for all of an organization’s assigned campaigns. You can also use a partial fetch as necessary. For more information, see the Use a Partial Fetch section of [Using Apple Ads API Functionality](using-apple-search-ads-api-functionality.md).

## See Also

### Campaign Endpoints

- [Create a Campaign](create-a-campaign.md): Creates a campaign to promote an app.
- [Find Campaigns](find-campaigns.md): Fetches campaigns with selector operators.
- [Get a Campaign](get-a-campaign.md): Fetches a specific campaign by campaign identifier.
- [Update a Campaign](update-a-campaign.md): Updates a campaign with a campaign identifier.
- [Delete a Campaign](delete-a-campaign.md): Deletes a specific campaign by campaign identifier.
