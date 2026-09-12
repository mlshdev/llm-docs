> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/roomplan/roomcapturesession/arsession](https://developer.apple.com/documentation/roomplan/roomcapturesession/arsession)

# arSession

**Framework:** RoomPlan  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

An object that manages an ARKit session.

## Declaration

```swift
var arSession: ARSession
```

<a id="discussion"></a>

## Discussion

You may use this object to display your own AR experience.

[RoomCaptureSession](../roomcapturesession.md) sets this property at initialization and throws an error if your app attempts to set a value.
