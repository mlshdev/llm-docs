> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createmlcomponents/tabulartransformer/adaptedasupdatableestimator()

# adaptedAsUpdatableEstimator()

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Exposes this tabular transformer as an updatable tabular estimator.

## Declaration

```swift
func adaptedAsUpdatableEstimator() -> TabularTransformerToUpdatableEstimatorAdaptor<Self>
```

## See Also

### Adapting

- [adaptedAsEstimator()](adaptedasestimator%28%29.md): Exposes this tabular transformer as a trivial tabular estimator.
