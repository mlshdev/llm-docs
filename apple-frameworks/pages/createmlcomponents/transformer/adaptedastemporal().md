> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/transformer/adaptedastemporal()](https://developer.apple.com/documentation/createmlcomponents/transformer/adaptedastemporal())

# adaptedAsTemporal()

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Exposes this transformer as a temporal transformer.

## Declaration

```swift
@preconcurrency func adaptedAsTemporal() -> TemporalAdaptor<Self> where Self : Sendable
```

## See Also

### Applying and adapting

- [applied(to:eventHandler:)](applied%28to_eventhandler_%29.md): Performs the transformation on a single input.
- [adaptedAsAnnotatedFeatureTransformer(annotationType:)](adaptedasannotatedfeaturetransformer%28annotationtype_%29.md): Returns an annotated-feature transformer that transforms the features using this transformer while leaving the annotations unchanged.
- [adaptedAsAnnotatedPredictionTransformer(annotationType:)](adaptedasannotatedpredictiontransformer%28annotationtype_%29.md): Returns an annotated-prediction transformer that transforms the predictions using this transformer while leaving the annotations unchanged.
- [adaptedAsEstimator()](adaptedasestimator%28%29.md): Exposes this transformer as a trivial estimator.
- [adaptedAsRandomTransformer()](adaptedasrandomtransformer%28%29.md): Returns a random transformer wrapping a transformer.
- [adaptedAsUpdatableEstimator()](adaptedasupdatableestimator%28%29.md): Exposes this transformer as a trivial estimator.
- [Input](input.md): The input type.
- [Output](output.md): The output type.
