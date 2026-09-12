> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/updatabletabularestimatortosupervisedadaptor](https://developer.apple.com/documentation/createmlcomponents/updatabletabularestimatortosupervisedadaptor)

# UpdatableTabularEstimatorToSupervisedAdaptor

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

An adaptor that exposes an updatable tabular estimator as an updatable supervised tabular estimator.

## Declaration

```swift
struct UpdatableTabularEstimatorToSupervisedAdaptor<Estimator, Annotation> where Estimator : UpdatableTabularEstimator, Annotation : Equatable
```

## Topics

### Creating an adaptor

- [init(\_:annotationColumnID:)](updatabletabularestimatortosupervisedadaptor/init%28__annotationcolumnid_%29.md): Creates an updatable tabular estimator supervised adaptor.

### Getting the properties

- [annotationColumnID](updatabletabularestimatortosupervisedadaptor/annotationcolumnid.md): The annotation column identifier.
- [estimator](updatabletabularestimatortosupervisedadaptor/estimator.md): The wrapped estimator.

### Encoding and decoding

- [encode(\_:to:)](updatabletabularestimatortosupervisedadaptor/encode%28__to_%29.md): Does nothing since this estimator uses a pre-defined transformer.
- [decode(from:)](updatabletabularestimatortosupervisedadaptor/decode%28from_%29.md): Returns the pre-defined transformer.
- [encodeWithOptimizer(\_:to:)](updatabletabularestimatortosupervisedadaptor/encodewithoptimizer%28__to_%29.md): Encodes the transformer and optimizer to an encoder.
- [decodeWithOptimizer(from:)](updatabletabularestimatortosupervisedadaptor/decodewithoptimizer%28from_%29.md): Reads the encoded transformer and optimizer.

### Fitting

- [fitted(to:validateOn:eventHandler:)](updatabletabularestimatortosupervisedadaptor/fitted%28to_validateon_eventhandler_%29.md): Fits a transformer to a data frame.
- [makeTransformer()](updatabletabularestimatortosupervisedadaptor/maketransformer%28%29.md): Creates a default-initialized transformer suitable for incremental fitting.
- [update(\_:with:eventHandler:)](updatabletabularestimatortosupervisedadaptor/update%28__with_eventhandler_%29.md): Updates a transformer with a new data frame containing examples.
- [Transformer](transformer.md): A transformer that takes an input and produces an output.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SupervisedTabularEstimator](supervisedtabularestimator.md)
- [UpdatableSupervisedTabularEstimator](updatablesupervisedtabularestimator.md)

## See Also

### Tabular adaptors

- [TabularEstimatorToSupervisedAdaptor](tabularestimatortosupervisedadaptor.md): An adaptor that exposes a tabular estimator as a tabular supervised estimator.
- [TabularTransformerToEstimatorAdaptor](tabulartransformertoestimatoradaptor.md): A tabular estimator that always returns a predefined tabular transformer.
- [TabularTransformerToUpdatableEstimatorAdaptor](tabulartransformertoupdatableestimatoradaptor.md): An updatable tabular estimator that always returns a predefined transformer.
