> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/format/isautovideoframeratesupported](https://developer.apple.com/documentation/avfoundation/avcapturedevice/format/isautovideoframeratesupported)

# isAutoVideoFrameRateSupported (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

A Boolean value that Indicates whether the format supports performing automatic video frame rate adjustments.

## Declaration

```swift
var isAutoVideoFrameRateSupported: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This property determines whether you can enable a capture device’s [isAutoVideoFrameRateEnabled](../isautovideoframerateenabled.md) property.

## See Also

### Determining video capture support

- [videoSupportedFrameRateRanges](videosupportedframerateranges.md): A list of frame rate ranges that a format supports.
- [AVFrameRateRange](../../avframeraterange.md): An immutable type that represents a range of valid frame rates.
- [isVideoBinned](isvideobinned.md): A Boolean value that indicates whether the format produces video data in a binned format.
- [isVideoHDRSupported](isvideohdrsupported.md): A Boolean value that indicates whether the format supports high dynamic range streaming.
- [isMultiCamSupported](ismulticamsupported.md): A Boolean value that indicates whether a multi-camera capture session supports this format.

# autoVideoFrameRateSupported (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

A Boolean value that Indicates whether the format supports performing automatic video frame rate adjustments.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isAutoVideoFrameRateSupported) BOOL autoVideoFrameRateSupported;
```

<a id="Discussion"></a>

## Discussion

This property determines whether you can enable a capture device’s [autoVideoFrameRateEnabled](../isautovideoframerateenabled.md) property.

## See Also

### Determining video capture support

- [videoSupportedFrameRateRanges](videosupportedframerateranges.md): A list of frame rate ranges that a format supports.
- [AVFrameRateRange](../../avframeraterange.md): An immutable type that represents a range of valid frame rates.
- [videoBinned](isvideobinned.md): A Boolean value that indicates whether the format produces video data in a binned format.
- [videoHDRSupported](isvideohdrsupported.md): A Boolean value that indicates whether the format supports high dynamic range streaming.
- [multiCamSupported](ismulticamsupported.md): A Boolean value that indicates whether a multi-camera capture session supports this format.
