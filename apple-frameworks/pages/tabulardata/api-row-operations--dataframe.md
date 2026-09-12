> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/api-row-operations--dataframe](https://developer.apple.com/documentation/tabulardata/api-row-operations--dataframe)

# Row Operations

**Framework:** TabularData  
**Kind:** API Collection

Add, select, and group rows within a data frame.

<a id="overview"></a>

## Overview

Use these methods to interact with a data frame’s elements by row.

## Topics

### Adding a Row

- [appendEmptyRow()](dataframe/appendemptyrow%28%29.md): Adds an empty row to the data frame.
- [append(row:)](dataframe/append%28row_%29-3p6lx.md): Adds a comma-separated, or variadic, list of values as a row to the data frame.
- [append(valuesByColumn:)](dataframe/append%28valuesbycolumn_%29.md): Adds a dictionary’s values as a row to the data frame.

### Adding a Row from a Data Frame

- [append(row:)](dataframe/append%28row_%29-6wvcq.md): Adds a row of values to the data frame.
- [insert(row:at:)](dataframe/insert%28row_at_%29.md): Adds a row of values at a position in the data frame.

### Adding Multiple Rows from a Data Frame

- [append(\_:)](dataframe/append%28__%29-36sor.md): Adds the rows of another data frame.
- [append(rowsOf:)](dataframe/append%28rowsof_%29.md): Adds the rows of another data frame that has the same column names and types.
- [append(\_:)](dataframe/append%28__%29-5l4c5.md): Adds the rows of a slice from a data frame.

### Accessing a Row

- [subscript(row:)](dataframe/subscript%28row_%29.md): Accesses a row by its index.

### Removing a Row

- [removeRow(at:)](dataframe/removerow%28at_%29.md): Removes a row from the data frame.

### Creating a Slice by Selecting Rows

- [prefix(\_:)](dataframe/prefix%28__%29.md): Returns a slice that contains the initial rows up to a maximum length.
- [suffix(\_:)](dataframe/suffix%28__%29.md): Returns a slice that contains the final rows up to a maximum length.
- [subscript(\_:)](dataframe/subscript%28__%29-6tuca.md): Returns a slice of the rows by masking its elements with a Boolean column.

### Creating a Slice by Filtering Rows

- [filter(\_:)](dataframe/filter%28__%29.md): Returns a selection of rows that satisfy a predicate.
- [filter(on:\_:\_:)](dataframe/filter%28on_____%29.md): Returns a selection of rows that satisfy a predicate in the columns you select by name.
- [filter(on:\_:)](dataframe/filter%28on___%29.md): Returns a selection of rows that satisfy a predicate in the columns you select by column identifier.

### Grouping Rows

- [RowGrouping](rowgrouping.md): A collection of row selections that have the same value in a column.
- [grouped(by:)](dataframe/grouped%28by_%29.md): Creates a grouping of rows that the method selects by choosing unique values in a column.
- [RowGroupingProtocol](rowgroupingprotocol.md): A type that represents a collection of row selections that have the same value in a column.

### Supporting Types

- [DataFrame.Row](dataframe/row.md): A single row within a data frame.
- [DataFrame.Slice](dataframe/slice.md): A set of a data frame’s rows you create by using a method from a data frame instance or another data frame slice.
