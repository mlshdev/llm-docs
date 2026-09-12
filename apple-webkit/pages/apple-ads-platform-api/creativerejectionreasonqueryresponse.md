> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/creativerejectionreasonqueryresponse](https://developer.apple.com/documentation/apple-ads-platform-api/creativerejectionreasonqueryresponse)

# CreativeRejectionReasonQueryResponse

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

The response object for a creative rejection reason query, containing matched results and pagination metadata.

## Declaration

```
object CreativeRejectionReasonQueryResponse
```

## Properties

- `result` — `[CreativeRejectionReason]`: The matching rejection reason records. See [CreativeRejectionReason](creativerejectionreason.md). Read-only.
- `pagination` — `QueryPaginationResult`: Pagination metadata for the response, including `offset`, `pageSize`, and `totalCount`. See [QueryPaginationResult](querypaginationresult.md). Read-only.
- `error` — `Error`: Error information if the request encountered an error. See [Error](error.md). Read-only.

<a id="Discussion"></a>

## Discussion

The `CreativeRejectionReasonQueryResponse` object is returned by the creative rejection reason query endpoint.

To understand why an ad creative’s `systemStatus` is `INVALID` and which specific policy or format requirements it failed to meet, use this response.

<a id="Example"></a>

### Example

```json
{
  "result": [
    {
      "id": 555666777,
      "adamId": 123456789,
      "creativeId": 666777888,
      "productPageId": "987654321",
      "assetId": null,
      "supplySource": "APPSTORE",
      "supplyPlacement": "APPSTORE_SEARCH_TAB",
      "countryOrRegion": "US",
      "languageCode": "en-US",
      "reasonType": "REJECTION_REASON",
      "reasonCode": "SCREENSHOT_NOT_REPRESENTATIVE",
      "comment": "Screenshot does not accurately represent the AwayFinder app experience.",
      "reasonLevel": "CUSTOM_PRODUCT_PAGE_LOCALE",
      "creationTime": "2025-01-10T08:00:00.000",
      "modificationTime": "2025-01-10T08:00:00.000"
    }
  ],
  "pagination": {
    "pageSize": 20,
    "offset": 0,
    "totalCount": 1
  }
}
```

## See Also

- [Creative](creative.md): Ad creative containing all data for visually rendering an ad.
- [CreativeCreate](creativecreate.md): The request body for creating a new Creative object.
- [CreativeUpdate](creativeupdate.md): The request body for updating an existing Creative object.
- [CreativeResponse](creativeresponse.md): The response object for an ad creative operation.
- [CreativeQueryResponse](creativequeryresponse.md): The response object for a Creative query, containing matched results and pagination metadata.
- [CreativeEligibility](creativeeligibility.md): Eligibility state for an ad creative across supply sources and placements.
- [AssetReference](assetreference.md): A reference to an asset by its UUID.
- [AssetImage](assetimage.md): Image-specific asset detail fields.
- [Destination](destination.md): Post-tap destination entity embedded in a Creative.
- [DestinationCreate](destinationcreate.md): Request payload for specifying the post-tap destination when creating an ad creative.
- [DestinationParameter](destinationparameter.md): Destination-specific identifiers used when linking an ad creative to an App Store product page.
- [CreativeRejectionReason](creativerejectionreason.md): Detailed rejection reason for an ad creative that failed Apple review.
- [CreativeRejectionReasonQueryRequest](creativerejectionreasonqueryrequest.md): The request body for querying ad creative rejection reasons.
- [LocaleInfo](localeinfo.md): Represents a specific language and its corresponding language code.
