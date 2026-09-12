> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skfieldnode/dragfield()](https://developer.apple.com/documentation/spritekit/skfieldnode/dragfield())

# dragField() (Swift)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Creates a field node that applies a force that resists the motion of physics bodies.

## Declaration

```swift
class func dragField() -> SKFieldNode
```

<a id="return-value"></a>

## Return Value

A new drag field node.

<a id="Discussion"></a>

## Discussion

The force is applied in the opposite direction of the physics body’s [velocity](../skphysicsbody/velocity.md) property and has a magnitude proportional to the field’s [strength](strength.md) property and the physics body’s speed.  This field models Stoke’s Law.

## See Also

### Creating Field Nodes

- [electricField()](electricfield%28%29.md): Creates a field node that applies an electrical force proportional to the electrical charge of physics bodies.
- [linearGravityField(withVector:)](lineargravityfield%28withvector_%29.md): Creates a field node that accelerates physics bodies in a specific direction.
- [magneticField()](magneticfield%28%29.md): Creates a field node that applies a magnetic force based on the velocity and electrical charge of the physics bodies.
- [noiseField(withSmoothness:animationSpeed:)](noisefield%28withsmoothness_animationspeed_%29.md): Creates a field node that applies a randomized acceleration to physics bodies.
- [radialGravityField()](radialgravityfield%28%29.md): Creates a field node that accelerates physics bodies toward the field node.
- [springField()](springfield%28%29.md): Creates a field node that applies a spring-like force that pulls physics bodies toward the field node.
- [turbulenceField(withSmoothness:animationSpeed:)](turbulencefield%28withsmoothness_animationspeed_%29.md): Creates a field node that applies a randomized acceleration to physics bodies.
- [velocityField(with:)](velocityfield%28with_%29.md): Creates a field node that sets the velocity of physics bodies that enter the node’s area based on the pixel values of a texture.
- [velocityField(withVector:)](velocityfield%28withvector_%29.md): Creates a field node that gives physics bodies a constant velocity.
- [vortexField()](vortexfield%28%29.md): Creates a field node that applies a perpendicular force to physics bodies.
- [customField(evaluationBlock:)](customfield%28evaluationblock_%29.md): Creates a field node that calculates and applies a custom force to the physics body.
- [SKFieldForceEvaluator](../skfieldforceevaluator.md): The definition for a custom block that processes a single physics body’s interaction with the field.

# dragField (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Creates a field node that applies a force that resists the motion of physics bodies.

## Declaration

```objectivec
+ (SKFieldNode *) dragField;
```

<a id="return-value"></a>

## Return Value

A new drag field node.

<a id="Discussion"></a>

## Discussion

The force is applied in the opposite direction of the physics body’s [velocity](../skphysicsbody/velocity.md) property and has a magnitude proportional to the field’s [strength](strength.md) property and the physics body’s speed.  This field models Stoke’s Law.

## See Also

### Creating Field Nodes

- [electricField](electricfield%28%29.md): Creates a field node that applies an electrical force proportional to the electrical charge of physics bodies.
- [linearGravityFieldWithVector:](lineargravityfield%28withvector_%29.md): Creates a field node that accelerates physics bodies in a specific direction.
- [magneticField](magneticfield%28%29.md): Creates a field node that applies a magnetic force based on the velocity and electrical charge of the physics bodies.
- [noiseFieldWithSmoothness:animationSpeed:](noisefield%28withsmoothness_animationspeed_%29.md): Creates a field node that applies a randomized acceleration to physics bodies.
- [radialGravityField](radialgravityfield%28%29.md): Creates a field node that accelerates physics bodies toward the field node.
- [springField](springfield%28%29.md): Creates a field node that applies a spring-like force that pulls physics bodies toward the field node.
- [turbulenceFieldWithSmoothness:animationSpeed:](turbulencefield%28withsmoothness_animationspeed_%29.md): Creates a field node that applies a randomized acceleration to physics bodies.
- [velocityFieldWithTexture:](velocityfield%28with_%29.md): Creates a field node that sets the velocity of physics bodies that enter the node’s area based on the pixel values of a texture.
- [velocityFieldWithVector:](velocityfield%28withvector_%29.md): Creates a field node that gives physics bodies a constant velocity.
- [vortexField](vortexfield%28%29.md): Creates a field node that applies a perpendicular force to physics bodies.
- [customFieldWithEvaluationBlock:](customfield%28evaluationblock_%29.md): Creates a field node that calculates and applies a custom force to the physics body.
- [SKFieldForceEvaluator](../skfieldforceevaluator.md): The definition for a custom block that processes a single physics body’s interaction with the field.
