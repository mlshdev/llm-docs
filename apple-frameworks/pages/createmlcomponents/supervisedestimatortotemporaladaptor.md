> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/supervisedestimatortotemporaladaptor](https://developer.apple.com/documentation/createmlcomponents/supervisedestimatortotemporaladaptor)

# SupervisedEstimatorToTemporalAdaptor

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ (deprecated in 18.0) · iPadOS 16.0+ (deprecated in 18.0) · Mac Catalyst 16.0+ (deprecated in 18.0) · macOS 13.0+ (deprecated in 15.0) · tvOS 16.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

A supervised temporal estimator wrapping a supervised estimator.

## Declaration

```swift
struct SupervisedEstimatorToTemporalAdaptor<Base> where Base : SupervisedEstimator, Base.Annotation : Sendable
```

## Topics

### Creating an estimator

- [init(\_:)](supervisedestimatortotemporaladaptor/init%28__%29.md): Deprecated. Creates a temporal supervised estimator from a supervised estimator.

### Encoding and decoding

- [encode(\_:to:)](supervisedestimatortotemporaladaptor/encode%28__to_%29.md): Deprecated. Encodes a fitted transformer.
- [decode(from:)](supervisedestimatortotemporaladaptor/decode%28from_%29.md): Deprecated. Decodes the transformer.

### Fitting

- [fitted(to:eventHandler:)](supervisedestimatortotemporaladaptor/fitted%28to_eventhandler_%29.md): Deprecated. Fits a transformer to a sequence of examples.
- [fitted(to:validateOn:eventHandler:)](supervisedestimatortotemporaladaptor/fitted%28to_validateon_eventhandler_%29.md): Deprecated. Fits a transformer to a sequence of examples while validating with a validation sequence.
- [SupervisedEstimatorToTemporalAdaptor.Annotation](supervisedestimatortotemporaladaptor/annotation.md): Deprecated. The annotation type.
- [SupervisedEstimatorToTemporalAdaptor.Input](supervisedestimatortotemporaladaptor/input.md): Deprecated. The input type.
- [SupervisedEstimatorToTemporalAdaptor.Output](supervisedestimatortotemporaladaptor/output.md): Deprecated. The output type.
- [SupervisedEstimatorToTemporalAdaptor.Transformer](supervisedestimatortotemporaladaptor/transformer.md): Deprecated. The transformer type created by this estimator.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SupervisedTemporalEstimator](supervisedtemporalestimator.md)

## See Also

### Estimator adaptors

- [EstimatorToSupervisedAdaptor](estimatortosupervisedadaptor.md): An adaptor that exposes an estimator as a supervised estimator.
- [EstimatorToTemporalAdaptor](estimatortotemporaladaptor.md): Deprecated. A temporal estimator wrapping an estimator.
