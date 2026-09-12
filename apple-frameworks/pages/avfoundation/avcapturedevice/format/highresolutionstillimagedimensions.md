> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/format/highresolutionstillimagedimensions](https://developer.apple.com/documentation/avfoundation/avcapturedevice/format/highresolutionstillimagedimensions)

# highResolutionStillImageDimensions (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 16.0) · iPadOS 8.0+ (deprecated in 16.0) · Mac Catalyst 14.0+ (deprecated in 16.0)

The highest resolution still image the system can produce for this format.

> Use [supportedMaxPhotoDimensions](../../avcapturedeviceformat/supportedmaxphotodimensions.md) instead.

## Declaration

```swift
var highResolutionStillImageDimensions: CMVideoDimensions { get }
```

<a id="Discussion"></a>

## Discussion

Normally, the [AVCaptureStillImageOutput](../../avcapturestillimageoutput.md) class emits images with the same dimensions as the source [AVCaptureDevice](../../avcapturedevice.md) instance’s [activeFormat](../activeformat.md). However, if you set `highResolutionStillImageOutputEnabled` to [true](https://developer.apple.com/documentation/swift/true), [AVCaptureStillImageOutput](../../avcapturestillimageoutput.md) emits still images with its source [AVCaptureDevice](../../avcapturedevice.md) instance’s `activeFormat.highResolutionStillImageDimensions` dimensions.

# highResolutionStillImageDimensions (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 16.0) · iPadOS 8.0+ (deprecated in 16.0) · Mac Catalyst 14.0+ (deprecated in 16.0)

The highest resolution still image the system can produce for this format.

> Use [supportedMaxPhotoDimensions](../../avcapturedeviceformat/supportedmaxphotodimensions.md) instead.

## Declaration

```objectivec
@property (nonatomic, readonly) CMVideoDimensions highResolutionStillImageDimensions;
```

<a id="Discussion"></a>

## Discussion

Normally, the [AVCaptureStillImageOutput](../../avcapturestillimageoutput.md) class emits images with the same dimensions as the source [AVCaptureDevice](../../avcapturedevice.md) instance’s [activeFormat](../activeformat.md). However, if you set `highResolutionStillImageOutputEnabled` to [true](https://developer.apple.com/documentation/swift/true), [AVCaptureStillImageOutput](../../avcapturestillimageoutput.md) emits still images with its source [AVCaptureDevice](../../avcapturedevice.md) instance’s `activeFormat.highResolutionStillImageDimensions` dimensions.
