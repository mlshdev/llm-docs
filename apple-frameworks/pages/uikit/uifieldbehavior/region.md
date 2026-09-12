> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifieldbehavior/region](https://developer.apple.com/documentation/uikit/uifieldbehavior/region)

# region (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The shape of the field.

## Declaration

```swift
var region: UIRegion { get set }
```

<a id="Discussion"></a>

## Discussion

This property defines the shape of the field centered on the point in the [position](position.md) property. A field does not exert any force on items that lie outside of the specified region.

## See Also

### Configuring the field attributes

- [position](position.md): The position of the field in the reference coordinate system.
- [strength](strength.md): The strength of the field.
- [falloff](falloff.md): The rate of decay for the field strength.
- [minimumRadius](minimumradius.md): The minimum distance at which to start calculating new values for the field.
- [direction](direction.md): The direction of motion for a linear field.
- [smoothness](smoothness.md): The smoothness of the noise used to generate the field.
- [animationSpeed](animationspeed.md): The rate at which the animation should proceed.

# region (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The shape of the field.

## Declaration

```objectivec
@property (nonatomic, strong) UIRegion * region;
```

<a id="Discussion"></a>

## Discussion

This property defines the shape of the field centered on the point in the [position](position.md) property. A field does not exert any force on items that lie outside of the specified region.

## See Also

### Configuring the field attributes

- [position](position.md): The position of the field in the reference coordinate system.
- [strength](strength.md): The strength of the field.
- [falloff](falloff.md): The rate of decay for the field strength.
- [minimumRadius](minimumradius.md): The minimum distance at which to start calculating new values for the field.
- [direction](direction.md): The direction of motion for a linear field.
- [smoothness](smoothness.md): The smoothness of the noise used to generate the field.
- [animationSpeed](animationspeed.md): The rate at which the animation should proceed.
