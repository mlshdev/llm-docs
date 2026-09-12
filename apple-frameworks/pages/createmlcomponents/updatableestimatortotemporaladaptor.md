> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/updatableestimatortotemporaladaptor](https://developer.apple.com/documentation/createmlcomponents/updatableestimatortotemporaladaptor)

# UpdatableEstimatorToTemporalAdaptor

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ (deprecated in 18.0) · iPadOS 16.0+ (deprecated in 18.0) · Mac Catalyst 16.0+ (deprecated in 18.0) · macOS 13.0+ (deprecated in 15.0) · tvOS 16.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

An updatable temporal estimator wrapping an updatable estimator.

## Declaration

```swift
struct UpdatableEstimatorToTemporalAdaptor<Base> where Base : UpdatableEstimator
```

## Topics

### Creating an adaptor

- [init(\_:)](updatableestimatortotemporaladaptor/init%28__%29.md): Deprecated. Creates a temporal estimator from an estimator.

### Encoding and decoding

- [encode(\_:to:)](updatableestimatortotemporaladaptor/encode%28__to_%29.md): Deprecated. Encodes a fitted transformer.
- [decode(from:)](updatableestimatortotemporaladaptor/decode%28from_%29.md): Deprecated. Decodes the transformer.
- [encodeWithOptimizer(\_:to:)](updatableestimatortotemporaladaptor/encodewithoptimizer%28__to_%29.md): Deprecated. Encodes the transformer and optimizer to an encoder.
- [decodeWithOptimizer(from:)](updatableestimatortotemporaladaptor/decodewithoptimizer%28from_%29.md): Deprecated. Reads the encoded transformer and optimizer with a decoder.

### Fitting and updating

- [fitted(to:eventHandler:)](updatableestimatortotemporaladaptor/fitted%28to_eventhandler_%29.md): Deprecated. Fits a transformer to a sequence of examples.
- [makeTransformer()](updatableestimatortotemporaladaptor/maketransformer%28%29.md): Deprecated. Creates a default-initialized transformer suitable for incremental fitting.
- [update(\_:with:eventHandler:)](updatableestimatortotemporaladaptor/update%28__with_eventhandler_%29.md): Deprecated. Updates a transformer with a new sequence of examples.
- [UpdatableEstimatorToTemporalAdaptor.Input](updatableestimatortotemporaladaptor/input.md): Deprecated. The input type.
- [UpdatableEstimatorToTemporalAdaptor.Output](updatableestimatortotemporaladaptor/output.md): Deprecated. The output type.
- [UpdatableEstimatorToTemporalAdaptor.Transformer](updatableestimatortotemporaladaptor/transformer.md): Deprecated. The transformer type created by this estimator.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [TemporalEstimator](temporalestimator.md)
- [UpdatableTemporalEstimator](updatabletemporalestimator.md)

## See Also

### Updatable adaptors

- [UpdatableEstimatorToSupervisedAdaptor](updatableestimatortosupervisedadaptor.md): An adaptor that exposes an updatable estimator as an updatable supervised estimator.
- [UpdatableSupervisedEstimatorToTemporalAdaptor](updatablesupervisedestimatortotemporaladaptor.md): Deprecated. An updatable supervised temporal estimator wrapping an updatable supervised estimator.
- [UpdatableTemporalEstimatorToSupervisedAdaptor](updatabletemporalestimatortosupervisedadaptor.md): Deprecated. An adaptor that exposes an updatable temporal estimator as an updatable supervised temporal estimator.
