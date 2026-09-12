> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mldatatable/init(namedcolumns:)](https://developer.apple.com/documentation/createml/mldatatable/init(namedcolumns:))

# init(namedColumns:)

**Framework:** Create ML  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

Creates a data table from a dictionary of column names and untyped columns.

## Declaration

```swift
init(namedColumns: [String : MLUntypedColumn]) throws
```

## Parameters

- `namedColumns`: The dictionary of each column name and its associated untyped column data.

<a id="discussion"></a>

## Discussion

Use this initializer to create a data table from untyped columns.

![A table of information about a book. Columns named “Title”, “Author”,](https://developer.apple.com/images/com.apple.createml/MLDataTable-init%28namedColumns:%29-1@2x.png)

For example, to create a data table as shown above, first create your untyped columns.

```swift
let pages = MLUntypedColumn([124, 98, 280, 94])
let genre = MLUntypedColumn(["Fantasy", "Drama", "Adventure", "Fantasy"])
let title = MLUntypedColumn(["Alice in Wonderland", "Hamlet", "Treasure Island", "Peter Pan"])
let author = MLUntypedColumn(["Lewis Carroll", "William Shakespeare", "Robert L. Stevenson", "J. M. Barrie"])
```

Then, use [init(namedColumns:)](init%28namedcolumns_%29.md) to create a data table from the columns paired with their names.

```swift
let bookTable = try MLDataTable(namedColumns: ["Title": title,
                                               "Author": author,
                                               "Pages": pages,
                                               "Genre": genre])
```

## See Also

### Creating a data table

- [Creating a model from tabular data](../creating-a-model-from-tabular-data.md): Train a machine learning model by using Core ML to import and manage tabular data.
- [init(contentsOf:options:)](init%28contentsof_options_%29.md): Creates a data table from an imported JSON or CSV file.
- [init(dictionary:)](init%28dictionary_%29.md): Creates a data table from a dictionary of column names and data values.
- [init()](init%28%29.md): Creates an empty table containing no rows or columns.
- [MLDataTable.ParsingOptions](parsingoptions.md): The options for parsing a comma-separated values (CSV) file into a data table for a machine learning model.
