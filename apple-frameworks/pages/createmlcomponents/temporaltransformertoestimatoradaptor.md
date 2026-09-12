> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/temporaltransformertoestimatoradaptor](https://developer.apple.com/documentation/createmlcomponents/temporaltransformertoestimatoradaptor)

# TemporalTransformerToEstimatorAdaptor

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ (deprecated in 18.0) · iPadOS 16.0+ (deprecated in 18.0) · Mac Catalyst 16.0+ (deprecated in 18.0) · macOS 13.0+ (deprecated in 15.0) · tvOS 16.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

A temporal estimator that always returns a predefined temporal transformer.

## Declaration

```swift
struct TemporalTransformerToEstimatorAdaptor<Transformer> where Transformer : TemporalTransformer
```

## Topics

### Creating an estimator

- [init(\_:)](temporaltransformertoestimatoradaptor/init%28__%29.md): Deprecated. Creates a trivial estimator.

### Getting the transformer

- [transformer](temporaltransformertoestimatoradaptor/transformer.md): Deprecated. A pre-defined transformer.

### Encoding and decoding

- [encode(\_:to:)](temporaltransformertoestimatoradaptor/encode%28__to_%29.md): Deprecated. Does nothing since this estimator uses a pre-defined transformer.
- [decode(from:)](temporaltransformertoestimatoradaptor/decode%28from_%29.md): Deprecated. Returns the pre-defined transformer.

### Fitting

- [fitted(to:eventHandler:)](temporaltransformertoestimatoradaptor/fitted%28to_eventhandler_%29.md): Deprecated. Returns the pre-defined transformer.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [TemporalEstimator](temporalestimator.md)

## See Also

### Temporal adaptors

- [TemporalAdaptor](temporaladaptor.md): A temporal transformer that applies a regular transformer to each value of a temporal sequence.
- [TemporalEstimatorToSupervisedAdaptor](temporalestimatortosupervisedadaptor.md): Deprecated. An adaptor that exposes a temporal estimator as a supervised temporal estimator.
- [TemporalTransformerToUpdatableEstimatorAdaptor](temporaltransformertoupdatableestimatoradaptor.md): Deprecated. A temporal estimator that always returns a predefined temporal transformer.
