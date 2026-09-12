> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/roomplan/roomcapturesessiondelegate/capturesession(_:didremove:)](https://developer.apple.com/documentation/roomplan/roomcapturesessiondelegate/capturesession(_:didremove:))

# captureSession(\_:didRemove:)

**Framework:** RoomPlan  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Notifies the delegate when the session removes surfaces and objects.

## Declaration

```swift
func captureSession(_ session: RoomCaptureSession, didRemove room: CapturedRoom)
```

## Parameters

- `session`: An object that manages the room-scanning process.
- `room`: A structure that contains surfaces and objects that the framework removes from the scan.

## Default Implementations

### RoomCaptureSessionDelegate Implementations

- [captureSession(\_:didRemove:)](capturesession%28__didremove_%29-9gs76.md): Provides a default, blank implementation for when the session removes surfaces and objects.

## See Also

### Updating a session

- [captureSession(\_:didAdd:)](capturesession%28__didadd_%29.md): Notifies the delegate of newly added surfaces and objects.
- [captureSession(\_:didChange:)](capturesession%28__didchange_%29.md): Notifies the delegate when the session changes the dimensions and the transform properties of surfaces and objects.
- [captureSession(\_:didUpdate:)](capturesession%28__didupdate_%29.md): Notifies the delegate when the session updates the scan results.
