> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/transformer/applied(to:eventhandler:)](https://developer.apple.com/documentation/createmlcomponents/transformer/applied(to:eventhandler:))

# applied(to:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Performs the transformation on a single input.

## Declaration

```swift
func applied(to input: Self.Input, eventHandler: EventHandler?) async throws -> Self.Output
```

## Parameters

- `input`: The transformer input.
- `eventHandler`: An event handler.

<a id="return-value"></a>

## Return Value

An output produced by applying the transformer to the input.

## Default Implementations

### Transformer Implementations

- [applied(to:eventHandler:)](applied%28to_eventhandler_%29-274uv.md): Performs the transformation on a sequence of inputs.
- [applied(to:eventHandler:)](applied%28to_eventhandler_%29-gcy8.md): Performs the transformation on a sequence of annotated inputs.

## See Also

### Applying and adapting

- [adaptedAsAnnotatedFeatureTransformer(annotationType:)](adaptedasannotatedfeaturetransformer%28annotationtype_%29.md): Returns an annotated-feature transformer that transforms the features using this transformer while leaving the annotations unchanged.
- [adaptedAsAnnotatedPredictionTransformer(annotationType:)](adaptedasannotatedpredictiontransformer%28annotationtype_%29.md): Returns an annotated-prediction transformer that transforms the predictions using this transformer while leaving the annotations unchanged.
- [adaptedAsEstimator()](adaptedasestimator%28%29.md): Exposes this transformer as a trivial estimator.
- [adaptedAsRandomTransformer()](adaptedasrandomtransformer%28%29.md): Returns a random transformer wrapping a transformer.
- [adaptedAsTemporal()](adaptedastemporal%28%29.md): Exposes this transformer as a temporal transformer.
- [adaptedAsUpdatableEstimator()](adaptedasupdatableestimator%28%29.md): Exposes this transformer as a trivial estimator.
- [Input](input.md): The input type.
- [Output](output.md): The output type.
