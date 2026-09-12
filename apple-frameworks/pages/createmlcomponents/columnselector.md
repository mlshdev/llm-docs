> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/columnselector](https://developer.apple.com/documentation/createmlcomponents/columnselector)

# ColumnSelector

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

An operation that applies an estimator to a selection of columns.

## Declaration

```swift
struct ColumnSelector<Estimator, UnwrappedInput> where Estimator : Estimator, Estimator.Transformer.Input == UnwrappedInput?
```

<a id="overview"></a>

## Overview

This estimator applies a non-tabular estimator to a selection of columns. Here’s an example of normalizing numeric values within each column using a [StandardScaler](standardscaler.md):

```
let numericalScaling = ColumnSelector(
    columns: ["volume", "price"],
    estimator: NumericImputer<Float>(.mean)
        .appending(StandardScaler<Float>())
)
```

In most cases, an inputer must handle missing values.

## Topics

### Creating the selection

- [init(columns:estimator:)](columnselector/init%28columns_estimator_%29.md): Creates a select operation with an estimator.
- [init(\_:estimator:)](columnselector/init%28__estimator_%29.md): Creates a select operation with an estimator.
- [init(\_:transformer:)](columnselector/init%28__transformer_%29.md): Creates a select operation with a transformer.

### Getting the properties

- [columnSelection](columnselector/columnselection.md): The column selection strategy.
- [estimator](columnselector/estimator.md): The estimator to use on each column.

### Encoding and decoding

- [encode(\_:to:)](columnselector/encode%28__to_%29.md): Encodes a fitted transformer.
- [decode(from:)](columnselector/decode%28from_%29.md): Decodes a previously fitted transformer.

### Fitting a transformer

- [fitted(to:eventHandler:)](columnselector/fitted%28to_eventhandler_%29.md): Fits a transformer to a data frame
- [ColumnSelector.Input](columnselector/input.md)
- [ColumnSelector.Output](columnselector/output.md)
- [Transformer](transformer.md): A transformer that takes an input and produces an output.

### Default Implementations

- [UpdatableTabularEstimator Implementations](columnselector/updatabletabularestimator-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [TabularEstimator](tabularestimator.md)
- [UpdatableTabularEstimator](updatabletabularestimator.md)

## See Also

### Tabular components

- [TabularTransformer](tabulartransformer.md): A tabular transformer that transforms a data frame.
- [TabularEstimator](tabularestimator.md): A tabular estimator that creates a transformer by fitting to a data set in a data frame.
- [SupervisedTabularEstimator](supervisedtabularestimator.md): A tabular estimator that creates a transformer by fitting to a data set in a data frame.
- [ColumnSelectorTransformer](columnselectortransformer.md): A transformer that applies a base transformer to specific columns in a data frame.
- [ColumnSelection](columnselection.md): A selection of columns from a data frame.
- [ColumnConcatenator](columnconcatenator.md): A transformer that concatenates every numerical column in a dataframe into to a shaped array for each row.
- [PreprocessingSupervisedTabularEstimator](preprocessingsupervisedtabularestimator.md): A supervised tabular estimator that composes a preprocessing transformer and a supervised tabular estimator.
- [PreprocessingTabularEstimator](preprocessingtabularestimator.md): An estimator that composes a preprocessing transformer and an estimator.
- [PreprocessingUpdatableSupervisedTabularEstimator](preprocessingupdatablesupervisedtabularestimator.md): An updatable supervised estimator that composes a preprocessing transformer and an updatable supervised estimator.
- [PreprocessingUpdatableTabularEstimator](preprocessingupdatabletabularestimator.md): An updatable estimator that composes a preprocessing transformer and an updatable estimator.
