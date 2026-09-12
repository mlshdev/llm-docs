> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/updatabletabularestimatortosupervisedadaptor/update(_:with:eventhandler:)](https://developer.apple.com/documentation/createmlcomponents/updatabletabularestimatortosupervisedadaptor/update(_:with:eventhandler:))

# update(\_:with:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Updates a transformer with a new data frame containing examples.

## Declaration

```swift
func update(_ transformer: inout UpdatableTabularEstimatorToSupervisedAdaptor<Estimator, Annotation>.Transformer, with input: DataFrame, eventHandler: EventHandler? = nil) async throws
```

## Parameters

- `transformer`: A transformer to update.
- `input`: A sequence of examples.
- `eventHandler`: An event handler.

## See Also

### Fitting

- [fitted(to:validateOn:eventHandler:)](fitted%28to_validateon_eventhandler_%29.md): Fits a transformer to a data frame.
- [makeTransformer()](maketransformer%28%29.md): Creates a default-initialized transformer suitable for incremental fitting.
- [Transformer](../transformer.md): A transformer that takes an input and produces an output.
