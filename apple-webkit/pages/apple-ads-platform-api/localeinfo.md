> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/localeinfo](https://developer.apple.com/documentation/apple-ads-platform-api/localeinfo)

# LocaleInfo

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Represents a specific language and its corresponding language code.

## Declaration

```
object LocaleInfo
```

## Properties

- `language` — `string`: Language identifier (for example, “en”, “es”). Read-only.
- `languageCode` — `string`: BCP-47 language code (for example, “en-US”, “es-MX”). Read-only.

<a id="Discussion"></a>

## Discussion

The `LocaleInfo` object pairs a two-letter language identifier with its full BCP-47 locale code. Use it when you need to communicate both the base language (`language`) and the regional variant (`languageCode`) together, for example when enumerating the locales supported by a product page or brand creative.

The `language` field corresponds to the ISO 639-1 language code (for example, `en`, `fr`, `ja`). The `languageCode` field includes the region subtag as required by BCP-47 (for example, `en-US`, `fr-FR`, `ja-JP`). When building locale-aware creative specs, use `languageCode` as the map key in `localizedText` structures.

<a id="Example"></a>

### Example

```json
{
  "language": "en",
  "languageCode": "en-US"
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
- [CreativeRejectionReasonQueryRequest](creativerejectionreasonqueryrequest.md): The request body for querying ad creative rejection reasons.
- [CreativeRejectionReasonQueryResponse](creativerejectionreasonqueryresponse.md): The response object for a creative rejection reason query, containing matched results and pagination metadata.
