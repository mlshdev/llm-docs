> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/preprocessingsupervisedtabularestimator](https://developer.apple.com/documentation/createmlcomponents/preprocessingsupervisedtabularestimator)

# PreprocessingSupervisedTabularEstimator

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 11.0+

A supervised tabular estimator that composes a preprocessing transformer and a supervised tabular estimator.

## Declaration

```swift
struct PreprocessingSupervisedTabularEstimator<Preprocessor, Estimator> where Preprocessor : TabularTransformer, Estimator : SupervisedTabularEstimator
```

## Topics

### Creating an estimator

- [init(\_:\_:)](preprocessingsupervisedtabularestimator/init%28____%29.md): Creates a composed supervised tabular estimator from a preprocessing transformer and a supervised tabular estimator.

### Getting the properties

- [annotationColumnID](preprocessingsupervisedtabularestimator/annotationcolumnid.md): The annotation column identifier.
- [estimator](preprocessingsupervisedtabularestimator/estimator.md): The estimator.
- [preprocessor](preprocessingsupervisedtabularestimator/preprocessor.md): The preprocessing transformer.

### Preprocesing and fitting

- [preprocessed(from:eventHandler:)](preprocessingsupervisedtabularestimator/preprocessed%28from_eventhandler_%29.md): Preprocesses a data frame of examples.
- [fitted(to:validateOn:eventHandler:)](preprocessingsupervisedtabularestimator/fitted%28to_validateon_eventhandler_%29.md): Fits a transformer to a data frame
- [fitted(toPreprocessed:validateOn:eventHandler:)](preprocessingsupervisedtabularestimator/fitted%28topreprocessed_validateon_eventhandler_%29.md): Fits a transformer to a data frame of preprocessed examples while validating.
- [PreprocessingSupervisedTabularEstimator.Annotation](preprocessingsupervisedtabularestimator/annotation.md): The annotation type.
- [PreprocessingSupervisedTabularEstimator.Input](preprocessingsupervisedtabularestimator/input.md): The input type.
- [PreprocessingSupervisedTabularEstimator.Intermediate](preprocessingsupervisedtabularestimator/intermediate.md): The intermediate type.
- [PreprocessingSupervisedTabularEstimator.Output](preprocessingsupervisedtabularestimator/output.md): The output type.
- [Transformer](transformer.md): A transformer that takes an input and produces an output.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SupervisedTabularEstimator](supervisedtabularestimator.md)

## See Also

### Tabular components

- [TabularTransformer](tabulartransformer.md): A tabular transformer that transforms a data frame.
- [TabularEstimator](tabularestimator.md): A tabular estimator that creates a transformer by fitting to a data set in a data frame.
- [SupervisedTabularEstimator](supervisedtabularestimator.md): A tabular estimator that creates a transformer by fitting to a data set in a data frame.
- [ColumnSelector](columnselector.md): An operation that applies an estimator to a selection of columns.
- [ColumnSelectorTransformer](columnselectortransformer.md): A transformer that applies a base transformer to specific columns in a data frame.
- [ColumnSelection](columnselection.md): A selection of columns from a data frame.
- [ColumnConcatenator](columnconcatenator.md): A transformer that concatenates every numerical column in a dataframe into to a shaped array for each row.
- [PreprocessingTabularEstimator](preprocessingtabularestimator.md): An estimator that composes a preprocessing transformer and an estimator.
- [PreprocessingUpdatableSupervisedTabularEstimator](preprocessingupdatablesupervisedtabularestimator.md): An updatable supervised estimator that composes a preprocessing transformer and an updatable supervised estimator.
- [PreprocessingUpdatableTabularEstimator](preprocessingupdatabletabularestimator.md): An updatable estimator that composes a preprocessing transformer and an updatable estimator.
