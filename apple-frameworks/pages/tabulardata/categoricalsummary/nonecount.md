> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tabulardata/categoricalsummary/nonecount

# noneCount

**Framework:** TabularData  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The number of missing elements in the column.

## Declaration

```swift
var noneCount: Int
```

## See Also

### Inspecting a Summary

- [debugDescription](debugdescription.md): A text representation of the summary’s statistics suitable for debugging.
- [mode](mode.md): The most common values in a column, ignoring missing elements.
- [uniqueCount](uniquecount.md): The number of elements with distinct values in a column that excludes missing elements.
- [someCount](somecount.md): The number of non-missing elements in the column.
- [totalCount](totalcount.md): The total number of elements in the column.
