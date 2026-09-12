> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/destinationparameter](https://developer.apple.com/documentation/apple-ads-platform-api/destinationparameter)

# DestinationParameter

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Destination-specific identifiers used when linking an ad creative to an App Store product page.

## Declaration

```
object DestinationParameter
```

## Properties

- `adamId` — `string`: The App Store app identifier. This is the `promotedObjectId` on the campaign for App Store campaigns. Required for `APP_STORE_PRODUCT_PAGE` destinations.
- `productPageId` — `string`: The UUID of a Custom Product Page created in App Store Connect. Omit to use the default product page.

<a id="Discussion"></a>

## Discussion

The [Destination](destination.md) and [DestinationCreate](destinationcreate.md) embed `DestinationParameter`. It supplies the app and product page identifiers needed to route a tapped ad to the correct App Store listing. For non-App Store destination types (such as `LOCAL_ADS_PLACECARD`), omit this object.

<a id="Example"></a>

### Example

```json
{
  "adamId": "987654321",
  "productPageId": "76659d7a-d146-43d3-b6b8-b7a12f74bf6b"
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
- [CreativeRejectionReason](creativerejectionreason.md): Detailed rejection reason for an ad creative that failed Apple review.
- [CreativeRejectionReasonQueryRequest](creativerejectionreasonqueryrequest.md): The request body for querying ad creative rejection reasons.
- [CreativeRejectionReasonQueryResponse](creativerejectionreasonqueryresponse.md): The response object for a creative rejection reason query, containing matched results and pagination metadata.
- [LocaleInfo](localeinfo.md): Represents a specific language and its corresponding language code.
