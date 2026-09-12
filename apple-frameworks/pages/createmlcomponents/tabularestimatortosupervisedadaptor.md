> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/tabularestimatortosupervisedadaptor](https://developer.apple.com/documentation/createmlcomponents/tabularestimatortosupervisedadaptor)

# TabularEstimatorToSupervisedAdaptor

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

An adaptor that exposes a tabular estimator as a tabular supervised estimator.

## Declaration

```swift
struct TabularEstimatorToSupervisedAdaptor<Estimator, Annotation> where Estimator : TabularEstimator
```

## Topics

### Creating an adaptor

- [init(\_:annotationColumnID:)](tabularestimatortosupervisedadaptor/init%28__annotationcolumnid_%29.md): Creates a tabular estimator supervised adaptor.

### Getting the properties

- [annotationColumnID](tabularestimatortosupervisedadaptor/annotationcolumnid.md): The annotation column identifier.
- [estimator](tabularestimatortosupervisedadaptor/estimator.md): The wrapped estimator.

### Encoding and decoding

- [encode(\_:to:)](tabularestimatortosupervisedadaptor/encode%28__to_%29.md): Encodes a fitted transformer.
- [decode(from:)](tabularestimatortosupervisedadaptor/decode%28from_%29.md): Decodes a previously fitted transformer.

### Fitting

- [fitted(to:validateOn:eventHandler:)](tabularestimatortosupervisedadaptor/fitted%28to_validateon_eventhandler_%29.md): Returns the tabular transformer fitted using the provided tabular estimator.
- [Transformer](transformer.md): A transformer that takes an input and produces an output.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SupervisedTabularEstimator](supervisedtabularestimator.md)

## See Also

### Tabular adaptors

- [TabularTransformerToEstimatorAdaptor](tabulartransformertoestimatoradaptor.md): A tabular estimator that always returns a predefined tabular transformer.
- [TabularTransformerToUpdatableEstimatorAdaptor](tabulartransformertoupdatableestimatoradaptor.md): An updatable tabular estimator that always returns a predefined transformer.
- [UpdatableTabularEstimatorToSupervisedAdaptor](updatabletabularestimatortosupervisedadaptor.md): An adaptor that exposes an updatable tabular estimator as an updatable supervised tabular estimator.
