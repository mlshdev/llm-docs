> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureresolvedphotosettings/expectedphotocount](https://developer.apple.com/documentation/avfoundation/avcaptureresolvedphotosettings/expectedphotocount)

# expectedPhotoCount (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+

The number of photo capture results in the capture request.

## Declaration

```swift
var expectedPhotoCount: Int { get }
```

## Mentioned In

- [Capturing a bracketed photo sequence](../capturing-a-bracketed-photo-sequence.md)
- [Tracking photo capture progress](../tracking-photo-capture-progress.md)

<a id="Discussion"></a>

## Discussion

When you request a photo capture, the photo output calls your delegate’s [photoOutput(\_:didFinishProcessingPhoto:error:)](../avcapturephotocapturedelegate/photooutput%28__didfinishprocessingphoto_error_%29.md) method many times based on the settings you choose. For example, if you request a bracket of three exposures with image delivery in both JPEG and RAW formats, the expected photo count is `6`.

The [photoCount](../avcapturephoto/photocount.md) property of each [AVCapturePhoto](../avcapturephoto.md) object delivered to your delegate indicates where that capture result relates to this sequence. When your delegate receives a photo whose [photoCount](../avcapturephoto/photocount.md) value matches the [expectedPhotoCount](expectedphotocount.md), you know you’ve received the last one for the given capture request.

## See Also

### Resolving photo capture requests

- [uniqueID](uniqueid.md): The unique identifier for the photo capture this settings object corresponds to.

# expectedPhotoCount (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+

The number of photo capture results in the capture request.

## Declaration

```objectivec
@property (readonly) NSUInteger expectedPhotoCount;
```

## Mentioned In

- [Capturing a bracketed photo sequence](../capturing-a-bracketed-photo-sequence.md)
- [Tracking photo capture progress](../tracking-photo-capture-progress.md)

<a id="Discussion"></a>

## Discussion

When you request a photo capture, the photo output calls your delegate’s [captureOutput:didFinishProcessingPhoto:error:](../avcapturephotocapturedelegate/photooutput%28__didfinishprocessingphoto_error_%29.md) method many times based on the settings you choose. For example, if you request a bracket of three exposures with image delivery in both JPEG and RAW formats, the expected photo count is `6`.

The [photoCount](../avcapturephoto/photocount.md) property of each [AVCapturePhoto](../avcapturephoto.md) object delivered to your delegate indicates where that capture result relates to this sequence. When your delegate receives a photo whose [photoCount](../avcapturephoto/photocount.md) value matches the [expectedPhotoCount](expectedphotocount.md), you know you’ve received the last one for the given capture request.

## See Also

### Resolving photo capture requests

- [uniqueID](uniqueid.md): The unique identifier for the photo capture this settings object corresponds to.
