> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skphysicsjointfixed/joint(withbodya:bodyb:anchor:)](https://developer.apple.com/documentation/spritekit/skphysicsjointfixed/joint(withbodya:bodyb:anchor:))

# joint(withBodyA:bodyB:anchor:) (Swift)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a new fixed joint.

## Declaration

```swift
class func joint(withBodyA bodyA: SKPhysicsBody, bodyB: SKPhysicsBody, anchor: CGPoint) -> SKPhysicsJointFixed
```

## Parameters

- `bodyA`: The first body to connect. The body must be connected to a node that is already part of the scene’s node tree.
- `bodyB`: The second body to connect. The body must be connected to a node that is already part of the scene’s node tree.
- `anchor`: The anchor point for the connection in the scene’s coordinate system.

<a id="return-value"></a>

## Return Value

A new fixed joint.

<a id="Discussion"></a>

## Discussion

You must add the joint to a physics world associated with the scene before it takes effect.

# jointWithBodyA:bodyB:anchor: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a new fixed joint.

## Declaration

```objectivec
+ (SKPhysicsJointFixed *) jointWithBodyA:(SKPhysicsBody *) bodyA bodyB:(SKPhysicsBody *) bodyB anchor:(CGPoint) anchor;
```

## Parameters

- `bodyA`: The first body to connect. The body must be connected to a node that is already part of the scene’s node tree.
- `bodyB`: The second body to connect. The body must be connected to a node that is already part of the scene’s node tree.
- `anchor`: The anchor point for the connection in the scene’s coordinate system.

<a id="return-value"></a>

## Return Value

A new fixed joint.

<a id="Discussion"></a>

## Discussion

You must add the joint to a physics world associated with the scene before it takes effect.
