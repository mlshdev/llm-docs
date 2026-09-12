> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skphysicsjointpin/rotationspeed](https://developer.apple.com/documentation/spritekit/skphysicsjointpin/rotationspeed)

# rotationSpeed (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The speed, in radians per second, at which the physics bodies are driven around the pin joint.

## Declaration

```swift
var rotationSpeed: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The [frictionTorque](frictiontorque.md) property limits the maximum amount of torque that can be applied to the physics bodies.

## See Also

### Configuring a Pin Joint

- [shouldEnableLimits](shouldenablelimits.md): A Boolean value that indicates whether the pin joint’s rotation is limited to a specific range of values.
- [lowerAngleLimit](loweranglelimit.md): The smallest angle allowed for the pin joint, in radians.
- [upperAngleLimit](upperanglelimit.md): The largest angle allowed for the pin joint, in radians.
- [frictionTorque](frictiontorque.md): The resistance applied by the pin joint to spinning around the anchor point.

# rotationSpeed (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The speed, in radians per second, at which the physics bodies are driven around the pin joint.

## Declaration

```objectivec
@property (nonatomic) CGFloat rotationSpeed;
```

<a id="Discussion"></a>

## Discussion

The [frictionTorque](frictiontorque.md) property limits the maximum amount of torque that can be applied to the physics bodies.

## See Also

### Configuring a Pin Joint

- [shouldEnableLimits](shouldenablelimits.md): A Boolean value that indicates whether the pin joint’s rotation is limited to a specific range of values.
- [lowerAngleLimit](loweranglelimit.md): The smallest angle allowed for the pin joint, in radians.
- [upperAngleLimit](upperanglelimit.md): The largest angle allowed for the pin joint, in radians.
- [frictionTorque](frictiontorque.md): The resistance applied by the pin joint to spinning around the anchor point.
