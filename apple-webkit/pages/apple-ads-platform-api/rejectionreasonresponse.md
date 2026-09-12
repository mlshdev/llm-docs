> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/rejectionreasonresponse](https://developer.apple.com/documentation/apple-ads-platform-api/rejectionreasonresponse)

# RejectionReasonResponse

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

The response object for a rejection reason operation.

## Declaration

```
object RejectionReasonResponse
```

## Properties

- `result` — `CreativeRejectionReason`: The rejection reason record describing why an ad creative was rejected during review. See [CreativeRejectionReason](creativerejectionreason.md) for the full field reference, including `creativeId` and `reasonLevel`. Read-only.
- `error` — `Error`: Error details if the request failed. Absent on success. See [Error](error.md).

<a id="Discussion"></a>

## Discussion

The API returns `RejectionReasonResponse` as the envelope when you retrieve rejection reason details for an app.

<a id="Example"></a>

### Example

```json
{
  "result": {
    "id": 14919,
    "adamId": 987654321,
    "creativeId": 456789,
    "productPageId": "9ea4bb81-5f18-401f-bfe1-101a6ee6d328",
    "assetId": "41a91e19-e021-45bb-ac5a-5faec02f9445",
    "supplySource": "APPSTORE",
    "supplyPlacement": "APPSTORE_TODAY_TAB",
    "countryOrRegion": "US",
    "languageCode": "en-US",
    "reasonType": "REJECTION_REASON",
    "reasonCode": "APP_NOT_ELIGIBLE",
    "comment": "Product page metadata does not meet App Store review guidelines.",
    "reasonLevel": "CUSTOM_PRODUCT_PAGE_LOCALE",
    "creationTime": "2026-02-05T08:30:00.000",
    "modificationTime": "2026-03-05T08:30:00.000"
  }
}
```

## See Also

### Related Documentation

- [App Eligibility Endpoints](app-eligibility-endpoints.md): Check whether apps qualify to run ads and look up rejection reasons for creatives.

- [EligibilityQueryRequest](eligibilityqueryrequest.md): The request body for querying app eligibility.
- [EligibilityQueryResponse](eligibilityqueryresponse.md): The paginated response object for an app eligibility query.
- [AppDetailsResponse](appdetailsresponse.md): The response object for a get app details operation.
- [AppDetails](appdetails.md): Application details and metadata.
- [EligibilityResponse](eligibilityresponse.md): The response object describing an app’s eligibility for a specific supply placement, supply source, country or region, and device class.
