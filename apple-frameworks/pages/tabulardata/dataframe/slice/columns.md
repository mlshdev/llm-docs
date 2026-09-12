> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/dataframe/slice/columns](https://developer.apple.com/documentation/tabulardata/dataframe/slice/columns)

# columns

**Framework:** TabularData  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The entire slice as a collection of columns.

## Declaration

```swift
var columns: [AnyColumnSlice] { get }
```

## See Also

### Inspecting a Slice

- [shape](shape.md): The number of rows and columns in the slice.
- [rows](rows.md): The entire slice as a collection of rows.
- [base](base.md): The underlying data frame.
