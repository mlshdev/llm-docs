> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/preprocessingtabularestimator](https://developer.apple.com/documentation/createmlcomponents/preprocessingtabularestimator)

# PreprocessingTabularEstimator

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 11.0+

An estimator that composes a preprocessing transformer and an estimator.

## Declaration

```swift
struct PreprocessingTabularEstimator<Preprocessor, Estimator> where Preprocessor : TabularTransformer, Estimator : TabularEstimator
```

## Topics

### Creating an estimator

- [init(\_:\_:)](preprocessingtabularestimator/init%28____%29.md): Creates a composed estimator from a preprocessing transformer and an estimator.

### Getting the properties

- [estimator](preprocessingtabularestimator/estimator.md): The estimator.
- [preprocessor](preprocessingtabularestimator/preprocessor.md): The preprocessing transformer.

### Preprocesing and fitting

- [preprocessed(from:eventHandler:)](preprocessingtabularestimator/preprocessed%28from_eventhandler_%29.md): Preprocesses a data frame of examples.
- [fitted(to:eventHandler:)](preprocessingtabularestimator/fitted%28to_eventhandler_%29.md): Fits a composed transformer to a data frame of examples.
- [fitted(toPreprocessed:eventHandler:)](preprocessingtabularestimator/fitted%28topreprocessed_eventhandler_%29.md): Fits a transformer to a data frame of preprocessed features.
- [PreprocessingTabularEstimator.Input](preprocessingtabularestimator/input.md): The input type.
- [PreprocessingTabularEstimator.Intermediate](preprocessingtabularestimator/intermediate.md): The intermediate type.
- [PreprocessingTabularEstimator.Output](preprocessingtabularestimator/output.md): The output type.
- [Transformer](transformer.md): A transformer that takes an input and produces an output.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [TabularEstimator](tabularestimator.md)

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
- [PreprocessingUpdatableSupervisedTabularEstimator](preprocessingupdatablesupervisedtabularestimator.md): An updatable supervised estimator that composes a preprocessing transformer and an updatable supervised estimator.
- [PreprocessingUpdatableTabularEstimator](preprocessingupdatabletabularestimator.md): An updatable estimator that composes a preprocessing transformer and an updatable estimator.
