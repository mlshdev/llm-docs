> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifieldbehavior/falloff](https://developer.apple.com/documentation/uikit/uifieldbehavior/falloff)

# falloff (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The rate of decay for the field strength.

## Declaration

```swift
var falloff: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

This property defines how quickly the field strength diminishes as the distance from the field’s center increases. Falloff is not applied until the distance between objects is greater than the value in the [minimumRadius](minimumradius.md) property.

The default value of the property is 0, which yields a uniform field that does not diminish over distance.

## See Also

### Configuring the field attributes

- [position](position.md): The position of the field in the reference coordinate system.
- [region](region.md): The shape of the field.
- [strength](strength.md): The strength of the field.
- [minimumRadius](minimumradius.md): The minimum distance at which to start calculating new values for the field.
- [direction](direction.md): The direction of motion for a linear field.
- [smoothness](smoothness.md): The smoothness of the noise used to generate the field.
- [animationSpeed](animationspeed.md): The rate at which the animation should proceed.

# falloff (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The rate of decay for the field strength.

## Declaration

```objectivec
@property (nonatomic, assign) CGFloat falloff;
```

<a id="Discussion"></a>

## Discussion

This property defines how quickly the field strength diminishes as the distance from the field’s center increases. Falloff is not applied until the distance between objects is greater than the value in the [minimumRadius](minimumradius.md) property.

The default value of the property is 0, which yields a uniform field that does not diminish over distance.

## See Also

### Configuring the field attributes

- [position](position.md): The position of the field in the reference coordinate system.
- [region](region.md): The shape of the field.
- [strength](strength.md): The strength of the field.
- [minimumRadius](minimumradius.md): The minimum distance at which to start calculating new values for the field.
- [direction](direction.md): The direction of motion for a linear field.
- [smoothness](smoothness.md): The smoothness of the noise used to generate the field.
- [animationSpeed](animationspeed.md): The rate at which the animation should proceed.
