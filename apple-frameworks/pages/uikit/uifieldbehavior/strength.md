> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifieldbehavior/strength](https://developer.apple.com/documentation/uikit/uifieldbehavior/strength)

# strength (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The strength of the field.

## Declaration

```swift
var strength: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `1.0`. The effect of this value is dependent on the type of field. In practice, the best approach for determining the strength of the field you want is to experiment with different values until you get the behavior you want.

## See Also

### Configuring the field attributes

- [position](position.md): The position of the field in the reference coordinate system.
- [region](region.md): The shape of the field.
- [falloff](falloff.md): The rate of decay for the field strength.
- [minimumRadius](minimumradius.md): The minimum distance at which to start calculating new values for the field.
- [direction](direction.md): The direction of motion for a linear field.
- [smoothness](smoothness.md): The smoothness of the noise used to generate the field.
- [animationSpeed](animationspeed.md): The rate at which the animation should proceed.

# strength (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The strength of the field.

## Declaration

```objectivec
@property (nonatomic, assign) CGFloat strength;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `1.0`. The effect of this value is dependent on the type of field. In practice, the best approach for determining the strength of the field you want is to experiment with different values until you get the behavior you want.

## See Also

### Configuring the field attributes

- [position](position.md): The position of the field in the reference coordinate system.
- [region](region.md): The shape of the field.
- [falloff](falloff.md): The rate of decay for the field strength.
- [minimumRadius](minimumradius.md): The minimum distance at which to start calculating new values for the field.
- [direction](direction.md): The direction of motion for a linear field.
- [smoothness](smoothness.md): The smoothness of the noise used to generate the field.
- [animationSpeed](animationspeed.md): The rate at which the animation should proceed.
