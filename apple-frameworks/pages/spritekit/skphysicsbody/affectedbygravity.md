> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skphysicsbody/affectedbygravity](https://developer.apple.com/documentation/spritekit/skphysicsbody/affectedbygravity)

# affectedByGravity (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A Boolean value that indicates whether this physics body is affected by the physics world’s gravity.

## Declaration

```swift
var affectedByGravity: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The physics world’s [gravity](../skphysicsworld/gravity.md) property defines the gravitational forces applied to volume-based bodies in the scene.

The default value is `true`. This property is ignored on edge-based bodies, which are always unaffected by gravity.

Physics bodies with `affectedByGravity` set to `false` are still affected by the gravity fields created by [linearGravityField(withVector:)](../skfieldnode/lineargravityfield%28withvector_%29.md) and [radialGravityField()](../skfieldnode/radialgravityfield%28%29.md).

## See Also

### Defining How Forces Affect a Physics Body

- [allowsRotation](allowsrotation.md): A Boolean value that indicates whether the physics body is affected by angular forces and impulses applied to it.
- [isDynamic](isdynamic.md): A Boolean value that indicates whether the physics body is moved by the physics simulation.

# affectedByGravity (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A Boolean value that indicates whether this physics body is affected by the physics world’s gravity.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL affectedByGravity;
```

<a id="Discussion"></a>

## Discussion

The physics world’s [gravity](../skphysicsworld/gravity.md) property defines the gravitational forces applied to volume-based bodies in the scene.

The default value is `true`. This property is ignored on edge-based bodies, which are always unaffected by gravity.

Physics bodies with `affectedByGravity` set to `false` are still affected by the gravity fields created by [linearGravityFieldWithVector:](../skfieldnode/lineargravityfield%28withvector_%29.md) and [radialGravityField](../skfieldnode/radialgravityfield%28%29.md).

## See Also

### Defining How Forces Affect a Physics Body

- [allowsRotation](allowsrotation.md): A Boolean value that indicates whether the physics body is affected by angular forces and impulses applied to it.
- [dynamic](isdynamic.md): A Boolean value that indicates whether the physics body is moved by the physics simulation.
