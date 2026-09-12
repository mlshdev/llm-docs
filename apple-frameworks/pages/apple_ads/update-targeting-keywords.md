> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/apple_ads/update-targeting-keywords](https://developer.apple.com/documentation/apple_ads/update-targeting-keywords)

# Update Targeting Keywords

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Web Service Endpoint  
**Availability:** Search Ads 5.0+

Updates targeting keywords in ad groups.

## URL

```http
PUT https://api.searchads.apple.com/api/v5/campaigns/{campaignId}/adgroups/{adgroupId}/targetingkeywords/bulk
```

## Path Parameters

- `adgroupId` — `int64` (required): The unique identifier for the ad group.
- `campaignId` — `int64` (required): The unique identifier for the campaign.

## HTTP Body

Content type: `application/json`

Type: `[KeywordUpdateRequest]`

The request body that includes keyword targeting details.

## Response Codes

- `200` OK — `KeywordListResponse`: If the call succeeds, the API returns a list of [Keyword](keyword.md) objects in the response payload with an HTTP status code of `200(OK)`. If unsuccessful, the HTTP status code indicates the error with details in the error message.
- `400` Bad Request — `ApiErrorResponse`: An invalid query or missing required parameters.
- `401` Unauthorized — `ApiErrorResponse`: An unauthenticated call fails to get the requested response.
- `403` Forbidden — `ApiErrorResponse`: Insufficient rights to the resource.
- `404` Not Found — `ApiErrorResponse`: The API can’t locate the resource.
- `429` — `ApiErrorResponse`: The API calls exceed rate-limit thresholds. See the Rate Limits subsection of [Calling the Apple Ads API](calling-the-apple-search-ads-api.md).
- `500` Internal Server Error — `ApiErrorResponse`: The Apple Ads server is temporarily down or unreachable. The request may be valid, but you need to retry it later.

<a id="Discussion"></a>

## Discussion

To update targeting keywords, use the associated `campaignId` and `adgroupId` in the URI. The `id` in the payload must belong to a keyword that exists inside the ad group in the URI. The `status` and `bidAmount` fields are modifiable in the payload. Use partial updates to edit a subset of object properties without having to include all object properties in the payload. For more information, see the Use Partial Updates section of [Using Apple Ads API Functionality](using-apple-search-ads-api-functionality.md).

<a id="Payload-example-Update-ad-group-targeting-keywords"></a>

### Payload example: Update ad group targeting keywords

When updating keywords in a campaign with a Maximize Conversions bidding strategy, `bidAmount` cannot be changed to a non-zero/non-null value.

**Request**

```http
PUT https://api.searchads.apple.com/api/v5/campaigns/{campaignId}/adgroups/{adgroupId}/targetingkeywords/bulk

[  
  {
    "id": "542370642",
    "status": "PAUSED",
    "bidAmount": {
      "amount”: "100",
      "currency": "USD"
    }
  },
  {
    "id": "542370643",
    "status": "PAUSED",
    "bidAmount": {
      "amount": "100",
      "currency": "USD"
    }
  }
]
```

**Response**

```json
[
  {
    "id": 542370642,
    "adGroupId": 427916203,
    "text": "targeting keyword example 1",
    "status": "PAUSED",
    "matchType": "BROAD",
    "bidAmount": {
      "amount": "100",
      "currency": "USD"
    },
    "modificationTime": "2025-04-08T21:02:24.257",
    "deleted": false
  },
  {
    "id": 542370643,
    "adGroupId": 427916203,
    "text": "targeting keyword example 2",
    "status": "PAUSED",
    "matchType": "EXACT",
    "modificationTime": "2025-04-08T21:02:24.267",
    "deleted": false
  }
]
```

## See Also

### Ad Group Targeting Keywords Endpoints

- [Create Targeting Keywords](create-targeting-keywords.md): Creates targeting keywords in ad groups.
- [Find Targeting Keywords in a Campaign](find-targeting-keywords-in-a-campaign.md): Fetches targeting keywords in a campaign’s ad groups.
- [Get a Targeting Keyword in an Ad Group](get-a-targeting-keyword-in-an-ad-group.md): Fetches a specific targeting keyword in an ad group.
- [Get All Targeting Keywords in an Ad Group](get-all-targeting-keywords-in-an-ad-group.md): Fetches all targeting keywords in ad groups.
- [Delete Targeting Keywords](delete-targeting-keywords.md): Deletes targeting keywords from ad groups.
- [Delete a Targeting Keyword](delete-a-targeting-keyword.md): Deletes a targeting keyword in an ad group.
