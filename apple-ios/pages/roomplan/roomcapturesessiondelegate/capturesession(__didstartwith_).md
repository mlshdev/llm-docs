> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/roomplan/roomcapturesessiondelegate/capturesession(_:didstartwith:)](https://developer.apple.com/documentation/roomplan/roomcapturesessiondelegate/capturesession(_:didstartwith:))

# captureSession(\_:didStartWith:)

**Framework:** RoomPlan  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Notifies the delegate when the session starts.

## Declaration

```swift
func captureSession(_ session: RoomCaptureSession, didStartWith configuration: RoomCaptureSession.Configuration)
```

## Parameters

- `session`: An object that manages the room-scanning process.
- `configuration`: An object that customizes the scanning experience.

## Default Implementations

### RoomCaptureSessionDelegate Implementations

- [captureSession(\_:didStartWith:)](capturesession%28__didstartwith_%29-3c74n.md): Provides a default, blank implementation for when the session starts.
