> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/apple_ads/find-ads-(org-level)](https://developer.apple.com/documentation/apple_ads/find-ads-(org-level))

# Find Ads (org-level)

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Web Service Endpoint  
**Availability:** Search Ads 5.0+

Fetches ads within an organization by selector criteria.

## URL

```http
POST https://api.searchads.apple.com/api/v5/ads/find
```

## HTTP Body

Content type: `application/json`

Type: `Selector`

The request body that includes the selector [Condition](condition.md). [Selector](selector.md) objects define what data the API returns when fetching resources.

## Response Codes

- `200` OK — `AdListResponse`: If the call succeeds, the API returns the [AdListResponse](adlistresponse.md) object in the response payload with an HTTP status code of `200(OK)`. If unsuccessful, the HTTP status code indicates the error with details in the error message.
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

Use this endpoint to find `ads` within your organization using a [Selector](selector.md) [Condition](condition.md) to narrow results. If you don’t specify selector conditions, all [Ad](ad.md) objects return in the response. See the [Ad](ad.md) object for parameter descriptions and selector condition operators.

<a id="Payload-example-Find-ads-org-level"></a>

### Payload example: Find ads (org-level)

**Request**

```
POST https://api.searchads.apple.com/api/v5/ads/find

{
  "conditions": [
    {
      "field": "creativeType",
      "operator": "EQUALS",
      "values": [
        "CUSTOM_PRODUCT_PAGE"
      ]
    }
  ],
  "fields": null,
  "orderBy": [
    {
      "field": "status",
      "sortOrder": "ASCENDING"
    }
  ],
  "pagination": {
    "offset": 0,
    "limit": 20
  }
}
```

**Response**

```json
{
  "data": [
    {
      "id": 573408653,
      "orgId": 39872140,
      "campaignId": 570798745,
      "adGroupId": 476797743,
      "creativeId": 94895534,
      "name": "Trip Trek custom product page variation",
      "creativeType": "CUSTOM_PRODUCT_PAGE",
      "status": "ENABLED",
      "servingStatus": "RUNNING",
      "servingStateReasons": null,
      "deleted": false,
      "creationTime": "2024-10-20T20:35:06.227Z",
      "modificationTime": "2024-10-20T20:35:06.227Z"
  }
  ],

    "pagination": {
    "totalResults": 1,
    "startIndex": 1,
    "itemsPerPage": 10
  }
}

```

## See Also

### Ad Endpoints

- [Create an Ad](create-an-ad.md): Creates an ad in an ad group with a creative.
- [Find Ads](find-ads.md): Finds ads within a campaign by selector criteria.
- [Get an Ad](get-an-ad.md): Fetches an ad assigned to an ad group by identifier.
- [Get All Ads](get-all-ads.md): Fetches all ads assigned to an ad group.
- [Update an Ad](update-an-ad.md): Updates an ad in an ad group.
- [Delete an Ad](delete-an-ad.md): Deletes an ad from an ad group.
