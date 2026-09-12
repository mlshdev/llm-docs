> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/tabulartransformer](https://developer.apple.com/documentation/createmlcomponents/tabulartransformer)

# TabularTransformer

**Framework:** Create ML Components  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

A tabular transformer that transforms a data frame.

## Declaration

```swift
protocol TabularTransformer : Transformer where Self.Input == DataFrame, Self.Output == DataFrame
```

<a id="overview"></a>

## Overview

Tabular transformers represent operations on data frames. They modify and operate on values on one or more columns.

## Topics

### Appending

- [appending(\_:)](tabulartransformer/appending%28__%29.md): Composes this tabular transformer with another tabular transformer.

### Adapting

- [adaptedAsEstimator()](tabulartransformer/adaptedasestimator%28%29.md): Exposes this tabular transformer as a trivial tabular estimator.
- [adaptedAsUpdatableEstimator()](tabulartransformer/adaptedasupdatableestimator%28%29.md): Exposes this tabular transformer as an updatable tabular estimator.

### Transforming

- [callAsFunction(\_:eventHandler:)](tabulartransformer/callasfunction%28__eventhandler_%29.md): Performs the transformation on a single input.

### Exporting

- [export(to:)](tabulartransformer/export%28to_%29.md): Exports this transformer as a CoreML model.
- [export(to:metadata:)](tabulartransformer/export%28to_metadata_%29.md): Exports this tabular transformer as a CoreML model with userInfo.

## Relationships

### Inherits From

- [Transformer](transformer.md)

### Conforming Types

- [ColumnConcatenator](columnconcatenator.md)
- [ColumnSelectorTransformer](columnselectortransformer.md)
- [ComposedTabularTransformer](composedtabulartransformer.md)
- [TreeClassifierModel](treeclassifiermodel.md)
- [TreeRegressorModel](treeregressormodel.md)

## See Also

### Tabular components

- [TabularEstimator](tabularestimator.md): A tabular estimator that creates a transformer by fitting to a data set in a data frame.
- [SupervisedTabularEstimator](supervisedtabularestimator.md): A tabular estimator that creates a transformer by fitting to a data set in a data frame.
- [ColumnSelector](columnselector.md): An operation that applies an estimator to a selection of columns.
- [ColumnSelectorTransformer](columnselectortransformer.md): A transformer that applies a base transformer to specific columns in a data frame.
- [ColumnSelection](columnselection.md): A selection of columns from a data frame.
- [ColumnConcatenator](columnconcatenator.md): A transformer that concatenates every numerical column in a dataframe into to a shaped array for each row.
- [PreprocessingSupervisedTabularEstimator](preprocessingsupervisedtabularestimator.md): A supervised tabular estimator that composes a preprocessing transformer and a supervised tabular estimator.
- [PreprocessingTabularEstimator](preprocessingtabularestimator.md): An estimator that composes a preprocessing transformer and an estimator.
- [PreprocessingUpdatableSupervisedTabularEstimator](preprocessingupdatablesupervisedtabularestimator.md): An updatable supervised estimator that composes a preprocessing transformer and an updatable supervised estimator.
- [PreprocessingUpdatableTabularEstimator](preprocessingupdatabletabularestimator.md): An updatable estimator that composes a preprocessing transformer and an updatable estimator.
