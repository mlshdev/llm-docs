> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureresolvedphotosettings/photoprocessingtimerange](https://developer.apple.com/documentation/avfoundation/avcaptureresolvedphotosettings/photoprocessingtimerange)

# photoProcessingTimeRange (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

The time range in which to expect the system to deliver the photo to the delegate.

## Declaration

```swift
var photoProcessingTimeRange: CMTimeRange { get }
```

<a id="Discussion"></a>

## Discussion

Indicates the processing time range you can expect for this photo to be delivered to your delegate. the .start field of the CMTimeRange is zero-based. In other words, if photoProcessingTimeRange.start is equal to .5 seconds, then the minimum processing time for this photo is .5 seconds. The .start field plus the .duration field of the CMTimeRange indicate the max expected processing time for this photo. Consider implementing a UI affordance if the max processing time is uncomfortably long.

## See Also

### Examining output dimensions

- [photoDimensions](photodimensions.md): The size, in pixels, of the photo image (in a processed format, such as JPEG) that the capture delivers.
- [deferredPhotoProxyDimensions](deferredphotoproxydimensions.md): The resolved dimensions of the photo proxy when using deferred photo delivery.
- [rawPhotoDimensions](rawphotodimensions.md): The size, in pixels, of the RAW-format photo image that the capture delivers.
- [previewDimensions](previewdimensions.md): The size, in pixels, of the preview image that the system delivers with the capture.
- [embeddedThumbnailDimensions](embeddedthumbnaildimensions.md): The size, in pixels, of the thumbnail image that the capture delivers.
- [rawEmbeddedThumbnailDimensions](rawembeddedthumbnaildimensions.md): The size, in pixels, of the RAW-format embedded thumbnail image that the capture delivers.
- [livePhotoMovieDimensions](livephotomoviedimensions.md): The size, in pixels, of the Live Photo movie content that the capture delivers.
- [portraitEffectsMatteDimensions](portraiteffectsmattedimensions.md): The size, in pixels, of the portrait effects matte that the capture delivers.
- [dimensionsForSemanticSegmentationMatte(ofType:)](dimensionsforsemanticsegmentationmatte%28oftype_%29.md): Retrieves the resolved dimensions of the semantic segmentation mattes that the photo output delivers.

# photoProcessingTimeRange (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

The time range in which to expect the system to deliver the photo to the delegate.

## Declaration

```objectivec
@property (readonly) CMTimeRange photoProcessingTimeRange;
```

<a id="Discussion"></a>

## Discussion

Indicates the processing time range you can expect for this photo to be delivered to your delegate. the .start field of the CMTimeRange is zero-based. In other words, if photoProcessingTimeRange.start is equal to .5 seconds, then the minimum processing time for this photo is .5 seconds. The .start field plus the .duration field of the CMTimeRange indicate the max expected processing time for this photo. Consider implementing a UI affordance if the max processing time is uncomfortably long.

## See Also

### Examining output dimensions

- [photoDimensions](photodimensions.md): The size, in pixels, of the photo image (in a processed format, such as JPEG) that the capture delivers.
- [deferredPhotoProxyDimensions](deferredphotoproxydimensions.md): The resolved dimensions of the photo proxy when using deferred photo delivery.
- [rawPhotoDimensions](rawphotodimensions.md): The size, in pixels, of the RAW-format photo image that the capture delivers.
- [previewDimensions](previewdimensions.md): The size, in pixels, of the preview image that the system delivers with the capture.
- [embeddedThumbnailDimensions](embeddedthumbnaildimensions.md): The size, in pixels, of the thumbnail image that the capture delivers.
- [rawEmbeddedThumbnailDimensions](rawembeddedthumbnaildimensions.md): The size, in pixels, of the RAW-format embedded thumbnail image that the capture delivers.
- [livePhotoMovieDimensions](livephotomoviedimensions.md): The size, in pixels, of the Live Photo movie content that the capture delivers.
- [portraitEffectsMatteDimensions](portraiteffectsmattedimensions.md): The size, in pixels, of the portrait effects matte that the capture delivers.
- [dimensionsForSemanticSegmentationMatteOfType:](dimensionsforsemanticsegmentationmatte%28oftype_%29.md): Retrieves the resolved dimensions of the semantic segmentation mattes that the photo output delivers.
