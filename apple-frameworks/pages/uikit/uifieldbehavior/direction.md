> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifieldbehavior/direction](https://developer.apple.com/documentation/uikit/uifieldbehavior/direction)

# direction (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The direction of motion for a linear field.

## Declaration

```swift
var direction: CGVector { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to specify the direction of motion for velocity and linear gravity fields. For nondirectional fields, the default value of this property is a zero vector.

## See Also

### Configuring the field attributes

- [position](position.md): The position of the field in the reference coordinate system.
- [region](region.md): The shape of the field.
- [strength](strength.md): The strength of the field.
- [falloff](falloff.md): The rate of decay for the field strength.
- [minimumRadius](minimumradius.md): The minimum distance at which to start calculating new values for the field.
- [smoothness](smoothness.md): The smoothness of the noise used to generate the field.
- [animationSpeed](animationspeed.md): The rate at which the animation should proceed.

# direction (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The direction of motion for a linear field.

## Declaration

```objectivec
@property (nonatomic, assign) CGVector direction;
```

<a id="Discussion"></a>

## Discussion

Use this property to specify the direction of motion for velocity and linear gravity fields. For nondirectional fields, the default value of this property is a zero vector.

## See Also

### Configuring the field attributes

- [position](position.md): The position of the field in the reference coordinate system.
- [region](region.md): The shape of the field.
- [strength](strength.md): The strength of the field.
- [falloff](falloff.md): The rate of decay for the field strength.
- [minimumRadius](minimumradius.md): The minimum distance at which to start calculating new values for the field.
- [smoothness](smoothness.md): The smoothness of the noise used to generate the field.
- [animationSpeed](animationspeed.md): The rate at which the animation should proceed.
