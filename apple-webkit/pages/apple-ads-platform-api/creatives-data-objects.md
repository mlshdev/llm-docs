> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/creatives-data-objects](https://developer.apple.com/documentation/apple-ads-platform-api/creatives-data-objects)

# Ad Creatives Data Objects

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** API Collection  
**Availability:** Apple Ads Platform API 1.0+

Reference the request and response payloads used by ad creative endpoints.

## Topics

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
- [CreativeRejectionReasonQueryResponse](creativerejectionreasonqueryresponse.md): The response object for a creative rejection reason query, containing matched results and pagination metadata.
- [LocaleInfo](localeinfo.md): Represents a specific language and its corresponding language code.

## See Also

### Creatives

- [Creatives Endpoints](creatives-endpoints.md): Create, retrieve, update, and delete ad creatives through these endpoints.
- [Ad Creative Data Types](creative-data-types.md): Look up the allowed values for creative type, status, and destination type fields.
