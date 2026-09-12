> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/data-table-derivation-operations](https://developer.apple.com/documentation/createml/data-table-derivation-operations)

# Data table derivation operations

**Framework:** Create ML  
**Kind:** API Collection

Create new data tables by manipulating an existing data table.

<a id="Overview"></a>

## Overview

Use these methods to preprocess your data programmatically in Create ML before training a model. For example, you can create a data table by merging two data tables, fill in missing values, and then discarding duplicate rows.

All of these methods create new data tables, leaving the original data table unmodified.

## Topics

### Aggregating rows

- [group(columnsNamed:aggregators:)](mldatatable/group%28columnsnamed_aggregators_%29.md): Creates a new data table with the given columns and adds a new column for each of the given aggregators.
- [MLDataTable.Aggregator](mldatatable/aggregator.md): A collection of column operations you can use with a data table’s `group` method.

### Sorting rows

- [sort(columnNamed:byIncreasingOrder:)](mldatatable/sort%28columnnamed_byincreasingorder_%29.md): Creates a new data table by sorting the table by the given column.

### Splitting a data table

- [randomSplit(by:seed:)](mldatatable/randomsplit%28by_seed_%29.md): Creates two mutually exclusive, randomly divided subsets of the table.

### Merging data tables

- [join(with:on:type:)](mldatatable/join%28with_on_type_%29.md): Creates a new data table by merging two data tables by the given columns.
- [MLDataTable.JoinType](mldatatable/jointype.md): Join types available for [MLDataTable](mldatatable.md) join operations.

### Filling in missing values

- [fillMissing(columnNamed:with:)](mldatatable/fillmissing%28columnnamed_with_%29.md): Creates a modified copy of the table by filling in the missing values in the named column.

### Masking rows

- [subscript(\_:)](mldatatable/subscript%28__%29-3opgl.md): Creates a subset of the table by masking the rows with the given column of Booleans.
- [subscript(\_:)](mldatatable/subscript%28__%29-10r4l.md): Creates a subset of the table by masking the rows with the given untyped column.

### Discarding rows

- [dropMissing()](mldatatable/dropmissing%28%29.md): Creates a subset of the table by removing any row missing one or more values.
- [dropDuplicates()](mldatatable/dropduplicates%28%29.md): Creates a subset of the table by removing all duplicate rows.
- [exclude(\_:of:)](mldatatable/exclude%28__of_%29.md): Creates a subset of the table by excluding the rows that contain any of the given values in the given column.
- [randomSample(by:seed:)](mldatatable/randomsample%28by_seed_%29.md): Creates a subset of the table by randomly selecting the given proportion of rows.

### Selecting rows

- [subscript(\_:)](mldatatable/subscript%28__%29-7h4j3.md): Creates a subset of the table given a range of rows.
- [subscript(\_:)](mldatatable/subscript%28__%29-5le8a.md): Creates a subset of the table given a range expression of rows.
- [prefix(\_:)](mldatatable/prefix%28__%29.md): Creates a subset of the table given a number of initial rows.
- [suffix(\_:)](mldatatable/suffix%28__%29.md): Creates a subset of the table given a number of final rows.
- [intersect(\_:of:)](mldatatable/intersect%28__of_%29.md): Creates a subset of the table by including the rows that contain any of the given values in the given column.

### Selecting columns

- [subscript(\_:)](mldatatable/subscript%28__%29-2wkan.md): Creates a subset of the table given a sequence of column names.

### Compacting rows

- [condense(columnNamed:to:)](mldatatable/condense%28columnnamed_to_%29.md): Creates a new data table where duplicate row values in the given column are condensed into a new sequence-type column.

### Expanding rows

- [expand(columnNamed:to:)](mldatatable/expand%28columnnamed_to_%29.md): Creates a new data table where duplicate row values in the given column are condensed into a new sequence-type column.

### Compacting columns

- [pack(columnsNamed:to:type:filling:)](mldatatable/pack%28columnsnamed_to_type_filling_%29.md): Creates a new data table with an additional column that contains the combined values of the given columns.
- [MLDataTable.PackType](mldatatable/packtype.md): The storage operations for combining multiple columns into one.

### Expanding columns

- [unpack(columnNamed:valueTypes:indexSubset:keySubset:)](mldatatable/unpack%28columnnamed_valuetypes_indexsubset_keysubset_%29.md): Creates a new data table with additional columns that contain the unpacked collections in the given column.
