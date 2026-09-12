> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/temporaltransformer/output](https://developer.apple.com/documentation/createmlcomponents/temporaltransformer/output)

# Output

**Framework:** Create ML Components  
**Kind:** Associated Type  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

The output type.

## Declaration

```swift
associatedtype Output where Self.Output == Self.OutputSequence.Feature
```

## See Also

### Applying and adapting

- [applied(to:eventHandler:)](applied%28to_eventhandler_%29.md): Performs the transformation on an input sequence.
- [adaptedAsEstimator()](adaptedasestimator%28%29.md): Deprecated. Exposes this temporal transformer as a trivial temporal estimator.
- [adaptedAsUpdatableEstimator()](adaptedasupdatableestimator%28%29.md): Deprecated. Exposes this temporal transformer as a trivial temporal estimator.
- [Input](input.md): The input type.
- [OutputSequence](outputsequence.md): The output async sequence type.
