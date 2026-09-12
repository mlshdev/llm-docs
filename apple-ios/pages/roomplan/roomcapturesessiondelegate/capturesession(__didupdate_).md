> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/roomplan/roomcapturesessiondelegate/capturesession(_:didupdate:)](https://developer.apple.com/documentation/roomplan/roomcapturesessiondelegate/capturesession(_:didupdate:))

# captureSession(\_:didUpdate:)

**Framework:** RoomPlan  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Notifies the delegate when the session updates the scan results.

## Declaration

```swift
func captureSession(_ session: RoomCaptureSession, didUpdate room: CapturedRoom)
```

## Parameters

- `session`: An object that manages the room-scanning process.
- `room`: A structure that represents a snapshot of the room being captured.

<a id="discussion"></a>

## Discussion

The `room` structure contains all surfaces/objects in the captured room regardless of the recent changes.

## Default Implementations

### RoomCaptureSessionDelegate Implementations

- [captureSession(\_:didUpdate:)](capturesession%28__didupdate_%29-77zyg.md): Provides a default, blank implementation for when the session updates surfaces and objects during a scan.

## See Also

### Updating a session

- [captureSession(\_:didAdd:)](capturesession%28__didadd_%29.md): Notifies the delegate of newly added surfaces and objects.
- [captureSession(\_:didRemove:)](capturesession%28__didremove_%29.md): Notifies the delegate when the session removes surfaces and objects.
- [captureSession(\_:didChange:)](capturesession%28__didchange_%29.md): Notifies the delegate when the session changes the dimensions and the transform properties of surfaces and objects.
