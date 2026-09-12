> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/orientation](https://developer.apple.com/documentation/apple-ads-platform-api/orientation)

# Orientation

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

Asset orientation and aspect ratio classification.

## Declaration

```
string Orientation
```

## Possible Values

- `PORTRAIT`: The asset is taller than it is wide (height \> width).
- `LANDSCAPE`: The asset is wider than it is tall (width \> height).
- `SQUARE`: The asset has equal width and height.

<a id="Discussion"></a>

## Discussion

The `Orientation` classifies the aspect ratio of an image or video asset. The system determines the value from the asset’s pixel dimensions when you upload the asset, and returns it as part of the [Asset](asset.md) record.

## See Also

- [AssetType](assettype.md): The media type of an asset.
- [ImageType](imagetype.md): Image format type for an uploaded asset.
- [AssetEligibilityStatus](asseteligibilitystatus.md): Overall eligibility status for an asset’s policy evaluation.
