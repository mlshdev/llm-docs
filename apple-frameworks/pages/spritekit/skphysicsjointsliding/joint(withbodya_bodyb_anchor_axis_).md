> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skphysicsjointsliding/joint(withbodya:bodyb:anchor:axis:)](https://developer.apple.com/documentation/spritekit/skphysicsjointsliding/joint(withbodya:bodyb:anchor:axis:))

# joint(withBodyA:bodyB:anchor:axis:) (Swift)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a new sliding joint.

## Declaration

```swift
class func joint(withBodyA bodyA: SKPhysicsBody, bodyB: SKPhysicsBody, anchor: CGPoint, axis: CGVector) -> SKPhysicsJointSliding
```

## Parameters

- `bodyA`: The first body to connect. The body must be connected to a node that is already part of the scene’s node tree.
- `bodyB`: The second body to connect. The body must be connected to a node that is already part of the scene’s node tree.
- `anchor`: The anchor point for the connection in the scene’s coordinate system.
- `axis`: A vector that defines the direction that the joint is allowed to slide.

<a id="return-value"></a>

## Return Value

A new sliding joint.

<a id="Discussion"></a>

## Discussion

You must add the joint to a physics world associated with the scene before it takes effect.

# jointWithBodyA:bodyB:anchor:axis: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a new sliding joint.

## Declaration

```objectivec
+ (SKPhysicsJointSliding *) jointWithBodyA:(SKPhysicsBody *) bodyA bodyB:(SKPhysicsBody *) bodyB anchor:(CGPoint) anchor axis:(CGVector) axis;
```

## Parameters

- `bodyA`: The first body to connect. The body must be connected to a node that is already part of the scene’s node tree.
- `bodyB`: The second body to connect. The body must be connected to a node that is already part of the scene’s node tree.
- `anchor`: The anchor point for the connection in the scene’s coordinate system.
- `axis`: A vector that defines the direction that the joint is allowed to slide.

<a id="return-value"></a>

## Return Value

A new sliding joint.

<a id="Discussion"></a>

## Discussion

You must add the joint to a physics world associated with the scene before it takes effect.
