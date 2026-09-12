> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfocusringtype](https://developer.apple.com/documentation/appkit/nsfocusringtype)

# NSFocusRingType (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

Constants that describe the style of the focus ring.

## Declaration

```swift
enum NSFocusRingType
```

<a id="overview"></a>

## Overview

The focus ring type is used by [NSView](nsview.md) and [NSCell](nscell.md) to configure whether and how a control draws its focus ring.

## Topics

### Constants

- [NSFocusRingType.default](nsfocusringtype/default.md): The default focus ring type for a view or cell.
- [NSFocusRingType.none](nsfocusringtype/none.md): No focus ring.
- [NSFocusRingType.exterior](nsfocusringtype/exterior.md): The standard Aqua focus ring.

### Initializers

- [init(rawValue:)](nsfocusringtype/init%28rawvalue_%29.md)

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
- [NSFocusRingPlacement](nsfocusringplacement.md): Constants that indicate how the system draws the focus ring.

# NSFocusRingType (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

Constants that describe the style of the focus ring.

## Declaration

```objectivec
enum NSFocusRingType : NSUInteger;
```

<a id="overview"></a>

## Overview

The focus ring type is used by [NSView](nsview.md) and [NSCell](nscell.md) to configure whether and how a control draws its focus ring.

## Topics

### Constants

- [NSFocusRingTypeDefault](nsfocusringtype/default.md): The default focus ring type for a view or cell.
- [NSFocusRingTypeNone](nsfocusringtype/none.md): No focus ring.
- [NSFocusRingTypeExterior](nsfocusringtype/exterior.md): The standard Aqua focus ring.

## See Also

### Drawing Focus Rings

- [NSSetFocusRingStyle](nsfocusringplacement/set%28%29.md): Specifies how the system draws the focus ring.
- [NSFocusRingPlacement](nsfocusringplacement.md): Constants that indicate how the system draws the focus ring.
