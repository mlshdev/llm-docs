> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/sccaptureresolutiontype](https://developer.apple.com/documentation/screencapturekit/sccaptureresolutiontype)

# SCCaptureResolutionType (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 18.2+ · macOS 12.3+

Available resolutions for content capture.

## Declaration

```swift
enum SCCaptureResolutionType
```

<a id="overview"></a>

## Overview

Higher-resolution values produce better and more accurate-looking content to the source, at the expense of bandwidth.

## Topics

### Resolutions

- [SCCaptureResolutionType.automatic](sccaptureresolutiontype/automatic.md): Allow ScreenCaptureKit to automatically select the quality of content depending on factors such as network connection.
- [SCCaptureResolutionType.best](sccaptureresolutiontype/best.md): Capture streaming content at the best available resolution.
- [SCCaptureResolutionType.nominal](sccaptureresolutiontype/nominal.md): Capture streaming content with a one point to one pixel conversion factor.

### Initializers

- [init(rawValue:)](sccaptureresolutiontype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring captured frames

- [queueDepth](scstreamconfiguration/queuedepth.md): The maximum number of frames for the queue to store.
- [minimumFrameInterval](scstreamconfiguration/minimumframeinterval.md): The desired minimum time between frame updates, in seconds.
- [captureResolution](scstreamconfiguration/captureresolution.md): The resolution at which to capture source content.

# SCCaptureResolutionType (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 18.2+ · macOS 12.3+

Available resolutions for content capture.

## Declaration

```objectivec
enum SCCaptureResolutionType : NSInteger;
```

<a id="overview"></a>

## Overview

Higher-resolution values produce better and more accurate-looking content to the source, at the expense of bandwidth.

## Topics

### Resolutions

- [SCCaptureResolutionAutomatic](sccaptureresolutiontype/automatic.md): Allow ScreenCaptureKit to automatically select the quality of content depending on factors such as network connection.
- [SCCaptureResolutionBest](sccaptureresolutiontype/best.md): Capture streaming content at the best available resolution.
- [SCCaptureResolutionNominal](sccaptureresolutiontype/nominal.md): Capture streaming content with a one point to one pixel conversion factor.

## See Also

### Configuring captured frames

- [queueDepth](scstreamconfiguration/queuedepth.md): The maximum number of frames for the queue to store.
- [minimumFrameInterval](scstreamconfiguration/minimumframeinterval.md): The desired minimum time between frame updates, in seconds.
- [captureResolution](scstreamconfiguration/captureresolution.md): The resolution at which to capture source content.
