> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/roomplan/roomcapturesessiondelegate/capturesession(_:didstartwith:)-3c74n](https://developer.apple.com/documentation/roomplan/roomcapturesessiondelegate/capturesession(_:didstartwith:)-3c74n)

# captureSession(\_:didStartWith:)

**Framework:** RoomPlan  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Provides a default, blank implementation for when the session starts.

## Declaration

```swift
func captureSession(_ session: RoomCaptureSession, didStartWith configuration: RoomCaptureSession.Configuration)
```

## Parameters

- `session`: An object that manages the room-scanning process.
- `configuration`: An object that customizes the scanning experience.

<a id="discussion"></a>

## Discussion

The system calls this implementation if your app doesn’t implement [captureSession(\_:didStartWith:)](capturesession%28__didstartwith_%29.md).

## See Also

### Default implementations

- [captureSession(\_:didUpdate:)](capturesession%28__didupdate_%29-77zyg.md): Provides a default, blank implementation for when the session updates surfaces and objects during a scan.
- [captureSession(\_:didRemove:)](capturesession%28__didremove_%29-9gs76.md): Provides a default, blank implementation for when the session removes surfaces and objects.
- [captureSession(\_:didChange:)](capturesession%28__didchange_%29-gv3t.md): Provides a default, blank implementation for when the capture session updates the dimensions and the transform properties during a scan.
- [captureSession(\_:didProvide:)](capturesession%28__didprovide_%29-5hvhl.md): Provides a default, blank implementation for when the capture session provides a user instruction.
- [captureSession(\_:didEndWith:error:)](capturesession%28__didendwith_error_%29-5f0mc.md): Provides a default, blank implementation for when the capture session provides raw scan results.
