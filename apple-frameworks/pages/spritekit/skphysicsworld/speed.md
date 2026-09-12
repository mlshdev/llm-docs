> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skphysicsworld/speed](https://developer.apple.com/documentation/spritekit/skphysicsworld/speed)

# speed (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The rate at which the simulation executes.

## Declaration

```swift
var speed: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is `1.0`, which means the simulation runs at normal speed. A value other than the default changes the rate at which time passes in the physics simulation. For example, a speed value of `2.0` indicates that time in the physics simulation passes twice as fast as the scene’s simulation time. A value of `0.0` pauses the physics simulation.

## See Also

### Configuring the Physics World

- [gravity](gravity.md): A vector that specifies the gravitational acceleration applied to physics bodies in the physics world.

# speed (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The rate at which the simulation executes.

## Declaration

```objectivec
@property (nonatomic) CGFloat speed;
```

<a id="Discussion"></a>

## Discussion

The default value is `1.0`, which means the simulation runs at normal speed. A value other than the default changes the rate at which time passes in the physics simulation. For example, a speed value of `2.0` indicates that time in the physics simulation passes twice as fast as the scene’s simulation time. A value of `0.0` pauses the physics simulation.

## See Also

### Configuring the Physics World

- [gravity](gravity.md): A vector that specifies the gravitational acceleration applied to physics bodies in the physics world.
