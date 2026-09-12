> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mldatatable/init()](https://developer.apple.com/documentation/createml/mldatatable/init())

# init()

**Framework:** Create ML  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

Creates an empty table containing no rows or columns.

## Declaration

```swift
init()
```

<a id="discussion"></a>

## Discussion

Use this initializer to create an empty data table. Then, you add data columns with [addColumn(\_:named:)](https://developer.apple.com/documentation/createml/mldatatable/addcolumn%28_:named:%29-kkbw), untyped columns with [addColumn(\_:named:)](https://developer.apple.com/documentation/createml/mldatatable/addcolumn%28_:named:%29-9cb24), or another table with [append(contentsOf:)](append%28contentsof_%29.md).

## See Also

### Creating a data table

- [Creating a model from tabular data](../creating-a-model-from-tabular-data.md): Train a machine learning model by using Core ML to import and manage tabular data.
- [init(contentsOf:options:)](init%28contentsof_options_%29.md): Creates a data table from an imported JSON or CSV file.
- [init(dictionary:)](init%28dictionary_%29.md): Creates a data table from a dictionary of column names and data values.
- [init(namedColumns:)](init%28namedcolumns_%29.md): Creates a data table from a dictionary of column names and untyped columns.
- [MLDataTable.ParsingOptions](parsingoptions.md): The options for parsing a comma-separated values (CSV) file into a data table for a machine learning model.
