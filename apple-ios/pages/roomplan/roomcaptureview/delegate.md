> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/roomplan/roomcaptureview/delegate](https://developer.apple.com/documentation/roomplan/roomcaptureview/delegate)

# delegate

**Framework:** RoomPlan  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

An object that determines whether to post-process the results of a scan.

## Declaration

```swift
@MainActor @preconcurrency weak var delegate: (any RoomCaptureViewDelegate)?
```

## See Also

### Reacting to scan events

- [captureSession](capturesession.md): An object that notifies a delegate of particular events in the room-scanning life cycle.
