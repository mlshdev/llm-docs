> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotosettings/availablerawembeddedthumbnailphotocodectypes](https://developer.apple.com/documentation/avfoundation/avcapturephotosettings/availablerawembeddedthumbnailphotocodectypes)

# availableRawEmbeddedThumbnailPhotoCodecTypes (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

An array of video codec types compatible with the photo settings for embedding raw thumbnail images in photo file output.

## Declaration

```swift
var availableRawEmbeddedThumbnailPhotoCodecTypes: [AVVideoCodecType] { get }
```

## See Also

### Enabling preview and thumbnail delivery

- [previewPhotoFormat](previewphotoformat.md): A dictionary describing the format for delivery of preview-sized images alongside the main photo.
- [availablePreviewPhotoPixelFormatTypes](availablepreviewphotopixelformattypes-30d9.md): An array of available of pixel format types available to specify a preview photo format.
- [embeddedThumbnailPhotoFormat](embeddedthumbnailphotoformat.md): A dictionary describing the format for delivery of thumbnail images embedded in photo file output.
- [rawEmbeddedThumbnailPhotoFormat](rawembeddedthumbnailphotoformat.md): A dictionary describing the format for delivery of raw thumbnail images embedded in photo file output.
- [availableEmbeddedThumbnailPhotoCodecTypes](availableembeddedthumbnailphotocodectypes.md): An array of video codec types compatible with the photo settings for embedding thumbnail images in photo file output.

# availableRawEmbeddedThumbnailPhotoCodecTypes (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

An array of video codec types compatible with the photo settings for embedding raw thumbnail images in photo file output.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<NSString *> * availableRawEmbeddedThumbnailPhotoCodecTypes;
```

## See Also

### Enabling preview and thumbnail delivery

- [previewPhotoFormat](previewphotoformat.md): A dictionary describing the format for delivery of preview-sized images alongside the main photo.
- [availablePreviewPhotoPixelFormatTypes](availablepreviewphotopixelformattypes-2vfwu.md): An array of pixel format types compatible with the photo settings for delivery of preview-sized images.
- [embeddedThumbnailPhotoFormat](embeddedthumbnailphotoformat.md): A dictionary describing the format for delivery of thumbnail images embedded in photo file output.
- [rawEmbeddedThumbnailPhotoFormat](rawembeddedthumbnailphotoformat.md): A dictionary describing the format for delivery of raw thumbnail images embedded in photo file output.
- [availableEmbeddedThumbnailPhotoCodecTypes](availableembeddedthumbnailphotocodectypes.md): An array of video codec types compatible with the photo settings for embedding thumbnail images in photo file output.
