> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/roomplan/roombuilder/capturedroom(from:)](https://developer.apple.com/documentation/roomplan/roombuilder/capturedroom(from:))

# capturedRoom(from:)

**Framework:** RoomPlan  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Processes the specified raw scan results and returns a detailed representation of the room.

## Declaration

```swift
func capturedRoom(from capturedRoomData: CapturedRoomData) async throws -> CapturedRoom
```

## Parameters

- `capturedRoomData`: A data object that contains raw scan results.

<a id="return-value"></a>

## Return Value

A captured-room object that provides the key details of a scanned room.

<a id="discussion"></a>

## Discussion

You retrieve the argument `capturedRoomData` in one of the following ways:

- The [captureView(shouldPresent:error:)](../roomcaptureviewdelegate/captureview%28shouldpresent_error_%29.md) callback for an app that scans rooms using the framework-provided view ([RoomCaptureView](../roomcaptureview.md)).
- The [captureSession(\_:didEndWith:error:)](../roomcapturesessiondelegate/capturesession%28__didendwith_error_%29.md) callback for an app that implements its own room-scanning view.
