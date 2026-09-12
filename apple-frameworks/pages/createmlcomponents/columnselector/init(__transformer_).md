> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/columnselector/init(_:transformer:)](https://developer.apple.com/documentation/createmlcomponents/columnselector/init(_:transformer:))

# init(\_:transformer:)

**Framework:** Create ML Components  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Creates a select operation with a transformer.

## Declaration

```swift
init<T>(_ columnSelection: ColumnSelection, transformer: T) where Estimator == TransformerToEstimatorAdaptor<T>, T : Transformer, T.Input == UnwrappedInput?
```

## Parameters

- `columnSelection`: A selection of columns.
- `transformer`: A transformer.

## See Also

### Creating the selection

- [init(columns:estimator:)](init%28columns_estimator_%29.md): Creates a select operation with an estimator.
- [init(\_:estimator:)](init%28__estimator_%29.md): Creates a select operation with an estimator.
