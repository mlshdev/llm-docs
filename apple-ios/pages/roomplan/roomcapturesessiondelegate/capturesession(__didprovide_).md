> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/roomplan/roomcapturesessiondelegate/capturesession(_:didprovide:)

# captureSession(\_:didProvide:)

**Framework:** RoomPlan  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Notifies the delegate of an instruction to display to the user.

## Declaration

```swift
func captureSession(_ session: RoomCaptureSession, didProvide instruction: RoomCaptureSession.Instruction)
```

## Parameters

- `session`: An object that manages the room-scanning process.
- `instruction`: A specific recommendation the framework makes for the user to complete the scan.

## Default Implementations

### RoomCaptureSessionDelegate Implementations

- [captureSession(\_:didProvide:)](capturesession%28__didprovide_%29-5hvhl.md): Provides a default, blank implementation for when the capture session provides a user instruction.
