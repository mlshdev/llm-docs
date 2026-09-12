> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/creativerejectionreasonqueryrequest](https://developer.apple.com/documentation/apple-ads-platform-api/creativerejectionreasonqueryrequest)

# CreativeRejectionReasonQueryRequest

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

The request body for querying ad creative rejection reasons.

## Declaration

```
object CreativeRejectionReasonQueryRequest
```

## Properties

- `filters` — `[QueryFilter]`: Scopes results to specific ad creatives or rejection reason types. Accepts `QueryFilter` objects targeting filterable fields such as `adamId`, to retrieve rejection reasons for a specific app. See [QueryFilter](queryfilter.md).
- `sorting` — `[QuerySort]`: Standard `QueryRequest` sorting for the result set. See [QuerySort](querysort.md).
- `pagination` — `QueryPagination`: Standard `QueryRequest` pagination for navigating large result sets. See [QueryPagination](querypagination.md).

<a id="Discussion"></a>

## Discussion

The `CreativeRejectionReasonQueryRequest` object is the request body for querying ad creative rejection reasons.

<a id="Example"></a>

### Example

```json
{
  "filters": [
    {
      "field": "adamId",
      "operator": "EQUALS",
      "value": 123456789
    }
  ],
  "sorting": [
    {
      "field": "creationTime",
      "order": "DESC"
    }
  ],
  "pagination": {
    "pageSize": 20,
    "offset": 0
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
- [CreativeRejectionReasonQueryResponse](creativerejectionreasonqueryresponse.md): The response object for a creative rejection reason query, containing matched results and pagination metadata.
- [LocaleInfo](localeinfo.md): Represents a specific language and its corresponding language code.
