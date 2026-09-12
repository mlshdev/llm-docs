> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/listformatter](https://developer.apple.com/documentation/foundation/listformatter)

# ListFormatter (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An object that provides locale-correct formatting of a list of items using the appropriate separator and conjunction.

## Declaration

```swift
class ListFormatter
```

<a id="overview"></a>

## Overview

The list formatter isn’t aware of the context where the formatted string will be used and doesn’t provide capitalization customization of the list items. The formatted result may not be grammatically correct if placed in a sentence, and it should only be used in a standalone manner.

## Topics

### Converting Arrays to Formatted Lists

- [string(from:)](listformatter/string%28from_%29.md): Creates a formatted string for an array of items.
- [string(for:)](listformatter/string%28for_%29.md): Creates a formatted string for an array of items.
- [localizedString(byJoining:)](listformatter/localizedstring%28byjoining_%29.md): Constructs a formatted string from an array of strings that uses the list format specific to the current locale.

### Configuring Formatter Options

- [itemFormatter](listformatter/itemformatter.md): An object that formats each item in the list.
- [locale](listformatter/locale.md): The locale to use when formatting items in the list.

## Relationships

### Inherits From

- [Formatter](formatter.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](nscoding.md)
- [NSCopying](nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

# NSListFormatter (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An object that provides locale-correct formatting of a list of items using the appropriate separator and conjunction.

## Declaration

```objectivec
@interface NSListFormatter : NSFormatter
```

<a id="overview"></a>

## Overview

The list formatter isn’t aware of the context where the formatted string will be used and doesn’t provide capitalization customization of the list items. The formatted result may not be grammatically correct if placed in a sentence, and it should only be used in a standalone manner.

## Topics

### Converting Arrays to Formatted Lists

- [stringFromItems:](listformatter/string%28from_%29.md): Creates a formatted string for an array of items.
- [stringForObjectValue:](listformatter/string%28for_%29.md): Creates a formatted string for an array of items.
- [localizedStringByJoiningStrings:](listformatter/localizedstring%28byjoining_%29.md): Constructs a formatted string from an array of strings that uses the list format specific to the current locale.

### Configuring Formatter Options

- [itemFormatter](listformatter/itemformatter.md): An object that formats each item in the list.
- [locale](listformatter/locale.md): The locale to use when formatting items in the list.

## Relationships

### Inherits From

- [NSFormatter](formatter.md)
