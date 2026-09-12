> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/transformer/adaptedasrandomtransformer()](https://developer.apple.com/documentation/createmlcomponents/transformer/adaptedasrandomtransformer())

# adaptedAsRandomTransformer()

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 11.0+

Returns a random transformer wrapping a transformer.

## Declaration

```swift
func adaptedAsRandomTransformer() -> some RandomTransformer<Self.Input, Self.Output>

```

## See Also

### Applying and adapting

- [applied(to:eventHandler:)](applied%28to_eventhandler_%29.md): Performs the transformation on a single input.
- [adaptedAsAnnotatedFeatureTransformer(annotationType:)](adaptedasannotatedfeaturetransformer%28annotationtype_%29.md): Returns an annotated-feature transformer that transforms the features using this transformer while leaving the annotations unchanged.
- [adaptedAsAnnotatedPredictionTransformer(annotationType:)](adaptedasannotatedpredictiontransformer%28annotationtype_%29.md): Returns an annotated-prediction transformer that transforms the predictions using this transformer while leaving the annotations unchanged.
- [adaptedAsEstimator()](adaptedasestimator%28%29.md): Exposes this transformer as a trivial estimator.
- [adaptedAsTemporal()](adaptedastemporal%28%29.md): Exposes this transformer as a temporal transformer.
- [adaptedAsUpdatableEstimator()](adaptedasupdatableestimator%28%29.md): Exposes this transformer as a trivial estimator.
- [Input](input.md): The input type.
- [Output](output.md): The output type.
