> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mldatatable/init(dictionary:)](https://developer.apple.com/documentation/createml/mldatatable/init(dictionary:))

# init(dictionary:)

**Framework:** Create ML  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

Creates a data table from a dictionary of column names and data values.

## Declaration

```swift
init(dictionary: [String : any MLDataValueConvertible]) throws
```

## Parameters

- `dictionary`: The dictionary of each column name and its associated data values.

<a id="discussion"></a>

## Discussion

Use this initializer to create a data table from an in-memory [Dictionary](https://developer.apple.com/documentation/swift/dictionary).

![A table of information about a book. Columns named “Title”, “Author”,](https://developer.apple.com/images/com.apple.createml/MLDataTable-init%28dictionary:%29-1@2x.png)

For example, to create a data table as shown above, first create a dictionary.

```swift
let data: [String: MLDataValueConvertible] = [
    "Title": ["Alice in Wonderland", "Hamlet", "Treasure Island", "Peter Pan"],
    "Author": ["Lewis Carroll", "William Shakespeare", "Robert L. Stevenson", "J. M. Barrie"],
    "Pages": [124, 98, 280, 94],
    "Genre": ["Fantasy", "Drama", "Adventure", "Fantasy"]
]
```

Then, use [init(dictionary:)](init%28dictionary_%29.md) to create a data table from the dictionary.

```swift
let bookTable = try MLDataTable(dictionary: data)
```

The keys of the dictionary become the column names, and the value of each key becomes the element(s) of the corresponding column in the data table.

## See Also

### Creating a data table

- [Creating a model from tabular data](../creating-a-model-from-tabular-data.md): Train a machine learning model by using Core ML to import and manage tabular data.
- [init(contentsOf:options:)](init%28contentsof_options_%29.md): Creates a data table from an imported JSON or CSV file.
- [init(namedColumns:)](init%28namedcolumns_%29.md): Creates a data table from a dictionary of column names and untyped columns.
- [init()](init%28%29.md): Creates an empty table containing no rows or columns.
- [MLDataTable.ParsingOptions](parsingoptions.md): The options for parsing a comma-separated values (CSV) file into a data table for a machine learning model.
