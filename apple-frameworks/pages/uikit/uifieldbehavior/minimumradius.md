> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifieldbehavior/minimumradius](https://developer.apple.com/documentation/uikit/uifieldbehavior/minimumradius)

# minimumRadius (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The minimum distance at which to start calculating new values for the field.

## Declaration

```swift
var minimumRadius: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to modify the behavior of distance-based effects when objects are close to the center of the field. Distances that are less than the minimum value are treated as if they are equal to the minimum value. In addition, effects such as [falloff](falloff.md) are not applied until the minimum distance is reached.

The default value of this property is very small, but not zero.

## See Also

### Configuring the field attributes

- [position](position.md): The position of the field in the reference coordinate system.
- [region](region.md): The shape of the field.
- [strength](strength.md): The strength of the field.
- [falloff](falloff.md): The rate of decay for the field strength.
- [direction](direction.md): The direction of motion for a linear field.
- [smoothness](smoothness.md): The smoothness of the noise used to generate the field.
- [animationSpeed](animationspeed.md): The rate at which the animation should proceed.

# minimumRadius (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The minimum distance at which to start calculating new values for the field.

## Declaration

```objectivec
@property (nonatomic, assign) CGFloat minimumRadius;
```

<a id="Discussion"></a>

## Discussion

Use this property to modify the behavior of distance-based effects when objects are close to the center of the field. Distances that are less than the minimum value are treated as if they are equal to the minimum value. In addition, effects such as [falloff](falloff.md) are not applied until the minimum distance is reached.

The default value of this property is very small, but not zero.

## See Also

### Configuring the field attributes

- [position](position.md): The position of the field in the reference coordinate system.
- [region](region.md): The shape of the field.
- [strength](strength.md): The strength of the field.
- [falloff](falloff.md): The rate of decay for the field strength.
- [direction](direction.md): The direction of motion for a linear field.
- [smoothness](smoothness.md): The smoothness of the noise used to generate the field.
- [animationSpeed](animationspeed.md): The rate at which the animation should proceed.
