> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mldatacolumn](https://developer.apple.com/documentation/createml/mldatacolumn)

# MLDataColumn

**Framework:** Create ML  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

A column of typed values in a data table.

## Declaration

```swift
struct MLDataColumn<Element> where Element : MLDataValueConvertible
```

<a id="overview"></a>

## Overview

A column is a homogenous collection of data values, similar to an [Array](https://developer.apple.com/documentation/swift/array). Columns are the main components of an [MLDataTable](mldatatable.md) and are designed to efficiently scale with large data sets.

Typically you use [MLDataColumn](mldatacolumn.md), the typed equivalent to [MLUntypedColumn](mluntypedcolumn.md), to work directly with the column’s element type. A data column has extra math and statistics functionality when its element type is [Int](https://developer.apple.com/documentation/swift/int) or [Double](https://developer.apple.com/documentation/swift/double).

## Topics

### Creating a data column

- [init(repeating:count:)](mldatacolumn/init%28repeating_count_%29.md): Creates a new column with a repeating element.
- [init(\_:)](mldatacolumn/init%28__%29.md): Creates a new column from a given sequence of elements.
- [init()](mldatacolumn/init%28%29.md): Constructs an invalid Column.

### Creating a data column by converting another column

- [map(to:)](mldatacolumn/map%28to_%29.md): Conforms when `Element` conforms to `MLDataValueConvertible`. Creates a new column by converting this column to the given type.
- [init(column:)](mldatacolumn/init%28column_%29.md): Conforms when `Element` is `MLDataValue.SequenceType`. Creates a new column of machine learning sequences from a given column whose elements can be converted to sequences.
- [init(column:)](mldatacolumn/init%28column_%29-5rg9u.md): Conforms when `Element` is `Int`. Creates a new column of integers from a given column whose elements can be converted to integers.
- [init(column:)](mldatacolumn/init%28column_%29-2rxtu.md): Conforms when `Element` is `[Int]`. Creates a new column of arrays of integers from a given column whose elements can be converted to an array of integers.
- [init(column:)](mldatacolumn/init%28column_%29-86ge9.md): Conforms when `Element` is `Double`. Creates a new column of doubles from a given column whose elements can be converted to doubles.
- [init(column:)](mldatacolumn/init%28column_%29-23pmx.md): Conforms when `Element` is `[Double]`. Creates a new column of arrays of doubles from a given column whose elements can be converted to an array of doubles.
- [init(column:)](mldatacolumn/init%28column_%29-ztkv.md): Conforms when `Element` is `String`. Creates a new column of strings from a given column whose elements can be converted to strings.
- [init(column:)](mldatacolumn/init%28column_%29-8uzuq.md): Conforms when `Element` is `[String]`. Creates a new column of arrays of strings from a given column whose elements can be converted to an array of strings.
- [init(column:)](mldatacolumn/init%28column_%29-855l9.md): Conforms when `Element` is `MLDataValue.SequenceType`. Creates a new column of machine learning sequences from a given column whose elements can be converted to sequences.
- [init(column:)](mldatacolumn/init%28column_%29-s8g5.md): Conforms when `Element` is `MLDataValue.DictionaryType`. Creates a new column of machine learning dictionaries from a given column whose elements can be converted to dictionaries.

### Getting the number of elements

- [count](mldatacolumn/count.md): The number of elements in the column.
- [isEmpty](mldatacolumn/isempty.md)

### Getting an element

- [subscript(\_:)](mldatacolumn/subscript%28__%29.md): Conforms when `Element` conforms to `MLDataValueConvertible`. Accesses the element at the given row.
- [element(at:)](mldatacolumn/element%28at_%29.md): Conforms when `Element` conforms to `MLDataValueConvertible`. Accesses the element at the given index.

### Appending to a data column

- [append(contentsOf:)](mldatacolumn/append%28contentsof_%29.md): Appends the elements of the given column to the end of this column.

### Duplicating a column

- [copy()](mldatacolumn/copy%28%29.md): Conforms when `Element` conforms to `MLDataValueConvertible`. Returns a new MLDataColumn by copying the original MLDataColumn

### Sorting elements to generate a column

- [sort(byIncreasingOrder:)](mldatacolumn/sort%28byincreasingorder_%29.md): Conforms when `Element` conforms to `MLDataValueConvertible`. Returns a new MLDataColumn containing values sorted by the specified order.

### Transforming elements to generate a column

- [map(\_:)](mldatacolumn/map%28__%29.md): Conforms when `Element` conforms to `MLDataValueConvertible`. Creates a new column by applying the given thread-safe transform to every non-missing element of this column.
- [mapMissing(\_:)](mldatacolumn/mapmissing%28__%29.md): Conforms when `Element` conforms to `MLDataValueConvertible`. Creates a new column, potentially with missing elements, by applying the given thread-safe transform to every element of the column, including missing elements.

### Masking elements to generate a column

- [subscript(\_:)](mldatacolumn/subscript%28__%29-78irf.md): Conforms when `Element` conforms to `MLDataValueConvertible`. Creates a subset of the column by masking its elements with a column of Booleans.
- [subscript(\_:)](mldatacolumn/subscript%28__%29-1n3x.md): Conforms when `Element` conforms to `MLDataValueConvertible`. Returns a `MLDataColumn` containing only the elements for which the corresponding mask has a nonzero or non-default value.

### Discarding elements to generate a column

- [dropMissing()](mldatacolumn/dropmissing%28%29.md): Conforms when `Element` conforms to `MLDataValueConvertible`. Creates a subset of the column by removing all elements without a value.
- [dropDuplicates()](mldatacolumn/dropduplicates%28%29.md): Conforms when `Element` conforms to `MLDataValueConvertible`. Creates a subset of the column by removing all duplicate elements.

### Selecting elements to generate a column

- [subscript(\_:)](mldatacolumn/subscript%28__%29-pp34.md): Conforms when `Element` conforms to `MLDataValueConvertible`. Creates a subset of the column, given a range of elements.
- [subscript(\_:)](mldatacolumn/subscript%28__%29-5mczv.md): Conforms when `Element` conforms to `MLDataValueConvertible`. Creates a subset of the column, given a range expression of elements.
- [prefix(\_:)](mldatacolumn/prefix%28__%29.md): Conforms when `Element` conforms to `MLDataValueConvertible`. Creates a subset of the column, given a number of initial elements.
- [suffix(\_:)](mldatacolumn/suffix%28__%29.md): Conforms when `Element` conforms to `MLDataValueConvertible`. Creates a subset of the column, given a number of final elements.

### Filling in missing elements to generate a column

- [fillMissing(with:)](mldatacolumn/fillmissing%28with_%29.md): Conforms when `Element` conforms to `MLDataValueConvertible`. Creates a modified copy of the column such that every missing element is replaced with the given value.

### Evaluating elements to generate a column

- [materialize()](mldatacolumn/materialize%28%29.md): Conforms when `Element` conforms to `MLDataValueConvertible`. Creates a new column by immediately evaluating any lazily applied data processing operations stored in the column.

### Combining columns

- [+(\_:\_:)](mldatacolumn/+%28____%29.md): Conforms when `Element` is `Double`. Creates a column of doubles by adding the given double to each element of the given column.
- [-(\_:\_:)](mldatacolumn/-%28____%29.md): Conforms when `Element` is `Double`. Creates a column of doubles by subtracting each element of the given column from the given double.
- [\*(\_:\_:)](mldatacolumn/_%28____%29.md): Conforms when `Element` is `Double`. Creates a column of doubles by multiplying the given double by each element of the given column.
- [/(\_:\_:)](mldatacolumn/_%28____%29-8hxiv.md): Conforms when `Element` is `Double`. Creates a column of doubles by dividing the given double by each element of the given column.

### Combining columns to generate a column

- [+(\_:\_:)](mldatacolumn/+%28____%29-24g38.md): Conforms when `Element` is `Int`. Creates a column of integers by adding each element in the first column to the corresponding element in the second column.
- [+(\_:\_:)](mldatacolumn/+%28____%29-q5bb.md): Conforms when `Element` is `Double`. Creates a column of doubles by adding each element in the first column to the corresponding element in the second column.
- [-(\_:\_:)](mldatacolumn/-%28____%29-11hbf.md): Conforms when `Element` is `Int`. Creates a column of integers by subtracting each element in the second column from the corresponding element in the first column.
- [-(\_:\_:)](mldatacolumn/-%28____%29-3mwsr.md): Conforms when `Element` is `Double`. Creates a column of doubles by subtracting each element in the second column from the corresponding element in the first column.
- [\*(\_:\_:)](mldatacolumn/_%28____%29-40smy.md): Conforms when `Element` is `Int`. Creates a column of integers by multiplying each element in the first column by the corresponding element in the second column.
- [\*(\_:\_:)](mldatacolumn/_%28____%29-lchb.md): Conforms when `Element` is `Double`. Creates a column of doubles by multiplying each element in the first column by the corresponding element in the second column.
- [/(\_:\_:)](mldatacolumn/_%28____%29-5uxby.md): Conforms when `Element` is `Int`. Creates a column of integers by dividing each element in the first column by the corresponding element in the second column.
- [/(\_:\_:)](mldatacolumn/_%28____%29-69vgc.md): Conforms when `Element` is `Double`. Creates a column of doubles by dividing each element in the first column by the corresponding element in the second column.

### Combining a column with a value to generate a column

- [+(\_:\_:)](mldatacolumn/+%28____%29-7tghu.md): Conforms when `Element` is `Int`. Creates a column of integers by adding each element of the given column to the given integer.
- [+(\_:\_:)](mldatacolumn/+%28____%29-4se2l.md): Conforms when `Element` is `Double`. Creates a column of doubles by adding each element of the given column to the given double.
- [-(\_:\_:)](mldatacolumn/-%28____%29-2sddu.md): Conforms when `Element` is `Int`. Creates a column of integers by subtracting the given integer from each element of the given column.
- [-(\_:\_:)](mldatacolumn/-%28____%29-9smok.md): Conforms when `Element` is `Double`. Creates a column of doubles by subtracting the given double from each element of the given column.
- [\*(\_:\_:)](mldatacolumn/_%28____%29-2zih0.md): Conforms when `Element` is `Int`. Creates a column of integers by multiplying each element of the given column by the given integer.
- [\*(\_:\_:)](mldatacolumn/_%28____%29-4ilhj.md): Conforms when `Element` is `Double`. Creates a column of doubles by multiplying each element of the given column by the given double.
- [/(\_:\_:)](mldatacolumn/_%28____%29-3ea6t.md): Conforms when `Element` is `Int`. Creates a column of integers by dividing each element of the given column by the given integer.
- [/(\_:\_:)](mldatacolumn/_%28____%29-8k8ao.md): Conforms when `Element` is `Double`. Creates a column of doubles by dividing each element of the given column by the given double.

### Combining a value with a column to generate a column

- [+(\_:\_:)](mldatacolumn/+%28____%29-2zcp.md): Conforms when `Element` is `Int`. Creates a column of integers by adding the given integer to each element of the given column.
- [+(\_:\_:)](mldatacolumn/+%28____%29-9r67n.md): Conforms when `Element` is `Double`. Creates a column of doubles by adding the given double to each element of the given column.
- [-(\_:\_:)](mldatacolumn/-%28____%29-507l8.md): Conforms when `Element` is `Int`. Creates a column of integers by subtracting each element of the given column from the given integer.
- [-(\_:\_:)](mldatacolumn/-%28____%29-2e7k4.md): Conforms when `Element` is `Double`. Creates a column of doubles by subtracting each element of the given column from the given double.
- [\*(\_:\_:)](mldatacolumn/_%28____%29-48xte.md): Conforms when `Element` is `Int`. Creates a column of integers by multiplying the given integer by each element of the given column.
- [\*(\_:\_:)](mldatacolumn/_%28____%29-9sysp.md): Conforms when `Element` is `Double`. Creates a column of doubles by multiplying the given double by each element of the given column.
- [/(\_:\_:)](mldatacolumn/_%28____%29-9ew9w.md): Conforms when `Element` is `Int`. Creates a column of integers by dividing the given integer by each element of the given column.
- [/(\_:\_:)](mldatacolumn/_%28____%29-121w8.md): Conforms when `Element` is `Double`. Creates a column of doubles by dividing the given double by each element of the given column.

### Comparing columns

- [==(\_:\_:)](mldatacolumn/==%28____%29.md): Conforms when `Element` conforms to `MLDataValueConvertible`. Creates a column of Booleans by testing whether the given value is equal to each element in the given column.
- [!=(\_:\_:)](mldatacolumn/!=%28____%29.md): Conforms when `Element` conforms to `MLDataValueConvertible`. Creates a column of Booleans by testing whether the given value is not equal to each element in the given column.
- [\<(\_:\_:)](mldatacolumn/_%28____%29-81qel.md): Conforms when `Element` conforms to `MLDataValueConvertible`. Creates a column of Booleans by testing whether the given value is less than each element in the given column.
- [\<=(\_:\_:)](mldatacolumn/_=%28____%29-8eq6v.md): Conforms when `Element` conforms to `MLDataValueConvertible`. Creates a column of Booleans by testing whether the given value is less than or equal to each element in the given column.
- [\>(\_:\_:)](mldatacolumn/_%28____%29-g252.md): Conforms when `Element` conforms to `MLDataValueConvertible`. Creates a column of Booleans by testing whether the given value is greater than each element in the given column.
- [\>=(\_:\_:)](mldatacolumn/_=%28____%29-64izf.md): Conforms when `Element` conforms to `MLDataValueConvertible`. Creates a column of Booleans by testing whether the given value is greater than or equal to each element in the given column.

### Comparing columns to generate a column of booleans

- [==(\_:\_:)](mldatacolumn/==%28____%29-9e3tx.md): Conforms when `Element` conforms to `MLDataValueConvertible`. Creates a column of Booleans by testing whether each element in the first column is equal to the corresponding element in the second column.
- [!=(\_:\_:)](mldatacolumn/!=%28____%29-1vu4e.md): Conforms when `Element` conforms to `MLDataValueConvertible`. Creates a column of Booleans by testing whether each element in the first column is not equal to the corresponding element in the second column.
- [\<(\_:\_:)](mldatacolumn/_%28____%29-3om6w.md): Conforms when `Element` conforms to `MLDataValueConvertible`. Creates a column of Booleans by testing whether each element in the first column is less than the corresponding element in the second column.
- [\<=(\_:\_:)](mldatacolumn/_=%28____%29-6s5v1.md): Conforms when `Element` conforms to `MLDataValueConvertible`. Creates a column of Booleans by testing whether each element in the first column is less than or equal to the corresponding element in the second column.
- [\>(\_:\_:)](mldatacolumn/_%28____%29-2dym4.md): Conforms when `Element` conforms to `MLDataValueConvertible`. Creates a column of Booleans by testing whether each element in the first column is greater than the corresponding element in the second column.
- [\>=(\_:\_:)](mldatacolumn/_=%28____%29-4w60p.md): Conforms when `Element` conforms to `MLDataValueConvertible`. Creates a column of Booleans by testing whether each element in the first column is greater than or equal to the corresponding element in the second column.

### Comparing a column with a value to generate a column of booleans

- [==(\_:\_:)](mldatacolumn/==%28____%29-7clbs.md): Conforms when `Element` conforms to `MLDataValueConvertible`. Creates a column of Booleans by testing whether each element in the given column is equal to the given value.
- [!=(\_:\_:)](mldatacolumn/!=%28____%29-4jp0y.md): Conforms when `Element` conforms to `MLDataValueConvertible`. Creates a column of Booleans by testing whether each element in the given column is not equal to the given value.
- [\<(\_:\_:)](mldatacolumn/_%28____%29-4ujss.md): Conforms when `Element` conforms to `MLDataValueConvertible`. Creates a column of Booleans by testing whether each element in the given column is less than the given value.
- [\<=(\_:\_:)](mldatacolumn/_=%28____%29-86x3a.md): Conforms when `Element` conforms to `MLDataValueConvertible`. Creates a column of Booleans by testing whether each element in the given column is less than or equal to the given value.
- [\>(\_:\_:)](mldatacolumn/_%28____%29-ebgq.md): Conforms when `Element` conforms to `MLDataValueConvertible`. Creates a column of Booleans by testing whether each element in the given column is greater than the given value.
- [\>=(\_:\_:)](mldatacolumn/_=%28____%29-1ctuz.md): Conforms when `Element` conforms to `MLDataValueConvertible`. Creates a column of Booleans by testing whether each element in the given column is greater than or equal to the given value.

### Comparing a value with a column to generate a column of booleans

- [==(\_:\_:)](mldatacolumn/==%28____%29-6zz2o.md): Conforms when `Element` conforms to `MLDataValueConvertible`. Creates a column of Booleans by testing whether the given value is equal to each element in the given column.
- [!=(\_:\_:)](mldatacolumn/!=%28____%29-4477j.md): Conforms when `Element` conforms to `MLDataValueConvertible`. Creates a column of Booleans by testing whether the given value is not equal to each element in the given column.
- [\<(\_:\_:)](mldatacolumn/_%28____%29-33lwa.md): Conforms when `Element` conforms to `MLDataValueConvertible`. Creates a column of Booleans by testing whether the given value is less than each element in the given column.
- [\<=(\_:\_:)](mldatacolumn/_=%28____%29-3fx6w.md): Conforms when `Element` conforms to `MLDataValueConvertible`. Creates a column of Booleans by testing whether the given value is less than or equal to each element in the given column.
- [\>(\_:\_:)](mldatacolumn/_%28____%29-6irjn.md): Conforms when `Element` conforms to `MLDataValueConvertible`. Creates a column of Booleans by testing whether the given value is greater than each element in the given column.
- [\>=(\_:\_:)](mldatacolumn/_=%28____%29-8e3ur.md): Conforms when `Element` conforms to `MLDataValueConvertible`. Creates a column of Booleans by testing whether the given value is greater than or equal to each element in the given column.

### Combining columns of booleans to generate a column of booleans

- [&&(\_:\_:)](mldatacolumn/&&%28____%29.md): Conforms when `Element` is `Bool`. Creates a column of Booleans by performing a logical AND operation on each element in the first column with the corresponding element in the second column.
- [||(\_:\_:)](mldatacolumn/__%28____%29.md): Conforms when `Element` is `Bool`. Creates a column of Booleans by performing a logical OR operation on each element in the first column with the corresponding element in the second column.

### Getting the min and max element values

- [min()](mldatacolumn/min%28%29.md): Conforms when `Element` is `Double`. Returns the element with the lowest value in a column of doubles.
- [max()](mldatacolumn/max%28%29.md): Conforms when `Element` is `Double`. Returns the element with the highest value in a column of doubles.

### Getting sum, mean, and standard deviation values

- [sum()](mldatacolumn/sum%28%29.md): Conforms when `Element` is `Double`. Returns the sum of the elements in a column of doubles.
- [mean()](mldatacolumn/mean%28%29.md): Conforms when `Element` is `Double`. Returns the arithmetic mean of the elements in a column of doubles.
- [std()](mldatacolumn/std%28%29.md): Deprecated. Conforms when `Element` is `Double`. Returns the standard deviation of the elements in a column of doubles.
- [stdev()](mldatacolumn/stdev%28%29.md): Conforms when `Element` is `Double`. Returns the standard deviation of the elements in a column of doubles.

### Visualizing a column

- [show()](mldatacolumn/show%28%29.md): Deprecated. Conforms when `Element` conforms to `MLDataValueConvertible`. Provides a visualization for the data in the column.

### Getting a description of a data column

- [description](mldatacolumn/description.md): Conforms when `Element` conforms to `MLDataValueConvertible`. A text representation of the column.
- [playgroundDescription](mldatacolumn/playgrounddescription.md): Conforms when `Element` conforms to `MLDataValueConvertible`. A description of the column shown in a playground.
- [debugDescription](mldatacolumn/debugdescription.md): Conforms when `Element` conforms to `MLDataValueConvertible`. A text representation of the column for debugging.

### Handling data column errors

- [isValid](mldatacolumn/isvalid.md): A Boolean value that indicates whether the column is valid.
- [error](mldatacolumn/error.md): The underlying error present when the column is invalid.

### Supporting types

- [MLUntypedColumn](mluntypedcolumn.md): A column of untyped values in a data table.

### Default Implementations

- [CustomDebugStringConvertible Implementations](mldatacolumn/customdebugstringconvertible-implementations.md)
- [CustomPlaygroundDisplayConvertible Implementations](mldatacolumn/customplaygrounddisplayconvertible-implementations.md)
- [CustomStringConvertible Implementations](mldatacolumn/customstringconvertible-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomPlaygroundDisplayConvertible](https://developer.apple.com/documentation/swift/customplaygrounddisplayconvertible)
- [CustomReflectable](https://developer.apple.com/documentation/swift/customreflectable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)

## See Also

### Adding columns

- [addColumn(\_:named:)](mldatatable/addcolumn%28__named_%29.md): Adds an untyped column to the table.
- [MLUntypedColumn](mluntypedcolumn.md): A column of untyped values in a data table.
