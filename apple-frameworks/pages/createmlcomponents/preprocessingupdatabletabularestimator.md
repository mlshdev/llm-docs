> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/preprocessingupdatabletabularestimator](https://developer.apple.com/documentation/createmlcomponents/preprocessingupdatabletabularestimator)

# PreprocessingUpdatableTabularEstimator

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 11.0+

An updatable estimator that composes a preprocessing transformer and an updatable estimator.

## Declaration

```swift
struct PreprocessingUpdatableTabularEstimator<Preprocessor, Estimator> where Preprocessor : TabularTransformer, Estimator : UpdatableTabularEstimator
```

## Topics

### Creating an estimator

- [init(\_:\_:)](preprocessingupdatabletabularestimator/init%28____%29.md): Creates a composed updatable estimator from a preprocessing transformer and an estimator.

### Getting the properties

- [estimator](preprocessingupdatabletabularestimator/estimator.md): The estimator.
- [preprocessor](preprocessingupdatabletabularestimator/preprocessor.md): The preprocessing transformer.

### Encoding and decoding

- [encodeWithOptimizer(\_:to:)](preprocessingupdatabletabularestimator/encodewithoptimizer%28__to_%29.md): Encodes the transformer and optimizer to an encoder.
- [decodeWithOptimizer(from:)](preprocessingupdatabletabularestimator/decodewithoptimizer%28from_%29.md): Reads the encoded transformer and optimizer.

### Preprocesing and fitting

- [preprocessed(from:eventHandler:)](preprocessingupdatabletabularestimator/preprocessed%28from_eventhandler_%29.md): Preprocesses a data frame of examples.
- [fitted(to:eventHandler:)](preprocessingupdatabletabularestimator/fitted%28to_eventhandler_%29.md): Fits a composed transformer to a data frame of examples.
- [fitted(toPreprocessed:eventHandler:)](preprocessingupdatabletabularestimator/fitted%28topreprocessed_eventhandler_%29.md): Fits a transformer to a data frame of preprocessed features.
- [update(\_:with:eventHandler:)](preprocessingupdatabletabularestimator/update%28__with_eventhandler_%29.md): Updates a transformer with a new data frame of examples.
- [update(\_:withPreprocessed:eventHandler:)](preprocessingupdatabletabularestimator/update%28__withpreprocessed_eventhandler_%29.md): Updates a transformer with a new data frame of preprocessed features.
- [makeTransformer()](preprocessingupdatabletabularestimator/maketransformer%28%29.md): Creates a default-initialized transformer suitable for incremental fitting.
- [PreprocessingUpdatableTabularEstimator.Input](preprocessingupdatabletabularestimator/input.md): The input type.
- [PreprocessingUpdatableTabularEstimator.Intermediate](preprocessingupdatabletabularestimator/intermediate.md): The intermediate type.
- [PreprocessingUpdatableTabularEstimator.Output](preprocessingupdatabletabularestimator/output.md): The output type.
- [Transformer](transformer.md): A transformer that takes an input and produces an output.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [TabularEstimator](tabularestimator.md)
- [UpdatableTabularEstimator](updatabletabularestimator.md)

## See Also

### Tabular components

- [TabularTransformer](tabulartransformer.md): A tabular transformer that transforms a data frame.
- [TabularEstimator](tabularestimator.md): A tabular estimator that creates a transformer by fitting to a data set in a data frame.
- [SupervisedTabularEstimator](supervisedtabularestimator.md): A tabular estimator that creates a transformer by fitting to a data set in a data frame.
- [ColumnSelector](columnselector.md): An operation that applies an estimator to a selection of columns.
- [ColumnSelectorTransformer](columnselectortransformer.md): A transformer that applies a base transformer to specific columns in a data frame.
- [ColumnSelection](columnselection.md): A selection of columns from a data frame.
- [ColumnConcatenator](columnconcatenator.md): A transformer that concatenates every numerical column in a dataframe into to a shaped array for each row.
- [PreprocessingSupervisedTabularEstimator](preprocessingsupervisedtabularestimator.md): A supervised tabular estimator that composes a preprocessing transformer and a supervised tabular estimator.
- [PreprocessingTabularEstimator](preprocessingtabularestimator.md): An estimator that composes a preprocessing transformer and an estimator.
- [PreprocessingUpdatableSupervisedTabularEstimator](preprocessingupdatablesupervisedtabularestimator.md): An updatable supervised estimator that composes a preprocessing transformer and an updatable supervised estimator.
