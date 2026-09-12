> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scframestatus/suspended](https://developer.apple.com/documentation/screencapturekit/scframestatus/suspended)

# SCFrameStatus.suspended (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 12.3+ · tvOS 27.0+ · visionOS 27.0+

A status that indicates the system didn’t generate a new frame because you suspended updates.

## Declaration

```swift
case suspended
```

## See Also

### Status values

- [SCFrameStatus.complete](complete.md): A status that indicates the system successfully generated a new frame.
- [SCFrameStatus.idle](idle.md): A status that indicates the system didn’t generate a new frame because the display didn’t change.
- [SCFrameStatus.blank](blank.md): A status that indicates the system didn’t generate a new frame because the display is blank.
- [SCFrameStatus.started](started.md): A status that indicates the frame is the first one sent after the stream starts.
- [SCFrameStatus.stopped](stopped.md): A status that indicates the frame is in a stopped state.

# SCFrameStatusSuspended (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Enumeration Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 12.3+ · tvOS 27.0+ · visionOS 27.0+

A status that indicates the system didn’t generate a new frame because you suspended updates.

## Declaration

```objectivec
SCFrameStatusSuspended
```

## See Also

### Status values

- [SCFrameStatusComplete](complete.md): A status that indicates the system successfully generated a new frame.
- [SCFrameStatusIdle](idle.md): A status that indicates the system didn’t generate a new frame because the display didn’t change.
- [SCFrameStatusBlank](blank.md): A status that indicates the system didn’t generate a new frame because the display is blank.
- [SCFrameStatusStarted](started.md): A status that indicates the frame is the first one sent after the stream starts.
- [SCFrameStatusStopped](stopped.md): A status that indicates the frame is in a stopped state.
