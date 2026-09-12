> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/temporalestimatortosupervisedadaptor](https://developer.apple.com/documentation/createmlcomponents/temporalestimatortosupervisedadaptor)

# TemporalEstimatorToSupervisedAdaptor

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ (deprecated in 18.0) · iPadOS 16.0+ (deprecated in 18.0) · Mac Catalyst 16.0+ (deprecated in 18.0) · macOS 13.0+ (deprecated in 15.0) · tvOS 16.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

An adaptor that exposes a temporal estimator as a supervised temporal estimator.

## Declaration

```swift
struct TemporalEstimatorToSupervisedAdaptor<Estimator, Annotation> where Estimator : TemporalEstimator, Annotation : Equatable, Annotation : Sendable
```

## Topics

### Creating an adaptor

- [init(\_:)](temporalestimatortosupervisedadaptor/init%28__%29.md): Deprecated. Creates a temporal estimator adaptor.

### Getting the estimator

- [estimator](temporalestimatortosupervisedadaptor/estimator.md): Deprecated. The wrapped estimator.

### Encoding and decoding

- [encode(\_:to:)](temporalestimatortosupervisedadaptor/encode%28__to_%29.md): Deprecated. Does nothing since this estimator uses a pre-defined transformer.
- [decode(from:)](temporalestimatortosupervisedadaptor/decode%28from_%29.md): Deprecated. Returns the pre-defined transformer.

### Fitting

- [fitted(to:eventHandler:)](temporalestimatortosupervisedadaptor/fitted%28to_eventhandler_%29.md): Deprecated. Fits a transformer to a sequence of examples.
- [fitted(to:validateOn:eventHandler:)](temporalestimatortosupervisedadaptor/fitted%28to_validateon_eventhandler_%29.md): Deprecated. Fits a transformer to a sequence of examples while validating with a validation sequence.
- [Transformer](transformer.md): A transformer that takes an input and produces an output.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SupervisedTemporalEstimator](supervisedtemporalestimator.md)

## See Also

### Temporal adaptors

- [TemporalAdaptor](temporaladaptor.md): A temporal transformer that applies a regular transformer to each value of a temporal sequence.
- [TemporalTransformerToEstimatorAdaptor](temporaltransformertoestimatoradaptor.md): Deprecated. A temporal estimator that always returns a predefined temporal transformer.
- [TemporalTransformerToUpdatableEstimatorAdaptor](temporaltransformertoupdatableestimatoradaptor.md): Deprecated. A temporal estimator that always returns a predefined temporal transformer.
