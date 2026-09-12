> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/assetreference](https://developer.apple.com/documentation/apple-ads-platform-api/assetreference)

# AssetReference

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

A reference to an asset by its UUID.

## Declaration

```
object AssetReference
```

## Properties

- `assetId` — `uuid`: The ads-generated UUID for the unified asset. Example: `550e8400-e29b-41d4-a716-446655440000`.

<a id="Discussion"></a>

## Discussion

The `AssetReference` object is a pointer to an `Asset` by its system-generated UUID, used in ad creative specs and other contexts where only the asset identifier is required. To reference specific image or video assets without embedding the full `Asset` record, use it in ad creative spec objects, such as the `creativeAssets` array within an Apple Maps ad creative’s `creativeSpec`. The `assetId` must match an asset that already exists in the system.

<a id="Example"></a>

### Example

```json
{
  "assetId": "550e8400-e29b-41d4-a716-446655440000"
}
```

## See Also

- [Creative](creative.md): Ad creative containing all data for visually rendering an ad.
- [CreativeCreate](creativecreate.md): The request body for creating a new Creative object.
- [CreativeUpdate](creativeupdate.md): The request body for updating an existing Creative object.
- [CreativeResponse](creativeresponse.md): The response object for an ad creative operation.
- [CreativeQueryResponse](creativequeryresponse.md): The response object for a Creative query, containing matched results and pagination metadata.
- [CreativeEligibility](creativeeligibility.md): Eligibility state for an ad creative across supply sources and placements.
- [AssetImage](assetimage.md): Image-specific asset detail fields.
- [Destination](destination.md): Post-tap destination entity embedded in a Creative.
- [DestinationCreate](destinationcreate.md): Request payload for specifying the post-tap destination when creating an ad creative.
- [DestinationParameter](destinationparameter.md): Destination-specific identifiers used when linking an ad creative to an App Store product page.
- [CreativeRejectionReason](creativerejectionreason.md): Detailed rejection reason for an ad creative that failed Apple review.
- [CreativeRejectionReasonQueryRequest](creativerejectionreasonqueryrequest.md): The request body for querying ad creative rejection reasons.
- [CreativeRejectionReasonQueryResponse](creativerejectionreasonqueryresponse.md): The response object for a creative rejection reason query, containing matched results and pagination metadata.
- [LocaleInfo](localeinfo.md): Represents a specific language and its corresponding language code.
