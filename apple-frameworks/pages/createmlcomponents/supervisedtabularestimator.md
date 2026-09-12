> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/supervisedtabularestimator](https://developer.apple.com/documentation/createmlcomponents/supervisedtabularestimator)

# SupervisedTabularEstimator

**Framework:** Create ML Components  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

A tabular estimator that creates a transformer by fitting to a data set in a data frame.

## Declaration

```swift
protocol SupervisedTabularEstimator<Transformer, Annotation>
```

## Topics

### Reading and writing

- [read(from:)](supervisedtabularestimator/read%28from_%29.md): Reads the encoded transformer from a file.
- [write(\_:to:overwrite:)](supervisedtabularestimator/write%28__to_overwrite_%29.md): Writes the encoded transformer to a file.
- [Annotation](supervisedtabularestimator/annotation.md): The annotation type.
- [annotationColumnID](supervisedtabularestimator/annotationcolumnid.md): The annotation column identifier.
- [Transformer](supervisedtabularestimator/transformer.md): The transformer type created by this estimator.

### Appending

- [appending(\_:)](supervisedtabularestimator/appending%28__%29.md): Composes this supervised tabular estimator with another supervised tabular estimator.

### Fitting

- [fitted(to:validateOn:eventHandler:)](supervisedtabularestimator/fitted%28to_validateon_eventhandler_%29.md): Fits a transformer to a data frame
- [fitted(to:validateOn:)](supervisedtabularestimator/fitted%28to_validateon_%29.md)

### Encoding and decoding

- [encode(\_:to:)](supervisedtabularestimator/encode%28__to_%29.md): Encodes a fitted transformer.
- [decode(from:)](supervisedtabularestimator/decode%28from_%29.md): Decodes a previously fitted transformer.

## Relationships

### Inherited By

- [UpdatableSupervisedTabularEstimator](updatablesupervisedtabularestimator.md)

### Conforming Types

- [AnnotatedFeatureProvider](annotatedfeatureprovider.md)
- [BoostedTreeClassifier](boostedtreeclassifier.md)
- [BoostedTreeRegressor](boostedtreeregressor.md)
- [PreprocessingSupervisedTabularEstimator](preprocessingsupervisedtabularestimator.md)
- [PreprocessingUpdatableSupervisedTabularEstimator](preprocessingupdatablesupervisedtabularestimator.md)
- [TabularEstimatorToSupervisedAdaptor](tabularestimatortosupervisedadaptor.md)
- [UpdatableTabularEstimatorToSupervisedAdaptor](updatabletabularestimatortosupervisedadaptor.md)

## See Also

### Tabular components

- [TabularTransformer](tabulartransformer.md): A tabular transformer that transforms a data frame.
- [TabularEstimator](tabularestimator.md): A tabular estimator that creates a transformer by fitting to a data set in a data frame.
- [ColumnSelector](columnselector.md): An operation that applies an estimator to a selection of columns.
- [ColumnSelectorTransformer](columnselectortransformer.md): A transformer that applies a base transformer to specific columns in a data frame.
- [ColumnSelection](columnselection.md): A selection of columns from a data frame.
- [ColumnConcatenator](columnconcatenator.md): A transformer that concatenates every numerical column in a dataframe into to a shaped array for each row.
- [PreprocessingSupervisedTabularEstimator](preprocessingsupervisedtabularestimator.md): A supervised tabular estimator that composes a preprocessing transformer and a supervised tabular estimator.
- [PreprocessingTabularEstimator](preprocessingtabularestimator.md): An estimator that composes a preprocessing transformer and an estimator.
- [PreprocessingUpdatableSupervisedTabularEstimator](preprocessingupdatablesupervisedtabularestimator.md): An updatable supervised estimator that composes a preprocessing transformer and an updatable supervised estimator.
- [PreprocessingUpdatableTabularEstimator](preprocessingupdatabletabularestimator.md): An updatable estimator that composes a preprocessing transformer and an updatable estimator.
