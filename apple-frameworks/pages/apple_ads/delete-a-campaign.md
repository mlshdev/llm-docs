> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/apple_ads/delete-a-campaign](https://developer.apple.com/documentation/apple_ads/delete-a-campaign)

# Delete a Campaign

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Web Service Endpoint  
**Availability:** Search Ads 5.0+

Deletes a specific campaign by campaign identifier.

## URL

```http
DELETE https://api.searchads.apple.com/api/v5/campaigns/{campaignId}
```

## Path Parameters

- `campaignId` — `int64` (required): The unique identifier for the campaign.

## Response Codes

- `200` OK — `VoidResponse`: If the call succeeds, the API returns the [Campaign](campaign.md) objects in the response payload with an HTTP status code of `200(OK)`. If unsuccessful, the HTTP status code indicates the error with details in the error message.
- `400` Bad Request — `ApiErrorResponse`: An invalid query or missing required parameters.
- `401` Unauthorized — `ApiErrorResponse`: An unauthenticated call fails to get the requested response.
- `403` Forbidden — `ApiErrorResponse`: Insufficient rights to the resource.
- `404` Not Found — `ApiErrorResponse`: The API can’t locate the resource.
- `429` — `ApiErrorResponse`: The API calls exceed rate-limit thresholds. See the Rate Limits subsection of [Calling the Apple Ads API](calling-the-apple-search-ads-api.md).
- `500` Internal Server Error — `ApiErrorResponse`: The Apple Ads server is temporarily down or unreachable. The request may be valid, but you need to retry it later.

## See Also

### Campaign Endpoints

- [Create a Campaign](create-a-campaign.md): Creates a campaign to promote an app.
- [Find Campaigns](find-campaigns.md): Fetches campaigns with selector operators.
- [Get a Campaign](get-a-campaign.md): Fetches a specific campaign by campaign identifier.
- [Get all Campaigns](get-all-campaigns.md): Fetches all of an organization’s assigned campaigns.
- [Update a Campaign](update-a-campaign.md): Updates a campaign with a campaign identifier.
