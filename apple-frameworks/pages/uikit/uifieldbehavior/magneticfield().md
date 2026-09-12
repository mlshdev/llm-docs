> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifieldbehavior/magneticfield()](https://developer.apple.com/documentation/uikit/uifieldbehavior/magneticfield())

# magneticField() (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Creates and returns a field behavior that interacts with charged items.

## Declaration

```swift
class func magneticField() -> Self
```

<a id="return-value"></a>

## Return Value

A field behavior object that applies a magnetic field to charged items.

<a id="Discussion"></a>

## Discussion

The magnetic field behavior models a uniform magnetic field in the positive-z direction—that is, coming out of the screen. The amount of force applied by the field is modeled after the second part of the Lorentz equation (`F = qvB`). When the velocity of a charged item is perpendicular to the uniform magnetic field, the item feels a force normal to both the velocity and the field, resulting in a counter-clockwise rotation. Specifying a negative value for the [strength](strength.md) of the field results in a clockwise rotation.

You can use magnetic fields as a way to apply forces to an object that are based on charge instead of mass.

## See Also

### Getting the field behaviors

- [dragField()](dragfield%28%29.md): Creates and returns a field behavior for slowing an object’s velocity.
- [springField()](springfield%28%29.md): Creates and returns a spring field behavior.
- [velocityField(direction:)](velocityfield%28direction_%29.md): Creates and returns a field behavior object that applies a directional velocity to items.
- [electricField()](electricfield%28%29.md): Creates and returns a field behavior object that interacts with charged items.
- [radialGravityField(position:)](radialgravityfield%28position_%29.md): Creates and returns a field behavior object that models a radial gravitational force.
- [linearGravityField(direction:)](lineargravityfield%28direction_%29.md): Creates and returns a field behavior object that models a linear gravitational force.
- [vortexField()](vortexfield%28%29.md): Creates and returns a field behavior object that applies a rotational force relative to the field’s position.
- [noiseField(smoothness:animationSpeed:)](noisefield%28smoothness_animationspeed_%29.md): Creates and returns a field behavior object that applies random noise to other forces.
- [turbulenceField(smoothness:animationSpeed:)](turbulencefield%28smoothness_animationspeed_%29.md): Creates and returns a field behavior object that applies noise to an item in motion.
- [field(evaluationBlock:)](field%28evaluationblock_%29.md): Creates and returns a field behavior object that applies an app-specified field to items.

# magneticField (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Creates and returns a field behavior that interacts with charged items.

## Declaration

```objectivec
+ (instancetype) magneticField;
```

<a id="return-value"></a>

## Return Value

A field behavior object that applies a magnetic field to charged items.

<a id="Discussion"></a>

## Discussion

The magnetic field behavior models a uniform magnetic field in the positive-z direction—that is, coming out of the screen. The amount of force applied by the field is modeled after the second part of the Lorentz equation (`F = qvB`). When the velocity of a charged item is perpendicular to the uniform magnetic field, the item feels a force normal to both the velocity and the field, resulting in a counter-clockwise rotation. Specifying a negative value for the [strength](strength.md) of the field results in a clockwise rotation.

You can use magnetic fields as a way to apply forces to an object that are based on charge instead of mass.

## See Also

### Getting the field behaviors

- [dragField](dragfield%28%29.md): Creates and returns a field behavior for slowing an object’s velocity.
- [springField](springfield%28%29.md): Creates and returns a spring field behavior.
- [velocityFieldWithVector:](velocityfield%28direction_%29.md): Creates and returns a field behavior object that applies a directional velocity to items.
- [electricField](electricfield%28%29.md): Creates and returns a field behavior object that interacts with charged items.
- [radialGravityFieldWithPosition:](radialgravityfield%28position_%29.md): Creates and returns a field behavior object that models a radial gravitational force.
- [linearGravityFieldWithVector:](lineargravityfield%28direction_%29.md): Creates and returns a field behavior object that models a linear gravitational force.
- [vortexField](vortexfield%28%29.md): Creates and returns a field behavior object that applies a rotational force relative to the field’s position.
- [noiseFieldWithSmoothness:animationSpeed:](noisefield%28smoothness_animationspeed_%29.md): Creates and returns a field behavior object that applies random noise to other forces.
- [turbulenceFieldWithSmoothness:animationSpeed:](turbulencefield%28smoothness_animationspeed_%29.md): Creates and returns a field behavior object that applies noise to an item in motion.
- [fieldWithEvaluationBlock:](field%28evaluationblock_%29.md): Creates and returns a field behavior object that applies an app-specified field to items.
