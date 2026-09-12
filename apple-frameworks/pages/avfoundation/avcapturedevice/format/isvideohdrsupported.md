> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/format/isvideohdrsupported](https://developer.apple.com/documentation/avfoundation/avcapturedevice/format/isvideohdrsupported)

# isVideoHDRSupported (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value that indicates whether the format supports high dynamic range streaming.

## Declaration

```swift
var isVideoHDRSupported: Bool { get }
```

## See Also

### Determining video capture support

- [isAutoVideoFrameRateSupported](isautovideoframeratesupported.md): A Boolean value that Indicates whether the format supports performing automatic video frame rate adjustments.
- [videoSupportedFrameRateRanges](videosupportedframerateranges.md): A list of frame rate ranges that a format supports.
- [AVFrameRateRange](../../avframeraterange.md): An immutable type that represents a range of valid frame rates.
- [isVideoBinned](isvideobinned.md): A Boolean value that indicates whether the format produces video data in a binned format.
- [isMultiCamSupported](ismulticamsupported.md): A Boolean value that indicates whether a multi-camera capture session supports this format.

# videoHDRSupported (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value that indicates whether the format supports high dynamic range streaming.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isVideoHDRSupported) BOOL videoHDRSupported;
```

## See Also

### Determining video capture support

- [autoVideoFrameRateSupported](isautovideoframeratesupported.md): A Boolean value that Indicates whether the format supports performing automatic video frame rate adjustments.
- [videoSupportedFrameRateRanges](videosupportedframerateranges.md): A list of frame rate ranges that a format supports.
- [AVFrameRateRange](../../avframeraterange.md): An immutable type that represents a range of valid frame rates.
- [videoBinned](isvideobinned.md): A Boolean value that indicates whether the format produces video data in a binned format.
- [multiCamSupported](ismulticamsupported.md): A Boolean value that indicates whether a multi-camera capture session supports this format.
