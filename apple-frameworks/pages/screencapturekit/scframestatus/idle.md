> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scframestatus/idle](https://developer.apple.com/documentation/screencapturekit/scframestatus/idle)

# SCFrameStatus.idle (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 12.3+ · tvOS 27.0+ · visionOS 27.0+

A status that indicates the system didn’t generate a new frame because the display didn’t change.

## Declaration

```swift
case idle
```

## See Also

### Status values

- [SCFrameStatus.complete](complete.md): A status that indicates the system successfully generated a new frame.
- [SCFrameStatus.blank](blank.md): A status that indicates the system didn’t generate a new frame because the display is blank.
- [SCFrameStatus.started](started.md): A status that indicates the frame is the first one sent after the stream starts.
- [SCFrameStatus.suspended](suspended.md): A status that indicates the system didn’t generate a new frame because you suspended updates.
- [SCFrameStatus.stopped](stopped.md): A status that indicates the frame is in a stopped state.

# SCFrameStatusIdle (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Enumeration Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 12.3+ · tvOS 27.0+ · visionOS 27.0+

A status that indicates the system didn’t generate a new frame because the display didn’t change.

## Declaration

```objectivec
SCFrameStatusIdle
```

## See Also

### Status values

- [SCFrameStatusComplete](complete.md): A status that indicates the system successfully generated a new frame.
- [SCFrameStatusBlank](blank.md): A status that indicates the system didn’t generate a new frame because the display is blank.
- [SCFrameStatusStarted](started.md): A status that indicates the frame is the first one sent after the stream starts.
- [SCFrameStatusSuspended](suspended.md): A status that indicates the system didn’t generate a new frame because you suspended updates.
- [SCFrameStatusStopped](stopped.md): A status that indicates the frame is in a stopped state.
