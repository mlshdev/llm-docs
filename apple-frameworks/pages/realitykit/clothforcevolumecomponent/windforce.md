> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothforcevolumecomponent/windforce](https://developer.apple.com/documentation/realitykit/clothforcevolumecomponent/windforce)

# windForce

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

The wind force applied to particles inside the volume.

## Declaration

```swift
var windForce: SIMD3<Float>
```

<a id="discussion"></a>

## Discussion

This force depends on the angle between the force direction and the face normals of the cloth body. Full force is applied when the force direction is perpendicular to the face (aligned with the normal), and no force is applied when the force direction is parallel to the face.

## See Also

### Applying forces

- [constantForce](constantforce.md): The constant force applied to particles inside the volume.
