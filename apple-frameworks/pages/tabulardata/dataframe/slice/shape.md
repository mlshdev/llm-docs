> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/dataframe/slice/shape](https://developer.apple.com/documentation/tabulardata/dataframe/slice/shape)

# shape

**Framework:** TabularData  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The number of rows and columns in the slice.

## Declaration

```swift
var shape: (rows: Int, columns: Int) { get }
```

## Parameters

- `rows`: The number of rows in the slice.
- `columns`: The number of columns in the slice.

## See Also

### Inspecting a Slice

- [columns](columns.md): The entire slice as a collection of columns.
- [rows](rows.md): The entire slice as a collection of rows.
- [base](base.md): The underlying data frame.
