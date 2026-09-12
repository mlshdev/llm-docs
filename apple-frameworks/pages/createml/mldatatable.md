> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mldatatable](https://developer.apple.com/documentation/createml/mldatatable)

# MLDataTable

**Framework:** Create ML  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

A table of data for training or evaluating a machine learning model.

## Declaration

```swift
struct MLDataTable
```

## Mentioned In

- [Creating a word tagger model](creating-a-word-tagger-model.md)
- [Creating a text classifier model](creating-a-text-classifier-model.md)

<a id="overview"></a>

## Overview

[MLDataTable](mldatatable.md) is Create ML’s version of a spreadsheet in which each row represents an entity (such as a book, in the example below) with observable features. Each column ([MLDataColumn](mldatacolumn.md) or [MLUntypedColumn](mluntypedcolumn.md)) in the table represents an observable feature of that entity, such as a book’s title or author.

![A table of information about a book. Columns named “Title”, “Author”,](https://developer.apple.com/images/com.apple.createml/MLDataTable-1@2x.png)

In most cases you interact with columns using the typed [MLDataColumn](mldatacolumn.md), especially when you need to directly access the contents of a column. You can also interact with columns using [MLUntypedColumn](mluntypedcolumn.md), if the underlying type of the column isn’t important.

After you create a data table, you can modify it with methods like [append(contentsOf:)](mldatatable/append%28contentsof_%29.md), [addColumn(\_:named:)](https://developer.apple.com/documentation/createml/mldatatable/addcolumn%28_:named:%29-kkbw), and [removeColumn(named:)](mldatatable/removecolumn%28named_%29.md). You can also filter or map the contents of the data table to derive new data tables or new columns by using various subscripts and methods like [dropDuplicates()](mldatatable/dropduplicates%28%29.md) or [map(\_:)](https://developer.apple.com/documentation/createml/mldatatable/map%28_:%29-92wrj).

> **Note**

> For a demonstration that creates and uses data tables, see [Creating a model from tabular data](creating-a-model-from-tabular-data.md).

Finally, when your data table is ready, use it to train and evaluate a model from these groups:

- Regressors like [MLRegressor](mlregressor.md) and its supporting types
- Classifiers like [MLClassifier](mlclassifier.md) and its supporting types
- Natural language processing types like [MLTextClassifier](mltextclassifier.md) and [MLWordTagger](mlwordtagger.md)

> **Note**

> It’s easier to train an [MLTextClassifier](mltextclassifier.md) from folders and files with [init(trainingData:parameters:)](https://developer.apple.com/documentation/createml/mltextclassifier/init%28trainingdata:parameters:%29-8n8vs) if your data is ready to use, as-is. Otherwise, use a data table to prepare your data before training a text classifier.

## Topics

### Creating a data table

- [Creating a model from tabular data](creating-a-model-from-tabular-data.md): Train a machine learning model by using Core ML to import and manage tabular data.
- [init(contentsOf:options:)](mldatatable/init%28contentsof_options_%29.md): Creates a data table from an imported JSON or CSV file.
- [init(dictionary:)](mldatatable/init%28dictionary_%29.md): Creates a data table from a dictionary of column names and data values.
- [init(namedColumns:)](mldatatable/init%28namedcolumns_%29.md): Creates a data table from a dictionary of column names and untyped columns.
- [init()](mldatatable/init%28%29.md): Creates an empty table containing no rows or columns.
- [MLDataTable.ParsingOptions](mldatatable/parsingoptions.md): The options for parsing a comma-separated values (CSV) file into a data table for a machine learning model.

### Getting the size of a data table

- [size](mldatatable/size.md): The number of rows and columns in the data table.

### Transforming rows to generate a data column

- [map(\_:)](mldatatable/map%28__%29.md): Creates a new column by applying a given thread-safe transform to every row in the data table.

### Adding columns

- [addColumn(\_:named:)](mldatatable/addcolumn%28__named_%29.md): Adds an untyped column to the table.
- [MLDataColumn](mldatacolumn.md): A column of typed values in a data table.
- [MLUntypedColumn](mluntypedcolumn.md): A column of untyped values in a data table.

### Accessing columns

- [subscript(\_:)](mldatatable/subscript%28__%29.md): Retrieves or adds an untyped column with the specified name.
- [subscript(\_:\_:)](mldatatable/subscript%28____%29.md): Retrieves a column with the specified name and type.

### Renaming columns

- [renameColumn(named:to:)](mldatatable/renamecolumn%28named_to_%29.md): Changes the name of an existing column.

### Removing columns

- [removeColumn(named:)](mldatatable/removecolumn%28named_%29.md): Removes the column with the specified name.

### Appending to a data table

- [append(contentsOf:)](mldatatable/append%28contentsof_%29.md): Appends the contents of the given data table to the end of this data table.

### Generating new data tables

- [Data table derivation operations](data-table-derivation-operations.md): Create new data tables by manipulating an existing data table.

### Splitting a data table

- [randomSplitBySequence(proportion:by:on:seed:)](mldatatable/randomsplitbysequence%28proportion_by_on_seed_%29.md)
- [stratifiedSplit(proportions:on:generator:)](mldatatable/stratifiedsplit%28proportions_on_generator_%29.md): Randomly split a MLDataTable into a number partitions while stratifying on a user-define label column.
- [stratifiedSplit(proportions:on:seed:)](mldatatable/stratifiedsplit%28proportions_on_seed_%29.md): Randomly split a MLDataTable into a number partitions while stratifying on a user-define label column.
- [stratifiedSplitBySequence(proportions:by:on:generator:)](mldatatable/stratifiedsplitbysequence%28proportions_by_on_generator_%29.md): Randomly split a MLDataTable into partitions on a user-define label column, while keeping rows from the same sequence in the original order.
- [stratifiedSplitBySequence(proportions:by:on:seed:)](mldatatable/stratifiedsplitbysequence%28proportions_by_on_seed_%29.md): Randomly split a MLDataTable into partitions on a user-define label column, while keeping rows from the same sequence in the original order.

### Getting information about a data table’s rows

- [MLDataTable.Row](mldatatable/row.md): A row of untyped values in a data table.
- [rows](mldatatable/rows-swift.property.md): The rows of data in the table.
- [MLDataTable.Rows](mldatatable/rows-swift.struct.md): A collection of rows in a data table.

### Getting information about a data table’s columns

- [columnNames](mldatatable/columnnames-swift.property.md): The names of the columns in the data table.
- [MLDataTable.ColumnNames](mldatatable/columnnames-swift.struct.md): A collection of the names of the columns in a data table.
- [columnTypes](mldatatable/columntypes.md): The type of the data in each column.

### Saving a data table

- [write(to:)](mldatatable/write%28to_%29.md): Exports a binary file of the data table to the given directory URL.
- [write(toDirectory:)](mldatatable/write%28todirectory_%29.md): Exports a binary file of the data table to the given directory path.
- [writeCSV(to:)](mldatatable/writecsv%28to_%29.md): Exports a CSV file of the data table to the given directory URL.
- [writeCSV(toFile:)](mldatatable/writecsv%28tofile_%29.md): Exports a CSV file of the data table to the given directory path.

### Visualizing a data table

- [show()](mldatatable/show%28%29.md): Deprecated. Generates a visualization for the data in the table.

### Describing a data table

- [description](mldatatable/description.md): A text representation of the data table.
- [playgroundDescription](mldatatable/playgrounddescription.md): A description of the data table shown in a playground.

### Handling data table errors

- [isValid](mldatatable/isvalid.md): A Boolean value that indicates whether the data table is valid.
- [error](mldatatable/error.md): The underlying error present when the data table is invalid.

### Default Implementations

- [CustomPlaygroundDisplayConvertible Implementations](mldatatable/customplaygrounddisplayconvertible-implementations.md)
- [CustomStringConvertible Implementations](mldatatable/customstringconvertible-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomPlaygroundDisplayConvertible](https://developer.apple.com/documentation/swift/customplaygrounddisplayconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)

## See Also

### Tabular data

- [MLDataValue](mldatavalue.md): The value of a cell in a data table.
- [Data visualizations](data-visualizations.md): Render images of data tables and columns in a playground.
