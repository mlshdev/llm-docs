> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/categoricalsummary/debugdescription](https://developer.apple.com/documentation/tabulardata/categoricalsummary/debugdescription)

# debugDescription

**Framework:** TabularData  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A text representation of the summary’s statistics suitable for debugging.

## Declaration

```swift
var debugDescription: String { get }
```

## See Also

### Inspecting a Summary

- [mode](mode.md): The most common values in a column, ignoring missing elements.
- [uniqueCount](uniquecount.md): The number of elements with distinct values in a column that excludes missing elements.
- [someCount](somecount.md): The number of non-missing elements in the column.
- [noneCount](nonecount.md): The number of missing elements in the column.
- [totalCount](totalcount.md): The total number of elements in the column.
