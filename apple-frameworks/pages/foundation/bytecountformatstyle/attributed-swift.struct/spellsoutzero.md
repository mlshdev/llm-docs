> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/bytecountformatstyle/attributed-swift.struct/spellsoutzero](https://developer.apple.com/documentation/foundation/bytecountformatstyle/attributed-swift.struct/spellsoutzero)

# spellsOutZero

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A Boolean value that indicates whether the format style should spell out zero-byte values as text.

## Declaration

```swift
var spellsOutZero: Bool
```

<a id="Discussion"></a>

## Discussion

When this value is true, the format style produces output like `Zero kB`.

## See Also

### Accessing style properties

- [allowedUnits](allowedunits.md): The units the format style can use to express the byte count.
- [includesActualByteCount](includesactualbytecount.md): A Boolean value that indicates whether the format style should include the exact byte count, in addition to expressing it in terms of units.
- [locale](locale.md): The locale to use to format the numeric part of the byte count.
