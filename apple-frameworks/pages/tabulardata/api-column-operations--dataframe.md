> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/api-column-operations--dataframe](https://developer.apple.com/documentation/tabulardata/api-column-operations--dataframe)

# Column Operations

**Framework:** TabularData  
**Kind:** API Collection

Add, modify, and remove columns within a data frame.

<a id="overview"></a>

## Overview

Use these methods to interact with a data frame’s elements by column.

## Topics

### Renaming a Column

- [renameColumn(\_:to:)](dataframe/renamecolumn%28__to_%29.md): Renames a column in the data frame.

### Aliasing a Column Name

- [addAlias(\_:forColumn:)](dataframe/addalias%28__forcolumn_%29.md): Adds an alternative name for a column.
- [columnNames(forAlias:)](dataframe/columnnames%28foralias_%29.md): Returns the column names for an alias.
- [removeAlias(\_:)](dataframe/removealias%28__%29.md): Removes an alternative name for a column.

### Adding a Column

- [append(column:)](dataframe/append%28column_%29-45s2v.md): Adds a type-erased column to the end of the data frame.
- [append(column:)](dataframe/append%28column_%29-aema.md): Adds a typed column to the end of the data frame.
- [insert(column:at:)](dataframe/insert%28column_at_%29-784jb.md): Adds a type-erased column at a position in the data frame.
- [insert(column:at:)](dataframe/insert%28column_at_%29-5g6i9.md): Adds a typed column at a position in the data frame.

### Retreiving a Column Index

- [indexOfColumn(\_:)](dataframe/indexofcolumn%28__%29.md): Returns the index of a column.

### Accessing a Column

- [subscript(\_:)](dataframe/subscript%28__%29-738lb.md): Accesses a column by its name.
- [subscript(\_:\_:)](dataframe/subscript%28____%29-5walz.md): Accesses a column by its name and type.
- [subscript(\_:)](dataframe/subscript%28__%29-6mv5i.md): Accesses a column by its column identifier.
- [subscript(column:)](dataframe/subscript%28column_%29.md): Accesses a column by its index.
- [subscript(column:\_:)](dataframe/subscript%28column___%29.md): Accesses a column by its index and type.
- [subscript(dynamicMember:)](dataframe/subscript%28dynamicmember_%29.md): Accesses a column by its name to support dynamic-member lookup.

### Accessing a Column as an Array

- [subscript(\_:\_:)](dataframe/subscript%28____%29-6oqm0.md): Accesses a column as an array by its name.

### Replacing a Column

- [replaceColumn(\_:with:)](dataframe/replacecolumn%28__with_%29-2b3u3.md): Replaces a column in the data frame, by name, with a type-erased column.
- [replaceColumn(\_:with:)](dataframe/replacecolumn%28__with_%29-4yub5.md): Replaces a column in the data frame, by name, with a typed column.
- [replaceColumn(\_:with:)](dataframe/replacecolumn%28__with_%29-9sn9i.md): Replaces a column in the data frame, by column identifier, with a type-erased column.
- [replaceColumn(\_:with:)](dataframe/replacecolumn%28__with_%29-oa9g.md): Replaces a column in the data frame, by column identifier, with a typed column.

### Removing a Column

- [removeColumn(\_:)](dataframe/removecolumn%28__%29-5zu7l.md): Removes a column you select by its name from the data frame.
- [removeColumn(\_:)](dataframe/removecolumn%28__%29-qtea.md): Removes a column you select by its column identifier from the data frame.

### Transforming a Column

- [transformColumn(\_:\_:)](dataframe/transformcolumn%28____%29-2avtt.md): Applies a transform closure that modifies the nonempty elements of a column you select by column identifier.
- [transformColumn(\_:\_:)](dataframe/transformcolumn%28____%29-5s9en.md): Applies a transform closure that modifies the elements of a column you select by column identifier.
- [transformColumn(\_:\_:)](dataframe/transformcolumn%28____%29-3czz0.md): Applies a transform closure that modifies the elements of a column you select by name.
- [transformColumn(\_:\_:)](dataframe/transformcolumn%28____%29-6cxpn.md): Applies a transform closure that modifies the nonempty elements of a column you select by name.

### Merging Columns

- [combineColumns(\_:\_:into:transform:)](dataframe/combinecolumns%28____into_transform_%29-48ypf.md): Merges two columns that you select by name into a new column.
- [combineColumns(\_:\_:into:transform:)](dataframe/combinecolumns%28____into_transform_%29-85gix.md): Merges two columns that you select by column identifier into a new column.
- [combineColumns(\_:\_:\_:into:transform:)](dataframe/combinecolumns%28______into_transform_%29-4vyjn.md): Merges three columns that you select by name into a new column.
- [combineColumns(\_:\_:\_:into:transform:)](dataframe/combinecolumns%28______into_transform_%29-48g26.md): Merges three columns that you select by column identifier into a new column.

### Expanding a Column

- [explodeColumn(\_:\_:)](dataframe/explodecolumn%28____%29.md): Replaces each row in a collection column that you select by name, with a new row for each element in the original row’s collection.
- [explodeColumn(\_:)](dataframe/explodecolumn%28__%29.md): Replaces each row in a collection column that you select by column identifier, with a new row for each element in the original row’s collection.
- [explodingColumn(\_:\_:)](dataframe/explodingcolumn%28____%29.md): Generates a data frame by replacing each row in a collection column that you select by name, with a new row for each element in the original row’s collection.
- [explodingColumn(\_:)](dataframe/explodingcolumn%28__%29.md): Generates a data frame by replacing each row in a collection column that you select by column identifier, with a new row for each element in the original row’s collection.

### Encoding a Column

- [encodeColumn(\_:\_:using:)](dataframe/encodecolumn%28____using_%29.md): Encodes the elements of a column you select by name.
- [encodeColumn(\_:using:)](dataframe/encodecolumn%28__using_%29.md): Encodes the elements of a column you select by column identifier.

### Decoding a Column

- [decode(\_:inColumn:using:)](dataframe/decode%28__incolumn_using_%29-443a9.md): Decodes the elements of a column you select by name.
- [decode(\_:inColumn:using:)](dataframe/decode%28__incolumn_using_%29-2brfw.md): Decodes the elements of a column you select by column identifier.
