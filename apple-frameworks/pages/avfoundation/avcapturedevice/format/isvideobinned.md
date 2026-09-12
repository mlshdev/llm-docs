> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/format/isvideobinned](https://developer.apple.com/documentation/avfoundation/avcapturedevice/format/isvideobinned)

# isVideoBinned (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value that indicates whether the format produces video data in a binned format.

## Declaration

```swift
var isVideoBinned: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Binning is a pixel-combining process which can result in greater low light sensitivity at the cost of reduced resolution.

## See Also

### Determining video capture support

- [isAutoVideoFrameRateSupported](isautovideoframeratesupported.md): A Boolean value that Indicates whether the format supports performing automatic video frame rate adjustments.
- [videoSupportedFrameRateRanges](videosupportedframerateranges.md): A list of frame rate ranges that a format supports.
- [AVFrameRateRange](../../avframeraterange.md): An immutable type that represents a range of valid frame rates.
- [isVideoHDRSupported](isvideohdrsupported.md): A Boolean value that indicates whether the format supports high dynamic range streaming.
- [isMultiCamSupported](ismulticamsupported.md): A Boolean value that indicates whether a multi-camera capture session supports this format.

# videoBinned (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value that indicates whether the format produces video data in a binned format.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isVideoBinned) BOOL videoBinned;
```

<a id="Discussion"></a>

## Discussion

Binning is a pixel-combining process which can result in greater low light sensitivity at the cost of reduced resolution.

## See Also

### Determining video capture support

- [autoVideoFrameRateSupported](isautovideoframeratesupported.md): A Boolean value that Indicates whether the format supports performing automatic video frame rate adjustments.
- [videoSupportedFrameRateRanges](videosupportedframerateranges.md): A list of frame rate ranges that a format supports.
- [AVFrameRateRange](../../avframeraterange.md): An immutable type that represents a range of valid frame rates.
- [videoHDRSupported](isvideohdrsupported.md): A Boolean value that indicates whether the format supports high dynamic range streaming.
- [multiCamSupported](ismulticamsupported.md): A Boolean value that indicates whether a multi-camera capture session supports this format.
