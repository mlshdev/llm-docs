> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/columnconcatenator](https://developer.apple.com/documentation/createmlcomponents/columnconcatenator)

# ColumnConcatenator

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

A transformer that concatenates every numerical column in a dataframe into to a shaped array for each row.

## Declaration

```swift
struct ColumnConcatenator<Scalar> where Scalar : MLShapedArrayScalar, Scalar : BinaryFloatingPoint
```

<a id="overview"></a>

## Overview

The resulting concatenated column contains `MLShapedArray<Scalar>` elements. For example

```
┏━━━┳━━━━━━━━━━┳━━━━━━━━━┳━━━━━━━┳━━━━━━━┳━━━━━━━┳━━━━━━━┓
┃   ┃ label    ┃ price   ┃ rooms ┃ A     ┃ B     ┃ C     ┃
┃   ┃ <String> ┃ <Int>   ┃ <Int> ┃ <Int> ┃ <Int> ┃ <Int> ┃
┡━━━╇━━━━━━━━━━╇━━━━━━━━━╇━━━━━━━╇━━━━━━━╇━━━━━━━╇━━━━━━━┩
│ 0 │ good     │ 850,000 │     4 │     1 │     0 │     0 │
│ 1 │ bad      │ 700,000 │     3 │     0 │     1 │     0 │
│ 2 │ bad      │ 650,000 │     3 │     0 │     0 │     1 │
│ 3 │ good     │ 600,000 │     2 │     0 │     1 │     0 │
└───┴──────────┴─────────┴───────┴───────┴───────┴───────┘
```

would be concatenated as:

```
┏━━━┳━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━━━┓
┃   ┃ label    ┃ features               ┃
┃   ┃ <String> ┃ <MLShapedArray<Float>> ┃
┡━━━╇━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━━━┩
│ 0 │ good     │ [850,000, 4, 1, 0, 0]  │
│ 1 │ bad      │ [700,000, 3, 0, 1, 0]  │
│ 2 │ bad      │ [650,000, 3, 0, 0, 1]  │
│ 3 │ good     │ [600,000, 2, 0, 1, 0]  │
└───┴──────────┴────────────────────────┘
```

Non-numerical columns are left in the data frame unchanged. Supported numeric types are `Int`, `UInt8`, `Float`, and `Double`. Arrays and shaped arrays of those types as supported, but every array in a given column must have the same shape and shaped arrays across columns must have the same shape except for the last dimension.

## Topics

### Creating the concatenator

- [init(columnSelection:concatenatedColumnName:)](columnconcatenator/init%28columnselection_concatenatedcolumnname_%29.md): Creates a concatenator that concatenates numeric columns into a new column of ML shaped array.

### Getting the properties

- [columnSelection](columnconcatenator/columnselection.md): The selection of columns to concatenate.
- [concatenatedColumnName](columnconcatenator/concatenatedcolumnname.md): The name of the concatenated column containing the shaped arrays.

### Applying

- [applied(to:eventHandler:)](columnconcatenator/applied%28to_eventhandler_%29.md): Combines every numerical column in a data frame into to a shaped array for each row.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [TabularTransformer](tabulartransformer.md)
- [Transformer](transformer.md)

## See Also

### Tabular components

- [TabularTransformer](tabulartransformer.md): A tabular transformer that transforms a data frame.
- [TabularEstimator](tabularestimator.md): A tabular estimator that creates a transformer by fitting to a data set in a data frame.
- [SupervisedTabularEstimator](supervisedtabularestimator.md): A tabular estimator that creates a transformer by fitting to a data set in a data frame.
- [ColumnSelector](columnselector.md): An operation that applies an estimator to a selection of columns.
- [ColumnSelectorTransformer](columnselectortransformer.md): A transformer that applies a base transformer to specific columns in a data frame.
- [ColumnSelection](columnselection.md): A selection of columns from a data frame.
- [PreprocessingSupervisedTabularEstimator](preprocessingsupervisedtabularestimator.md): A supervised tabular estimator that composes a preprocessing transformer and a supervised tabular estimator.
- [PreprocessingTabularEstimator](preprocessingtabularestimator.md): An estimator that composes a preprocessing transformer and an estimator.
- [PreprocessingUpdatableSupervisedTabularEstimator](preprocessingupdatablesupervisedtabularestimator.md): An updatable supervised estimator that composes a preprocessing transformer and an updatable supervised estimator.
- [PreprocessingUpdatableTabularEstimator](preprocessingupdatabletabularestimator.md): An updatable estimator that composes a preprocessing transformer and an updatable estimator.
