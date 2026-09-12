> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skphysicsjointpin/upperanglelimit](https://developer.apple.com/documentation/spritekit/skphysicsjointpin/upperanglelimit)

# upperAngleLimit (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The largest angle allowed for the pin joint, in radians.

## Declaration

```swift
var upperAngleLimit: CGFloat { get set }
```

## Mentioned In

- [Pinning and Rotating Physics Bodies](../pinning-and-rotating-physics-bodies.md)

<a id="Discussion"></a>

## Discussion

The default value is `0.0`.

## See Also

### Configuring a Pin Joint

- [rotationSpeed](rotationspeed.md): The speed, in radians per second, at which the physics bodies are driven around the pin joint.
- [shouldEnableLimits](shouldenablelimits.md): A Boolean value that indicates whether the pin joint’s rotation is limited to a specific range of values.
- [lowerAngleLimit](loweranglelimit.md): The smallest angle allowed for the pin joint, in radians.
- [frictionTorque](frictiontorque.md): The resistance applied by the pin joint to spinning around the anchor point.

# upperAngleLimit (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The largest angle allowed for the pin joint, in radians.

## Declaration

```objectivec
@property (nonatomic) CGFloat upperAngleLimit;
```

## Mentioned In

- [Pinning and Rotating Physics Bodies](../pinning-and-rotating-physics-bodies.md)

<a id="Discussion"></a>

## Discussion

The default value is `0.0`.

## See Also

### Configuring a Pin Joint

- [rotationSpeed](rotationspeed.md): The speed, in radians per second, at which the physics bodies are driven around the pin joint.
- [shouldEnableLimits](shouldenablelimits.md): A Boolean value that indicates whether the pin joint’s rotation is limited to a specific range of values.
- [lowerAngleLimit](loweranglelimit.md): The smallest angle allowed for the pin joint, in radians.
- [frictionTorque](frictiontorque.md): The resistance applied by the pin joint to spinning around the anchor point.
