> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skfieldnode/minimumradius](https://developer.apple.com/documentation/spritekit/skfieldnode/minimumradius)

# minimumRadius (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The minimum value for distance-based effects.

## Declaration

```swift
var minimumRadius: Float { get set }
```

<a id="Discussion"></a>

## Discussion

When the distance between the node and a physics body is calculated, any distance shorter than the value stored in the [minimumRadius](minimumradius.md) property is treated as if it is equal to it. The default value is a very small (but nonzero) value.

## See Also

### Determining Which Physics Bodies Are Affected by the Field

- [isEnabled](isenabled.md): A Boolean value that indicates whether the field is active.
- [isExclusive](isexclusive.md): A Boolean value that indicates whether the field node should override all other field nodes that might otherwise affect physics bodies.
- [region](region.md): The area (relative to the node’s origin) that the field affects.
- [categoryBitMask](categorybitmask.md): A mask that defines which categories this field belongs to.

# minimumRadius (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The minimum value for distance-based effects.

## Declaration

```objectivec
@property (nonatomic) float minimumRadius;
```

<a id="Discussion"></a>

## Discussion

When the distance between the node and a physics body is calculated, any distance shorter than the value stored in the [minimumRadius](minimumradius.md) property is treated as if it is equal to it. The default value is a very small (but nonzero) value.

## See Also

### Determining Which Physics Bodies Are Affected by the Field

- [enabled](isenabled.md): A Boolean value that indicates whether the field is active.
- [exclusive](isexclusive.md): A Boolean value that indicates whether the field node should override all other field nodes that might otherwise affect physics bodies.
- [region](region.md): The area (relative to the node’s origin) that the field affects.
- [categoryBitMask](categorybitmask.md): A mask that defines which categories this field belongs to.
