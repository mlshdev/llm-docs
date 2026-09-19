> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createml/mldatatable/rows-swift.struct/startindex

# startIndex

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

The position of the first row in a nonempty DataTable. If the DataTable is empty, `startIndex` is equal to `endIndex`.

## Declaration

```swift
var startIndex: Int { get }
```

## See Also

### Manipulating indices

- [endIndex](endindex.md): The DataTable’s “past the end” position—that is, the position one greater than the last valid subscript argument.
