> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureresolvedphotosettings/deferredphotoproxydimensions](https://developer.apple.com/documentation/avfoundation/avcaptureresolvedphotosettings/deferredphotoproxydimensions)

# deferredPhotoProxyDimensions (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

The resolved dimensions of the photo proxy when using deferred photo delivery.

## Declaration

```swift
var deferredPhotoProxyDimensions: CMVideoDimensions { get }
```

<a id="Discussion"></a>

## Discussion

When the system returns an [AVCaptureDeferredPhotoProxy](../avcapturedeferredphotoproxy.md), the [photoDimensions](photodimensions.md) property of this object represents the dimensions of the final photo. If you don’t opt in to deferred photo delivery, this value has a width and height of 0.

## See Also

### Examining output dimensions

- [photoDimensions](photodimensions.md): The size, in pixels, of the photo image (in a processed format, such as JPEG) that the capture delivers.
- [rawPhotoDimensions](rawphotodimensions.md): The size, in pixels, of the RAW-format photo image that the capture delivers.
- [previewDimensions](previewdimensions.md): The size, in pixels, of the preview image that the system delivers with the capture.
- [embeddedThumbnailDimensions](embeddedthumbnaildimensions.md): The size, in pixels, of the thumbnail image that the capture delivers.
- [rawEmbeddedThumbnailDimensions](rawembeddedthumbnaildimensions.md): The size, in pixels, of the RAW-format embedded thumbnail image that the capture delivers.
- [livePhotoMovieDimensions](livephotomoviedimensions.md): The size, in pixels, of the Live Photo movie content that the capture delivers.
- [portraitEffectsMatteDimensions](portraiteffectsmattedimensions.md): The size, in pixels, of the portrait effects matte that the capture delivers.
- [dimensionsForSemanticSegmentationMatte(ofType:)](dimensionsforsemanticsegmentationmatte%28oftype_%29.md): Retrieves the resolved dimensions of the semantic segmentation mattes that the photo output delivers.
- [photoProcessingTimeRange](photoprocessingtimerange.md): The time range in which to expect the system to deliver the photo to the delegate.

# deferredPhotoProxyDimensions (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+

The resolved dimensions of the photo proxy when using deferred photo delivery.

## Declaration

```objectivec
@property (readonly) CMVideoDimensions deferredPhotoProxyDimensions;
```

<a id="Discussion"></a>

## Discussion

When the system returns an [AVCaptureDeferredPhotoProxy](../avcapturedeferredphotoproxy.md), the [photoDimensions](photodimensions.md) property of this object represents the dimensions of the final photo. If you don’t opt in to deferred photo delivery, this value has a width and height of 0.

## See Also

### Examining output dimensions

- [photoDimensions](photodimensions.md): The size, in pixels, of the photo image (in a processed format, such as JPEG) that the capture delivers.
- [rawPhotoDimensions](rawphotodimensions.md): The size, in pixels, of the RAW-format photo image that the capture delivers.
- [previewDimensions](previewdimensions.md): The size, in pixels, of the preview image that the system delivers with the capture.
- [embeddedThumbnailDimensions](embeddedthumbnaildimensions.md): The size, in pixels, of the thumbnail image that the capture delivers.
- [rawEmbeddedThumbnailDimensions](rawembeddedthumbnaildimensions.md): The size, in pixels, of the RAW-format embedded thumbnail image that the capture delivers.
- [livePhotoMovieDimensions](livephotomoviedimensions.md): The size, in pixels, of the Live Photo movie content that the capture delivers.
- [portraitEffectsMatteDimensions](portraiteffectsmattedimensions.md): The size, in pixels, of the portrait effects matte that the capture delivers.
- [dimensionsForSemanticSegmentationMatteOfType:](dimensionsforsemanticsegmentationmatte%28oftype_%29.md): Retrieves the resolved dimensions of the semantic segmentation mattes that the photo output delivers.
- [photoProcessingTimeRange](photoprocessingtimerange.md): The time range in which to expect the system to deliver the photo to the delegate.
