> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/apple_ads/find-campaigns](https://developer.apple.com/documentation/apple_ads/find-campaigns)

# Find Campaigns

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Web Service Endpoint  
**Availability:** Search Ads 5.0+

Fetches campaigns with selector operators.

## URL

```http
POST https://api.searchads.apple.com/api/v5/campaigns/find
```

## HTTP Body

Content type: `application/json`

Type: `Selector`

The request body that includes the selector [Condition](condition.md). [Selector](selector.md) objects define what data the API returns when fetching resources.

## Response Codes

- `200` OK — `CampaignListResponse`: If the call succeeds, the API returns the [Campaign](campaign.md) objects in the response payload with an HTTP status code of `200(OK)`. If unsuccessful, the HTTP status code indicates the error with details in the error message.
- `400` Bad Request — `ApiErrorResponse`: An invalid query or missing required parameters.
- `401` Unauthorized — `ApiErrorResponse`: An unauthenticated call fails to get the requested response.
- `403` Forbidden — `ApiErrorResponse`: Insufficient rights to the resource.
- `404` Not Found — `ApiErrorResponse`: The API can’t locate the resource.
- `429` — `ApiErrorResponse`: The API calls exceed rate-limit thresholds. See the Rate Limits subsection of [Calling the Apple Ads API](calling-the-apple-search-ads-api.md).
- `500` Internal Server Error — `ApiErrorResponse`: The Apple Ads server is temporarily down or unreachable. The request may be valid, but you need to retry it later.

<a id="Discussion"></a>

## Discussion

Use this endpoint to find campaigns using a [Selector](selector.md) [Condition](condition.md) to narrow results. If you don’t specify selector conditions, all campaign objects return in the response. See the [Campaign](campaign.md) object for parameter descriptions and selector condition operators.

<a id="Payload-example-Find-campaigns"></a>

### Payload example: Find campaigns

**Request**

```http
POST https://api.searchads.apple.com/api/v5/campaigns/find

{
    "pagination": { 
        "offset": 0,
        "limit": 1000
    },
    "orderBy": [
        {
            "field": "id",
            "sortOrder": "ASCENDING"
        }
    ],
    "conditions": [
        {
            "field": "countriesOrRegions",
            "operator": "CONTAINS_ALL",
            "values": [
                "US","CA"
            ]
        }
    ]
}
```

**Response**

```json
{
  "data": [
    {
      "id": 542370642,
      "orgId": 40669820,
      "name": "TripTrek example campaign",
      "dailyBudgetAmount": {
        "amount": "500",
        "currency": "USD"
      },
      "adamId": 427916203,
      "paymentModel": "PAYG",
      "locInvoiceDetails": null,
      "budgetOrders": [],
      "displayStatus": "ON_HOLD",
      "adChannelType": "SEARCH",
      "supplySources": [
        "APPSTORE_SEARCH_RESULTS"
      ],
      "biddingStrategy": "MAX_CONVERSIONS",
      "targetCpa": {
        "amount": "10.00",
        "currency": "USD"
      },
      "billingEvent": "TAPS",
      "startTime": "2025-04-08T10:33:31.650",
      "endTime": "2025-04-09T10:33:31.650",
      "status": "ENABLED",
      "servingStatus": "AD_GROUP_MISSING",
      "servingStateReasons": [
        "CAMPAIGN_START_DATE_IN_FUTURE"
      ],
      "modificationTime": "2025-04-08T23:58:05.316",
      "deleted": false,
      "sapinLawResponse": "NOT_ANSWERED",
      "countriesOrRegions": [
        "CA",
        "JP",
        "NZ",
        "US"
      ],
      "countryOrRegionServingStateReasons": {}
    }
  ],
  "pagination": {
    "totalResults": 1,
    "startIndex": 1,
    "itemsPerPage": 10
  }
}
```

<a id="Payload-example-Find-campaigns-by-bidding-strategy-and-target-CPA"></a>

### Payload example: Find campaigns by bidding strategy and target CPA

**Request**

```http
POST https://api.searchads.apple.com/api/v5/campaigns/find

{
  "conditions": [
    {
      "field": "biddingStrategy",
      "operator": "EQUALS",
      "values": [
        "MAX_CONVERSIONS"
      ]
    }
  ],
  "pagination": {
    "offset": 0,
    "limit": 100
  }
}
```

**Response**

```json
{
  "data": [
    {
      "id": 542370642,
      "orgId": 40669820,
      "name": "TripTrek example campaign",
      "dailyBudgetAmount": {
        "amount": "500",
        "currency": "USD"
      },
      "adamId": 427916203,
      "paymentModel": "PAYG",
      "locInvoiceDetails": null,
      "budgetOrders": [],
      "displayStatus": "ON_HOLD",
      "adChannelType": "SEARCH",
      "supplySources": [
        "APPSTORE_SEARCH_RESULTS"
      ],
      "billingEvent": "TAPS",
      "biddingStrategy": "MAX_CONVERSIONS",
      "targetCpa": {
        "amount": "12",
        "currency": "MXN"
      },
      "startTime": "2025-04-08T10:33:31.650",
      "endTime": "2025-04-09T10:33:31.650",
      "status": "ENABLED",
      "servingStatus": "AD_GROUP_MISSING",
      "servingStateReasons": [
        "CAMPAIGN_START_DATE_IN_FUTURE"
      ],
      "modificationTime": "2024-04-08T23:58:05.316",
      "deleted": false,
      "sapinLawResponse": "NOT_ANSWERED",
      "countriesOrRegions": [
        "CA",
        "JP",
        "NZ",
        "US"
      ],
      "countryOrRegionServingStateReasons": {}
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

### Campaign Endpoints

- [Create a Campaign](create-a-campaign.md): Creates a campaign to promote an app.
- [Get a Campaign](get-a-campaign.md): Fetches a specific campaign by campaign identifier.
- [Get all Campaigns](get-all-campaigns.md): Fetches all of an organization’s assigned campaigns.
- [Update a Campaign](update-a-campaign.md): Updates a campaign with a campaign identifier.
- [Delete a Campaign](delete-a-campaign.md): Deletes a specific campaign by campaign identifier.
