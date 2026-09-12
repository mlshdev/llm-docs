> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/creating-a-look-at-constraint](https://developer.apple.com/documentation/spritekit/creating-a-look-at-constraint)

# Creating a Look-At Constraint (Swift)

**Framework:** SpriteKit  
**Kind:** Article

Make a node automatically rotate itself based on the changing position of another node, by using orientation constraints.

<a id="overview"></a>

## Overview

A common use for orientation constraints is to make a *look-at constraint*. For example, you may create a look-at constraint to make a pair of eyes follow a moving object or to have a rocket point in the direction of its target.

The following code shows how to create a constraint to make a sprite node named `pointer` always point toward a circular-shape node named `target`. The texture assigned to `pointer` is an upward-pointing arrow and, because SpriteKit’s angular coordinates have their origin at the three o’clock position, the orient constraint has an offset of 90° ([pi](https://developer.apple.com/documentation/swift/floatingpoint/pi)`/2` radians) so that the arrow is correctly oriented toward the target.

```swift
let target = SKShapeNode(circleOfRadius: 10)
target.position = CGPoint(x: 100, y: 100)
scene.addChild(target)
    
let pointer = SKSpriteNode(imageNamed: "arrowUp.png")
pointer.position = CGPoint(x: 200, y: 200)
scene.addChild(pointer)
    
let lookAtConstraint = SKConstraint.orient(to: target,
                                           offset: SKRange(constantValue: -CGFloat.pi / 2))
pointer.constraints = [ lookAtConstraint ]
```

A further orientation constraint, [zRotation(\_:)](skconstraint/zrotation%28__%29.md), can be used in combination with the look-at constraint shown above to limit rotation. When you add the code above, the arrow’s rotation is limited so that it never points downward:

```swift
let limitLookAt = SKConstraint.zRotation(SKRange(lowerLimit: -CGFloat.pi / 2,
                                                 upperLimit: CGFloat.pi / 2))
      
pointer.constraints = [ lookAtConstraint, limitLookAt ]
```

## See Also

### Creating Orientation Constraints

- [orient(to:offset:)](skconstraint/orient%28to_offset_%29-1h1tw.md): Creates a constraint that forces a node to rotate to face another node.
- [orient(to:offset:)](skconstraint/orient%28to_offset_%29-9lq3h.md): Creates a constraint that forces a node to rotate to face a fixed point.
- [orient(to:in:offset:)](skconstraint/orient%28to_in_offset_%29.md): Creates a constraint that forces a node to rotate to face a point in another node’s coordinate system.
- [zRotation(\_:)](skconstraint/zrotation%28__%29.md): Creates a constraint that limits the orientation of a node.

# Creating a Look-At Constraint (Objective-C)

**Framework:** SpriteKit  
**Kind:** Article

Make a node automatically rotate itself based on the changing position of another node, by using orientation constraints.

<a id="overview"></a>

## Overview

A common use for orientation constraints is to make a *look-at constraint*. For example, you may create a look-at constraint to make a pair of eyes follow a moving object or to have a rocket point in the direction of its target.

The following code shows how to create a constraint to make a sprite node named `pointer` always point toward a circular-shape node named `target`. The texture assigned to `pointer` is an upward-pointing arrow and, because SpriteKit’s angular coordinates have their origin at the three o’clock position, the orient constraint has an offset of 90° ([pi](https://developer.apple.com/documentation/swift/floatingpoint/pi)`/2` radians) so that the arrow is correctly oriented toward the target.

```swift
let target = SKShapeNode(circleOfRadius: 10)
target.position = CGPoint(x: 100, y: 100)
scene.addChild(target)
    
let pointer = SKSpriteNode(imageNamed: "arrowUp.png")
pointer.position = CGPoint(x: 200, y: 200)
scene.addChild(pointer)
    
let lookAtConstraint = SKConstraint.orient(to: target,
                                           offset: SKRange(constantValue: -CGFloat.pi / 2))
pointer.constraints = [ lookAtConstraint ]
```

A further orientation constraint, [zRotation:](skconstraint/zrotation%28__%29.md), can be used in combination with the look-at constraint shown above to limit rotation. When you add the code above, the arrow’s rotation is limited so that it never points downward:

```swift
let limitLookAt = SKConstraint.zRotation(SKRange(lowerLimit: -CGFloat.pi / 2,
                                                 upperLimit: CGFloat.pi / 2))
      
pointer.constraints = [ lookAtConstraint, limitLookAt ]
```

## See Also

### Creating Orientation Constraints

- [orientToNode:offset:](skconstraint/orient%28to_offset_%29-1h1tw.md): Creates a constraint that forces a node to rotate to face another node.
- [orientToPoint:offset:](skconstraint/orient%28to_offset_%29-9lq3h.md): Creates a constraint that forces a node to rotate to face a fixed point.
- [orientToPoint:inNode:offset:](skconstraint/orient%28to_in_offset_%29.md): Creates a constraint that forces a node to rotate to face a point in another node’s coordinate system.
- [zRotation:](skconstraint/zrotation%28__%29.md): Creates a constraint that limits the orientation of a node.
