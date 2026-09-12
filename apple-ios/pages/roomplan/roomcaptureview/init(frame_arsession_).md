> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/roomplan/roomcaptureview/init(frame:arsession:)](https://developer.apple.com/documentation/roomplan/roomcaptureview/init(frame:arsession:))

# init(frame:arSession:)

**Framework:** RoomPlan  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

Creates a room-capture view with the given AR session.

## Declaration

```swift
@MainActor @preconcurrency init(frame: CGRect, arSession: ARSession)
```

## Parameters

- `frame`: A structure that positions and shapes the view.
- `arSession`: A world-tracking session that your app creates and runs with an [ARWorldTrackingConfiguration](https://developer.apple.com/documentation/arkit/arworldtrackingconfiguration) before calling this function. If you pass an `ARSession` instance, RoomPlan preserves all of the AR session’s settings.

<a id="discussion"></a>

## Discussion

By providing your own [ARSession](https://developer.apple.com/documentation/arkit/arsession) object, you can continue your app’s existing AR experience by seamlessly transitioning into a room-scanning session wtih RoomPlan. In addition, continuing an `ARSession` across multiple room-capture sessions — specifically, different rooms in the same vicinity — enables you to merge multiple [CapturedRoom](../capturedroom.md) objects into a single captured structure. For more information, see [CapturedStructure](../capturedstructure.md).

You can access the `arSession` at runtime through this class’s room-capture session ([captureSession](capturesession.md)) property. See the [RoomCaptureSession](../roomcapturesession.md) property [arSession](../roomcapturesession/arsession.md).

## See Also

### Creating a room-capture view

- [init(frame:)](init%28frame_%29.md): Creates a view that sizes to the specified frame.
- [init(coder:)](init%28coder_%29.md): Creates a view by deserializing from the specified coder.
