> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/charactercontrollercomponent/slopelimit](https://developer.apple.com/documentation/realitykit/charactercontrollercomponent/slopelimit)

# slopeLimit

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

The slope limit expressed as a limit angle in radians.

## Declaration

```swift
var slopeLimit: Float
```

<a id="discussion"></a>

## Discussion

This value represents the maximum slope that the character can move over. RealityKit applies this value to characters that are walking on static objects, but not when walking on kinematic or dynamic objects.

Changing this value after the CharacterControllerComponent has been created and added to Entity has no effect.

## See Also

### Configuring a character

- [height](height.md): The capsule height.
- [radius](radius.md): The capsule radius.
- [skinWidth](skinwidth.md): An added tolerance around the character capsule.
- [stepLimit](steplimit.md): The maximum obstacle height that the controller can move over.
- [upVector](upvector.md): The y-axis direction relative to the physics origin.
