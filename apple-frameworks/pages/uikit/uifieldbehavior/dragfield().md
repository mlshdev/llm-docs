> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifieldbehavior/dragfield()](https://developer.apple.com/documentation/uikit/uifieldbehavior/dragfield())

# dragField() (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Creates and returns a field behavior for slowing an object’s velocity.

## Declaration

```swift
class func dragField() -> Self
```

<a id="return-value"></a>

## Return Value

A field behavior object that applies a drag force to items.

<a id="Discussion"></a>

## Discussion

This field simulates the force of friction on an item. The force is applied in the opposite direction of the affected item’s velocity vector and has a magnitude that is proportional to the field’s [strength](strength.md) property and the item’s current velocity.

## See Also

### Getting the field behaviors

- [springField()](springfield%28%29.md): Creates and returns a spring field behavior.
- [velocityField(direction:)](velocityfield%28direction_%29.md): Creates and returns a field behavior object that applies a directional velocity to items.
- [electricField()](electricfield%28%29.md): Creates and returns a field behavior object that interacts with charged items.
- [magneticField()](magneticfield%28%29.md): Creates and returns a field behavior that interacts with charged items.
- [radialGravityField(position:)](radialgravityfield%28position_%29.md): Creates and returns a field behavior object that models a radial gravitational force.
- [linearGravityField(direction:)](lineargravityfield%28direction_%29.md): Creates and returns a field behavior object that models a linear gravitational force.
- [vortexField()](vortexfield%28%29.md): Creates and returns a field behavior object that applies a rotational force relative to the field’s position.
- [noiseField(smoothness:animationSpeed:)](noisefield%28smoothness_animationspeed_%29.md): Creates and returns a field behavior object that applies random noise to other forces.
- [turbulenceField(smoothness:animationSpeed:)](turbulencefield%28smoothness_animationspeed_%29.md): Creates and returns a field behavior object that applies noise to an item in motion.
- [field(evaluationBlock:)](field%28evaluationblock_%29.md): Creates and returns a field behavior object that applies an app-specified field to items.

# dragField (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Creates and returns a field behavior for slowing an object’s velocity.

## Declaration

```objectivec
+ (instancetype) dragField;
```

<a id="return-value"></a>

## Return Value

A field behavior object that applies a drag force to items.

<a id="Discussion"></a>

## Discussion

This field simulates the force of friction on an item. The force is applied in the opposite direction of the affected item’s velocity vector and has a magnitude that is proportional to the field’s [strength](strength.md) property and the item’s current velocity.

## See Also

### Getting the field behaviors

- [springField](springfield%28%29.md): Creates and returns a spring field behavior.
- [velocityFieldWithVector:](velocityfield%28direction_%29.md): Creates and returns a field behavior object that applies a directional velocity to items.
- [electricField](electricfield%28%29.md): Creates and returns a field behavior object that interacts with charged items.
- [magneticField](magneticfield%28%29.md): Creates and returns a field behavior that interacts with charged items.
- [radialGravityFieldWithPosition:](radialgravityfield%28position_%29.md): Creates and returns a field behavior object that models a radial gravitational force.
- [linearGravityFieldWithVector:](lineargravityfield%28direction_%29.md): Creates and returns a field behavior object that models a linear gravitational force.
- [vortexField](vortexfield%28%29.md): Creates and returns a field behavior object that applies a rotational force relative to the field’s position.
- [noiseFieldWithSmoothness:animationSpeed:](noisefield%28smoothness_animationspeed_%29.md): Creates and returns a field behavior object that applies random noise to other forces.
- [turbulenceFieldWithSmoothness:animationSpeed:](turbulencefield%28smoothness_animationspeed_%29.md): Creates and returns a field behavior object that applies noise to an item in motion.
- [fieldWithEvaluationBlock:](field%28evaluationblock_%29.md): Creates and returns a field behavior object that applies an app-specified field to items.
