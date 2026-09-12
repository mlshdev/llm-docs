> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifieldbehavior/smoothness](https://developer.apple.com/documentation/uikit/uifieldbehavior/smoothness)

# smoothness (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The smoothness of the noise used to generate the field.

## Declaration

```swift
var smoothness: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

For noise and turbulence fields, this value specifies the amount of noise or turbulence. The value of this property is in the range `0.0` to `1.0`, where `0.0` represents the maximum noise or turbulence and `1.0` represents the least amount of noise or turbulence.

## See Also

### Configuring the field attributes

- [position](position.md): The position of the field in the reference coordinate system.
- [region](region.md): The shape of the field.
- [strength](strength.md): The strength of the field.
- [falloff](falloff.md): The rate of decay for the field strength.
- [minimumRadius](minimumradius.md): The minimum distance at which to start calculating new values for the field.
- [direction](direction.md): The direction of motion for a linear field.
- [animationSpeed](animationspeed.md): The rate at which the animation should proceed.

# smoothness (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The smoothness of the noise used to generate the field.

## Declaration

```objectivec
@property (nonatomic, assign) CGFloat smoothness;
```

<a id="Discussion"></a>

## Discussion

For noise and turbulence fields, this value specifies the amount of noise or turbulence. The value of this property is in the range `0.0` to `1.0`, where `0.0` represents the maximum noise or turbulence and `1.0` represents the least amount of noise or turbulence.

## See Also

### Configuring the field attributes

- [position](position.md): The position of the field in the reference coordinate system.
- [region](region.md): The shape of the field.
- [strength](strength.md): The strength of the field.
- [falloff](falloff.md): The rate of decay for the field strength.
- [minimumRadius](minimumradius.md): The minimum distance at which to start calculating new values for the field.
- [direction](direction.md): The direction of motion for a linear field.
- [animationSpeed](animationspeed.md): The rate at which the animation should proceed.
