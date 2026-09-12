> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/apple_ads/create-ad-group-negative-keywords](https://developer.apple.com/documentation/apple_ads/create-ad-group-negative-keywords)

# Create Ad Group Negative Keywords

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Web Service Endpoint  
**Availability:** Search Ads 5.0+

Creates negative keywords in a specific ad group.

## URL

```http
POST https://api.searchads.apple.com/api/v5/campaigns/{campaignId}/adgroups/{adgroupId}/negativekeywords/bulk
```

## Path Parameters

- `adgroupId` — `int64` (required): The unique identifier for the ad group.
- `campaignId` — `int64` (required): The unique identifier for the campaign.

## HTTP Body

Content type: `application/json`

Type: `[NegativeKeyword]`

The request body that includes negative keyword details.

## Response Codes

- `200` OK — `NegativeKeywordListResponse`: If the call succeeds, the API returns a list of [NegativeKeyword](negativekeyword.md) objects in the response payload with an HTTP status code of `200` `(OK)`. If unsuccessful, the HTTP status code indicates the error with details in the error message.

  > **Note**

  >  If you create duplicate keywords, the payload response indicates an error, but the call returns with a 200 status code.
- `400` Bad Request — `ApiErrorResponse`: An invalid query or missing required parameters.
- `401` Unauthorized — `ApiErrorResponse`: An unauthenticated call fails to get the requested response.
- `403` Forbidden — `ApiErrorResponse`: Insufficient rights to the resource.
- `404` Not Found — `ApiErrorResponse`: The API can’t locate the resource.
- `429` — `ApiErrorResponse`: The API calls exceed rate-limit thresholds. See the Rate Limits subsection of [Calling the Apple Ads API](calling-the-apple-search-ads-api.md).
- `500` Internal Server Error — `ApiErrorResponse`: The Apple Ads server is temporarily down or unreachable. The request may be valid, but you need to retry it later.

<a id="Discussion"></a>

## Discussion

Negative keywords prevent your ad from showing up in App Store searches. Negative keywords can belong to a campaign or an ad group.

To create ad group negative keywords, use the associated `campaignId` and `adgroupId` in the URI.

<a id="Payload-example-Create-ad-group-negative-keywords"></a>

### Payload example: Create ad group negative keywords

**Request**

```
POST https://api.searchads.apple.com/api/v5/campaigns/{campaignId}/adgroups/{adgroupId}/negativekeywords/bulk

[  
 {
    "text": "ad group negative keyword 1",
    "matchType": "BROAD"
  },
  {
    "text": "ad group negative keyword 2",
    "matchType": "EXACT"
  }
]

```

**Response**

```json
[
  {
    "id": 542370642,
    "campaignId": 542370539,
    "adGroupId": 427916203,
    "text": "ad group negative keyword example 1",
    "status": "ACTIVE",
    "matchType": "BROAD",
    "modificationTime": "2024-04-08T22:02:07.514",
    "deleted": false
  },
  {
    "id": 542370643,
    "campaignId": 542370539,
    "adGroupId": 427916203,
    "text": "Update campaign negative keyword example 2",
    "status": "ACTIVE",
    "matchType": "EXACT",
    "modificationTime": "2024-04-08T22:02:07.523",
    "deleted": false
  }
]
```

## See Also

### Ad Group Negative Keywords Endpoints

- [Find Ad Group Negative Keywords](find-ad-group-negative-keywords.md): Fetches negative keywords in a campaign’s ad groups.
- [Get an Ad Group Negative Keyword](get-an-ad-group-negative-keyword.md): Fetches a specific negative keyword in an ad group.
- [Get All Ad Group Negative Keywords](get-all-ad-group-negative-keywords.md): Fetches all negative keywords in ad groups.
- [Update Ad Group Negative Keywords](update-ad-group-negative-keywords.md): Updates negative keywords in an ad group.
- [Delete Ad Group Negative Keywords](delete-ad-group-negative-keywords.md): Deletes negative keywords from an ad group.
