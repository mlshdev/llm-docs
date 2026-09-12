> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skfieldnode/isenabled](https://developer.apple.com/documentation/spritekit/skfieldnode/isenabled)

# isEnabled (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A Boolean value that indicates whether the field is active.

## Declaration

```swift
var isEnabled: Bool { get set }
```

## Mentioned In

- [Adding Physics Fields to a Scene](../adding-physics-fields-to-a-scene.md)

## See Also

### Determining Which Physics Bodies Are Affected by the Field

- [isExclusive](isexclusive.md): A Boolean value that indicates whether the field node should override all other field nodes that might otherwise affect physics bodies.
- [region](region.md): The area (relative to the node’s origin) that the field affects.
- [minimumRadius](minimumradius.md): The minimum value for distance-based effects.
- [categoryBitMask](categorybitmask.md): A mask that defines which categories this field belongs to.

# enabled (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A Boolean value that indicates whether the field is active.

## Declaration

```objectivec
@property (nonatomic, getter=isEnabled) BOOL enabled;
```

## Mentioned In

- [Adding Physics Fields to a Scene](../adding-physics-fields-to-a-scene.md)

## See Also

### Determining Which Physics Bodies Are Affected by the Field

- [exclusive](isexclusive.md): A Boolean value that indicates whether the field node should override all other field nodes that might otherwise affect physics bodies.
- [region](region.md): The area (relative to the node’s origin) that the field affects.
- [minimumRadius](minimumradius.md): The minimum value for distance-based effects.
- [categoryBitMask](categorybitmask.md): A mask that defines which categories this field belongs to.
