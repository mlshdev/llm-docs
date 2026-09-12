> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifieldbehavior/noisefield(smoothness:animationspeed:)](https://developer.apple.com/documentation/uikit/uifieldbehavior/noisefield(smoothness:animationspeed:))

# noiseField(smoothness:animationSpeed:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Creates and returns a field behavior object that applies random noise to other forces.

## Declaration

```swift
class func noiseField(smoothness: CGFloat, animationSpeed speed: CGFloat) -> Self
```

## Parameters

- `smoothness`: The smoothness of the field. Specify a value between `0.0` and `1.0`, where `0.0` indicates the maximum amount of randomness in the generated field and `1.0` indicates the least amount of randomness.
- `speed`: The frequency at which the noise field changes, measured in Hertz (Hz). Specify `0.0` to create a noise field that does not change over time.

<a id="return-value"></a>

## Return Value

A field behavior object that applies noise to other fields in the same area.

<a id="Discussion"></a>

## Discussion

A noise field creates a differentiable Perlin simplex noise field that varies over time. You can combine a noise field with other fields to add some variability to the behavior of those fields. The smoothness of the field defines how random the changes are from one point to the next point. A smooth field still adds noise but does so in a more predictable way. This field ignores the mass of the item.

## See Also

### Getting the field behaviors

- [dragField()](dragfield%28%29.md): Creates and returns a field behavior for slowing an object’s velocity.
- [springField()](springfield%28%29.md): Creates and returns a spring field behavior.
- [velocityField(direction:)](velocityfield%28direction_%29.md): Creates and returns a field behavior object that applies a directional velocity to items.
- [electricField()](electricfield%28%29.md): Creates and returns a field behavior object that interacts with charged items.
- [magneticField()](magneticfield%28%29.md): Creates and returns a field behavior that interacts with charged items.
- [radialGravityField(position:)](radialgravityfield%28position_%29.md): Creates and returns a field behavior object that models a radial gravitational force.
- [linearGravityField(direction:)](lineargravityfield%28direction_%29.md): Creates and returns a field behavior object that models a linear gravitational force.
- [vortexField()](vortexfield%28%29.md): Creates and returns a field behavior object that applies a rotational force relative to the field’s position.
- [turbulenceField(smoothness:animationSpeed:)](turbulencefield%28smoothness_animationspeed_%29.md): Creates and returns a field behavior object that applies noise to an item in motion.
- [field(evaluationBlock:)](field%28evaluationblock_%29.md): Creates and returns a field behavior object that applies an app-specified field to items.

# noiseFieldWithSmoothness:animationSpeed: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Creates and returns a field behavior object that applies random noise to other forces.

## Declaration

```objectivec
+ (instancetype) noiseFieldWithSmoothness:(CGFloat) smoothness animationSpeed:(CGFloat) speed;
```

## Parameters

- `smoothness`: The smoothness of the field. Specify a value between `0.0` and `1.0`, where `0.0` indicates the maximum amount of randomness in the generated field and `1.0` indicates the least amount of randomness.
- `speed`: The frequency at which the noise field changes, measured in Hertz (Hz). Specify `0.0` to create a noise field that does not change over time.

<a id="return-value"></a>

## Return Value

A field behavior object that applies noise to other fields in the same area.

<a id="Discussion"></a>

## Discussion

A noise field creates a differentiable Perlin simplex noise field that varies over time. You can combine a noise field with other fields to add some variability to the behavior of those fields. The smoothness of the field defines how random the changes are from one point to the next point. A smooth field still adds noise but does so in a more predictable way. This field ignores the mass of the item.

## See Also

### Getting the field behaviors

- [dragField](dragfield%28%29.md): Creates and returns a field behavior for slowing an object’s velocity.
- [springField](springfield%28%29.md): Creates and returns a spring field behavior.
- [velocityFieldWithVector:](velocityfield%28direction_%29.md): Creates and returns a field behavior object that applies a directional velocity to items.
- [electricField](electricfield%28%29.md): Creates and returns a field behavior object that interacts with charged items.
- [magneticField](magneticfield%28%29.md): Creates and returns a field behavior that interacts with charged items.
- [radialGravityFieldWithPosition:](radialgravityfield%28position_%29.md): Creates and returns a field behavior object that models a radial gravitational force.
- [linearGravityFieldWithVector:](lineargravityfield%28direction_%29.md): Creates and returns a field behavior object that models a linear gravitational force.
- [vortexField](vortexfield%28%29.md): Creates and returns a field behavior object that applies a rotational force relative to the field’s position.
- [turbulenceFieldWithSmoothness:animationSpeed:](turbulencefield%28smoothness_animationspeed_%29.md): Creates and returns a field behavior object that applies noise to an item in motion.
- [fieldWithEvaluationBlock:](field%28evaluationblock_%29.md): Creates and returns a field behavior object that applies an app-specified field to items.
