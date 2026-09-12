> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scframestatus/blank](https://developer.apple.com/documentation/screencapturekit/scframestatus/blank)

# SCFrameStatus.blank (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 12.3+ · tvOS 27.0+ · visionOS 27.0+

A status that indicates the system didn’t generate a new frame because the display is blank.

## Declaration

```swift
case blank
```

## See Also

### Status values

- [SCFrameStatus.complete](complete.md): A status that indicates the system successfully generated a new frame.
- [SCFrameStatus.idle](idle.md): A status that indicates the system didn’t generate a new frame because the display didn’t change.
- [SCFrameStatus.started](started.md): A status that indicates the frame is the first one sent after the stream starts.
- [SCFrameStatus.suspended](suspended.md): A status that indicates the system didn’t generate a new frame because you suspended updates.
- [SCFrameStatus.stopped](stopped.md): A status that indicates the frame is in a stopped state.

# SCFrameStatusBlank (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Enumeration Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 12.3+ · tvOS 27.0+ · visionOS 27.0+

A status that indicates the system didn’t generate a new frame because the display is blank.

## Declaration

```objectivec
SCFrameStatusBlank
```

## See Also

### Status values

- [SCFrameStatusComplete](complete.md): A status that indicates the system successfully generated a new frame.
- [SCFrameStatusIdle](idle.md): A status that indicates the system didn’t generate a new frame because the display didn’t change.
- [SCFrameStatusStarted](started.md): A status that indicates the frame is the first one sent after the stream starts.
- [SCFrameStatusSuspended](suspended.md): A status that indicates the system didn’t generate a new frame because you suspended updates.
- [SCFrameStatusStopped](stopped.md): A status that indicates the frame is in a stopped state.
