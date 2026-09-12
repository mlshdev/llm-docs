> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skphysicsjointpin/shouldenablelimits](https://developer.apple.com/documentation/spritekit/skphysicsjointpin/shouldenablelimits)

# shouldEnableLimits (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A Boolean value that indicates whether the pin joint’s rotation is limited to a specific range of values.

## Declaration

```swift
var shouldEnableLimits: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [false](https://developer.apple.com/documentation/swift/false). If [true](https://developer.apple.com/documentation/swift/true), the [lowerAngleLimit](loweranglelimit.md) and [upperAngleLimit](upperanglelimit.md) properties are used to limit the angle of the pin joint.

## See Also

### Configuring a Pin Joint

- [rotationSpeed](rotationspeed.md): The speed, in radians per second, at which the physics bodies are driven around the pin joint.
- [lowerAngleLimit](loweranglelimit.md): The smallest angle allowed for the pin joint, in radians.
- [upperAngleLimit](upperanglelimit.md): The largest angle allowed for the pin joint, in radians.
- [frictionTorque](frictiontorque.md): The resistance applied by the pin joint to spinning around the anchor point.

# shouldEnableLimits (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A Boolean value that indicates whether the pin joint’s rotation is limited to a specific range of values.

## Declaration

```objectivec
@property (nonatomic) BOOL shouldEnableLimits;
```

<a id="Discussion"></a>

## Discussion

The default value is [false](https://developer.apple.com/documentation/swift/false). If [true](https://developer.apple.com/documentation/swift/true), the [lowerAngleLimit](loweranglelimit.md) and [upperAngleLimit](upperanglelimit.md) properties are used to limit the angle of the pin joint.

## See Also

### Configuring a Pin Joint

- [rotationSpeed](rotationspeed.md): The speed, in radians per second, at which the physics bodies are driven around the pin joint.
- [lowerAngleLimit](loweranglelimit.md): The smallest angle allowed for the pin joint, in radians.
- [upperAngleLimit](upperanglelimit.md): The largest angle allowed for the pin joint, in radians.
- [frictionTorque](frictiontorque.md): The resistance applied by the pin joint to spinning around the anchor point.
