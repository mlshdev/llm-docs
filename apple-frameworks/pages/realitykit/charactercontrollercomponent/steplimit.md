> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/charactercontrollercomponent/steplimit](https://developer.apple.com/documentation/realitykit/charactercontrollercomponent/steplimit)

# stepLimit

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

The maximum obstacle height that the controller can move over.

## Declaration

```swift
var stepLimit: Float
```

<a id="discussion"></a>

## Discussion

Specify this value relative to the entity’s coordinate system.

Changing this value after the CharacterControllerComponent has been created and added to Entity has no effect.

## See Also

### Configuring a character

- [height](height.md): The capsule height.
- [radius](radius.md): The capsule radius.
- [skinWidth](skinwidth.md): An added tolerance around the character capsule.
- [slopeLimit](slopelimit.md): The slope limit expressed as a limit angle in radians.
- [upVector](upvector.md): The y-axis direction relative to the physics origin.
