> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/charactercontrollercomponent/height](https://developer.apple.com/documentation/realitykit/charactercontrollercomponent/height)

# height

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

The capsule height.

## Declaration

```swift
var height: Float
```

<a id="discussion"></a>

## Discussion

The capsule height includes radii and should be specified the entity’s coordinate system.

## See Also

### Configuring a character

- [radius](radius.md): The capsule radius.
- [skinWidth](skinwidth.md): An added tolerance around the character capsule.
- [slopeLimit](slopelimit.md): The slope limit expressed as a limit angle in radians.
- [stepLimit](steplimit.md): The maximum obstacle height that the controller can move over.
- [upVector](upvector.md): The y-axis direction relative to the physics origin.
