> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scstreamframeinfo/videoorientation](https://developer.apple.com/documentation/screencapturekit/scstreamframeinfo/videoorientation)

# videoOrientation (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

## Declaration

```swift
static let videoOrientation: SCStreamFrameInfo
```

<a id="discussion"></a>

## Discussion

The key for the CFDictionary attached to the CMSampleBuffer for the video orientation.

The orientation value follows the CGImagePropertyOrientation enum.

# SCStreamFrameInfoVideoOrientation (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Global Variable  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

## Declaration

```objectivec
extern SCStreamFrameInfo const SCStreamFrameInfoVideoOrientation;
```

<a id="discussion"></a>

## Discussion

The key for the CFDictionary attached to the CMSampleBuffer for the video orientation.

The orientation value follows the CGImagePropertyOrientation enum.
