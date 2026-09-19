> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/roomplan/roomcapturesession/delegate

# delegate

**Framework:** RoomPlan  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

An object that observes important events in the room-scanning process.

## Declaration

```swift
weak var delegate: (any RoomCaptureSessionDelegate)?
```

## See Also

### Responding to events

- [RoomCaptureSession.CaptureError](captureerror.md): Errors that can occur during a room-capture session.
