> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifieldbehavior/vortexfield()](https://developer.apple.com/documentation/uikit/uifieldbehavior/vortexfield())

# vortexField() (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Creates and returns a field behavior object that applies a rotational force relative to the field’s position.

## Declaration

```swift
class func vortexField() -> Self
```

<a id="return-value"></a>

## Return Value

A field behavior object that applies a rotational force around the field’s origin.

<a id="Discussion"></a>

## Discussion

This forces created by this field rotate in a circle around the center point of the field. Items entering the field are pushed perpendicular to the imaginary line between the item and the center of the field. Combine this field with a radial gravity field to create a field that pulls items into a spinning vortex.

When setting the [strength](strength.md) of the vortex field, positive values create a counter-clockwise rotation and negative values create a clockwise rotation. The amount of force is proportional to the item’s mass and the item’s distance from the field’s origin.

## See Also

### Getting the field behaviors

- [dragField()](dragfield%28%29.md): Creates and returns a field behavior for slowing an object’s velocity.
- [springField()](springfield%28%29.md): Creates and returns a spring field behavior.
- [velocityField(direction:)](velocityfield%28direction_%29.md): Creates and returns a field behavior object that applies a directional velocity to items.
- [electricField()](electricfield%28%29.md): Creates and returns a field behavior object that interacts with charged items.
- [magneticField()](magneticfield%28%29.md): Creates and returns a field behavior that interacts with charged items.
- [radialGravityField(position:)](radialgravityfield%28position_%29.md): Creates and returns a field behavior object that models a radial gravitational force.
- [linearGravityField(direction:)](lineargravityfield%28direction_%29.md): Creates and returns a field behavior object that models a linear gravitational force.
- [noiseField(smoothness:animationSpeed:)](noisefield%28smoothness_animationspeed_%29.md): Creates and returns a field behavior object that applies random noise to other forces.
- [turbulenceField(smoothness:animationSpeed:)](turbulencefield%28smoothness_animationspeed_%29.md): Creates and returns a field behavior object that applies noise to an item in motion.
- [field(evaluationBlock:)](field%28evaluationblock_%29.md): Creates and returns a field behavior object that applies an app-specified field to items.

# vortexField (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Creates and returns a field behavior object that applies a rotational force relative to the field’s position.

## Declaration

```objectivec
+ (instancetype) vortexField;
```

<a id="return-value"></a>

## Return Value

A field behavior object that applies a rotational force around the field’s origin.

<a id="Discussion"></a>

## Discussion

This forces created by this field rotate in a circle around the center point of the field. Items entering the field are pushed perpendicular to the imaginary line between the item and the center of the field. Combine this field with a radial gravity field to create a field that pulls items into a spinning vortex.

When setting the [strength](strength.md) of the vortex field, positive values create a counter-clockwise rotation and negative values create a clockwise rotation. The amount of force is proportional to the item’s mass and the item’s distance from the field’s origin.

## See Also

### Getting the field behaviors

- [dragField](dragfield%28%29.md): Creates and returns a field behavior for slowing an object’s velocity.
- [springField](springfield%28%29.md): Creates and returns a spring field behavior.
- [velocityFieldWithVector:](velocityfield%28direction_%29.md): Creates and returns a field behavior object that applies a directional velocity to items.
- [electricField](electricfield%28%29.md): Creates and returns a field behavior object that interacts with charged items.
- [magneticField](magneticfield%28%29.md): Creates and returns a field behavior that interacts with charged items.
- [radialGravityFieldWithPosition:](radialgravityfield%28position_%29.md): Creates and returns a field behavior object that models a radial gravitational force.
- [linearGravityFieldWithVector:](lineargravityfield%28direction_%29.md): Creates and returns a field behavior object that models a linear gravitational force.
- [noiseFieldWithSmoothness:animationSpeed:](noisefield%28smoothness_animationspeed_%29.md): Creates and returns a field behavior object that applies random noise to other forces.
- [turbulenceFieldWithSmoothness:animationSpeed:](turbulencefield%28smoothness_animationspeed_%29.md): Creates and returns a field behavior object that applies noise to an item in motion.
- [fieldWithEvaluationBlock:](field%28evaluationblock_%29.md): Creates and returns a field behavior object that applies an app-specified field to items.
