> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/assetimage](https://developer.apple.com/documentation/apple-ads-platform-api/assetimage)

# AssetImage

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Image-specific asset detail fields.

## Declaration

```
object AssetImage
```

## Properties

- `adAccountId` — `string`: Ad account identifier. Present for custom assets. Read-only.
- `width` — `int64`: Width of the image in pixels. Read-only.
- `height` — `int64`: Height of the image in pixels. Read-only.
- `format` — `ImageType`: Image format. Possible values: `JPEG`, `JPG`, `PNG`, `HEIC`, `HEIF`, `SVG`, `WEBP`. Read-only.
- `sizeBytes` — `int64`: File size in bytes. Read-only.
- `orientation` — `Orientation`: Image orientation. Possible values: `PORTRAIT`, `LANDSCAPE`, `SQUARE`. Read-only.
- `providerAssetUrl` — `string`: Source URL of the image at the provider system. Read-only.
- `providerToken` — `string`: Provider-specific authentication or access token. Read-only.
- `checkSum` — `string`: File checksum for verifying asset integrity after transfer. Read-only.
- `sortPosition` — `int64`: Display order position within an asset collection. Read-only.

<a id="Discussion"></a>

## Discussion

The `AssetImage` object contains the image-specific metadata for an asset when `assetType` is `IMAGE`. All fields are read-only, and the system populates them when it ingests the asset from the provider. To verify the asset meets size requirements for a given ad placement, use `width`, `height`, and `orientation`.

<a id="Example"></a>

### Example

```json
{
  "adAccountId": 555666777,
  "width": 1284,
  "height": 2778,
  "format": "PNG",
  "sizeBytes": 2456789,
  "orientation": "PORTRAIT",
  "providerAssetUrl": "https://is5-ssl.mzstatic.com/image/thumb/AwayFinder123/v4/9b/7a/a4/screenshot.png/2048x2732.png",
  "providerToken": "AwayFinder123/v4/9b/7a/a4/screenshot.png",
  "checkSum": "a3c2e1d4b5f6",
  "sortPosition": 1
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
- [Destination](destination.md): Post-tap destination entity embedded in a Creative.
- [DestinationCreate](destinationcreate.md): Request payload for specifying the post-tap destination when creating an ad creative.
- [DestinationParameter](destinationparameter.md): Destination-specific identifiers used when linking an ad creative to an App Store product page.
- [CreativeRejectionReason](creativerejectionreason.md): Detailed rejection reason for an ad creative that failed Apple review.
- [CreativeRejectionReasonQueryRequest](creativerejectionreasonqueryrequest.md): The request body for querying ad creative rejection reasons.
- [CreativeRejectionReasonQueryResponse](creativerejectionreasonqueryresponse.md): The response object for a creative rejection reason query, containing matched results and pagination metadata.
- [LocaleInfo](localeinfo.md): Represents a specific language and its corresponding language code.
