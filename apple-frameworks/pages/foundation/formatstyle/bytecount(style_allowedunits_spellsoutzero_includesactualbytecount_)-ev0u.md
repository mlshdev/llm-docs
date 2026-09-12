> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/formatstyle/bytecount(style:allowedunits:spellsoutzero:includesactualbytecount:)-ev0u](https://developer.apple.com/documentation/foundation/formatstyle/bytecount(style:allowedunits:spellsoutzero:includesactualbytecount:)-ev0u)

# byteCount(style:allowedUnits:spellsOutZero:includesActualByteCount:)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a format style to format a data storage value represented with Foundation’s measurement type.

## Declaration

```swift
static func byteCount(style: Measurement<UnitInformationStorage>.FormatStyle.ByteCount.Style, allowedUnits: Measurement<UnitInformationStorage>.FormatStyle.ByteCount.Units = .all, spellsOutZero: Bool = true, includesActualByteCount: Bool = false) -> Self
```

## Parameters

- `style`: The style of byte count to express, such as memory or file system storage.
- `allowedUnits`: The units the format style can use to express the byte count.
- `spellsOutZero`: A Boolean value that indicates whether the format style should spell out zero-byte values as text, like `Zero kB`.
- `includesActualByteCount`: A Boolean value that indicates whether the format style should include the exact byte count, in addition to expressing it in terms of units. For example, `1 kB (1,024 bytes)`.

<a id="return-value"></a>

## Return Value

A format style for formatting a measurement of data storage, customized with the provided behaviors.

<a id="Discussion"></a>

## Discussion

Use this type method when the call point allows the use of [Measurement.FormatStyle.ByteCount](../measurement/formatstyle/bytecount.md). You typically do this when calling the [formatted()](../measurement/formatted%28%29.md) on a [Measurement](../measurement.md) whose unit type is [UnitInformationStorage](../unitinformationstorage.md), as seen in the following example.

```swift
let count = Measurement(value: 1024, unit: UnitInformationStorage.bytes)
let formatted = count.formatted(.byteCount(style: .memory)) // "1 kB"
```

## See Also

### Applying byte-count styles

- [byteCount(style:allowedUnits:spellsOutZero:includesActualByteCount:)](bytecount%28style_allowedunits_spellsoutzero_includesactualbytecount_%29-59ep0.md): Conforms when `Self` is `ByteCountFormatStyle`. Returns a format style to format a data storage value.
- [ByteCountFormatStyle](../bytecountformatstyle.md): A format style that provides string representations of byte counts.
- [Measurement.FormatStyle.ByteCount](../measurement/formatstyle/bytecount.md): Conforms when `UnitType` is `UnitInformationStorage`. A format style that provides string representations of byte counts, expressed as measurements of information storage.
