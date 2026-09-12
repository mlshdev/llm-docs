> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/formatter/context](https://developer.apple.com/documentation/foundation/formatter/context)

# Formatter.Context (Swift)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The formatting context for a formatter.

## Declaration

```swift
enum Context
```

<a id="overview"></a>

## Overview

Use formatting contexts to specify where the result of formatting will appear, so that the formatter can provide the most appropriate result.

For example, when formatting a date or date symbol for a French locale, you want the month name to be capitalized if it appears at the beginning of the sentence (“Juin est mon mois de naissance”), but not if it appears elsewhere (“Mon mois de naissance est juin”).

If the formatting context isn’t known ahead of time, specify [Formatter.Context.dynamic](context/dynamic.md) to have the system determine the context automatically.

## Topics

### Constants

- [Formatter.Context.unknown](context/unknown.md): An unknown formatting context.
- [Formatter.Context.dynamic](context/dynamic.md): A formatting context determined automatically at runtime.
- [Formatter.Context.standalone](context/standalone.md): The formatting context for stand-alone usage.
- [Formatter.Context.listItem](context/listitem.md): The formatting context for a list or menu item.
- [Formatter.Context.beginningOfSentence](context/beginningofsentence.md): The formatting context for the beginning of a sentence.
- [Formatter.Context.middleOfSentence](context/middleofsentence.md): The formatting context for the middle of a sentence.

### Initializers

- [init(rawValue:)](context/init%28rawvalue_%29.md)

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

- [Formatter.UnitStyle](unitstyle.md): Specifies the width of the unit, determining the textual representation.

# NSFormattingContext (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The formatting context for a formatter.

## Declaration

```objectivec
enum NSFormattingContext : NSInteger;
```

<a id="overview"></a>

## Overview

Use formatting contexts to specify where the result of formatting will appear, so that the formatter can provide the most appropriate result.

For example, when formatting a date or date symbol for a French locale, you want the month name to be capitalized if it appears at the beginning of the sentence (“Juin est mon mois de naissance”), but not if it appears elsewhere (“Mon mois de naissance est juin”).

If the formatting context isn’t known ahead of time, specify [NSFormattingContextDynamic](context/dynamic.md) to have the system determine the context automatically.

## Topics

### Constants

- [NSFormattingContextUnknown](context/unknown.md): An unknown formatting context.
- [NSFormattingContextDynamic](context/dynamic.md): A formatting context determined automatically at runtime.
- [NSFormattingContextStandalone](context/standalone.md): The formatting context for stand-alone usage.
- [NSFormattingContextListItem](context/listitem.md): The formatting context for a list or menu item.
- [NSFormattingContextBeginningOfSentence](context/beginningofsentence.md): The formatting context for the beginning of a sentence.
- [NSFormattingContextMiddleOfSentence](context/middleofsentence.md): The formatting context for the middle of a sentence.

## See Also

### Constants

- [NSFormattingUnitStyle](unitstyle.md): Specifies the width of the unit, determining the textual representation.
