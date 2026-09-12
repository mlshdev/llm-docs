> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/format/ismulticamsupported](https://developer.apple.com/documentation/avfoundation/avcapturedevice/format/ismulticamsupported)

# isMultiCamSupported (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value that indicates whether a multi-camera capture session supports this format.

## Declaration

```swift
var isMultiCamSupported: Bool { get }
```

<a id="Discussion"></a>

## Discussion

When performing single-camera capture using [AVCaptureSession](../../avcapturesession.md), you may set any of the device’s formats as its [activeFormat](../activeformat.md). However, when using [AVCaptureMultiCamSession](../../avcapturemulticamsession.md), you may only set the device’s format to one in which [isMultiCamSupported](ismulticamsupported.md) is [true](https://developer.apple.com/documentation/swift/true). Only this limited subset of capture formats can run sustainably in a multi-camera capture scenario.

## See Also

### Determining video capture support

- [isAutoVideoFrameRateSupported](isautovideoframeratesupported.md): A Boolean value that Indicates whether the format supports performing automatic video frame rate adjustments.
- [videoSupportedFrameRateRanges](videosupportedframerateranges.md): A list of frame rate ranges that a format supports.
- [AVFrameRateRange](../../avframeraterange.md): An immutable type that represents a range of valid frame rates.
- [isVideoBinned](isvideobinned.md): A Boolean value that indicates whether the format produces video data in a binned format.
- [isVideoHDRSupported](isvideohdrsupported.md): A Boolean value that indicates whether the format supports high dynamic range streaming.

# multiCamSupported (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value that indicates whether a multi-camera capture session supports this format.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isMultiCamSupported) BOOL multiCamSupported;
```

<a id="Discussion"></a>

## Discussion

When performing single-camera capture using [AVCaptureSession](../../avcapturesession.md), you may set any of the device’s formats as its [activeFormat](../activeformat.md). However, when using [AVCaptureMultiCamSession](../../avcapturemulticamsession.md), you may only set the device’s format to one in which [multiCamSupported](ismulticamsupported.md) is [true](https://developer.apple.com/documentation/swift/true). Only this limited subset of capture formats can run sustainably in a multi-camera capture scenario.

## See Also

### Determining video capture support

- [autoVideoFrameRateSupported](isautovideoframeratesupported.md): A Boolean value that Indicates whether the format supports performing automatic video frame rate adjustments.
- [videoSupportedFrameRateRanges](videosupportedframerateranges.md): A list of frame rate ranges that a format supports.
- [AVFrameRateRange](../../avframeraterange.md): An immutable type that represents a range of valid frame rates.
- [videoBinned](isvideobinned.md): A Boolean value that indicates whether the format produces video data in a binned format.
- [videoHDRSupported](isvideohdrsupported.md): A Boolean value that indicates whether the format supports high dynamic range streaming.
