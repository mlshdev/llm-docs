> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/measurement/attributedstyle/bytecount](https://developer.apple.com/documentation/foundation/measurement/attributedstyle/bytecount)

# Measurement.AttributedStyle.ByteCount

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A format style that converts byte counts into attributed strings.

## Declaration

```swift
struct ByteCount
```

<a id="overview"></a>

## Overview

Use the [attributed](../formatstyle/bytecount/attributed.md) modifier on a [Measurement.FormatStyle.ByteCount](../formatstyle/bytecount.md) instance to create a format style of this type.

The attributed strings that this fomat style creates contain attributes from the [AttributeScopes.FoundationAttributes.NumberFormatAttributes](../../attributescopes/foundationattributes/numberformatattributes.md) attribute scope. Use these attributes to determine which runs of the attributed string represent different parts of the formatted value.

## Topics

### Creating an attributed byte count format style

- [init(style:allowedUnits:spellsOutZero:includesActualByteCount:locale:)](bytecount/init%28style_allowedunits_spellsoutzero_includesactualbytecount_locale_%29.md): Initializes an attributed byte count format style.

### Formatting a byte count

- [format(\_:)](bytecount/format%28__%29.md): Formats a byte count measurment, using this style.

### Accessing style properties

- [allowedUnits](bytecount/allowedunits.md): The units the format style can use to express the byte count.
- [Measurement.AttributedStyle.ByteCount.Units](bytecount/units.md): The type the measurement format style uses to represent byte-counting units.
- [spellsOutZero](bytecount/spellsoutzero.md): A Boolean value that indicates whether the format style should spell out zero-byte values as text.
- [includesActualByteCount](bytecount/includesactualbytecount.md): A Boolean value that indicates whether the format style should include the exact byte count, in addition to expressing it in terms of units.
- [style](bytecount/style-swift.property.md): The style of byte count to express, such as memory or file system storage.
- [Measurement.AttributedStyle.ByteCount.Style](bytecount/style-swift.typealias.md): The type used to represent the style of the formatted byte count.
- [locale](bytecount/locale.md): The locale to use to format the numeric part of the byte count.

### Modifying style locale

- [locale(\_:)](bytecount/locale%28__%29.md): Modifies the format style to use the specified locale.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [FormatStyle](../../formatstyle.md)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating attributed strings

- [attributed](../formatstyle/bytecount/attributed.md): An attributed format style based on the byte count format style.
