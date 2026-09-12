> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/roomplan/roomcapturesessiondelegate/capturesession(_:didadd:)-f4xt](https://developer.apple.com/documentation/roomplan/roomcapturesessiondelegate/capturesession(_:didadd:)-f4xt)

# captureSession(\_:didAdd:)

**Framework:** RoomPlan  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Provides a default, blank implementation for when the capture session adds surfaces and objects to the scan results.

## Declaration

```swift
func captureSession(_ session: RoomCaptureSession, didAdd room: CapturedRoom)
```

## Parameters

- `session`: An object that manages the room-scanning process.
- `room`: A structure that contains the newest surfaces and objects that the framework identifies during the scan.

<a id="discussion"></a>

## Discussion

The system calls this implementation if your app doesn’t implement [captureSession(\_:didAdd:)](capturesession%28__didadd_%29.md).
