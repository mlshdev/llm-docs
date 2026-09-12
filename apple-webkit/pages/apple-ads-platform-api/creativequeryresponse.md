> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/creativequeryresponse](https://developer.apple.com/documentation/apple-ads-platform-api/creativequeryresponse)

# CreativeQueryResponse

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

The response object for a Creative query, containing matched results and pagination metadata.

## Declaration

```
object CreativeQueryResponse
```

## Properties

- `result` — `[Creative]`: The matching `Creative` records. See [Creative](creative.md). Read-only.
- `pagination` — `QueryPaginationResult`: Pagination metadata for the response, including `offset`, `pageSize`, and `totalCount`. See [QueryPaginationResult](querypaginationresult.md). Read-only.
- `error` — `Error`: Error information if the request encountered an error. See [Error](error.md). Read-only.

<a id="Discussion"></a>

## Discussion

The `CreativeQueryResponse` object is returned by the ad creatives query endpoint and contains the filtered, sorted, and paginated set of `Creative` objects matching the request.

To scope results by `adAccountId`, `creativeType`, `systemStatus`, or other filterable fields, use the `QueryRequest` body with `filters`.

<a id="Example"></a>

### Example

```json
{
  "result": [
    {
      "id": 666777888,
      "adAccountId": 123456789,
      "name": "AwayFinder - Summer Campaign Creative",
      "creativeType": "CUSTOM_PRODUCT_PAGE",
      "systemStatus": "VALID",
      "deleted": false,
      "creationTime": "2025-06-01T10:00:00.000",
      "modificationTime": "2025-06-01T10:00:00.000"
    }
  ],
  "pagination": {
    "offset": 0,
    "pageSize": 20,
    "totalCount": 1
  }
}
```

## See Also

- [Creative](creative.md): Ad creative containing all data for visually rendering an ad.
- [CreativeCreate](creativecreate.md): The request body for creating a new Creative object.
- [CreativeUpdate](creativeupdate.md): The request body for updating an existing Creative object.
- [CreativeResponse](creativeresponse.md): The response object for an ad creative operation.
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
