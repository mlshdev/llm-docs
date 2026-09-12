> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/supervisedtemporalestimator/fitted(to:eventhandler:)](https://developer.apple.com/documentation/createmlcomponents/supervisedtemporalestimator/fitted(to:eventhandler:))

# fitted(to:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ (deprecated in 18.0) · iPadOS 16.0+ (deprecated in 18.0) · Mac Catalyst 16.0+ (deprecated in 18.0) · macOS 13.0+ (deprecated in 15.0) · tvOS 16.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Fits a transformer to a sequence of examples.

## Declaration

```swift
func fitted<InputSequence, FeatureSequence>(to input: InputSequence, eventHandler: EventHandler?) async throws -> Self.Transformer where InputSequence : Sequence, FeatureSequence : TemporalSequence, InputSequence.Element == AnnotatedFeature<FeatureSequence, Self.Annotation>, FeatureSequence.Feature == Self.Transformer.Input
```

## Parameters

- `input`: A sequence of annotated temporal sequences used for fitting the transformer.
- `eventHandler`: An event handler.

<a id="return-value"></a>

## Return Value

The fitted transformer.

## See Also

### Fitting

- [fitted(to:)](fitted%28to_%29.md): Deprecated.
- [fitted(to:validateOn:)](fitted%28to_validateon_%29.md): Deprecated.
- [fitted(to:validateOn:eventHandler:)](fitted%28to_validateon_eventhandler_%29.md): Deprecated. Fits a transformer to a sequence of examples while validating with a validation sequence.
- [Annotation](annotation.md): Deprecated. The annotation type.
- [Transformer](transformer.md): Deprecated. The transformer type created by this estimator.
