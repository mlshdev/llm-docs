> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uispringtimingparameters/init()](https://developer.apple.com/documentation/uikit/uispringtimingparameters/init())

# init() (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Creates a default timing parameters object.

## Declaration

```swift
init()
```

<a id="return-value"></a>

## Return Value

An initialized spring timing parameters object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

This method sets the initial velocity of any animated properties to `0.0` and sets the damping ratio to `4.56`.

## See Also

### Initializing a spring timing parameters object

- [init(dampingRatio:)](init%28dampingratio_%29.md): Creates a timing parameters object with the specified damping ratio.
- [init(dampingRatio:initialVelocity:)](init%28dampingratio_initialvelocity_%29.md): Creates a timing parameters object with the specified damping ratio and initial velocity.
- [init(mass:stiffness:damping:initialVelocity:)](init%28mass_stiffness_damping_initialvelocity_%29.md): Creates a timing parameters object with the specified spring stiffness, mass, damping coefficient, and initial velocity.
- [init(coder:)](init%28coder_%29.md): Creates a timing parameters object from data in an unarchiver.

# init (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Creates a default timing parameters object.

## Declaration

```objectivec
- (instancetype) init;
```

<a id="return-value"></a>

## Return Value

An initialized spring timing parameters object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

This method sets the initial velocity of any animated properties to `0.0` and sets the damping ratio to `4.56`.

## See Also

### Initializing a spring timing parameters object

- [initWithDampingRatio:](init%28dampingratio_%29.md): Creates a timing parameters object with the specified damping ratio.
- [initWithDampingRatio:initialVelocity:](init%28dampingratio_initialvelocity_%29.md): Creates a timing parameters object with the specified damping ratio and initial velocity.
- [initWithMass:stiffness:damping:initialVelocity:](init%28mass_stiffness_damping_initialvelocity_%29.md): Creates a timing parameters object with the specified spring stiffness, mass, damping coefficient, and initial velocity.
- [initWithCoder:](init%28coder_%29.md): Creates a timing parameters object from data in an unarchiver.
