> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/updatabletemporalestimatortosupervisedadaptor](https://developer.apple.com/documentation/createmlcomponents/updatabletemporalestimatortosupervisedadaptor)

# UpdatableTemporalEstimatorToSupervisedAdaptor

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ (deprecated in 18.0) · iPadOS 16.0+ (deprecated in 18.0) · Mac Catalyst 16.0+ (deprecated in 18.0) · macOS 13.0+ (deprecated in 15.0) · tvOS 16.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

An adaptor that exposes an updatable temporal estimator as an updatable supervised temporal estimator.

## Declaration

```swift
struct UpdatableTemporalEstimatorToSupervisedAdaptor<Estimator, Annotation> where Estimator : UpdatableTemporalEstimator, Annotation : Equatable, Annotation : Sendable
```

## Topics

### Creating an adaptor

- [init(\_:)](updatabletemporalestimatortosupervisedadaptor/init%28__%29.md): Deprecated. Creates a temporal estimator adaptor.

### Getting the estimator

- [estimator](updatabletemporalestimatortosupervisedadaptor/estimator.md): Deprecated. The wrapped estimator.

### Encoding and decoding

- [encode(\_:to:)](updatabletemporalestimatortosupervisedadaptor/encode%28__to_%29.md): Deprecated. Does nothing since this estimator uses a pre-defined transformer.
- [decode(from:)](updatabletemporalestimatortosupervisedadaptor/decode%28from_%29.md): Deprecated. Returns the pre-defined transformer.
- [encodeWithOptimizer(\_:to:)](updatabletemporalestimatortosupervisedadaptor/encodewithoptimizer%28__to_%29.md): Deprecated. Encodes the transformer and optimizer to an encoder.
- [decodeWithOptimizer(from:)](updatabletemporalestimatortosupervisedadaptor/decodewithoptimizer%28from_%29.md): Deprecated. Reads the encoded transformer and optimizer with a decoder.

### Fitting and updating

- [fitted(to:eventHandler:)](updatabletemporalestimatortosupervisedadaptor/fitted%28to_eventhandler_%29.md): Deprecated. Fits a transformer to a sequence of examples.
- [fitted(to:validateOn:eventHandler:)](updatabletemporalestimatortosupervisedadaptor/fitted%28to_validateon_eventhandler_%29.md): Deprecated. Fits a transformer to a sequence of examples while validating with a validation sequence.
- [makeTransformer()](updatabletemporalestimatortosupervisedadaptor/maketransformer%28%29.md): Deprecated. Creates a default-initialized transformer suitable for incremental fitting.
- [update(\_:with:eventHandler:)](updatabletemporalestimatortosupervisedadaptor/update%28__with_eventhandler_%29.md): Deprecated. Updates a transformer with a new sequence of examples.
- [update(\_:with:validateOn:eventHandler:)](updatabletemporalestimatortosupervisedadaptor/update%28__with_validateon_eventhandler_%29.md): Deprecated. Fits a transformer to a sequence of examples while validating with a validation sequence.
- [Transformer](transformer.md): A transformer that takes an input and produces an output.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SupervisedTemporalEstimator](supervisedtemporalestimator.md)
- [UpdatableSupervisedTemporalEstimator](updatablesupervisedtemporalestimator.md)

## See Also

### Updatable adaptors

- [UpdatableEstimatorToTemporalAdaptor](updatableestimatortotemporaladaptor.md): Deprecated. An updatable temporal estimator wrapping an updatable estimator.
- [UpdatableEstimatorToSupervisedAdaptor](updatableestimatortosupervisedadaptor.md): An adaptor that exposes an updatable estimator as an updatable supervised estimator.
- [UpdatableSupervisedEstimatorToTemporalAdaptor](updatablesupervisedestimatortotemporaladaptor.md): Deprecated. An updatable supervised temporal estimator wrapping an updatable supervised estimator.
