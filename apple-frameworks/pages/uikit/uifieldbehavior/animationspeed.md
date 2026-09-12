> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifieldbehavior/animationspeed](https://developer.apple.com/documentation/uikit/uifieldbehavior/animationspeed)

# animationSpeed (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The rate at which the animation should proceed.

## Declaration

```swift
var animationSpeed: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

For noise and turbulence fields, this property contains the speed at which to animate the field. For all other fields, the value of this property is always `0.0`.

A value of `1.0` means the field animations occur at normal speed. Values less than `1.0` result in animations that are slower than normal, and values greater than `1.0` result in animations that are faster than normal. A value of `0.0` means that the field does not animate at all.

## See Also

### Configuring the field attributes

- [position](position.md): The position of the field in the reference coordinate system.
- [region](region.md): The shape of the field.
- [strength](strength.md): The strength of the field.
- [falloff](falloff.md): The rate of decay for the field strength.
- [minimumRadius](minimumradius.md): The minimum distance at which to start calculating new values for the field.
- [direction](direction.md): The direction of motion for a linear field.
- [smoothness](smoothness.md): The smoothness of the noise used to generate the field.

# animationSpeed (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The rate at which the animation should proceed.

## Declaration

```objectivec
@property (nonatomic, assign) CGFloat animationSpeed;
```

<a id="Discussion"></a>

## Discussion

For noise and turbulence fields, this property contains the speed at which to animate the field. For all other fields, the value of this property is always `0.0`.

A value of `1.0` means the field animations occur at normal speed. Values less than `1.0` result in animations that are slower than normal, and values greater than `1.0` result in animations that are faster than normal. A value of `0.0` means that the field does not animate at all.

## See Also

### Configuring the field attributes

- [position](position.md): The position of the field in the reference coordinate system.
- [region](region.md): The shape of the field.
- [strength](strength.md): The strength of the field.
- [falloff](falloff.md): The rate of decay for the field strength.
- [minimumRadius](minimumradius.md): The minimum distance at which to start calculating new values for the field.
- [direction](direction.md): The direction of motion for a linear field.
- [smoothness](smoothness.md): The smoothness of the noise used to generate the field.
