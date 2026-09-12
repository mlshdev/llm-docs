> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/bytecountformatstyle/locale](https://developer.apple.com/documentation/foundation/bytecountformatstyle/locale)

# locale

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The locale to use to format the numeric part of the byte count.

## Declaration

```swift
var locale: Locale { get set }
```

<a id="Discussion"></a>

## Discussion

To change the format style’s locale, use [locale(\_:)](../formatstyle/locale%28__%29.md).

## See Also

### Accessing style properties

- [allowedUnits](allowedunits.md): The units the format style can use to express the byte count.
- [ByteCountFormatStyle.Units](units.md): The units to use when formatting a byte count, such as kilobytes or gigabytes.
- [spellsOutZero](spellsoutzero.md): A Boolean value that indicates whether the format style should spell out zero-byte values as text.
- [includesActualByteCount](includesactualbytecount.md): A Boolean value that indicates whether the format style should include the exact byte count, in addition to expressing it in terms of units.
