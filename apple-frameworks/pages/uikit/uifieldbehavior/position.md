> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifieldbehavior/position](https://developer.apple.com/documentation/uikit/uifieldbehavior/position)

# position (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The position of the field in the reference coordinate system.

## Declaration

```swift
var position: CGPoint { get set }
```

<a id="Discussion"></a>

## Discussion

This property defines the center point of the field. The shape of the field around this point is defined by the [region](region.md) property.

## See Also

### Configuring the field attributes

- [region](region.md): The shape of the field.
- [strength](strength.md): The strength of the field.
- [falloff](falloff.md): The rate of decay for the field strength.
- [minimumRadius](minimumradius.md): The minimum distance at which to start calculating new values for the field.
- [direction](direction.md): The direction of motion for a linear field.
- [smoothness](smoothness.md): The smoothness of the noise used to generate the field.
- [animationSpeed](animationspeed.md): The rate at which the animation should proceed.

# position (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The position of the field in the reference coordinate system.

## Declaration

```objectivec
@property (nonatomic, assign) CGPoint position;
```

<a id="Discussion"></a>

## Discussion

This property defines the center point of the field. The shape of the field around this point is defined by the [region](region.md) property.

## See Also

### Configuring the field attributes

- [region](region.md): The shape of the field.
- [strength](strength.md): The strength of the field.
- [falloff](falloff.md): The rate of decay for the field strength.
- [minimumRadius](minimumradius.md): The minimum distance at which to start calculating new values for the field.
- [direction](direction.md): The direction of motion for a linear field.
- [smoothness](smoothness.md): The smoothness of the noise used to generate the field.
- [animationSpeed](animationspeed.md): The rate at which the animation should proceed.
