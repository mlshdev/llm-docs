> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifieldbehavior/radialgravityfield(position:)](https://developer.apple.com/documentation/uikit/uifieldbehavior/radialgravityfield(position:))

# radialGravityField(position:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Creates and returns a field behavior object that models a radial gravitational force.

## Declaration

```swift
class func radialGravityField(position: CGPoint) -> Self
```

## Parameters

- `position`: The location of the gravitation force in the reference coordinate system. You can change this value later by modifying the [position](position.md) property.

<a id="return-value"></a>

## Return Value

A field behavior object that applies a gravitational force to items with mass.

<a id="Discussion"></a>

## Discussion

This field creates a gravitational force at the specified point in the referenced coordinate system. Dynamic items with mass are attracted to the specified point with a force that is proportional to their distance from the point.

When setting the [strength](strength.md) of the field, positive values attract items to the field’s position and negative values repel items. The force on the object can be determined by the equation `F = ma`. The force equals the mass of the object multiplied by the acceleration imposed by the gravitational field, which is determined by the strength of the field and the distance of the item from the field’s origin.

## See Also

### Getting the field behaviors

- [dragField()](dragfield%28%29.md): Creates and returns a field behavior for slowing an object’s velocity.
- [springField()](springfield%28%29.md): Creates and returns a spring field behavior.
- [velocityField(direction:)](velocityfield%28direction_%29.md): Creates and returns a field behavior object that applies a directional velocity to items.
- [electricField()](electricfield%28%29.md): Creates and returns a field behavior object that interacts with charged items.
- [magneticField()](magneticfield%28%29.md): Creates and returns a field behavior that interacts with charged items.
- [linearGravityField(direction:)](lineargravityfield%28direction_%29.md): Creates and returns a field behavior object that models a linear gravitational force.
- [vortexField()](vortexfield%28%29.md): Creates and returns a field behavior object that applies a rotational force relative to the field’s position.
- [noiseField(smoothness:animationSpeed:)](noisefield%28smoothness_animationspeed_%29.md): Creates and returns a field behavior object that applies random noise to other forces.
- [turbulenceField(smoothness:animationSpeed:)](turbulencefield%28smoothness_animationspeed_%29.md): Creates and returns a field behavior object that applies noise to an item in motion.
- [field(evaluationBlock:)](field%28evaluationblock_%29.md): Creates and returns a field behavior object that applies an app-specified field to items.

# radialGravityFieldWithPosition: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Creates and returns a field behavior object that models a radial gravitational force.

## Declaration

```objectivec
+ (instancetype) radialGravityFieldWithPosition:(CGPoint) position;
```

## Parameters

- `position`: The location of the gravitation force in the reference coordinate system. You can change this value later by modifying the [position](position.md) property.

<a id="return-value"></a>

## Return Value

A field behavior object that applies a gravitational force to items with mass.

<a id="Discussion"></a>

## Discussion

This field creates a gravitational force at the specified point in the referenced coordinate system. Dynamic items with mass are attracted to the specified point with a force that is proportional to their distance from the point.

When setting the [strength](strength.md) of the field, positive values attract items to the field’s position and negative values repel items. The force on the object can be determined by the equation `F = ma`. The force equals the mass of the object multiplied by the acceleration imposed by the gravitational field, which is determined by the strength of the field and the distance of the item from the field’s origin.

## See Also

### Getting the field behaviors

- [dragField](dragfield%28%29.md): Creates and returns a field behavior for slowing an object’s velocity.
- [springField](springfield%28%29.md): Creates and returns a spring field behavior.
- [velocityFieldWithVector:](velocityfield%28direction_%29.md): Creates and returns a field behavior object that applies a directional velocity to items.
- [electricField](electricfield%28%29.md): Creates and returns a field behavior object that interacts with charged items.
- [magneticField](magneticfield%28%29.md): Creates and returns a field behavior that interacts with charged items.
- [linearGravityFieldWithVector:](lineargravityfield%28direction_%29.md): Creates and returns a field behavior object that models a linear gravitational force.
- [vortexField](vortexfield%28%29.md): Creates and returns a field behavior object that applies a rotational force relative to the field’s position.
- [noiseFieldWithSmoothness:animationSpeed:](noisefield%28smoothness_animationspeed_%29.md): Creates and returns a field behavior object that applies random noise to other forces.
- [turbulenceFieldWithSmoothness:animationSpeed:](turbulencefield%28smoothness_animationspeed_%29.md): Creates and returns a field behavior object that applies noise to an item in motion.
- [fieldWithEvaluationBlock:](field%28evaluationblock_%29.md): Creates and returns a field behavior object that applies an app-specified field to items.
