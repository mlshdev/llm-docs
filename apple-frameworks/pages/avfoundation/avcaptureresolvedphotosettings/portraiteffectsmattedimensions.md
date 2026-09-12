> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureresolvedphotosettings/portraiteffectsmattedimensions](https://developer.apple.com/documentation/avfoundation/avcaptureresolvedphotosettings/portraiteffectsmattedimensions)

# portraitEffectsMatteDimensions (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

The size, in pixels, of the portrait effects matte that the capture delivers.

## Declaration

```swift
var portraitEffectsMatteDimensions: CMVideoDimensions { get }
```

## Mentioned In

- [Configuring camera capture to collect a Portrait Effects matte](../configuring-camera-capture-to-collect-a-portrait-effects-matte.md)

## See Also

### Examining output dimensions

- [photoDimensions](photodimensions.md): The size, in pixels, of the photo image (in a processed format, such as JPEG) that the capture delivers.
- [deferredPhotoProxyDimensions](deferredphotoproxydimensions.md): The resolved dimensions of the photo proxy when using deferred photo delivery.
- [rawPhotoDimensions](rawphotodimensions.md): The size, in pixels, of the RAW-format photo image that the capture delivers.
- [previewDimensions](previewdimensions.md): The size, in pixels, of the preview image that the system delivers with the capture.
- [embeddedThumbnailDimensions](embeddedthumbnaildimensions.md): The size, in pixels, of the thumbnail image that the capture delivers.
- [rawEmbeddedThumbnailDimensions](rawembeddedthumbnaildimensions.md): The size, in pixels, of the RAW-format embedded thumbnail image that the capture delivers.
- [livePhotoMovieDimensions](livephotomoviedimensions.md): The size, in pixels, of the Live Photo movie content that the capture delivers.
- [dimensionsForSemanticSegmentationMatte(ofType:)](dimensionsforsemanticsegmentationmatte%28oftype_%29.md): Retrieves the resolved dimensions of the semantic segmentation mattes that the photo output delivers.
- [photoProcessingTimeRange](photoprocessingtimerange.md): The time range in which to expect the system to deliver the photo to the delegate.

# portraitEffectsMatteDimensions (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

The size, in pixels, of the portrait effects matte that the capture delivers.

## Declaration

```objectivec
@property (readonly) CMVideoDimensions portraitEffectsMatteDimensions;
```

## Mentioned In

- [Configuring camera capture to collect a Portrait Effects matte](../configuring-camera-capture-to-collect-a-portrait-effects-matte.md)

## See Also

### Examining output dimensions

- [photoDimensions](photodimensions.md): The size, in pixels, of the photo image (in a processed format, such as JPEG) that the capture delivers.
- [deferredPhotoProxyDimensions](deferredphotoproxydimensions.md): The resolved dimensions of the photo proxy when using deferred photo delivery.
- [rawPhotoDimensions](rawphotodimensions.md): The size, in pixels, of the RAW-format photo image that the capture delivers.
- [previewDimensions](previewdimensions.md): The size, in pixels, of the preview image that the system delivers with the capture.
- [embeddedThumbnailDimensions](embeddedthumbnaildimensions.md): The size, in pixels, of the thumbnail image that the capture delivers.
- [rawEmbeddedThumbnailDimensions](rawembeddedthumbnaildimensions.md): The size, in pixels, of the RAW-format embedded thumbnail image that the capture delivers.
- [livePhotoMovieDimensions](livephotomoviedimensions.md): The size, in pixels, of the Live Photo movie content that the capture delivers.
- [dimensionsForSemanticSegmentationMatteOfType:](dimensionsforsemanticsegmentationmatte%28oftype_%29.md): Retrieves the resolved dimensions of the semantic segmentation mattes that the photo output delivers.
- [photoProcessingTimeRange](photoprocessingtimerange.md): The time range in which to expect the system to deliver the photo to the delegate.
