> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephoto/israwphoto](https://developer.apple.com/documentation/avfoundation/avcapturephoto/israwphoto)

# isRawPhoto (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value indicating whether this photo object contains RAW format data.

## Declaration

```swift
var isRawPhoto: Bool { get }
```

<a id="Discussion"></a>

## Discussion

When you request capture in RAW format, the capture output calls your delegate’s [photoOutput(\_:didFinishProcessingPhoto:error:)](../avcapturephotocapturedelegate/photooutput%28__didfinishprocessingphoto_error_%29.md) method one or more times, delivering both the RAW photo data and (if requested) equivalent processed photos. Use this property to distinguish between the RAW and processed results from the same capture.

## See Also

### Accessing photo pixel data

- [pixelBuffer](pixelbuffer.md): The uncompressed or RAW image sample buffer for the photo, if requested.

# rawPhoto (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value indicating whether this photo object contains RAW format data.

## Declaration

```objectivec
@property (readonly, getter=isRawPhoto) BOOL rawPhoto;
```

<a id="Discussion"></a>

## Discussion

When you request capture in RAW format, the capture output calls your delegate’s [captureOutput:didFinishProcessingPhoto:error:](../avcapturephotocapturedelegate/photooutput%28__didfinishprocessingphoto_error_%29.md) method one or more times, delivering both the RAW photo data and (if requested) equivalent processed photos. Use this property to distinguish between the RAW and processed results from the same capture.

## See Also

### Accessing photo pixel data

- [pixelBuffer](pixelbuffer.md): The uncompressed or RAW image sample buffer for the photo, if requested.
