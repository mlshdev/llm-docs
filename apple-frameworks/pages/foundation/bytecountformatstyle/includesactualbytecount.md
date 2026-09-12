> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/bytecountformatstyle/includesactualbytecount](https://developer.apple.com/documentation/foundation/bytecountformatstyle/includesactualbytecount)

# includesActualByteCount

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A Boolean value that indicates whether the format style should include the exact byte count, in addition to expressing it in terms of units.

## Declaration

```swift
var includesActualByteCount: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When this value is `true`, a format style produces output like `1 kB (1,024 bytes)`.

## See Also

### Accessing style properties

- [allowedUnits](allowedunits.md): The units the format style can use to express the byte count.
- [ByteCountFormatStyle.Units](units.md): The units to use when formatting a byte count, such as kilobytes or gigabytes.
- [spellsOutZero](spellsoutzero.md): A Boolean value that indicates whether the format style should spell out zero-byte values as text.
- [locale](locale.md): The locale to use to format the numeric part of the byte count.
