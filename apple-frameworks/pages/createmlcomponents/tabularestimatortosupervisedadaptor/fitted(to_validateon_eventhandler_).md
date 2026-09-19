> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createmlcomponents/tabularestimatortosupervisedadaptor/fitted(to:validateon:eventhandler:)

# fitted(to:validateOn:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Returns the tabular transformer fitted using the provided tabular estimator.

## Declaration

```swift
func fitted(to input: DataFrame, validateOn validation: DataFrame? = nil, eventHandler: EventHandler? = nil) async throws -> Estimator.Transformer
```

## Parameters

- `input`: A data frame containing examples.
- `validation`: A data frame containing examples.
- `eventHandler`: An event handler.

<a id="return-value"></a>

## Return Value

The a fitted tabular transformer.

## See Also

### Fitting

- [Transformer](../transformer.md): A transformer that takes an input and produces an output.
