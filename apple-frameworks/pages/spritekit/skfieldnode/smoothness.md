> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skfieldnode/smoothness](https://developer.apple.com/documentation/spritekit/skfieldnode/smoothness)

# smoothness (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The smoothness of the noise used to generate the forces.

## Declaration

```swift
var smoothness: Float { get set }
```

<a id="Discussion"></a>

## Discussion

This parameter should be a value between `0.0` and `1.0`, where `1.0` represents a uniform smoothness.

## See Also

### Configuring Other Field Properties

- [animationSpeed](animationspeed.md): The rate at which a noise or turbulence field node changes.
- [direction](direction.md): The direction of a velocity field node.
- [texture](texture.md): A normal texture that specifies the velocities at different points in a velocity field node.

# smoothness (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The smoothness of the noise used to generate the forces.

## Declaration

```objectivec
@property (nonatomic) float smoothness;
```

<a id="Discussion"></a>

## Discussion

This parameter should be a value between `0.0` and `1.0`, where `1.0` represents a uniform smoothness.

## See Also

### Configuring Other Field Properties

- [animationSpeed](animationspeed.md): The rate at which a noise or turbulence field node changes.
- [direction](direction.md): The direction of a velocity field node.
- [texture](texture.md): A normal texture that specifies the velocities at different points in a velocity field node.
