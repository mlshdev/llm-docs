> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/columnselectortransformer](https://developer.apple.com/documentation/createmlcomponents/columnselectortransformer)

# ColumnSelectorTransformer

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

A transformer that applies a base transformer to specific columns in a data frame.

## Declaration

```swift
struct ColumnSelectorTransformer<Base, UnwrappedInput> where Base : Transformer, Base.Input == UnwrappedInput?
```

## Topics

### Creating the transformer

- [init(transformers:columnMapping:)](columnselectortransformer/init%28transformers_columnmapping_%29.md): Creates a select transformer.

### Getting the properties

- [columnMapping](columnselectortransformer/columnmapping.md): A mapping of input column names to output column names.
- [transformers](columnselectortransformer/transformers.md): A dictionary of column names to transformers.

### Applying a transformation

- [applied(to:eventHandler:)](columnselectortransformer/applied%28to_eventhandler_%29.md): Performs the transformation on selected columns of the data frame.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
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
- [ColumnSelection](columnselection.md): A selection of columns from a data frame.
- [ColumnConcatenator](columnconcatenator.md): A transformer that concatenates every numerical column in a dataframe into to a shaped array for each row.
- [PreprocessingSupervisedTabularEstimator](preprocessingsupervisedtabularestimator.md): A supervised tabular estimator that composes a preprocessing transformer and a supervised tabular estimator.
- [PreprocessingTabularEstimator](preprocessingtabularestimator.md): An estimator that composes a preprocessing transformer and an estimator.
- [PreprocessingUpdatableSupervisedTabularEstimator](preprocessingupdatablesupervisedtabularestimator.md): An updatable supervised estimator that composes a preprocessing transformer and an updatable supervised estimator.
- [PreprocessingUpdatableTabularEstimator](preprocessingupdatabletabularestimator.md): An updatable estimator that composes a preprocessing transformer and an updatable estimator.
