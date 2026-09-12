> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephoto/previewpixelbuffer](https://developer.apple.com/documentation/avfoundation/avcapturephoto/previewpixelbuffer)

# previewPixelBuffer (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

The pixel data for a preview-sized version of the photo, if requested.

## Declaration

```swift
var previewPixelBuffer: CVPixelBuffer? { get }
```

## Mentioned In

- [Capturing thumbnail and preview images](../capturing-thumbnail-and-preview-images.md)

<a id="Discussion"></a>

## Discussion

If you requested a preview image by specifying the [previewPhotoFormat](../avcapturephotosettings/previewphotoformat.md) property of your photo settings when requesting capture, this property offers access to the resulting preview image pixel data. The pixel buffer contains only the minimal attachments required for correct display. If you did not request a preview image, this property’s value is `nil`.

## See Also

### Accessing preview photo data

- [embeddedThumbnailPhotoFormat](embeddedthumbnailphotoformat.md): A dictionary describing the data format for a preview-sized image accompanying the captured photo.

# previewPixelBuffer (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

The pixel data for a preview-sized version of the photo, if requested.

## Declaration

```objectivec
@property (readonly, nullable) CVPixelBufferRef previewPixelBuffer;
```

## Mentioned In

- [Capturing thumbnail and preview images](../capturing-thumbnail-and-preview-images.md)

<a id="Discussion"></a>

## Discussion

If you requested a preview image by specifying the [previewPhotoFormat](../avcapturephotosettings/previewphotoformat.md) property of your photo settings when requesting capture, this property offers access to the resulting preview image pixel data. The pixel buffer contains only the minimal attachments required for correct display. If you did not request a preview image, this property’s value is `nil`.

## See Also

### Accessing preview photo data

- [embeddedThumbnailPhotoFormat](embeddedthumbnailphotoformat.md): A dictionary describing the data format for a preview-sized image accompanying the captured photo.
