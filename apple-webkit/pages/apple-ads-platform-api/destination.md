> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/destination](https://developer.apple.com/documentation/apple-ads-platform-api/destination)

# Destination

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Post-tap destination entity embedded in a Creative.

## Declaration

```
object Destination
```

## Properties

- `destinationType` — `Destination.DestinationType`: The type of post-tap destination. See [DestinationType](destinationtype.md). Immutable after creation.
- `parameters` — `Destination.Parameters`: Destination-specific parameters. Sub-fields: adamId (App Store app identifier, required), productPageId (UUID of a Custom Product Page created in App Store Connect, nullable string UUID, omit to use the default product page). Immutable after creation.
- `url` — `string`: The resolved destination URL. Read-only, computed by the system from `destinationType` and `parameters`.

<a id="Discussion"></a>

## Discussion

The `Destination` object specifies where a tap on the ad sends users. The `destinationType` field is immutable after creation, so changing the destination type requires creating a new ad creative.

For Ads on Apple Maps, `LOCAL_ADS_PLACECARD` is the supported `destinationType`, directing users to the brand’s Maps place card.

<a id="Example"></a>

### Example

```json
{
  "destinationType": "APP_STORE_PRODUCT_PAGE",
  "parameters": {
    "adamId": "987654321",
    "productPageId": "76659d7a-d146-43d3-b6b8-b7a12f74bf6b"
  },
  "url": "https://apps.apple.com/us/app/id/987654321"
}
```

## Topics

### Dictionaries

- [Destination.Parameters](destination/parameters-data.dictionary.md): Destination-specific parameters for the post-tap experience.

### Type Aliases

- [Destination.DestinationType](destination/destinationtype-data.typealias.md): The type of post-tap destination.

## See Also

- [Creative](creative.md): Ad creative containing all data for visually rendering an ad.
- [CreativeCreate](creativecreate.md): The request body for creating a new Creative object.
- [CreativeUpdate](creativeupdate.md): The request body for updating an existing Creative object.
- [CreativeResponse](creativeresponse.md): The response object for an ad creative operation.
- [CreativeQueryResponse](creativequeryresponse.md): The response object for a Creative query, containing matched results and pagination metadata.
- [CreativeEligibility](creativeeligibility.md): Eligibility state for an ad creative across supply sources and placements.
- [AssetReference](assetreference.md): A reference to an asset by its UUID.
- [AssetImage](assetimage.md): Image-specific asset detail fields.
- [DestinationCreate](destinationcreate.md): Request payload for specifying the post-tap destination when creating an ad creative.
- [DestinationParameter](destinationparameter.md): Destination-specific identifiers used when linking an ad creative to an App Store product page.
- [CreativeRejectionReason](creativerejectionreason.md): Detailed rejection reason for an ad creative that failed Apple review.
- [CreativeRejectionReasonQueryRequest](creativerejectionreasonqueryrequest.md): The request body for querying ad creative rejection reasons.
- [CreativeRejectionReasonQueryResponse](creativerejectionreasonqueryresponse.md): The response object for a creative rejection reason query, containing matched results and pagination metadata.
- [LocaleInfo](localeinfo.md): Represents a specific language and its corresponding language code.
