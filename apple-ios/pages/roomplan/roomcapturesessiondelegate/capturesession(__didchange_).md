> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/roomplan/roomcapturesessiondelegate/capturesession(_:didchange:)](https://developer.apple.com/documentation/roomplan/roomcapturesessiondelegate/capturesession(_:didchange:))

# captureSession(\_:didChange:)

**Framework:** RoomPlan  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Notifies the delegate when the session changes the dimensions and the transform properties of surfaces and objects.

## Declaration

```swift
func captureSession(_ session: RoomCaptureSession, didChange room: CapturedRoom)
```

## Parameters

- `session`: An object that manages the room-scanning process.
- `room`: A structure that contains only the surfaces/objects that experience recent changes.

## Default Implementations

### RoomCaptureSessionDelegate Implementations

- [captureSession(\_:didChange:)](capturesession%28__didchange_%29-gv3t.md): Provides a default, blank implementation for when the capture session updates the dimensions and the transform properties during a scan.

## See Also

### Updating a session

- [captureSession(\_:didAdd:)](capturesession%28__didadd_%29.md): Notifies the delegate of newly added surfaces and objects.
- [captureSession(\_:didRemove:)](capturesession%28__didremove_%29.md): Notifies the delegate when the session removes surfaces and objects.
- [captureSession(\_:didUpdate:)](capturesession%28__didupdate_%29.md): Notifies the delegate when the session updates the scan results.
