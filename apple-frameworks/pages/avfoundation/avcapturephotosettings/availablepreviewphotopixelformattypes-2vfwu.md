> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotosettings/availablepreviewphotopixelformattypes-2vfwu](https://developer.apple.com/documentation/avfoundation/avcapturephotosettings/availablepreviewphotopixelformattypes-2vfwu)

# availablePreviewPhotoPixelFormatTypes

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

An array of pixel format types compatible with the photo settings for delivery of preview-sized images.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<NSNumber *> * availablePreviewPhotoPixelFormatTypes;
```

<a id="Discussion"></a>

## Discussion

To enable delivery of preview-sized images along with the main image captured by a photo output, set the [previewPhotoFormat](previewphotoformat.md) property using one of the [kCVPixelBufferPixelFormatTypeKey](../../corevideo/kcvpixelbufferpixelformattypekey.md) values listed in this array.

The order of this array is such that the format requiring the least conversion is listed first.

## See Also

### Enabling preview and thumbnail delivery

- [previewPhotoFormat](previewphotoformat.md): A dictionary describing the format for delivery of preview-sized images alongside the main photo.
- [embeddedThumbnailPhotoFormat](embeddedthumbnailphotoformat.md): A dictionary describing the format for delivery of thumbnail images embedded in photo file output.
- [availableRawEmbeddedThumbnailPhotoCodecTypes](availablerawembeddedthumbnailphotocodectypes.md): An array of video codec types compatible with the photo settings for embedding raw thumbnail images in photo file output.
- [rawEmbeddedThumbnailPhotoFormat](rawembeddedthumbnailphotoformat.md): A dictionary describing the format for delivery of raw thumbnail images embedded in photo file output.
- [availableEmbeddedThumbnailPhotoCodecTypes](availableembeddedthumbnailphotocodectypes.md): An array of video codec types compatible with the photo settings for embedding thumbnail images in photo file output.
