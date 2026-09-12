> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scframestatus/stopped](https://developer.apple.com/documentation/screencapturekit/scframestatus/stopped)

# SCFrameStatus.stopped (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 12.3+ · tvOS 27.0+ · visionOS 27.0+

A status that indicates the frame is in a stopped state.

## Declaration

```swift
case stopped
```

## See Also

### Status values

- [SCFrameStatus.complete](complete.md): A status that indicates the system successfully generated a new frame.
- [SCFrameStatus.idle](idle.md): A status that indicates the system didn’t generate a new frame because the display didn’t change.
- [SCFrameStatus.blank](blank.md): A status that indicates the system didn’t generate a new frame because the display is blank.
- [SCFrameStatus.started](started.md): A status that indicates the frame is the first one sent after the stream starts.
- [SCFrameStatus.suspended](suspended.md): A status that indicates the system didn’t generate a new frame because you suspended updates.

# SCFrameStatusStopped (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Enumeration Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 12.3+ · tvOS 27.0+ · visionOS 27.0+

A status that indicates the frame is in a stopped state.

## Declaration

```objectivec
SCFrameStatusStopped
```

## See Also

### Status values

- [SCFrameStatusComplete](complete.md): A status that indicates the system successfully generated a new frame.
- [SCFrameStatusIdle](idle.md): A status that indicates the system didn’t generate a new frame because the display didn’t change.
- [SCFrameStatusBlank](blank.md): A status that indicates the system didn’t generate a new frame because the display is blank.
- [SCFrameStatusStarted](started.md): A status that indicates the frame is the first one sent after the stream starts.
- [SCFrameStatusSuspended](suspended.md): A status that indicates the system didn’t generate a new frame because you suspended updates.
