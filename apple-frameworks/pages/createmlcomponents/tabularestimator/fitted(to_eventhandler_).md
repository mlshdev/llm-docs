> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/tabularestimator/fitted(to:eventhandler:)](https://developer.apple.com/documentation/createmlcomponents/tabularestimator/fitted(to:eventhandler:))

# fitted(to:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Fits a transformer to a data frame

## Declaration

```swift
func fitted(to input: DataFrame, eventHandler: EventHandler?) async throws -> Self.Transformer
```

## Parameters

- `input`: A data frame containing examples.
- `eventHandler`: An event handler.

<a id="return-value"></a>

## Return Value

The fitted transformer.

## See Also

### Adapting and fitting

- [adaptedAsSupervised(annotationColumnID:)](adaptedassupervised%28annotationcolumnid_%29.md): Exposes this tabular estimator as a supervised tabular estimator.
- [fitted(to:)](fitted%28to_%29.md)
