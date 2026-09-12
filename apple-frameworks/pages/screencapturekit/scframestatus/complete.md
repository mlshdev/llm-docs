> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scframestatus/complete](https://developer.apple.com/documentation/screencapturekit/scframestatus/complete)

# SCFrameStatus.complete (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 12.3+ · tvOS 27.0+ · visionOS 27.0+

A status that indicates the system successfully generated a new frame.

## Declaration

```swift
case complete
```

## See Also

### Status values

- [SCFrameStatus.idle](idle.md): A status that indicates the system didn’t generate a new frame because the display didn’t change.
- [SCFrameStatus.blank](blank.md): A status that indicates the system didn’t generate a new frame because the display is blank.
- [SCFrameStatus.started](started.md): A status that indicates the frame is the first one sent after the stream starts.
- [SCFrameStatus.suspended](suspended.md): A status that indicates the system didn’t generate a new frame because you suspended updates.
- [SCFrameStatus.stopped](stopped.md): A status that indicates the frame is in a stopped state.

# SCFrameStatusComplete (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Enumeration Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 12.3+ · tvOS 27.0+ · visionOS 27.0+

A status that indicates the system successfully generated a new frame.

## Declaration

```objectivec
SCFrameStatusComplete
```

## See Also

### Status values

- [SCFrameStatusIdle](idle.md): A status that indicates the system didn’t generate a new frame because the display didn’t change.
- [SCFrameStatusBlank](blank.md): A status that indicates the system didn’t generate a new frame because the display is blank.
- [SCFrameStatusStarted](started.md): A status that indicates the frame is the first one sent after the stream starts.
- [SCFrameStatusSuspended](suspended.md): A status that indicates the system didn’t generate a new frame because you suspended updates.
- [SCFrameStatusStopped](stopped.md): A status that indicates the frame is in a stopped state.
