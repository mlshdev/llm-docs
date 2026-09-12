> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/transformer/adaptedasannotatedfeaturetransformer(annotationtype:)](https://developer.apple.com/documentation/createmlcomponents/transformer/adaptedasannotatedfeaturetransformer(annotationtype:))

# adaptedAsAnnotatedFeatureTransformer(annotationType:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 11.0+

Returns an annotated-feature transformer that transforms the features using this transformer while leaving the annotations unchanged.

## Declaration

```swift
func adaptedAsAnnotatedFeatureTransformer<Annotation>(annotationType: Annotation.Type = Annotation.self) -> some Transformer<AnnotatedFeature<Self.Input, Annotation>, AnnotatedFeature<Self.Output, Annotation>>

```

## See Also

### Applying and adapting

- [applied(to:eventHandler:)](applied%28to_eventhandler_%29.md): Performs the transformation on a single input.
- [adaptedAsAnnotatedPredictionTransformer(annotationType:)](adaptedasannotatedpredictiontransformer%28annotationtype_%29.md): Returns an annotated-prediction transformer that transforms the predictions using this transformer while leaving the annotations unchanged.
- [adaptedAsEstimator()](adaptedasestimator%28%29.md): Exposes this transformer as a trivial estimator.
- [adaptedAsRandomTransformer()](adaptedasrandomtransformer%28%29.md): Returns a random transformer wrapping a transformer.
- [adaptedAsTemporal()](adaptedastemporal%28%29.md): Exposes this transformer as a temporal transformer.
- [adaptedAsUpdatableEstimator()](adaptedasupdatableestimator%28%29.md): Exposes this transformer as a trivial estimator.
- [Input](input.md): The input type.
- [Output](output.md): The output type.
