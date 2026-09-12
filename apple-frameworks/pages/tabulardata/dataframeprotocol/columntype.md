> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/dataframeprotocol/columntype](https://developer.apple.com/documentation/tabulardata/dataframeprotocol/columntype)

# ColumnType

**Framework:** TabularData  
**Kind:** Associated Type  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A type that conforms to the type-erased column protocol.

## Declaration

```swift
associatedtype ColumnType : AnyColumnProtocol
```

## See Also

### Inspecting a Data Frame Type

- [isEmpty](isempty.md): A Boolean that indicates whether the data frame type is empty.
- [shape](shape.md): The number or rows and columns of the data frame type.
- [columns](columns.md): The columns of the underlying data frame.
- [rows](rows.md): The rows of the underlying data frame.
- [DataFrame.Rows](../dataframe/rows-swift.struct.md): A collection of rows in a data frame.
- [base](base.md): The underlying data frame.
