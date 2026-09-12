> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skphysicsjointpin/frictiontorque](https://developer.apple.com/documentation/spritekit/skphysicsjointpin/frictiontorque)

# frictionTorque (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The resistance applied by the pin joint to spinning around the anchor point.

## Declaration

```swift
var frictionTorque: CGFloat { get set }
```

## Mentioned In

- [Pinning and Rotating Physics Bodies](../pinning-and-rotating-physics-bodies.md)

<a id="Discussion"></a>

## Discussion

The range of values is from `0.0` to `1.0`. The default value is `0.0`. If a value greater than the default is specified, friction is applied to reduce the object’s angular velocity around the pin.

## See Also

### Configuring a Pin Joint

- [rotationSpeed](rotationspeed.md): The speed, in radians per second, at which the physics bodies are driven around the pin joint.
- [shouldEnableLimits](shouldenablelimits.md): A Boolean value that indicates whether the pin joint’s rotation is limited to a specific range of values.
- [lowerAngleLimit](loweranglelimit.md): The smallest angle allowed for the pin joint, in radians.
- [upperAngleLimit](upperanglelimit.md): The largest angle allowed for the pin joint, in radians.

# frictionTorque (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The resistance applied by the pin joint to spinning around the anchor point.

## Declaration

```objectivec
@property (nonatomic) CGFloat frictionTorque;
```

## Mentioned In

- [Pinning and Rotating Physics Bodies](../pinning-and-rotating-physics-bodies.md)

<a id="Discussion"></a>

## Discussion

The range of values is from `0.0` to `1.0`. The default value is `0.0`. If a value greater than the default is specified, friction is applied to reduce the object’s angular velocity around the pin.

## See Also

### Configuring a Pin Joint

- [rotationSpeed](rotationspeed.md): The speed, in radians per second, at which the physics bodies are driven around the pin joint.
- [shouldEnableLimits](shouldenablelimits.md): A Boolean value that indicates whether the pin joint’s rotation is limited to a specific range of values.
- [lowerAngleLimit](loweranglelimit.md): The smallest angle allowed for the pin joint, in radians.
- [upperAngleLimit](upperanglelimit.md): The largest angle allowed for the pin joint, in radians.
