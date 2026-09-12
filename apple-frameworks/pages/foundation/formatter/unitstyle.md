> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/formatter/unitstyle](https://developer.apple.com/documentation/foundation/formatter/unitstyle)

# Formatter.UnitStyle (Swift)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Specifies the width of the unit, determining the textual representation.

## Declaration

```swift
enum UnitStyle
```

<a id="overview"></a>

## Overview

The unit is represented in the shortest notation available. For example, for English, when formatting “3 pounds”: [Formatter.UnitStyle.long](unitstyle/long.md) is “3 pounds”; [Formatter.UnitStyle.medium](unitstyle/medium.md) is “3 lb”; [Formatter.UnitStyle.short](unitstyle/short.md) is “3#”.

## Topics

### Constants

- [Formatter.UnitStyle.short](unitstyle/short.md): Specifies a short unit style.
- [Formatter.UnitStyle.medium](unitstyle/medium.md): Specifies a medium unit style.
- [Formatter.UnitStyle.long](unitstyle/long.md): Specifies a long unit style.

### Initializers

- [init(rawValue:)](unitstyle/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [Formatter.Context](context.md): The formatting context for a formatter.

# NSFormattingUnitStyle (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Specifies the width of the unit, determining the textual representation.

## Declaration

```objectivec
enum NSFormattingUnitStyle : NSInteger;
```

<a id="overview"></a>

## Overview

The unit is represented in the shortest notation available. For example, for English, when formatting “3 pounds”: [NSFormattingUnitStyleLong](unitstyle/long.md) is “3 pounds”; [NSFormattingUnitStyleMedium](unitstyle/medium.md) is “3 lb”; [NSFormattingUnitStyleShort](unitstyle/short.md) is “3#”.

## Topics

### Constants

- [NSFormattingUnitStyleShort](unitstyle/short.md): Specifies a short unit style.
- [NSFormattingUnitStyleMedium](unitstyle/medium.md): Specifies a medium unit style.
- [NSFormattingUnitStyleLong](unitstyle/long.md): Specifies a long unit style.

## See Also

### Constants

- [NSFormattingContext](context.md): The formatting context for a formatter.
