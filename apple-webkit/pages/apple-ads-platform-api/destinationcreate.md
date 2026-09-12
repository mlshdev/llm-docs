> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/destinationcreate](https://developer.apple.com/documentation/apple-ads-platform-api/destinationcreate)

# DestinationCreate

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Request payload for specifying the post-tap destination when creating an ad creative.

## Declaration

```
object DestinationCreate
```

## Properties

- `destinationType` — `DestinationCreate.DestinationType` (required): The type of post-tap destination. See [DestinationType](destinationtype.md). Immutable after creation.
- `parameters` — `DestinationCreate.Parameters`: Destination-specific parameters. For App Store destinations, provide `adamId` and optionally `productPageId` to link to a Custom Product Page. See [DestinationParameter](destinationparameter.md).

<a id="Discussion"></a>

## Discussion

The [CreativeCreate](creativecreate.md) embeds `DestinationCreate` to define where users go after tapping the ad.

<a id="Example"></a>

### Example

```json
{
  "destinationType": "APP_STORE_PRODUCT_PAGE",
  "parameters": {
    "adamId": "123456789",
    "productPageId": "987654321"
  }
}
```

## Topics

### Dictionaries

- [DestinationCreate.Parameters](destinationcreate/parameters-data.dictionary.md): Destination-specific parameters supplied when creating an ad creative.

### Type Aliases

- [DestinationCreate.DestinationType](destinationcreate/destinationtype-data.typealias.md): The type of post-tap destination to create.

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
- [DestinationParameter](destinationparameter.md): Destination-specific identifiers used when linking an ad creative to an App Store product page.
- [CreativeRejectionReason](creativerejectionreason.md): Detailed rejection reason for an ad creative that failed Apple review.
- [CreativeRejectionReasonQueryRequest](creativerejectionreasonqueryrequest.md): The request body for querying ad creative rejection reasons.
- [CreativeRejectionReasonQueryResponse](creativerejectionreasonqueryresponse.md): The response object for a creative rejection reason query, containing matched results and pagination metadata.
- [LocaleInfo](localeinfo.md): Represents a specific language and its corresponding language code.
