> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/tabulartransformer/adaptedasestimator()](https://developer.apple.com/documentation/createmlcomponents/tabulartransformer/adaptedasestimator())

# adaptedAsEstimator()

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Exposes this tabular transformer as a trivial tabular estimator.

## Declaration

```swift
func adaptedAsEstimator() -> TabularTransformerToEstimatorAdaptor<Self>
```

## See Also

### Adapting

- [adaptedAsUpdatableEstimator()](adaptedasupdatableestimator%28%29.md): Exposes this tabular transformer as an updatable tabular estimator.
