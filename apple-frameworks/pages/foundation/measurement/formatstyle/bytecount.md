> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/measurement/formatstyle/bytecount](https://developer.apple.com/documentation/foundation/measurement/formatstyle/bytecount)

# Measurement.FormatStyle.ByteCount

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A format style that provides string representations of byte counts, expressed as measurements of information storage.

## Declaration

```swift
struct ByteCount
```

<a id="overview"></a>

## Overview

Use this style with a [Measurement](../../measurement.md) whose unit type is [UnitInformationStorage](../../unitinformationstorage.md) to format byte counts according to locale conventions.

The following example creates a measurement of 1,024 bytes, and then formats it as an expression of memory storage, with the default byte count format style:

```swift
let count = Measurement(value: 1024, unit: UnitInformationStorage.bytes)
let formatted = count.formatted(.byteCount(style: .memory)) // "1 kB"
```

You can also customize a byte count format style, and use this to format one or more [Measurement](../../measurement.md) instances. The following example creates a format style to only use kilobyte units, and to spell out the exact byte count of the measurement.

```swift
let count = Measurement(value: 1024, unit: UnitInformationStorage.bytes)
let style = Measurement.FormatStyle.ByteCount(style: .memory,
                                              allowedUnits: .kb,
                                              spellsOutZero: true,
                                              includesActualByteCount: true,
                                              locale: Locale(identifier: "en_US"))
let customFormatted = style.format(count) // "1 kB (1,024 bytes)"
```

## Topics

### Creating a byte count style

- [init(style:allowedUnits:spellsOutZero:includesActualByteCount:locale:)](bytecount/init%28style_allowedunits_spellsoutzero_includesactualbytecount_locale_%29.md): Initializes a byte count format style.

### Formatting byte count measurements

- [format(\_:)](bytecount/format%28__%29.md): Formats a byte count measurment, using this style.

### Accessing style properties

- [allowedUnits](bytecount/allowedunits.md): The units the format style can use to express the byte count.
- [Measurement.FormatStyle.ByteCount.Units](bytecount/units.md): The type the measurement format style uses to represent byte-counting units.
- [spellsOutZero](bytecount/spellsoutzero.md): A Boolean value that indicates whether the format style should spell out zero-byte values as text.
- [includesActualByteCount](bytecount/includesactualbytecount.md): A Boolean value that indicates whether the format style should include the exact byte count, in addition to expressing it in terms of units.
- [style](bytecount/style-swift.property.md): The style of byte count to express, such as memory or file system storage.
- [Measurement.FormatStyle.ByteCount.Style](bytecount/style-swift.typealias.md): The type used to represent the style of the formatted byte count.
- [locale](bytecount/locale.md): The locale to use to format the numeric part of the byte count.

### Modifying style locale

- [locale(\_:)](bytecount/locale%28__%29.md): Modifies the format style to use the specified locale.

### Creating attributed strings

- [attributed](bytecount/attributed.md): An attributed format style based on the byte count format style.
- [Measurement.AttributedStyle.ByteCount](../attributedstyle/bytecount.md): Conforms when `UnitType` is `UnitInformationStorage`. A format style that converts byte counts into attributed strings.

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

### Applying byte-count styles

- [byteCount(style:allowedUnits:spellsOutZero:includesActualByteCount:)](../../formatstyle/bytecount%28style_allowedunits_spellsoutzero_includesactualbytecount_%29-59ep0.md): Conforms when `Self` is `ByteCountFormatStyle`. Returns a format style to format a data storage value.
- [ByteCountFormatStyle](../../bytecountformatstyle.md): A format style that provides string representations of byte counts.
- [byteCount(style:allowedUnits:spellsOutZero:includesActualByteCount:)](../../formatstyle/bytecount%28style_allowedunits_spellsoutzero_includesactualbytecount_%29-ev0u.md): Conforms when `Self` is `Measurement<UnitInformationStorage>.FormatStyle.ByteCount`. Returns a format style to format a data storage value represented with Foundation’s measurement type.
