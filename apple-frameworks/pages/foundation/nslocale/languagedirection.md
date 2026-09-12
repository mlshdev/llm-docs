> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nslocale/languagedirection](https://developer.apple.com/documentation/foundation/nslocale/languagedirection)

# NSLocale.LanguageDirection (Swift)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The directions that a language may take across a page of text.

## Declaration

```swift
enum LanguageDirection
```

<a id="overview"></a>

## Overview

Use these constants with the methods [lineDirection(forLanguage:)](linedirection%28forlanguage_%29.md) and [characterDirection(forLanguage:)](characterdirection%28forlanguage_%29.md).

## Topics

### Constants

- [NSLocale.LanguageDirection.unknown](languagedirection/unknown.md): The direction of the language is unknown.
- [NSLocale.LanguageDirection.leftToRight](languagedirection/lefttoright.md): The language direction is from left to right.
- [NSLocale.LanguageDirection.rightToLeft](languagedirection/righttoleft.md): The language direction is from right to left.
- [NSLocale.LanguageDirection.topToBottom](languagedirection/toptobottom.md): The language direction is from top to bottom.
- [NSLocale.LanguageDirection.bottomToTop](languagedirection/bottomtotop.md): The language direction is from bottom to top.

### Initializers

- [init(rawValue:)](languagedirection/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting line and character direction for a language

- [characterDirection(forLanguage:)](../locale/characterdirection%28forlanguage_%29.md): Deprecated. Returns the character direction for a specified language code.
- [lineDirection(forLanguage:)](../locale/linedirection%28forlanguage_%29.md): Deprecated. Returns the line direction for a specified language code.
- [Locale.LanguageDirection](../locale/languagedirection.md): An alias for the standard set of language directions.

# NSLocaleLanguageDirection (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The directions that a language may take across a page of text.

## Declaration

```objectivec
enum NSLocaleLanguageDirection : NSUInteger;
```

<a id="overview"></a>

## Overview

Use these constants with the methods [lineDirectionForLanguage:](linedirection%28forlanguage_%29.md) and [characterDirectionForLanguage:](characterdirection%28forlanguage_%29.md).

## Topics

### Constants

- [NSLocaleLanguageDirectionUnknown](languagedirection/unknown.md): The direction of the language is unknown.
- [NSLocaleLanguageDirectionLeftToRight](languagedirection/lefttoright.md): The language direction is from left to right.
- [NSLocaleLanguageDirectionRightToLeft](languagedirection/righttoleft.md): The language direction is from right to left.
- [NSLocaleLanguageDirectionTopToBottom](languagedirection/toptobottom.md): The language direction is from top to bottom.
- [NSLocaleLanguageDirectionBottomToTop](languagedirection/bottomtotop.md): The language direction is from bottom to top.
