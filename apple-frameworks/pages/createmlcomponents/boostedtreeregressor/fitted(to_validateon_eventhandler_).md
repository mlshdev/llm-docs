> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createmlcomponents/boostedtreeregressor/fitted(to:validateon:eventhandler:)

# fitted(to:validateOn:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Fits a boosted tree regressor model to a collection of examples.

## Declaration

```swift
func fitted(to input: DataFrame, validateOn validation: DataFrame? = nil, eventHandler: EventHandler? = nil) async throws -> TreeRegressorModel
```

## Parameters

- `input`: A data frame containing examples used for fitting the transformer.
- `validation`: A data frame containing examples used for validating the fitted transformer.
- `eventHandler`: An event handler. This method reports maximum error and root-mean-square error metrics.

<a id="return-value"></a>

## Return Value

The fitted boosted tree regressor model.

## See Also

### Fitting a regressor model

- [BoostedTreeRegressor.Transformer](transformer.md): The transformer type created by this estimator.
