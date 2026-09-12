> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifieldbehavior/electricfield()](https://developer.apple.com/documentation/uikit/uifieldbehavior/electricfield())

# electricField() (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Creates and returns a field behavior object that interacts with charged items.

## Declaration

```swift
class func electricField() -> Self
```

<a id="return-value"></a>

## Return Value

An field behavior object that applies an electric field to charged items.

<a id="Discussion"></a>

## Discussion

The amount of force applied by the field is proportional to the charge of the item and is modeled after the first part of the Lorentz equation (`F = qE`). This equation means that the force equals the charge of the object multiplied by the strength of the electric field at the item’s current location in that field.

You can use electric fields as a way to apply forces to an object that are based on charge instead of mass. You can use electric fields to repel or attract items in your interface, with opposite charges attracting each other and similar charges repelling each other. In other words, an item with a positive charge value is attracted to fields whose [strength](strength.md) value is negative and repelled by fields whose [strength](strength.md) value is positive.

## See Also

### Getting the field behaviors

- [dragField()](dragfield%28%29.md): Creates and returns a field behavior for slowing an object’s velocity.
- [springField()](springfield%28%29.md): Creates and returns a spring field behavior.
- [velocityField(direction:)](velocityfield%28direction_%29.md): Creates and returns a field behavior object that applies a directional velocity to items.
- [magneticField()](magneticfield%28%29.md): Creates and returns a field behavior that interacts with charged items.
- [radialGravityField(position:)](radialgravityfield%28position_%29.md): Creates and returns a field behavior object that models a radial gravitational force.
- [linearGravityField(direction:)](lineargravityfield%28direction_%29.md): Creates and returns a field behavior object that models a linear gravitational force.
- [vortexField()](vortexfield%28%29.md): Creates and returns a field behavior object that applies a rotational force relative to the field’s position.
- [noiseField(smoothness:animationSpeed:)](noisefield%28smoothness_animationspeed_%29.md): Creates and returns a field behavior object that applies random noise to other forces.
- [turbulenceField(smoothness:animationSpeed:)](turbulencefield%28smoothness_animationspeed_%29.md): Creates and returns a field behavior object that applies noise to an item in motion.
- [field(evaluationBlock:)](field%28evaluationblock_%29.md): Creates and returns a field behavior object that applies an app-specified field to items.

# electricField (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Creates and returns a field behavior object that interacts with charged items.

## Declaration

```objectivec
+ (instancetype) electricField;
```

<a id="return-value"></a>

## Return Value

An field behavior object that applies an electric field to charged items.

<a id="Discussion"></a>

## Discussion

The amount of force applied by the field is proportional to the charge of the item and is modeled after the first part of the Lorentz equation (`F = qE`). This equation means that the force equals the charge of the object multiplied by the strength of the electric field at the item’s current location in that field.

You can use electric fields as a way to apply forces to an object that are based on charge instead of mass. You can use electric fields to repel or attract items in your interface, with opposite charges attracting each other and similar charges repelling each other. In other words, an item with a positive charge value is attracted to fields whose [strength](strength.md) value is negative and repelled by fields whose [strength](strength.md) value is positive.

## See Also

### Getting the field behaviors

- [dragField](dragfield%28%29.md): Creates and returns a field behavior for slowing an object’s velocity.
- [springField](springfield%28%29.md): Creates and returns a spring field behavior.
- [velocityFieldWithVector:](velocityfield%28direction_%29.md): Creates and returns a field behavior object that applies a directional velocity to items.
- [magneticField](magneticfield%28%29.md): Creates and returns a field behavior that interacts with charged items.
- [radialGravityFieldWithPosition:](radialgravityfield%28position_%29.md): Creates and returns a field behavior object that models a radial gravitational force.
- [linearGravityFieldWithVector:](lineargravityfield%28direction_%29.md): Creates and returns a field behavior object that models a linear gravitational force.
- [vortexField](vortexfield%28%29.md): Creates and returns a field behavior object that applies a rotational force relative to the field’s position.
- [noiseFieldWithSmoothness:animationSpeed:](noisefield%28smoothness_animationspeed_%29.md): Creates and returns a field behavior object that applies random noise to other forces.
- [turbulenceFieldWithSmoothness:animationSpeed:](turbulencefield%28smoothness_animationspeed_%29.md): Creates and returns a field behavior object that applies noise to an item in motion.
- [fieldWithEvaluationBlock:](field%28evaluationblock_%29.md): Creates and returns a field behavior object that applies an app-specified field to items.
