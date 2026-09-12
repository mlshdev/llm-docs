> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skphysicsbody/allowsrotation](https://developer.apple.com/documentation/spritekit/skphysicsbody/allowsrotation)

# allowsRotation (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A Boolean value that indicates whether the physics body is affected by angular forces and impulses applied to it.

## Declaration

```swift
var allowsRotation: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [true](https://developer.apple.com/documentation/swift/true). This property is ignored on edge-based bodies, which are unaffected by forces in the system.

## See Also

### Defining How Forces Affect a Physics Body

- [affectedByGravity](affectedbygravity.md): A Boolean value that indicates whether this physics body is affected by the physics world’s gravity.
- [isDynamic](isdynamic.md): A Boolean value that indicates whether the physics body is moved by the physics simulation.

# allowsRotation (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A Boolean value that indicates whether the physics body is affected by angular forces and impulses applied to it.

## Declaration

```objectivec
@property (nonatomic) BOOL allowsRotation;
```

<a id="Discussion"></a>

## Discussion

The default value is [true](https://developer.apple.com/documentation/swift/true). This property is ignored on edge-based bodies, which are unaffected by forces in the system.

## See Also

### Defining How Forces Affect a Physics Body

- [affectedByGravity](affectedbygravity.md): A Boolean value that indicates whether this physics body is affected by the physics world’s gravity.
- [dynamic](isdynamic.md): A Boolean value that indicates whether the physics body is moved by the physics simulation.
