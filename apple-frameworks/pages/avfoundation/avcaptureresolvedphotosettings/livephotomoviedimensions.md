> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureresolvedphotosettings/livephotomoviedimensions](https://developer.apple.com/documentation/avfoundation/avcaptureresolvedphotosettings/livephotomoviedimensions)

# livePhotoMovieDimensions (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

The size, in pixels, of the Live Photo movie content that the capture delivers.

## Declaration

```swift
var livePhotoMovieDimensions: CMVideoDimensions { get }
```

<a id="Discussion"></a>

## Discussion

Use the [livePhotoMovieFileURL](../avcapturephotosettings/livephotomoviefileurl.md) property in your photo settings object to request Live Photo capture. Live Photo movie dimensions can change depending on which device camera is used for capture.

This property provides dimensions for the movie content of the Live Photo, which is delivered in the [photoOutput(\_:didFinishProcessingLivePhotoToMovieFileAt:duration:photoDisplayTime:resolvedSettings:error:)](../avcapturephotocapturedelegate/photooutput%28__didfinishprocessinglivephototomoviefileat_duration_photodisplaytime_resolvedsettings_error_%29.md) method. Use this property in earlier delegate methods to find the dimensions of the movie before delivery.

For the dimensions of the static photo content of a Live Photo, see the [photoDimensions](photodimensions.md) property.

If you do not request Live Photo capture, this property’s value has zero width and zero height.

## See Also

### Examining output dimensions

- [photoDimensions](photodimensions.md): The size, in pixels, of the photo image (in a processed format, such as JPEG) that the capture delivers.
- [deferredPhotoProxyDimensions](deferredphotoproxydimensions.md): The resolved dimensions of the photo proxy when using deferred photo delivery.
- [rawPhotoDimensions](rawphotodimensions.md): The size, in pixels, of the RAW-format photo image that the capture delivers.
- [previewDimensions](previewdimensions.md): The size, in pixels, of the preview image that the system delivers with the capture.
- [embeddedThumbnailDimensions](embeddedthumbnaildimensions.md): The size, in pixels, of the thumbnail image that the capture delivers.
- [rawEmbeddedThumbnailDimensions](rawembeddedthumbnaildimensions.md): The size, in pixels, of the RAW-format embedded thumbnail image that the capture delivers.
- [portraitEffectsMatteDimensions](portraiteffectsmattedimensions.md): The size, in pixels, of the portrait effects matte that the capture delivers.
- [dimensionsForSemanticSegmentationMatte(ofType:)](dimensionsforsemanticsegmentationmatte%28oftype_%29.md): Retrieves the resolved dimensions of the semantic segmentation mattes that the photo output delivers.
- [photoProcessingTimeRange](photoprocessingtimerange.md): The time range in which to expect the system to deliver the photo to the delegate.

# livePhotoMovieDimensions (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

The size, in pixels, of the Live Photo movie content that the capture delivers.

## Declaration

```objectivec
@property (readonly) CMVideoDimensions livePhotoMovieDimensions;
```

<a id="Discussion"></a>

## Discussion

Use the [livePhotoMovieFileURL](../avcapturephotosettings/livephotomoviefileurl.md) property in your photo settings object to request Live Photo capture. Live Photo movie dimensions can change depending on which device camera is used for capture.

This property provides dimensions for the movie content of the Live Photo, which is delivered in the [captureOutput:didFinishProcessingLivePhotoToMovieFileAtURL:duration:photoDisplayTime:resolvedSettings:error:](../avcapturephotocapturedelegate/photooutput%28__didfinishprocessinglivephototomoviefileat_duration_photodisplaytime_resolvedsettings_error_%29.md) method. Use this property in earlier delegate methods to find the dimensions of the movie before delivery.

For the dimensions of the static photo content of a Live Photo, see the [photoDimensions](photodimensions.md) property.

If you do not request Live Photo capture, this property’s value has zero width and zero height.

## See Also

### Examining output dimensions

- [photoDimensions](photodimensions.md): The size, in pixels, of the photo image (in a processed format, such as JPEG) that the capture delivers.
- [deferredPhotoProxyDimensions](deferredphotoproxydimensions.md): The resolved dimensions of the photo proxy when using deferred photo delivery.
- [rawPhotoDimensions](rawphotodimensions.md): The size, in pixels, of the RAW-format photo image that the capture delivers.
- [previewDimensions](previewdimensions.md): The size, in pixels, of the preview image that the system delivers with the capture.
- [embeddedThumbnailDimensions](embeddedthumbnaildimensions.md): The size, in pixels, of the thumbnail image that the capture delivers.
- [rawEmbeddedThumbnailDimensions](rawembeddedthumbnaildimensions.md): The size, in pixels, of the RAW-format embedded thumbnail image that the capture delivers.
- [portraitEffectsMatteDimensions](portraiteffectsmattedimensions.md): The size, in pixels, of the portrait effects matte that the capture delivers.
- [dimensionsForSemanticSegmentationMatteOfType:](dimensionsforsemanticsegmentationmatte%28oftype_%29.md): Retrieves the resolved dimensions of the semantic segmentation mattes that the photo output delivers.
- [photoProcessingTimeRange](photoprocessingtimerange.md): The time range in which to expect the system to deliver the photo to the delegate.
