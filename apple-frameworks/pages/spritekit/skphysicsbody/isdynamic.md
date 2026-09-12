> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skphysicsbody/isdynamic](https://developer.apple.com/documentation/spritekit/skphysicsbody/isdynamic)

# isDynamic (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A Boolean value that indicates whether the physics body is moved by the physics simulation.

## Declaration

```swift
var isDynamic: Bool { get set }
```

## Mentioned In

- [Getting Started with Physics Bodies](../getting-started-with-physics-bodies.md)
- [Getting Started with Spring Joints](../getting-started-with-spring-joints.md)

<a id="Discussion"></a>

## Discussion

The default value is [true](https://developer.apple.com/documentation/swift/true). If the value is [false](https://developer.apple.com/documentation/swift/false), the physics body ignores all forces and impulses applied to it. This property is ignored on edge-based bodies; they are automatically static.

## See Also

### Defining How Forces Affect a Physics Body

- [affectedByGravity](affectedbygravity.md): A Boolean value that indicates whether this physics body is affected by the physics world’s gravity.
- [allowsRotation](allowsrotation.md): A Boolean value that indicates whether the physics body is affected by angular forces and impulses applied to it.

# dynamic (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A Boolean value that indicates whether the physics body is moved by the physics simulation.

## Declaration

```objectivec
@property (nonatomic, getter=isDynamic) BOOL dynamic;
```

## Mentioned In

- [Getting Started with Physics Bodies](../getting-started-with-physics-bodies.md)
- [Getting Started with Spring Joints](../getting-started-with-spring-joints.md)

<a id="Discussion"></a>

## Discussion

The default value is [true](https://developer.apple.com/documentation/swift/true). If the value is [false](https://developer.apple.com/documentation/swift/false), the physics body ignores all forces and impulses applied to it. This property is ignored on edge-based bodies; they are automatically static.

## See Also

### Defining How Forces Affect a Physics Body

- [affectedByGravity](affectedbygravity.md): A Boolean value that indicates whether this physics body is affected by the physics world’s gravity.
- [allowsRotation](allowsrotation.md): A Boolean value that indicates whether the physics body is affected by angular forces and impulses applied to it.
