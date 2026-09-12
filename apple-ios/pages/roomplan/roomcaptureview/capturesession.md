> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/roomplan/roomcaptureview/capturesession](https://developer.apple.com/documentation/roomplan/roomcaptureview/capturesession)

# captureSession

**Framework:** RoomPlan  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

An object that notifies a delegate of particular events in the room-scanning life cycle.

## Declaration

```swift
@MainActor @preconcurrency var captureSession: RoomCaptureSession! { get }
```

## Mentioned In

- [Scanning the rooms of a single structure](../scanning-the-rooms-of-a-single-structure.md)

## See Also

### Reacting to scan events

- [delegate](delegate.md): An object that determines whether to post-process the results of a scan.
