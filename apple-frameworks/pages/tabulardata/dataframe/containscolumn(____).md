> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/dataframe/containscolumn(_:_:)](https://developer.apple.com/documentation/tabulardata/dataframe/containscolumn(_:_:))

# containsColumn(\_:\_:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 12.3+ · tvOS 15.4+ · visionOS 1.0+ · watchOS 8.5+

Returns a Boolean value indicating whether the data frame contains a column.

## Declaration

```swift
func containsColumn<T>(_ name: String, _ type: T.Type) -> Bool
```

## Parameters

- `name`: A column name.
- `type`: An element type.

## See Also

### Inspecting a Data Frame

- [shape](shape.md): The number of rows and columns in the data frame.
- [columns](columns.md): The entire data frame as a collection of columns.
- [rows](rows-swift.property.md): The entire data frame as a collection of rows.
- [DataFrame.Rows](rows-swift.struct.md): A collection of rows in a data frame.
- [base](base.md): The underlying data frame.
