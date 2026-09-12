> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/charactercontrollercomponent/skinwidth](https://developer.apple.com/documentation/realitykit/charactercontrollercomponent/skinwidth)

# skinWidth

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

An added tolerance around the character capsule.

## Declaration

```swift
var skinWidth: Float
```

<a id="discussion"></a>

## Discussion

A small skin, known as the *contact offset*, is maintained around the controller’s volume to avoid rounding and precision issues with collision detection. Specify this value relative to the entity’s coordinate system.

## See Also

### Configuring a character

- [height](height.md): The capsule height.
- [radius](radius.md): The capsule radius.
- [slopeLimit](slopelimit.md): The slope limit expressed as a limit angle in radians.
- [stepLimit](steplimit.md): The maximum obstacle height that the controller can move over.
- [upVector](upvector.md): The y-axis direction relative to the physics origin.
