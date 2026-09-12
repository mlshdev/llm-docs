> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/dockkit/dockaccessory/observation/faceyawangle](https://developer.apple.com/documentation/dockkit/dockaccessory/observation/faceyawangle)

# faceYawAngle

**Framework:** DockKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+

The angle of the face in radians.

## Declaration

```swift
let faceYawAngle: Measurement<UnitAngle>?
```

<a id="discussion"></a>

## Discussion

A value of `0` indicates the face of the subject in the frame is looking directly at the camera. A negative value indicates the subject’s face is oriented to the left, while positive value indicates the face is oriented to the right.

## See Also

### Getting properties

- [rect](rect.md): The coordinates of the subject in the frame.
- [type](type.md): The type of subject in the frame.
- [identifier](identifier.md): A unique identifier representing the subject in the frame.
