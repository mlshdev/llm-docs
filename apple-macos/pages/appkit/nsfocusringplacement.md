> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfocusringplacement](https://developer.apple.com/documentation/appkit/nsfocusringplacement)

# NSFocusRingPlacement (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

Constants that indicate how the system draws the focus ring.

## Declaration

```swift
enum NSFocusRingPlacement
```

## Topics

### Constants

- [NSFocusRingPlacement.above](nsfocusringplacement/above.md): Draw the focus ring over an image.
- [NSFocusRingPlacement.below](nsfocusringplacement/below.md): Draw the focus ring under text.
- [NSFocusRingPlacement.only](nsfocusringplacement/only.md): Draw the focus ring if you don’t have an image or text.

### Options for Drawing

- [set()](nsfocusringplacement/set%28%29.md): Specifies how the system draws the focus ring.

### Initializers

- [init(rawValue:)](nsfocusringplacement/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Drawing Focus Rings

- [set()](nsfocusringplacement/set%28%29.md): Specifies how the system draws the focus ring.
- [NSFocusRingType](nsfocusringtype.md): Constants that describe the style of the focus ring.

# NSFocusRingPlacement (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

Constants that indicate how the system draws the focus ring.

## Declaration

```objectivec
enum NSFocusRingPlacement : NSUInteger;
```

## Topics

### Constants

- [NSFocusRingAbove](nsfocusringplacement/above.md): Draw the focus ring over an image.
- [NSFocusRingBelow](nsfocusringplacement/below.md): Draw the focus ring under text.
- [NSFocusRingOnly](nsfocusringplacement/only.md): Draw the focus ring if you don’t have an image or text.

### Options for Drawing

- [NSSetFocusRingStyle](nsfocusringplacement/set%28%29.md): Specifies how the system draws the focus ring.

## See Also

### Drawing Focus Rings

- [NSSetFocusRingStyle](nsfocusringplacement/set%28%29.md): Specifies how the system draws the focus ring.
- [NSFocusRingType](nsfocusringtype.md): Constants that describe the style of the focus ring.
