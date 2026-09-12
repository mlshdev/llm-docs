> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/bytecountformatstyle](https://developer.apple.com/documentation/foundation/bytecountformatstyle)

# ByteCountFormatStyle

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A format style that provides string representations of byte counts.

## Declaration

```swift
struct ByteCountFormatStyle
```

<a id="overview"></a>

## Overview

The following example creates an `Int` representing 1,024 bytes, and then formats it as an expression of memory storage, with the default byte count format style.

```swift
let count: Int64 = 1024
let formatted = count.formatted(.byteCount(style: .memory)) // "1 kB"
```

You can also customize a byte count format style, and use this to format one or more [Int64](https://developer.apple.com/documentation/swift/int64) instances. The following example creates a format style to only use kilobyte units, and to spell out the exact byte count of the measurement.

```swift
let style = ByteCountFormatStyle(style: .memory,                                 
                                 allowedUnits: [.kb],
                                 spellsOutZero: true,
                                 includesActualByteCount: false,
                                 locale: Locale(identifier: "en_US"))
let counts: [Int64] = [0, 1024, 2048, 4096, 8192, 16384, 32768, 65536]
let formatted = counts.map ( {style.format($0) } ) // ["Zero kB", "1 kB", "2 kB", "4 kB", "8 kB", "16 kB", "32 kB", "64 kB"]
```

## Topics

### Creating a byte count style

- [init(style:allowedUnits:spellsOutZero:includesActualByteCount:locale:)](bytecountformatstyle/init%28style_allowedunits_spellsoutzero_includesactualbytecount_locale_%29.md): Initializes a byte count format style.
- [ByteCountFormatStyle.Units](bytecountformatstyle/units.md): The units to use when formatting a byte count, such as kilobytes or gigabytes.

### Formatting byte count values

- [format(\_:)](bytecountformatstyle/format%28__%29.md): Formats a numeric byte count, using this style.

### Customizing style behavior

- [style](bytecountformatstyle/style-swift.property.md): The semantic style the format style uses to represent a byte count value.
- [ByteCountFormatStyle.Style](bytecountformatstyle/style-swift.enum.md): The semantic style to use when formatting a byte count value.

### Accessing style properties

- [allowedUnits](bytecountformatstyle/allowedunits.md): The units the format style can use to express the byte count.
- [ByteCountFormatStyle.Units](bytecountformatstyle/units.md): The units to use when formatting a byte count, such as kilobytes or gigabytes.
- [spellsOutZero](bytecountformatstyle/spellsoutzero.md): A Boolean value that indicates whether the format style should spell out zero-byte values as text.
- [includesActualByteCount](bytecountformatstyle/includesactualbytecount.md): A Boolean value that indicates whether the format style should include the exact byte count, in addition to expressing it in terms of units.
- [locale](bytecountformatstyle/locale.md): The locale to use to format the numeric part of the byte count.

### Modifying style locale

- [locale(\_:)](bytecountformatstyle/locale%28__%29.md): Modifies the format style to use the specified locale.

### Creating attributed strings

- [attributed](bytecountformatstyle/attributed-swift.property.md): An attributed format style based on the byte count format style.
- [ByteCountFormatStyle.Attributed](bytecountformatstyle/attributed-swift.struct.md): A format style that converts byte counts into attributed strings.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [FormatStyle](formatstyle.md)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Applying byte-count styles

- [byteCount(style:allowedUnits:spellsOutZero:includesActualByteCount:)](formatstyle/bytecount%28style_allowedunits_spellsoutzero_includesactualbytecount_%29-59ep0.md): Conforms when `Self` is `ByteCountFormatStyle`. Returns a format style to format a data storage value.
- [byteCount(style:allowedUnits:spellsOutZero:includesActualByteCount:)](formatstyle/bytecount%28style_allowedunits_spellsoutzero_includesactualbytecount_%29-ev0u.md): Conforms when `Self` is `Measurement<UnitInformationStorage>.FormatStyle.ByteCount`. Returns a format style to format a data storage value represented with Foundation’s measurement type.
- [Measurement.FormatStyle.ByteCount](measurement/formatstyle/bytecount.md): Conforms when `UnitType` is `UnitInformationStorage`. A format style that provides string representations of byte counts, expressed as measurements of information storage.
