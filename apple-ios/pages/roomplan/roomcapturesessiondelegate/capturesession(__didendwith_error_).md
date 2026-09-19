> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/roomplan/roomcapturesessiondelegate/capturesession(_:didendwith:error:)

# captureSession(\_:didEndWith:error:)

**Framework:** RoomPlan  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Notifies the delegate of completion with either scan results or an error.

## Declaration

```swift
func captureSession(_ session: RoomCaptureSession, didEndWith data: CapturedRoomData, error: (any Error)?)
```

## Parameters

- `session`: An object that manages the room-scanning process.
- `data`: A data object that contains the raw scan results.
- `error`: An object that describes the problem when an error occurs; otherwise, `nil`.

## Mentioned In

- [Scanning the rooms of a single structure](../scanning-the-rooms-of-a-single-structure.md)

## Default Implementations

### RoomCaptureSessionDelegate Implementations

- [captureSession(\_:didEndWith:error:)](capturesession%28__didendwith_error_%29-5f0mc.md): Provides a default, blank implementation for when the capture session provides raw scan results.
