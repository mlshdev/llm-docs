> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/categoricalsummary/init(somecount:nonecount:uniquecount:mode:)](https://developer.apple.com/documentation/tabulardata/categoricalsummary/init(somecount:nonecount:uniquecount:mode:))

# init(someCount:noneCount:uniqueCount:mode:)

**Framework:** TabularData  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a categorical summary.

## Declaration

```swift
init(someCount: Int, noneCount: Int, uniqueCount: Int, mode: [Element])
```

## Parameters

- `someCount`: The number of elements in a column, excluding missing elements.
- `noneCount`: The number of missing elements in the column.
- `uniqueCount`: The number of elements with distinct values in a column, ignoring missing elements.
- `mode`: The most common values in a column, ignoring missing elements.

## See Also

### Creating a Summary

- [init()](init%28%29.md): Creates a categorical summary with default values.
