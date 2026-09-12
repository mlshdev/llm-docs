> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skfieldnode/strength](https://developer.apple.com/documentation/spritekit/skfieldnode/strength)

# strength (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The strength of the field.

## Declaration

```swift
var strength: Float { get set }
```

## Mentioned In

- [Adding Physics Fields to a Scene](../adding-physics-fields-to-a-scene.md)

<a id="Discussion"></a>

## Discussion

The default value is `1.0`. There’s no specific unit of measurement for this property because the actual effect is dependent on the kind of field node being created. In practice, the best approach is to experiment with different field strengths and use them to determine the proper value empirically.

## See Also

### Configuring the Strength of the Field

- [falloff](falloff.md): The exponent that defines the rate of decay for the strength of the field as the distance increases between the node and the physics body being affected.

# strength (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The strength of the field.

## Declaration

```objectivec
@property (nonatomic) float strength;
```

## Mentioned In

- [Adding Physics Fields to a Scene](../adding-physics-fields-to-a-scene.md)

<a id="Discussion"></a>

## Discussion

The default value is `1.0`. There’s no specific unit of measurement for this property because the actual effect is dependent on the kind of field node being created. In practice, the best approach is to experiment with different field strengths and use them to determine the proper value empirically.

## See Also

### Configuring the Strength of the Field

- [falloff](falloff.md): The exponent that defines the rate of decay for the strength of the field as the distance increases between the node and the physics body being affected.
