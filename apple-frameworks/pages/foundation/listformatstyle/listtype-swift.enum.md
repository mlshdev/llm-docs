> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/listformatstyle/listtype-swift.enum](https://developer.apple.com/documentation/foundation/listformatstyle/listtype-swift.enum)

# ListFormatStyle.ListType

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A type that describes whether the returned list contains cumulative or alternative elements.

## Declaration

```swift
enum ListType
```

<a id="overview"></a>

## Overview

The possible values of a [listType](listtype-swift.property.md) are `and` and `or`.

## Topics

### List types

- [ListFormatStyle.ListType.and](listtype-swift.enum/and.md): Specifies an *and* list type.
- [ListFormatStyle.ListType.or](listtype-swift.enum/or.md): Specifies an *or* list type.

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

### Modifying a list format style

- [width](width-swift.property.md): The size of the list.
- [ListFormatStyle.Width](width-swift.enum.md): The type representing the width of a list.
- [listType](listtype-swift.property.md): The type of the list.
- [locale](locale.md): The locale to use when formatting items in the list.
- [locale(\_:)](locale%28__%29.md): Modifies the list format style to use the specified locale.
