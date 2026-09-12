> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/charactercontrollercomponent/upvector](https://developer.apple.com/documentation/realitykit/charactercontrollercomponent/upvector)

# upVector

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

The y-axis direction relative to the physics origin.

## Declaration

```swift
var upVector: SIMD3<Float>
```

<a id="discussion"></a>

## Discussion

Rotates the object so that the vertical height is along the up vector. Normalize and specify the vector in *physics space*, the coordinate system of the physics simulation.

## See Also

### Configuring a character

- [height](height.md): The capsule height.
- [radius](radius.md): The capsule radius.
- [skinWidth](skinwidth.md): An added tolerance around the character capsule.
- [slopeLimit](slopelimit.md): The slope limit expressed as a limit angle in radians.
- [stepLimit](steplimit.md): The maximum obstacle height that the controller can move over.
