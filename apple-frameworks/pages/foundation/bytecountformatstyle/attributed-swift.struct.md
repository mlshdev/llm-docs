> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/bytecountformatstyle/attributed-swift.struct](https://developer.apple.com/documentation/foundation/bytecountformatstyle/attributed-swift.struct)

# ByteCountFormatStyle.Attributed

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A format style that converts byte counts into attributed strings.

## Declaration

```swift
struct Attributed
```

<a id="overview"></a>

## Overview

Use the [attributed](attributed-swift.property.md) modifier on a [ByteCountFormatStyle](../bytecountformatstyle.md) to create a format style of this type.

The attributed strings that this fomat style creates contain attributes from the [AttributeScopes.FoundationAttributes.NumberFormatAttributes](../attributescopes/foundationattributes/numberformatattributes.md) attribute scope. Use these attributes to determine which runs of the attributed string represent different parts of the formatted value.

## Topics

### Formatting a byte count

- [format(\_:)](attributed-swift.struct/format%28__%29.md): Formats a numeric byte count, using this style.

### Customizing style behavior

- [style](attributed-swift.struct/style.md): The semantic style the format style uses to represent a byte count value.
- [ByteCountFormatStyle.Style](style-swift.enum.md): The semantic style to use when formatting a byte count value.

### Accessing style properties

- [allowedUnits](attributed-swift.struct/allowedunits.md): The units the format style can use to express the byte count.
- [spellsOutZero](attributed-swift.struct/spellsoutzero.md): A Boolean value that indicates whether the format style should spell out zero-byte values as text.
- [includesActualByteCount](attributed-swift.struct/includesactualbytecount.md): A Boolean value that indicates whether the format style should include the exact byte count, in addition to expressing it in terms of units.
- [locale](attributed-swift.struct/locale.md): The locale to use to format the numeric part of the byte count.

### Modifying style locale

- [locale(\_:)](attributed-swift.struct/locale%28__%29.md): Modifies the format style to use the specified locale.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [FormatStyle](../formatstyle.md)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating attributed strings

- [attributed](attributed-swift.property.md): An attributed format style based on the byte count format style.
