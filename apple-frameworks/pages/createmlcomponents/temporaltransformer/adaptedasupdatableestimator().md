> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/temporaltransformer/adaptedasupdatableestimator()](https://developer.apple.com/documentation/createmlcomponents/temporaltransformer/adaptedasupdatableestimator())

# adaptedAsUpdatableEstimator()

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ (deprecated in 18.0) · iPadOS 16.0+ (deprecated in 18.0) · Mac Catalyst 16.0+ (deprecated in 18.0) · macOS 13.0+ (deprecated in 15.0) · tvOS 16.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Exposes this temporal transformer as a trivial temporal estimator.

## Declaration

```swift
func adaptedAsUpdatableEstimator() -> TemporalTransformerToUpdatableEstimatorAdaptor<Self>
```

## See Also

### Applying and adapting

- [applied(to:eventHandler:)](applied%28to_eventhandler_%29.md): Performs the transformation on an input sequence.
- [adaptedAsEstimator()](adaptedasestimator%28%29.md): Deprecated. Exposes this temporal transformer as a trivial temporal estimator.
- [Input](input.md): The input type.
- [Output](output.md): The output type.
- [OutputSequence](outputsequence.md): The output async sequence type.
