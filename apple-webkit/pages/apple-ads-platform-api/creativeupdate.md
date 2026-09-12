> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/creativeupdate](https://developer.apple.com/documentation/apple-ads-platform-api/creativeupdate)

# CreativeUpdate

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

The request body for updating an existing Creative object.

## Declaration

```
object CreativeUpdate
```

## Properties

- `name` — `string`: Name of the ad creative. Omit if you don’t intend to update. Mutable, Optional.
  **Minimum length:** `1`
- `creativeSpec` — `CreativeUpdate.CreativeSpec`: The creative spec. Updating this may trigger re-review. `systemStatus` transitions back to `PENDING`. Omit if you don’t intend to update. Mutable, Optional.

<a id="Discussion"></a>

## Discussion

To change an existing ad creative’s `name` or `creativeSpec`, use `CreativeUpdate` with `PUT /v1/creatives/{id}` ([Update an Ad Creative](put-creatives-_id_.md)). `creativeType` and `destination` are locked in at creation and can’t be changed later.

<a id="Example"></a>

### Example

```json
{
  "name": "AwayFinder - Summer Campaign Creative - Revised",
  "creativeSpec": {
    "localizedText": {
      "en-US": {
        "promoText": "New summer deals - shop now!"
      }
    },
    "brandId": "111222",
    "defaultLocale": "en-US"
  }
}
```

## Topics

### Dictionaries

- [CreativeUpdate.CreativeSpec](creativeupdate/creativespec-data.dictionary.md): The creative spec fields that can be updated after creation.

## See Also

- [Creative](creative.md): Ad creative containing all data for visually rendering an ad.
- [CreativeCreate](creativecreate.md): The request body for creating a new Creative object.
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
