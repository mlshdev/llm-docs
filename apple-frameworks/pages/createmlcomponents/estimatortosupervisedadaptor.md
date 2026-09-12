> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/estimatortosupervisedadaptor](https://developer.apple.com/documentation/createmlcomponents/estimatortosupervisedadaptor)

# EstimatorToSupervisedAdaptor

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

An adaptor that exposes an estimator as a supervised estimator.

## Declaration

```swift
struct EstimatorToSupervisedAdaptor<Estimator, Annotation> where Estimator : Estimator, Annotation : Equatable
```

## Topics

### Creating the adaptor

- [init(\_:)](estimatortosupervisedadaptor/init%28__%29.md): Creates an estimator adaptor.

### Getting the properties

- [estimator](estimatortosupervisedadaptor/estimator.md): The wrapped estimator.

### Encoding and decoding

- [encode(\_:to:)](estimatortosupervisedadaptor/encode%28__to_%29.md): Does nothing since this estimator uses a pre-defined transformer.
- [decode(from:)](estimatortosupervisedadaptor/decode%28from_%29.md): Returns the pre-defined transformer.

### Fitting a transformer

- [fitted(to:eventHandler:)](estimatortosupervisedadaptor/fitted%28to_eventhandler_%29.md): Fits a transformer to a sequence of examples, ignoring the annotations and the validation.
- [fitted(to:validateOn:eventHandler:)](estimatortosupervisedadaptor/fitted%28to_validateon_eventhandler_%29.md): Fits a transformer to a sequence of examples.
- [Transformer](transformer.md): A transformer that takes an input and produces an output.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SupervisedEstimator](supervisedestimator.md)

## See Also

### Estimator adaptors

- [EstimatorToTemporalAdaptor](estimatortotemporaladaptor.md): Deprecated. A temporal estimator wrapping an estimator.
- [SupervisedEstimatorToTemporalAdaptor](supervisedestimatortotemporaladaptor.md): Deprecated. A supervised temporal estimator wrapping a supervised estimator.
