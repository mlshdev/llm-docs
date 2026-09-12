> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/temporaltransformertoupdatableestimatoradaptor](https://developer.apple.com/documentation/createmlcomponents/temporaltransformertoupdatableestimatoradaptor)

# TemporalTransformerToUpdatableEstimatorAdaptor

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ (deprecated in 18.0) · iPadOS 16.0+ (deprecated in 18.0) · Mac Catalyst 16.0+ (deprecated in 18.0) · macOS 13.0+ (deprecated in 15.0) · tvOS 16.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

A temporal estimator that always returns a predefined temporal transformer.

## Declaration

```swift
struct TemporalTransformerToUpdatableEstimatorAdaptor<Transformer> where Transformer : TemporalTransformer
```

## Topics

### Creating an estimator

- [init(\_:)](temporaltransformertoupdatableestimatoradaptor/init%28__%29.md): Deprecated. Creates a trivial estimator.

### Getting the transformer

- [transformer](temporaltransformertoupdatableestimatoradaptor/transformer.md): Deprecated. A pre-defined transformer.

### Encoding and decoding

- [encode(\_:to:)](temporaltransformertoupdatableestimatoradaptor/encode%28__to_%29.md): Deprecated. Does nothing since this estimator uses a pre-defined transformer.
- [decode(from:)](temporaltransformertoupdatableestimatoradaptor/decode%28from_%29.md): Deprecated. Returns the pre-defined transformer.
- [encodeWithOptimizer(\_:to:)](temporaltransformertoupdatableestimatoradaptor/encodewithoptimizer%28__to_%29.md): Deprecated. This method is part of the conformance. It doesn’t encode anything since the transformer is pre-defined, so don’t call it.
- [decodeWithOptimizer(from:)](temporaltransformertoupdatableestimatoradaptor/decodewithoptimizer%28from_%29.md): Deprecated. Returns the pre-defined transformer.

### Fitting and updating

- [fitted(to:eventHandler:)](temporaltransformertoupdatableestimatoradaptor/fitted%28to_eventhandler_%29.md): Deprecated. Returns the pre-defined transformer.
- [makeTransformer()](temporaltransformertoupdatableestimatoradaptor/maketransformer%28%29.md): Deprecated. Creates a default-initialized transformer suitable for incremental fitting.
- [update(\_:with:eventHandler:)](temporaltransformertoupdatableestimatoradaptor/update%28__with_eventhandler_%29.md): Deprecated. Does nothing since this estimator uses a pre-defined transformer.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [TemporalEstimator](temporalestimator.md)
- [UpdatableTemporalEstimator](updatabletemporalestimator.md)

## See Also

### Temporal adaptors

- [TemporalAdaptor](temporaladaptor.md): A temporal transformer that applies a regular transformer to each value of a temporal sequence.
- [TemporalTransformerToEstimatorAdaptor](temporaltransformertoestimatoradaptor.md): Deprecated. A temporal estimator that always returns a predefined temporal transformer.
- [TemporalEstimatorToSupervisedAdaptor](temporalestimatortosupervisedadaptor.md): Deprecated. An adaptor that exposes a temporal estimator as a supervised temporal estimator.
