> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skfieldnode/region](https://developer.apple.com/documentation/spritekit/skfieldnode/region)

# region (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The area (relative to the node’s origin) that the field affects.

## Declaration

```swift
var region: SKRegion? { get set }
```

<a id="Discussion"></a>

## Discussion

A field node applies its effect to all physics bodies that are partially or completely inside its region. The default value is a region of infinite size.

## See Also

### Determining Which Physics Bodies Are Affected by the Field

- [isEnabled](isenabled.md): A Boolean value that indicates whether the field is active.
- [isExclusive](isexclusive.md): A Boolean value that indicates whether the field node should override all other field nodes that might otherwise affect physics bodies.
- [minimumRadius](minimumradius.md): The minimum value for distance-based effects.
- [categoryBitMask](categorybitmask.md): A mask that defines which categories this field belongs to.

# region (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The area (relative to the node’s origin) that the field affects.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) SKRegion * region;
```

<a id="Discussion"></a>

## Discussion

A field node applies its effect to all physics bodies that are partially or completely inside its region. The default value is a region of infinite size.

## See Also

### Determining Which Physics Bodies Are Affected by the Field

- [enabled](isenabled.md): A Boolean value that indicates whether the field is active.
- [exclusive](isexclusive.md): A Boolean value that indicates whether the field node should override all other field nodes that might otherwise affect physics bodies.
- [minimumRadius](minimumradius.md): The minimum value for distance-based effects.
- [categoryBitMask](categorybitmask.md): A mask that defines which categories this field belongs to.
