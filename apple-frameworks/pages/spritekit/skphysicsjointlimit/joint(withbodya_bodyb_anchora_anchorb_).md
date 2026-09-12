> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skphysicsjointlimit/joint(withbodya:bodyb:anchora:anchorb:)](https://developer.apple.com/documentation/spritekit/skphysicsjointlimit/joint(withbodya:bodyb:anchora:anchorb:))

# joint(withBodyA:bodyB:anchorA:anchorB:) (Swift)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a new limit joint.

## Declaration

```swift
class func joint(withBodyA bodyA: SKPhysicsBody, bodyB: SKPhysicsBody, anchorA: CGPoint, anchorB: CGPoint) -> SKPhysicsJointLimit
```

## Parameters

- `bodyA`: The first body to connect. The body must be connected to a node that is already part of the scene’s node tree.
- `bodyB`: The second body to connect. The body must be connected to a node that is already part of the scene’s node tree.
- `anchorA`: A connection point on the first body in the scene’s coordinate system.
- `anchorB`: A connection point on the second body in the scene’s coordinate system.

<a id="return-value"></a>

## Return Value

A new limit joint.

<a id="Discussion"></a>

## Discussion

You must add the joint to a physics world associated with the scene before it takes effect.

# jointWithBodyA:bodyB:anchorA:anchorB: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a new limit joint.

## Declaration

```objectivec
+ (SKPhysicsJointLimit *) jointWithBodyA:(SKPhysicsBody *) bodyA bodyB:(SKPhysicsBody *) bodyB anchorA:(CGPoint) anchorA anchorB:(CGPoint) anchorB;
```

## Parameters

- `bodyA`: The first body to connect. The body must be connected to a node that is already part of the scene’s node tree.
- `bodyB`: The second body to connect. The body must be connected to a node that is already part of the scene’s node tree.
- `anchorA`: A connection point on the first body in the scene’s coordinate system.
- `anchorB`: A connection point on the second body in the scene’s coordinate system.

<a id="return-value"></a>

## Return Value

A new limit joint.

<a id="Discussion"></a>

## Discussion

You must add the joint to a physics world associated with the scene before it takes effect.
