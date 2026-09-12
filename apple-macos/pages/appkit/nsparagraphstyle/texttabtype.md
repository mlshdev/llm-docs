> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsparagraphstyle/texttabtype](https://developer.apple.com/documentation/appkit/nsparagraphstyle/texttabtype)

# NSParagraphStyle.TextTabType (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.0+ (deprecated in 27.0)

Constants that specify the type of tab stop.

> Use NSTextAlignment-based API.

## Declaration

```swift
enum TextTabType
```

<a id="overview"></a>

## Overview

The following mappings define the conversions between text alignment in [NSTextTab](../nstexttab.md) and tab stop types that [NSTextTab](../nstexttab.md) defines:

| Alignment | Tab stop type |
| --- | --- |
| [NSTextAlignment.left](../nstextalignment/left.md) | [NSParagraphStyle.TextTabType.leftTabStopType](texttabtype/lefttabstoptype.md) |
| [NSTextAlignment.right](../nstextalignment/right.md) | [NSParagraphStyle.TextTabType.rightTabStopType](texttabtype/righttabstoptype.md) |
| [NSTextAlignment.center](../nstextalignment/center.md) | [NSParagraphStyle.TextTabType.centerTabStopType](texttabtype/centertabstoptype.md) |
| [NSTextAlignment.justified](../nstextalignment/justified.md) | [NSParagraphStyle.TextTabType.leftTabStopType](texttabtype/lefttabstoptype.md) |
| [NSTextAlignment.natural](../nstextalignment/natural.md) | [NSParagraphStyle.TextTabType.leftTabStopType](texttabtype/lefttabstoptype.md), or [NSParagraphStyle.TextTabType.rightTabStopType](texttabtype/righttabstoptype.md), depending on the user setting. |
| [NSTextAlignment.right](../nstextalignment/right.md) with a terminator | [NSParagraphStyle.TextTabType.decimalTabStopType](texttabtype/decimaltabstoptype.md) |

## Topics

### Constants

- [NSParagraphStyle.TextTabType.leftTabStopType](texttabtype/lefttabstoptype.md): Deprecated. A left-aligned tab stop.
- [NSParagraphStyle.TextTabType.rightTabStopType](texttabtype/righttabstoptype.md): Deprecated. A right-aligned tab stop.
- [NSParagraphStyle.TextTabType.centerTabStopType](texttabtype/centertabstoptype.md): Deprecated. A center-aligned tab stop.
- [NSParagraphStyle.TextTabType.decimalTabStopType](texttabtype/decimaltabstoptype.md): Deprecated. A tab stop that aligns columns of numbers to each number’s decimal point.

### Initializers

- [init(rawValue:)](texttabtype/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing tab information

- [tabStops](tabstops.md): The text tab objects that represent the paragraph’s tab stops.
- [defaultTabInterval](defaulttabinterval.md): The documentwide default tab interval.

# NSTextTabType (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.0+ (deprecated in 27.0)

Constants that specify the type of tab stop.

> Use NSTextAlignment-based API.

## Declaration

```objectivec
enum NSTextTabType : NSUInteger;
```

<a id="overview"></a>

## Overview

The following mappings define the conversions between text alignment in [NSTextTab](../nstexttab.md) and tab stop types that [NSTextTab](../nstexttab.md) defines:

| Alignment | Tab stop type |
| --- | --- |
| [NSTextAlignmentLeft](../nstextalignment/left.md) | [NSLeftTabStopType](texttabtype/lefttabstoptype.md) |
| [NSTextAlignmentRight](../nstextalignment/right.md) | [NSRightTabStopType](texttabtype/righttabstoptype.md) |
| [NSTextAlignmentCenter](../nstextalignment/center.md) | [NSCenterTabStopType](texttabtype/centertabstoptype.md) |
| [NSTextAlignmentJustified](../nstextalignment/justified.md) | [NSLeftTabStopType](texttabtype/lefttabstoptype.md) |
| [NSTextAlignmentNatural](../nstextalignment/natural.md) | [NSLeftTabStopType](texttabtype/lefttabstoptype.md), or [NSRightTabStopType](texttabtype/righttabstoptype.md), depending on the user setting. |
| [NSTextAlignmentRight](../nstextalignment/right.md) with a terminator | [NSDecimalTabStopType](texttabtype/decimaltabstoptype.md) |

## Topics

### Constants

- [NSLeftTabStopType](texttabtype/lefttabstoptype.md): Deprecated. A left-aligned tab stop.
- [NSRightTabStopType](texttabtype/righttabstoptype.md): Deprecated. A right-aligned tab stop.
- [NSCenterTabStopType](texttabtype/centertabstoptype.md): Deprecated. A center-aligned tab stop.
- [NSDecimalTabStopType](texttabtype/decimaltabstoptype.md): Deprecated. A tab stop that aligns columns of numbers to each number’s decimal point.

## See Also

### Accessing tab information

- [tabStops](tabstops.md): The text tab objects that represent the paragraph’s tab stops.
- [defaultTabInterval](defaulttabinterval.md): The documentwide default tab interval.
