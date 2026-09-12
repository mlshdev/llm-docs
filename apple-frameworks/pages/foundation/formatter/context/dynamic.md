> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/formatter/context/dynamic](https://developer.apple.com/documentation/foundation/formatter/context/dynamic)

# Formatter.Context.dynamic (Swift)

**Framework:** Foundation  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A formatting context determined automatically at runtime.

## Declaration

```swift
case dynamic
```

<a id="Discussion"></a>

## Discussion

A [Formatter.Context.dynamic](dynamic.md) context is automatically determined to be one of the following: [Formatter.Context.standalone](standalone.md), [Formatter.Context.beginningOfSentence](beginningofsentence.md), or [Formatter.Context.middleOfSentence](middleofsentence.md).

When used in combination with [stringWithFormat:](../../nsstring/stringwithformat_.md), the formatter returns a string proxy, formats the string using [Formatter.Context.unknown](unknown.md), determines context based on the proxy string’s location, and then reformats the string accordingly.

## See Also

### Constants

- [Formatter.Context.unknown](unknown.md): An unknown formatting context.
- [Formatter.Context.standalone](standalone.md): The formatting context for stand-alone usage.
- [Formatter.Context.listItem](listitem.md): The formatting context for a list or menu item.
- [Formatter.Context.beginningOfSentence](beginningofsentence.md): The formatting context for the beginning of a sentence.
- [Formatter.Context.middleOfSentence](middleofsentence.md): The formatting context for the middle of a sentence.

# NSFormattingContextDynamic (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A formatting context determined automatically at runtime.

## Declaration

```objectivec
NSFormattingContextDynamic
```

<a id="Discussion"></a>

## Discussion

A [NSFormattingContextDynamic](dynamic.md) context is automatically determined to be one of the following: [NSFormattingContextStandalone](standalone.md), [NSFormattingContextBeginningOfSentence](beginningofsentence.md), or [NSFormattingContextMiddleOfSentence](middleofsentence.md).

When used in combination with [stringWithFormat:](../../nsstring/stringwithformat_.md), the formatter returns a string proxy, formats the string using [NSFormattingContextUnknown](unknown.md), determines context based on the proxy string’s location, and then reformats the string accordingly.

## See Also

### Constants

- [NSFormattingContextUnknown](unknown.md): An unknown formatting context.
- [NSFormattingContextStandalone](standalone.md): The formatting context for stand-alone usage.
- [NSFormattingContextListItem](listitem.md): The formatting context for a list or menu item.
- [NSFormattingContextBeginningOfSentence](beginningofsentence.md): The formatting context for the beginning of a sentence.
- [NSFormattingContextMiddleOfSentence](middleofsentence.md): The formatting context for the middle of a sentence.
