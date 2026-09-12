> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/personnamecomponents/formatstyle/style-swift.enum](https://developer.apple.com/documentation/foundation/personnamecomponents/formatstyle/style-swift.enum)

# PersonNameComponents.FormatStyle.Style

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The type that represents the style of the formatted result.

## Declaration

```swift
enum Style
```

<a id="overview"></a>

## Overview

The style type describes a length of the string representation of the name. The available values are [PersonNameComponents.FormatStyle.Style.long](style-swift.enum/long.md), [PersonNameComponents.FormatStyle.Style.medium](style-swift.enum/medium.md), [PersonNameComponents.FormatStyle.Style.short](style-swift.enum/short.md), and [PersonNameComponents.FormatStyle.Style.abbreviated](style-swift.enum/abbreviated.md).

## Topics

### Enumeration Cases

- [PersonNameComponents.FormatStyle.Style.abbreviated](style-swift.enum/abbreviated.md): Specifies an abbreviated person name components style.
- [PersonNameComponents.FormatStyle.Style.long](style-swift.enum/long.md): Specifies a long person name components style.
- [PersonNameComponents.FormatStyle.Style.medium](style-swift.enum/medium.md): Specifies a medium person name components style.
- [PersonNameComponents.FormatStyle.Style.short](style-swift.enum/short.md): Specifies a short person name components style.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Modifying a Format Style

- [style](style-swift.property.md): Specifies the style of the formatted result.
- [locale](locale.md): The locale to use when formatting the person name components.
- [attributed](attributed.md): The style used to create a locale-aware attributed string representation of an instance of person name components.
- [locale(\_:)](locale%28__%29.md): Modifies the person name components format style to use the specified locale.
