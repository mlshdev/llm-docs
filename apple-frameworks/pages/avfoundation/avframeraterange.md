> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avframeraterange](https://developer.apple.com/documentation/avfoundation/avframeraterange)

# AVFrameRateRange (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+

An immutable type that represents a range of valid frame rates.

## Declaration

```swift
class AVFrameRateRange
```

<a id="overview"></a>

## Overview

An AVFrameRateRange object is immutable.

An [AVCaptureDevice.Format](avcapturedevice/format.md) object wraps a CMFormatDescription and expresses a range of valid video frame rates as an array of `AVFrameRateRange` objects.

An [AVCaptureDevice](avcapturedevice.md) object uses `AVCaptureDeviceFormat` to describe the formats it supports and the currently-active format.

## Topics

### Accessing properties

- [maxFrameDuration](avframeraterange/maxframeduration.md): The maximum frame duration supported by the range.
- [maxFrameRate](avframeraterange/maxframerate.md): The maximum frame rate supported by the range.
- [minFrameDuration](avframeraterange/minframeduration.md): The minimum frame duration supported by the range.
- [minFrameRate](avframeraterange/minframerate.md): The minimum frame rate supported by the range.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Determining video capture support

- [isAutoVideoFrameRateSupported](avcapturedevice/format/isautovideoframeratesupported.md): A Boolean value that Indicates whether the format supports performing automatic video frame rate adjustments.
- [videoSupportedFrameRateRanges](avcapturedevice/format/videosupportedframerateranges.md): A list of frame rate ranges that a format supports.
- [isVideoBinned](avcapturedevice/format/isvideobinned.md): A Boolean value that indicates whether the format produces video data in a binned format.
- [isVideoHDRSupported](avcapturedevice/format/isvideohdrsupported.md): A Boolean value that indicates whether the format supports high dynamic range streaming.
- [isMultiCamSupported](avcapturedevice/format/ismulticamsupported.md): A Boolean value that indicates whether a multi-camera capture session supports this format.

# AVFrameRateRange (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+

An immutable type that represents a range of valid frame rates.

## Declaration

```objectivec
@interface AVFrameRateRange : NSObject
```

<a id="overview"></a>

## Overview

An AVFrameRateRange object is immutable.

An [AVCaptureDeviceFormat](avcapturedevice/format.md) object wraps a CMFormatDescription and expresses a range of valid video frame rates as an array of `AVFrameRateRange` objects.

An [AVCaptureDevice](avcapturedevice.md) object uses `AVCaptureDeviceFormat` to describe the formats it supports and the currently-active format.

## Topics

### Accessing properties

- [maxFrameDuration](avframeraterange/maxframeduration.md): The maximum frame duration supported by the range.
- [maxFrameRate](avframeraterange/maxframerate.md): The maximum frame rate supported by the range.
- [minFrameDuration](avframeraterange/minframeduration.md): The minimum frame duration supported by the range.
- [minFrameRate](avframeraterange/minframerate.md): The minimum frame rate supported by the range.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Determining video capture support

- [autoVideoFrameRateSupported](avcapturedevice/format/isautovideoframeratesupported.md): A Boolean value that Indicates whether the format supports performing automatic video frame rate adjustments.
- [videoSupportedFrameRateRanges](avcapturedevice/format/videosupportedframerateranges.md): A list of frame rate ranges that a format supports.
- [videoBinned](avcapturedevice/format/isvideobinned.md): A Boolean value that indicates whether the format produces video data in a binned format.
- [videoHDRSupported](avcapturedevice/format/isvideohdrsupported.md): A Boolean value that indicates whether the format supports high dynamic range streaming.
- [multiCamSupported](avcapturedevice/format/ismulticamsupported.md): A Boolean value that indicates whether a multi-camera capture session supports this format.
