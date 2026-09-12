> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/transformer/adaptedasestimator()](https://developer.apple.com/documentation/createmlcomponents/transformer/adaptedasestimator())

# adaptedAsEstimator()

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Exposes this transformer as a trivial estimator.

## Declaration

```swift
func adaptedAsEstimator() -> TransformerToEstimatorAdaptor<Self>
```

## See Also

### Applying and adapting

- [applied(to:eventHandler:)](applied%28to_eventhandler_%29.md): Performs the transformation on a single input.
- [adaptedAsAnnotatedFeatureTransformer(annotationType:)](adaptedasannotatedfeaturetransformer%28annotationtype_%29.md): Returns an annotated-feature transformer that transforms the features using this transformer while leaving the annotations unchanged.
- [adaptedAsAnnotatedPredictionTransformer(annotationType:)](adaptedasannotatedpredictiontransformer%28annotationtype_%29.md): Returns an annotated-prediction transformer that transforms the predictions using this transformer while leaving the annotations unchanged.
- [adaptedAsRandomTransformer()](adaptedasrandomtransformer%28%29.md): Returns a random transformer wrapping a transformer.
- [adaptedAsTemporal()](adaptedastemporal%28%29.md): Exposes this transformer as a temporal transformer.
- [adaptedAsUpdatableEstimator()](adaptedasupdatableestimator%28%29.md): Exposes this transformer as a trivial estimator.
- [Input](input.md): The input type.
- [Output](output.md): The output type.
