> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skfieldnode/isexclusive](https://developer.apple.com/documentation/spritekit/skfieldnode/isexclusive)

# isExclusive (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A Boolean value that indicates whether the field node should override all other field nodes that might otherwise affect physics bodies.

## Declaration

```swift
var isExclusive: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If the value is set to [true](https://developer.apple.com/documentation/swift/true) and a physics body is within this field’s region, all other field nodes that might otherwise affect this body are ignored. The default value is [false](https://developer.apple.com/documentation/swift/false).

If you set this property to [true](https://developer.apple.com/documentation/swift/true) on multiple field nodes within a scene, their regions should not overlap. If they do, the results are undefined.

## See Also

### Determining Which Physics Bodies Are Affected by the Field

- [isEnabled](isenabled.md): A Boolean value that indicates whether the field is active.
- [region](region.md): The area (relative to the node’s origin) that the field affects.
- [minimumRadius](minimumradius.md): The minimum value for distance-based effects.
- [categoryBitMask](categorybitmask.md): A mask that defines which categories this field belongs to.

# exclusive (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A Boolean value that indicates whether the field node should override all other field nodes that might otherwise affect physics bodies.

## Declaration

```objectivec
@property (nonatomic, getter=isExclusive) BOOL exclusive;
```

<a id="Discussion"></a>

## Discussion

If the value is set to [true](https://developer.apple.com/documentation/swift/true) and a physics body is within this field’s region, all other field nodes that might otherwise affect this body are ignored. The default value is [false](https://developer.apple.com/documentation/swift/false).

If you set this property to [true](https://developer.apple.com/documentation/swift/true) on multiple field nodes within a scene, their regions should not overlap. If they do, the results are undefined.

## See Also

### Determining Which Physics Bodies Are Affected by the Field

- [enabled](isenabled.md): A Boolean value that indicates whether the field is active.
- [region](region.md): The area (relative to the node’s origin) that the field affects.
- [minimumRadius](minimumradius.md): The minimum value for distance-based effects.
- [categoryBitMask](categorybitmask.md): A mask that defines which categories this field belongs to.
