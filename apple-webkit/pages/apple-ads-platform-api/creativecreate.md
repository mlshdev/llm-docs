> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/creativecreate](https://developer.apple.com/documentation/apple-ads-platform-api/creativecreate)

# CreativeCreate

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

The request body for creating a new Creative object.

## Declaration

```
object CreativeCreate
```

## Properties

- `name` — `string` (required): Name of the ad creative.
  **Minimum length:** `1`
- `creativeType` — `CreativeCreate.CreativeType` (required): Type of ad creative. Determines the shape of `creativeSpec`. Immutable after creation. Possible values: `CUSTOM_PRODUCT_PAGE`, `DEFAULT_PRODUCT_PAGE`, `LOCAL_ADS_SEARCH_CREATIVE`. See [CreativeType](creativetype.md).
- `creativeSpec` — `CreativeCreate.CreativeSpec`: Provide the matching spec object for the ad creative type being created. Required when `creativeType` is `LOCAL_ADS_SEARCH_CREATIVE`. See [CreativeCreate.CreativeSpec](creativecreate/creativespec-data.dictionary.md).
- `destination` — `CreativeCreate.Destination` (required): The post-tap landing experience. For App Store placements, include `adamId` in `destination.parameters`. For Custom Product Page campaigns, also include `productPageId`. See [DestinationCreate](destinationcreate.md).

<a id="Discussion"></a>

## Discussion

Creating an ad creative defines the visual presentation and destination for an ad, before you ever attach it to an ad group. An ad creative isn’t tied to a campaign or ad group at creation, so you can reuse the same ad creative across multiple ads later.

Pick `creativeType` before filling in `creativeSpec` and `destination`, since it determines the required shape of both.

<a id="Example"></a>

### Example

```json
{
  "name": "AwayFinder - Summer Campaign Creative",
  "creativeType": "CUSTOM_PRODUCT_PAGE",
  "creativeSpec": {},
  "destination": {
    "destinationType": "APP_STORE_PRODUCT_PAGE",
    "parameters": {
      "adamId": "987654321",
      "productPageId": "76659d7a-d146-43d3-b6b8-b7a12f74bf6b"
    }
  }
}
```

## Topics

### Dictionaries

- [CreativeCreate.CreativeSpec](creativecreate/creativespec-data.dictionary.md): The ad creative spec object matching the ad creative type being created.
- [CreativeCreate.Destination](creativecreate/destination-data.dictionary.md): The post-tap landing experience specified when creating an ad creative.

### Type Aliases

- [CreativeCreate.CreativeType](creativecreate/creativetype-data.typealias.md): Type of ad creative to create. Determines the shape of `creativeSpec`.

## See Also

- [Creative](creative.md): Ad creative containing all data for visually rendering an ad.
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
