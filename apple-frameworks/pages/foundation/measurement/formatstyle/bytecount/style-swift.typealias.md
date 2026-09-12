> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/measurement/formatstyle/bytecount/style-swift.typealias](https://developer.apple.com/documentation/foundation/measurement/formatstyle/bytecount/style-swift.typealias)

# Measurement.FormatStyle.ByteCount.Style

**Framework:** Foundation  
**Kind:** Type Alias  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The type used to represent the style of the formatted byte count.

## Declaration

```swift
typealias Style = ByteCountFormatStyle.Style
```

<a id="Discussion"></a>

## Discussion

This format style uses the [ByteCountFormatStyle.Style](../../../bytecountformatstyle/style-swift.enum.md) type to represent the byte-count style.

## See Also

### Accessing style properties

- [allowedUnits](allowedunits.md): The units the format style can use to express the byte count.
- [Measurement.FormatStyle.ByteCount.Units](units.md): The type the measurement format style uses to represent byte-counting units.
- [spellsOutZero](spellsoutzero.md): A Boolean value that indicates whether the format style should spell out zero-byte values as text.
- [includesActualByteCount](includesactualbytecount.md): A Boolean value that indicates whether the format style should include the exact byte count, in addition to expressing it in terms of units.
- [style](style-swift.property.md): The style of byte count to express, such as memory or file system storage.
- [locale](locale.md): The locale to use to format the numeric part of the byte count.
