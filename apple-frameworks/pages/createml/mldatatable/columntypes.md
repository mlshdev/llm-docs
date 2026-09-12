> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mldatatable/columntypes](https://developer.apple.com/documentation/createml/mldatatable/columntypes)

# columnTypes

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

The type of the data in each column.

## Declaration

```swift
var columnTypes: [String : MLDataValue.ValueType] { get }
```

<a id="discussion"></a>

## Discussion

The keys in the dictionary provided by this column correspond to the names of the columns in the data table.

## See Also

### Getting information about a data table’s columns

- [columnNames](columnnames-swift.property.md): The names of the columns in the data table.
- [MLDataTable.ColumnNames](columnnames-swift.struct.md): A collection of the names of the columns in a data table.
