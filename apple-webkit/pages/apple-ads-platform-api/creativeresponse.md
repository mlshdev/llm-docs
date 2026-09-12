> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/creativeresponse](https://developer.apple.com/documentation/apple-ads-platform-api/creativeresponse)

# CreativeResponse

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

The response object for an ad creative operation.

## Declaration

```
object CreativeResponse
```

## Properties

- `result` — `Creative`: The full `Creative` object, populated on success and null on failure. See [Creative](creative.md). Read-only.
- `error` — `Error`: Error details, populated on failure. See [Error](error.md). Read-only.

<a id="Discussion"></a>

## Discussion

The `CreativeResponse` object is the single-item response envelope returned by ad creative create, read, and update operations.

<a id="Example"></a>

### Example

```json
{
  "result": {
    "id": 666777888,
    "adAccountId": 123456789,
    "name": "AwayFinder - Summer Campaign Creative",
    "creativeType": "CUSTOM_PRODUCT_PAGE",
    "creativeSpec": {},
    "destination": {
      "destinationType": "APP_STORE_PRODUCT_PAGE",
      "parameters": {
        "adamId": "987654321",
        "productPageId": "76659d7a-d146-43d3-b6b8-b7a12f74bf6b"
      },
      "url": "https://apps.apple.com/us/app/id/987654321"
    },
    "systemStatus": "VALID",
    "systemStatusReasons": [],
    "creationTime": "2025-06-01T10:00:00.000",
    "modificationTime": "2025-06-01T10:00:00.000",
    "eligibility": {
      "status": "ELIGIBLE",
      "allowedGroups": [
        {
          "supplyPlacement": ["APPSTORE_SEARCH_RESULTS"],
          "countryOrRegion": ["US"]
        }
      ],
      "blockedGroups": []
    }
  }
}
```

## See Also

- [Creative](creative.md): Ad creative containing all data for visually rendering an ad.
- [CreativeCreate](creativecreate.md): The request body for creating a new Creative object.
- [CreativeUpdate](creativeupdate.md): The request body for updating an existing Creative object.
- [CreativeQueryResponse](creativequeryresponse.md): The response object for a Creative query, containing matched results and pagination metadata.
- [CreativeEligibility](creativeeligibility.md): Eligibility state for an ad creative across supply sources and placements.
- [AssetReference](assetreference.md): A reference to an asset by its UUID.
- [AssetImage](assetimage.md): Image-specific asset detail fields.
- [Destination](destination.md): Post-tap destination entity embedded in a Creative.
- [DestinationCreate](destinationcreate.md): Request payload for specifying the post-tap destination when creating an ad creative.
- [DestinationParameter](destinationparameter.md): Destination-specific identifiers used when linking an ad creative to an App Store product page.
- [CreativeRejectionReason](creativerejectionreason.md): Detailed rejection reason for an ad creative that failed Apple review.
- [CreativeRejectionReasonQueryRequest](creativerejectionreasonqueryrequest.md): The request body for querying ad creative rejection reasons.
- [CreativeRejectionReasonQueryResponse](creativerejectionreasonqueryresponse.md): The response object for a creative rejection reason query, containing matched results and pagination metadata.
- [LocaleInfo](localeinfo.md): Represents a specific language and its corresponding language code.
