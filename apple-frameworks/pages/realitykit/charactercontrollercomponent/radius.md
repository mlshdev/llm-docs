> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/charactercontrollercomponent/radius

# radius

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

The capsule radius.

## Declaration

```swift
var radius: Float
```

<a id="discussion"></a>

## Discussion

Specify this value in the entity’s coordinate system.

## See Also

### Configuring a character

- [height](height.md): The capsule height.
- [skinWidth](skinwidth.md): An added tolerance around the character capsule.
- [slopeLimit](slopelimit.md): The slope limit expressed as a limit angle in radians.
- [stepLimit](steplimit.md): The maximum obstacle height that the controller can move over.
- [upVector](upvector.md): The y-axis direction relative to the physics origin.
