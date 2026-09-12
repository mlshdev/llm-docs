> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/imagetype](https://developer.apple.com/documentation/apple-ads-platform-api/imagetype)

# ImageType

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

Image format type for an uploaded asset.

## Declaration

```
string ImageType
```

## Possible Values

- `JPEG`: JPEG image format.
- `JPG`: JPG image format.
- `PNG`: PNG image format.
- `HEIC`: HEIC (High Efficiency Image Container) format.
- `HEIF`: HEIF (High Efficiency Image Format).
- `SVG`: Scalable Vector Graphics format.
- `WEBP`: WebP image format.

<a id="Discussion"></a>

## Discussion

The `ImageType` identifies the image file format of an [Asset](asset.md). The system infers the value from the uploaded file and returns it in the asset record. The API caller doesn’t set it directly.

Uploading through [Upload Asset](upload-asset.md) only accepts PNG, JPG, and HEIC files. The remaining values (JPEG, HEIF, SVG, WEBP) can appear on assets that were sourced or created outside this upload path.

## See Also

- [AssetType](assettype.md): The media type of an asset.
- [Orientation](orientation.md): Asset orientation and aspect ratio classification.
- [AssetEligibilityStatus](asseteligibilitystatus.md): Overall eligibility status for an asset’s policy evaluation.
