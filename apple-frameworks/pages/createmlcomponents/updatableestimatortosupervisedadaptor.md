> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/updatableestimatortosupervisedadaptor](https://developer.apple.com/documentation/createmlcomponents/updatableestimatortosupervisedadaptor)

# UpdatableEstimatorToSupervisedAdaptor

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

An adaptor that exposes an updatable estimator as an updatable supervised estimator.

## Declaration

```swift
struct UpdatableEstimatorToSupervisedAdaptor<Estimator, Annotation> where Estimator : UpdatableEstimator, Annotation : Equatable
```

## Topics

### Creating an adaptor

- [init(\_:)](updatableestimatortosupervisedadaptor/init%28__%29.md): Creates an estimator adaptor.

### Getting the estimator

- [estimator](updatableestimatortosupervisedadaptor/estimator.md): The wrapped estimator.

### Encoding and decoding

- [encode(\_:to:)](updatableestimatortosupervisedadaptor/encode%28__to_%29.md): Does nothing since this estimator uses a pre-defined transformer.
- [decode(from:)](updatableestimatortosupervisedadaptor/decode%28from_%29.md): Returns the pre-defined transformer.
- [encodeWithOptimizer(\_:to:)](updatableestimatortosupervisedadaptor/encodewithoptimizer%28__to_%29.md): Encodes the transformer and optimizer to an encoder.
- [decodeWithOptimizer(from:)](updatableestimatortosupervisedadaptor/decodewithoptimizer%28from_%29.md): Reads the encoded transformer and optimizer.

### Fitting and Updating

- [fitted(to:eventHandler:)](updatableestimatortosupervisedadaptor/fitted%28to_eventhandler_%29.md): Fits a transformer to a sequence of examples, ignoring the annotations and the validation.
- [fitted(to:validateOn:eventHandler:)](updatableestimatortosupervisedadaptor/fitted%28to_validateon_eventhandler_%29.md): Fits a transformer to a sequence of examples.
- [makeTransformer()](updatableestimatortosupervisedadaptor/maketransformer%28%29.md): Creates a default-initialized transformer suitable for incremental fitting.
- [update(\_:with:eventHandler:)](updatableestimatortosupervisedadaptor/update%28__with_eventhandler_%29.md): Updates a transformer with a new sequence of examples.
- [update(\_:with:validateOn:eventHandler:)](updatableestimatortosupervisedadaptor/update%28__with_validateon_eventhandler_%29.md): Fits a transformer to a sequence of examples while validating with a validation sequence.
- [Transformer](transformer.md): A transformer that takes an input and produces an output.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SupervisedEstimator](supervisedestimator.md)
- [UpdatableSupervisedEstimator](updatablesupervisedestimator.md)

## See Also

### Updatable adaptors

- [UpdatableEstimatorToTemporalAdaptor](updatableestimatortotemporaladaptor.md): Deprecated. An updatable temporal estimator wrapping an updatable estimator.
- [UpdatableSupervisedEstimatorToTemporalAdaptor](updatablesupervisedestimatortotemporaladaptor.md): Deprecated. An updatable supervised temporal estimator wrapping an updatable supervised estimator.
- [UpdatableTemporalEstimatorToSupervisedAdaptor](updatabletemporalestimatortosupervisedadaptor.md): Deprecated. An adaptor that exposes an updatable temporal estimator as an updatable supervised temporal estimator.
