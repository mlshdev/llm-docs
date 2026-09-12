> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/estimatortotemporaladaptor](https://developer.apple.com/documentation/createmlcomponents/estimatortotemporaladaptor)

# EstimatorToTemporalAdaptor

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ (deprecated in 18.0) · iPadOS 16.0+ (deprecated in 18.0) · Mac Catalyst 16.0+ (deprecated in 18.0) · macOS 13.0+ (deprecated in 15.0) · tvOS 16.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

A temporal estimator wrapping an estimator.

## Declaration

```swift
struct EstimatorToTemporalAdaptor<Base> where Base : Estimator
```

## Topics

### Creating the estimator

- [init(\_:)](estimatortotemporaladaptor/init%28__%29.md): Deprecated. Creates a temporal estimator from an estimator.

### Encoding and decoding

- [encode(\_:to:)](estimatortotemporaladaptor/encode%28__to_%29.md): Deprecated. Encodes a fitted transformer.
- [decode(from:)](estimatortotemporaladaptor/decode%28from_%29.md): Deprecated. Decodes the transformer.

### Fitting a transformer

- [fitted(to:eventHandler:)](estimatortotemporaladaptor/fitted%28to_eventhandler_%29.md): Deprecated. Fits a transformer to a sequence of examples.
- [EstimatorToTemporalAdaptor.Input](estimatortotemporaladaptor/input.md): Deprecated. The input type.
- [EstimatorToTemporalAdaptor.Output](estimatortotemporaladaptor/output.md): Deprecated. The output type.
- [EstimatorToTemporalAdaptor.Transformer](estimatortotemporaladaptor/transformer.md): Deprecated. The transformer type created by this estimator.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [TemporalEstimator](temporalestimator.md)

## See Also

### Estimator adaptors

- [EstimatorToSupervisedAdaptor](estimatortosupervisedadaptor.md): An adaptor that exposes an estimator as a supervised estimator.
- [SupervisedEstimatorToTemporalAdaptor](supervisedestimatortotemporaladaptor.md): Deprecated. A supervised temporal estimator wrapping a supervised estimator.
