> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/updatablesupervisedestimatortotemporaladaptor](https://developer.apple.com/documentation/createmlcomponents/updatablesupervisedestimatortotemporaladaptor)

# UpdatableSupervisedEstimatorToTemporalAdaptor

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ (deprecated in 18.0) · iPadOS 16.0+ (deprecated in 18.0) · Mac Catalyst 16.0+ (deprecated in 18.0) · macOS 13.0+ (deprecated in 15.0) · tvOS 16.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

An updatable supervised temporal estimator wrapping an updatable supervised estimator.

## Declaration

```swift
struct UpdatableSupervisedEstimatorToTemporalAdaptor<Base> where Base : UpdatableSupervisedEstimator, Base.Annotation : Sendable
```

## Topics

### Creating an adaptor

- [init(\_:)](updatablesupervisedestimatortotemporaladaptor/init%28__%29.md): Deprecated. Creates a temporal supervised estimator from a supervised estimator.

### Encoding and decoding

- [encode(\_:to:)](updatablesupervisedestimatortotemporaladaptor/encode%28__to_%29.md): Deprecated. Encodes a fitted transformer.
- [decode(from:)](updatablesupervisedestimatortotemporaladaptor/decode%28from_%29.md): Deprecated. Decodes the transformer.
- [encodeWithOptimizer(\_:to:)](updatablesupervisedestimatortotemporaladaptor/encodewithoptimizer%28__to_%29.md): Deprecated. Encodes the transformer and optimizer to an encoder.
- [decodeWithOptimizer(from:)](updatablesupervisedestimatortotemporaladaptor/decodewithoptimizer%28from_%29.md): Deprecated. Reads the encoded transformer and optimizer with a decoder.

### Fitting and updating

- [fitted(to:eventHandler:)](updatablesupervisedestimatortotemporaladaptor/fitted%28to_eventhandler_%29.md): Deprecated. Fits a transformer to a sequence of examples.
- [fitted(to:validateOn:eventHandler:)](updatablesupervisedestimatortotemporaladaptor/fitted%28to_validateon_eventhandler_%29.md): Deprecated. Fits a transformer to a sequence of examples while validating with a validation sequence.
- [makeTransformer()](updatablesupervisedestimatortotemporaladaptor/maketransformer%28%29.md): Deprecated. Creates a default-initialized transformer suitable for incremental fitting.
- [update(\_:with:eventHandler:)](updatablesupervisedestimatortotemporaladaptor/update%28__with_eventhandler_%29.md): Deprecated. Updates a transformer with a new sequence of examples.
- [UpdatableSupervisedEstimatorToTemporalAdaptor.Annotation](updatablesupervisedestimatortotemporaladaptor/annotation.md): Deprecated. The annotation type.
- [UpdatableSupervisedEstimatorToTemporalAdaptor.Input](updatablesupervisedestimatortotemporaladaptor/input.md): Deprecated. The input type.
- [UpdatableSupervisedEstimatorToTemporalAdaptor.Output](updatablesupervisedestimatortotemporaladaptor/output.md): Deprecated. The output type.
- [UpdatableSupervisedEstimatorToTemporalAdaptor.Transformer](updatablesupervisedestimatortotemporaladaptor/transformer.md): Deprecated. The transformer type created by this estimator.

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
- [UpdatableTemporalEstimatorToSupervisedAdaptor](updatabletemporalestimatortosupervisedadaptor.md): Deprecated. An adaptor that exposes an updatable temporal estimator as an updatable supervised temporal estimator.
