> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/apple_ads/find-app-eligibility-records](https://developer.apple.com/documentation/apple_ads/find-app-eligibility-records)

# Find App Eligibility Records

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Web Service Endpoint  
**Availability:** Search Ads 5.0+

Fetches app eligibility records by adam ID.

## URL

```http
POST https://api.searchads.apple.com/api/v5/apps/{adamId}/eligibilities/find
```

## Path Parameters

- `adamId` — `string` (required): A unique App Store app identifier.

## HTTP Body

Content type: `application/json`

Type: `Selector`

The request body that includes the selector [Condition](condition.md). [Selector](selector.md) objects define what data the API returns when fetching resources.

## Response Codes

- `200` OK — `EligibilityRecordListResponse`: If the call succeeds, the API returns an [EligibilityRecord](eligibilityrecord.md) in the response payload with an HTTP status code of `200(OK)`. If unsuccessful, the HTTP status code indicates the error with details in the error message.
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

Use this endpoint to determine whether an app is eligible to promote in a campaign. Use a [Selector](selector.md) [Condition](condition.md) to search for a specific country or region, [DeviceClass](deviceclass.md), [AgeCriteria](agecriteria.md), or [SupplySource](supplysource.md).  See the [EligibilityRecord](eligibilityrecord.md) object for parameter descriptions and selector condition operators.

<a id="Payload-example-Find-app-eligibility-records"></a>

### Payload example: Find app eligibility records

**Request**

```
POST https://api.searchads.apple.com/api/v5/apps/<adamId>/eligibilities/find

{
    "conditions": [
        {
            "field": "countryOrRegion",
            "operator": "IN",
            "values": ["US", "MX"]
        },
        {
            "field": "supplySource",
            "operator": "EQUALS",
            "values": ["APPSTORE_TODAY_TAB"]
        }
    ],
    "pagination": {
        "offset": 0,
        "limit": 2
    }
}
```

**Response**

```json
{
    "data": [
        {
            "adamId": 123456789,
            "deviceClass": "IPHONE",
            "state": "ELIGIBLE",
            "minAge": 18,
            "countryOrRegion": "US",
            "supplySource": "APPSTORE_TODAY_TAB"
        },
        {
            "adamId": 123456789,
            "deviceClass": "IPAD",
            "state": "INELIGIBLE",
            "minAge": 18,
            "countryOrRegion": "US",
            "supplySource": "APPSTORE_TODAY_TAB"
        }
    ],
    "pagination": {
        "totalResults": 4,
        "startIndex": 0,
        "itemsPerPage": 2
    }
}
```
