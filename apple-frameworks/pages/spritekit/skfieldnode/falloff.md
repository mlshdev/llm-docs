> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skfieldnode/falloff](https://developer.apple.com/documentation/spritekit/skfieldnode/falloff)

# falloff (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The exponent that defines the rate of decay for the strength of the field as the distance increases between the node and the physics body being affected.

## Declaration

```swift
var falloff: Float { get set }
```

## Mentioned In

- [Adding Physics Fields to a Scene](../adding-physics-fields-to-a-scene.md)

<a id="Discussion"></a>

## Discussion

When the force of a field node is calculated, the force is multiplied by `pow(distance - minRadius, -falloff)`. The default falloff value is `0`, which indicates that no attenuation takes place. Some types of field nodes ignore the falloff parameter entirely, while others change the default value to something that is more logical for that type of field node.

## See Also

### Configuring the Strength of the Field

- [strength](strength.md): The strength of the field.

# falloff (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The exponent that defines the rate of decay for the strength of the field as the distance increases between the node and the physics body being affected.

## Declaration

```objectivec
@property (nonatomic) float falloff;
```

## Mentioned In

- [Adding Physics Fields to a Scene](../adding-physics-fields-to-a-scene.md)

<a id="Discussion"></a>

## Discussion

When the force of a field node is calculated, the force is multiplied by `pow(distance - minRadius, -falloff)`. The default falloff value is `0`, which indicates that no attenuation takes place. Some types of field nodes ignore the falloff parameter entirely, while others change the default value to something that is more logical for that type of field node.

## See Also

### Configuring the Strength of the Field

- [strength](strength.md): The strength of the field.
