> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/tabularestimator](https://developer.apple.com/documentation/createmlcomponents/tabularestimator)

# TabularEstimator

**Framework:** Create ML Components  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

A tabular estimator that creates a transformer by fitting to a data set in a data frame.

## Declaration

```swift
protocol TabularEstimator<Transformer>
```

## Topics

### Reading and writing

- [read(from:)](tabularestimator/read%28from_%29.md): Reads the encoded transformer from a file.
- [write(\_:to:overwrite:)](tabularestimator/write%28__to_overwrite_%29.md): Writes the encoded transformer to a file.
- [Transformer](tabularestimator/transformer.md): The transformer type created by this estimator.

### Appending

- [appending(\_:)](tabularestimator/appending%28__%29.md): Composes this tabular estimator with a supervised tabular estimator.

### Adapting and fitting

- [adaptedAsSupervised(annotationColumnID:)](tabularestimator/adaptedassupervised%28annotationcolumnid_%29.md): Exposes this tabular estimator as a supervised tabular estimator.
- [fitted(to:eventHandler:)](tabularestimator/fitted%28to_eventhandler_%29.md): Fits a transformer to a data frame
- [fitted(to:)](tabularestimator/fitted%28to_%29.md)

### Encoding and decoding

- [encode(\_:to:)](tabularestimator/encode%28__to_%29.md): Encodes a fitted transformer.
- [decode(from:)](tabularestimator/decode%28from_%29.md): Decodes a previously fitted transformer.

## Relationships

### Inherited By

- [UpdatableTabularEstimator](updatabletabularestimator.md)

### Conforming Types

- [ColumnSelector](columnselector.md)
- [PreprocessingTabularEstimator](preprocessingtabularestimator.md)
- [PreprocessingUpdatableTabularEstimator](preprocessingupdatabletabularestimator.md)
- [TabularTransformerToEstimatorAdaptor](tabulartransformertoestimatoradaptor.md)
- [TabularTransformerToUpdatableEstimatorAdaptor](tabulartransformertoupdatableestimatoradaptor.md)

## See Also

### Tabular components

- [TabularTransformer](tabulartransformer.md): A tabular transformer that transforms a data frame.
- [SupervisedTabularEstimator](supervisedtabularestimator.md): A tabular estimator that creates a transformer by fitting to a data set in a data frame.
- [ColumnSelector](columnselector.md): An operation that applies an estimator to a selection of columns.
- [ColumnSelectorTransformer](columnselectortransformer.md): A transformer that applies a base transformer to specific columns in a data frame.
- [ColumnSelection](columnselection.md): A selection of columns from a data frame.
- [ColumnConcatenator](columnconcatenator.md): A transformer that concatenates every numerical column in a dataframe into to a shaped array for each row.
- [PreprocessingSupervisedTabularEstimator](preprocessingsupervisedtabularestimator.md): A supervised tabular estimator that composes a preprocessing transformer and a supervised tabular estimator.
- [PreprocessingTabularEstimator](preprocessingtabularestimator.md): An estimator that composes a preprocessing transformer and an estimator.
- [PreprocessingUpdatableSupervisedTabularEstimator](preprocessingupdatablesupervisedtabularestimator.md): An updatable supervised estimator that composes a preprocessing transformer and an updatable supervised estimator.
- [PreprocessingUpdatableTabularEstimator](preprocessingupdatabletabularestimator.md): An updatable estimator that composes a preprocessing transformer and an updatable estimator.
