> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/columnselector/fitted(to:eventhandler:)](https://developer.apple.com/documentation/createmlcomponents/columnselector/fitted(to:eventhandler:))

# fitted(to:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Fits a transformer to a data frame

## Declaration

```swift
func fitted(to input: DataFrame, eventHandler: EventHandler? = nil) async throws -> ColumnSelector<Estimator, UnwrappedInput>.Transformer
```

## Parameters

- `input`: A data frame.
- `eventHandler`: An event handler.

<a id="return-value"></a>

## Return Value

The fitted transformer.

## See Also

### Fitting a transformer

- [ColumnSelector.Input](input.md)
- [ColumnSelector.Output](output.md)
- [Transformer](../transformer.md): A transformer that takes an input and produces an output.
