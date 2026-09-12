> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mldatatable/addcolumn(_:named:)](https://developer.apple.com/documentation/createml/mldatatable/addcolumn(_:named:))

# addColumn(\_:named:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

Adds an untyped column to the table.

## Declaration

```swift
mutating func addColumn(_ newColumn: MLUntypedColumn, named: String)
```

## Parameters

- `newColumn`: A column to add to the data table.
- `named`: The name of the new column.

<a id="discussion"></a>

## Discussion

Use this method to add an untyped column to a data table.

> **Important**

> The number of elements in the column must equal the number of rows in the data table. Otherwise, the data table will be invalidated.

As an example, start with a data table variable.

```swift
let data: [String: MLDataValueConvertible] = [
    "Title": ["Alice in Wonderland", "Hamlet", "Treasure Island", "Peter Pan"],
    "Author": ["Lewis Carroll", "William Shakespeare", "Robert L. Stevenson", "J. M. Barrie"],
    "Pages": [124, 98, 280, 94],
]

var bookTable = try MLDataTable(dictionary: data)
```

Then use [addColumn(\_:named:)](https://developer.apple.com/documentation/createml/mldatatable/addcolumn%28_:named:%29-9cb24) to add a column to the table.

```swift
let pagesColumn = MLUntypedColumn([124, 98, 280, 94])
bookTable.addColumn(pagesColumn, named: "Pages")
```

## See Also

### Adding columns

- [MLDataColumn](../mldatacolumn.md): A column of typed values in a data table.
- [MLUntypedColumn](../mluntypedcolumn.md): A column of untyped values in a data table.
