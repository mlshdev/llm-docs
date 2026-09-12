> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephoto/embeddedthumbnailphotoformat](https://developer.apple.com/documentation/avfoundation/avcapturephoto/embeddedthumbnailphotoformat)

# embeddedThumbnailPhotoFormat (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A dictionary describing the data format for a preview-sized image accompanying the captured photo.

## Declaration

```swift
var embeddedThumbnailPhotoFormat: [String : Any]? { get }
```

<a id="Discussion"></a>

## Discussion

See [Video settings](../video-settings.md) for possible keys and values.

If you requested an embedded thumbnail image by specifying the [embeddedThumbnailPhotoFormat](../avcapturephotosettings/embeddedthumbnailphotoformat.md) property of your photo settings when requesting capture, this property’s value is the resolved video settings dictionary for the embedded thumbnail image. If you did not request an embedded thumbnail image, this property’s value is `nil`.

## See Also

### Accessing preview photo data

- [previewPixelBuffer](previewpixelbuffer.md): The pixel data for a preview-sized version of the photo, if requested.

# embeddedThumbnailPhotoFormat (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A dictionary describing the data format for a preview-sized image accompanying the captured photo.

## Declaration

```objectivec
@property (readonly, nullable) NSDictionary<NSString *,id> * embeddedThumbnailPhotoFormat;
```

<a id="Discussion"></a>

## Discussion

See [Video settings](../video-settings.md) for possible keys and values.

If you requested an embedded thumbnail image by specifying the [embeddedThumbnailPhotoFormat](../avcapturephotosettings/embeddedthumbnailphotoformat.md) property of your photo settings when requesting capture, this property’s value is the resolved video settings dictionary for the embedded thumbnail image. If you did not request an embedded thumbnail image, this property’s value is `nil`.

## See Also

### Accessing preview photo data

- [previewPixelBuffer](previewpixelbuffer.md): The pixel data for a preview-sized version of the photo, if requested.
