> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tabulardata/columnencodingerror/debugdescription

# debugDescription

**Framework:** TabularData  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A text representation of the column encoding error suitable for debugging.

## Declaration

```swift
var debugDescription: String { get }
```

## See Also

### Getting Error Information

- [columnName](columnname.md): The name of the column with the error.
- [encodingError](encodingerror.md): The underlying encoding error.
- [rowIndex](rowindex.md): The index of the column’s element with the error.
