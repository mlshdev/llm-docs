> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skfieldnode/categorybitmask](https://developer.apple.com/documentation/spritekit/skfieldnode/categorybitmask)

# categoryBitMask (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A mask that defines which categories this field belongs to.

## Declaration

```swift
var categoryBitMask: UInt32 { get set }
```

<a id="Discussion"></a>

## Discussion

Every field in a scene can be assigned to up to 32 different categories, each corresponding to a bit in the bit mask. The mask values are not predetermined by Sprite Kit. You define the mask values that are used in your game. The field node’s [categoryBitMask](categorybitmask.md) property is compared to a physics body’s [fieldBitMask](../skphysicsbody/fieldbitmask.md) property using a logical AND operation. If the result is nonzero, the field is applied to the physics body.

The default value is `0xFFFFFFFF` (all bits set).

## See Also

### Determining Which Physics Bodies Are Affected by the Field

- [isEnabled](isenabled.md): A Boolean value that indicates whether the field is active.
- [isExclusive](isexclusive.md): A Boolean value that indicates whether the field node should override all other field nodes that might otherwise affect physics bodies.
- [region](region.md): The area (relative to the node’s origin) that the field affects.
- [minimumRadius](minimumradius.md): The minimum value for distance-based effects.

# categoryBitMask (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A mask that defines which categories this field belongs to.

## Declaration

```objectivec
@property (nonatomic) uint32_t categoryBitMask;
```

<a id="Discussion"></a>

## Discussion

Every field in a scene can be assigned to up to 32 different categories, each corresponding to a bit in the bit mask. The mask values are not predetermined by Sprite Kit. You define the mask values that are used in your game. The field node’s [categoryBitMask](categorybitmask.md) property is compared to a physics body’s [fieldBitMask](../skphysicsbody/fieldbitmask.md) property using a logical AND operation. If the result is nonzero, the field is applied to the physics body.

The default value is `0xFFFFFFFF` (all bits set).

## See Also

### Determining Which Physics Bodies Are Affected by the Field

- [enabled](isenabled.md): A Boolean value that indicates whether the field is active.
- [exclusive](isexclusive.md): A Boolean value that indicates whether the field node should override all other field nodes that might otherwise affect physics bodies.
- [region](region.md): The area (relative to the node’s origin) that the field affects.
- [minimumRadius](minimumradius.md): The minimum value for distance-based effects.
