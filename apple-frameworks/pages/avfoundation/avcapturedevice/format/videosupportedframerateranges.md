> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/format/videosupportedframerateranges](https://developer.apple.com/documentation/avfoundation/avcapturedevice/format/videosupportedframerateranges)

# videoSupportedFrameRateRanges (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+

A list of frame rate ranges that a format supports.

## Declaration

```swift
var videoSupportedFrameRateRanges: [AVFrameRateRange] { get }
```

<a id="Discussion"></a>

## Discussion

The value is an array of [AVFrameRateRange](../../avframeraterange.md) objects, one for each of the format’s supported video frame rate ranges.

## See Also

### Determining video capture support

- [isAutoVideoFrameRateSupported](isautovideoframeratesupported.md): A Boolean value that Indicates whether the format supports performing automatic video frame rate adjustments.
- [AVFrameRateRange](../../avframeraterange.md): An immutable type that represents a range of valid frame rates.
- [isVideoBinned](isvideobinned.md): A Boolean value that indicates whether the format produces video data in a binned format.
- [isVideoHDRSupported](isvideohdrsupported.md): A Boolean value that indicates whether the format supports high dynamic range streaming.
- [isMultiCamSupported](ismulticamsupported.md): A Boolean value that indicates whether a multi-camera capture session supports this format.

# videoSupportedFrameRateRanges (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+

A list of frame rate ranges that a format supports.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<AVFrameRateRange *> * videoSupportedFrameRateRanges;
```

<a id="Discussion"></a>

## Discussion

The value is an array of [AVFrameRateRange](../../avframeraterange.md) objects, one for each of the format’s supported video frame rate ranges.

## See Also

### Determining video capture support

- [autoVideoFrameRateSupported](isautovideoframeratesupported.md): A Boolean value that Indicates whether the format supports performing automatic video frame rate adjustments.
- [AVFrameRateRange](../../avframeraterange.md): An immutable type that represents a range of valid frame rates.
- [videoBinned](isvideobinned.md): A Boolean value that indicates whether the format produces video data in a binned format.
- [videoHDRSupported](isvideohdrsupported.md): A Boolean value that indicates whether the format supports high dynamic range streaming.
- [multiCamSupported](ismulticamsupported.md): A Boolean value that indicates whether a multi-camera capture session supports this format.
