> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scframestatus](https://developer.apple.com/documentation/screencapturekit/scframestatus)

# SCFrameStatus (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 12.3+ · tvOS 27.0+ · visionOS 27.0+

Status values for a frame from a stream.

## Declaration

```swift
enum SCFrameStatus
```

<a id="overview"></a>

## Overview

You create a frame status by initializing it with the value you retrieve for the [status](scstreamframeinfo/status.md) from the sample buffer’s attachments dictionary.

```swift
if let statusRawValue = attachments[SCStreamFrameInfo.status] as? Int {
    // Create status value.
    let status = SCFrameStatus(rawValue: statusRawValue)
    ...
}
```

## Topics

### Status values

- [SCFrameStatus.complete](scframestatus/complete.md): A status that indicates the system successfully generated a new frame.
- [SCFrameStatus.idle](scframestatus/idle.md): A status that indicates the system didn’t generate a new frame because the display didn’t change.
- [SCFrameStatus.blank](scframestatus/blank.md): A status that indicates the system didn’t generate a new frame because the display is blank.
- [SCFrameStatus.started](scframestatus/started.md): A status that indicates the frame is the first one sent after the stream starts.
- [SCFrameStatus.suspended](scframestatus/suspended.md): A status that indicates the system didn’t generate a new frame because you suspended updates.
- [SCFrameStatus.stopped](scframestatus/stopped.md): A status that indicates the frame is in a stopped state.

### Initializers

- [init(rawValue:)](scframestatus/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Output processing

- [SCStreamOutput](scstreamoutput.md): A delegate protocol your app implements to receive capture stream output events.
- [SCStreamOutputType](scstreamoutputtype.md): Constants that represent output types for a stream frame.
- [SCStreamFrameInfo](scstreamframeinfo.md): An instance that defines metadata keys for a stream frame.
- [SCClipBufferingOutput](scclipbufferingoutput.md)

# SCFrameStatus (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 12.3+ · tvOS 27.0+ · visionOS 27.0+

Status values for a frame from a stream.

## Declaration

```objectivec
enum SCFrameStatus : NSInteger;
```

<a id="overview"></a>

## Overview

You create a frame status by initializing it with the value you retrieve for the [SCStreamFrameInfoStatus](scstreamframeinfo/status.md) from the sample buffer’s attachments dictionary.

```swift
if let statusRawValue = attachments[SCStreamFrameInfo.status] as? Int {
    // Create status value.
    let status = SCFrameStatus(rawValue: statusRawValue)
    ...
}
```

## Topics

### Status values

- [SCFrameStatusComplete](scframestatus/complete.md): A status that indicates the system successfully generated a new frame.
- [SCFrameStatusIdle](scframestatus/idle.md): A status that indicates the system didn’t generate a new frame because the display didn’t change.
- [SCFrameStatusBlank](scframestatus/blank.md): A status that indicates the system didn’t generate a new frame because the display is blank.
- [SCFrameStatusStarted](scframestatus/started.md): A status that indicates the frame is the first one sent after the stream starts.
- [SCFrameStatusSuspended](scframestatus/suspended.md): A status that indicates the system didn’t generate a new frame because you suspended updates.
- [SCFrameStatusStopped](scframestatus/stopped.md): A status that indicates the frame is in a stopped state.

## See Also

### Output processing

- [SCStreamOutput](scstreamoutput.md): A delegate protocol your app implements to receive capture stream output events.
- [SCStreamOutputType](scstreamoutputtype.md): Constants that represent output types for a stream frame.
- [SCStreamFrameInfo](scstreamframeinfo.md): An instance that defines metadata keys for a stream frame.
- [SCClipBufferingOutput](scclipbufferingoutput.md)
