> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uispringtimingparameters/init(mass:stiffness:damping:initialvelocity:)](https://developer.apple.com/documentation/uikit/uispringtimingparameters/init(mass:stiffness:damping:initialvelocity:))

# init(mass:stiffness:damping:initialVelocity:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Creates a timing parameters object with the specified spring stiffness, mass, damping coefficient, and initial velocity.

## Declaration

```swift
init(mass: CGFloat, stiffness: CGFloat, damping: CGFloat, initialVelocity velocity: CGVector)
```

## Parameters

- `mass`: The effective mass of the animated property. This value must be greater than `0`.
- `stiffness`: The spring stiffness coefficient. Higher values correspond to a stiffer spring that yields a greater amount of force for moving objects.
- `damping`: The damping force to apply to the spring’s motion. This value is used to compute the damping ratio.
- `velocity`: The target property’s initial rate of change at the start of the spring animation. If the target property doesn’t change, specify a vector with `dx` and `dy` components of `0`.

  For details about how to calculate this velocity, see [initialVelocity](initialvelocity.md).

<a id="return-value"></a>

## Return Value

An initialized spring timing parameters object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

The damping ratio for the spring is computed from the formula `damping` / (2 \* sqrt (`stiffness` \* `mass`)).

## See Also

### Initializing a spring timing parameters object

- [init()](init%28%29.md): Creates a default timing parameters object.
- [init(dampingRatio:)](init%28dampingratio_%29.md): Creates a timing parameters object with the specified damping ratio.
- [init(dampingRatio:initialVelocity:)](init%28dampingratio_initialvelocity_%29.md): Creates a timing parameters object with the specified damping ratio and initial velocity.
- [init(coder:)](init%28coder_%29.md): Creates a timing parameters object from data in an unarchiver.

# initWithMass:stiffness:damping:initialVelocity: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Creates a timing parameters object with the specified spring stiffness, mass, damping coefficient, and initial velocity.

## Declaration

```objectivec
- (instancetype) initWithMass:(CGFloat) mass stiffness:(CGFloat) stiffness damping:(CGFloat) damping initialVelocity:(CGVector) velocity;
```

## Parameters

- `mass`: The effective mass of the animated property. This value must be greater than `0`.
- `stiffness`: The spring stiffness coefficient. Higher values correspond to a stiffer spring that yields a greater amount of force for moving objects.
- `damping`: The damping force to apply to the spring’s motion. This value is used to compute the damping ratio.
- `velocity`: The target property’s initial rate of change at the start of the spring animation. If the target property doesn’t change, specify a vector with `dx` and `dy` components of `0`.

  For details about how to calculate this velocity, see [initialVelocity](initialvelocity.md).

<a id="return-value"></a>

## Return Value

An initialized spring timing parameters object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

The damping ratio for the spring is computed from the formula `damping` / (2 \* sqrt (`stiffness` \* `mass`)).

## See Also

### Initializing a spring timing parameters object

- [init](init%28%29.md): Creates a default timing parameters object.
- [initWithDampingRatio:](init%28dampingratio_%29.md): Creates a timing parameters object with the specified damping ratio.
- [initWithDampingRatio:initialVelocity:](init%28dampingratio_initialvelocity_%29.md): Creates a timing parameters object with the specified damping ratio and initial velocity.
- [initWithCoder:](init%28coder_%29.md): Creates a timing parameters object from data in an unarchiver.
