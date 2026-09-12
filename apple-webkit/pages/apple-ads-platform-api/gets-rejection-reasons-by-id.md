> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/gets-rejection-reasons-by-id](https://developer.apple.com/documentation/apple-ads-platform-api/gets-rejection-reasons-by-id)

# Get Rejection Reasons

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Web Service Endpoint  
**Availability:** Apple Ads Platform API 1.0+

Retrieve the details of an ad creative rejection reason by ID.

## URL

```http
GET https://api.ads.apple.com/v1/rejection-reasons/apps/{rejectionReasonId}
```

## Path Parameters

- `rejectionReasonId` — `int64` (required):

## Header Parameters

- `X-Ap-Context` — `string` (required):

## Response Codes

- `200` OK — `RejectionReasonResponse`:
- `400` Bad Request — `Error`:
- `401` Unauthorized — `Error`:
- `403` Forbidden — `Error`:
- `404` Not Found — `Error`:
- `429` Too Many Requests — `Error`:
- `500` Internal Server Error — `Error`:

<a id="Discussion"></a>

## Discussion

This endpoint retrieves the details of a specific ad creative rejection reason by its identifier, including the reason code and description. See [CreativeRejectionReason](creativerejectionreason.md) for the full field reference, including `creativeId` and the `reasonLevel` values.

<a id="Payload-Examples"></a>

## Payload Examples

**Get Rejection Reasons**

<a id="Request"></a>

### Request

Retrieves the details of a specific ad creative rejection reason by its identifier, including the reason code and description.

```
GET https://api.ads.apple.com/v1/rejection-reasons/apps/112233445
```

<a id="Response"></a>

### Response

```json
{
 "result": {
   "id": 112233445,
   "adamId": 123456789,
   "creativeId": 456789,
   "productPageId": "1a2b3c4d-0001",
   "assetId": null,
   "supplySource": "APPSTORE",
   "supplyPlacement": "APPSTORE_SEARCH_RESULTS",
   "countryOrRegion": "US",
   "languageCode": "en-US",
   "reasonType": "REJECTION_REASON",
   "reasonCode": "APP_NOT_ELIGIBLE",
   "comment": null,
   "reasonLevel": "CUSTOM_PRODUCT_PAGE_LOCALE",
   "creationTime": "2026-02-05T08:30:00.000",
   "modificationTime": "2026-03-05T08:30:00.000"
 }
}
```

## See Also

### Related Documentation

- [App Eligibility Endpoints](app-eligibility-endpoints.md): Check whether apps qualify to run ads and look up rejection reasons for creatives.

- [Check App Eligibility](find-apps-eligibilities.md): Check whether an app is eligible to run on certain Apple Ads placements and in specific countries or regions.
- [Query Rejection Reasons](find-rejection-reasons.md): Query ad creative rejection reasons for apps and return why each ad creative failed approval.
