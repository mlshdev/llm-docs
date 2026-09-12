> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotosettings/availablepreviewphotopixelformattypes-30d9](https://developer.apple.com/documentation/avfoundation/avcapturephotosettings/availablepreviewphotopixelformattypes-30d9)

# availablePreviewPhotoPixelFormatTypes

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 17.0+

An array of available of pixel format types available to specify a preview photo format.

## Declaration

```swift
@nonobjc var availablePreviewPhotoPixelFormatTypes: [OSType] { get }
```

<a id="Discussion"></a>

## Discussion

The array is sorted so that preview formats requiring fewer conversions come first.

## See Also

### Enabling preview and thumbnail delivery

- [previewPhotoFormat](previewphotoformat.md): A dictionary describing the format for delivery of preview-sized images alongside the main photo.
- [embeddedThumbnailPhotoFormat](embeddedthumbnailphotoformat.md): A dictionary describing the format for delivery of thumbnail images embedded in photo file output.
- [availableRawEmbeddedThumbnailPhotoCodecTypes](availablerawembeddedthumbnailphotocodectypes.md): An array of video codec types compatible with the photo settings for embedding raw thumbnail images in photo file output.
- [rawEmbeddedThumbnailPhotoFormat](rawembeddedthumbnailphotoformat.md): A dictionary describing the format for delivery of raw thumbnail images embedded in photo file output.
- [availableEmbeddedThumbnailPhotoCodecTypes](availableembeddedthumbnailphotocodectypes.md): An array of video codec types compatible with the photo settings for embedding thumbnail images in photo file output.
