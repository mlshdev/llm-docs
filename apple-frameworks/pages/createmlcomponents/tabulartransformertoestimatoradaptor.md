> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/tabulartransformertoestimatoradaptor](https://developer.apple.com/documentation/createmlcomponents/tabulartransformertoestimatoradaptor)

# TabularTransformerToEstimatorAdaptor

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

A tabular estimator that always returns a predefined tabular transformer.

## Declaration

```swift
struct TabularTransformerToEstimatorAdaptor<Transformer> where Transformer : TabularTransformer
```

## Topics

### Creating an estimator

- [init(\_:)](tabulartransformertoestimatoradaptor/init%28__%29.md): Creates a trivial tabular estimator.

### Getting the transformer

- [transformer](tabulartransformertoestimatoradaptor/transformer.md): A pre-defined tabular transformer.

### Encoding and decoding

- [encode(\_:to:)](tabulartransformertoestimatoradaptor/encode%28__to_%29.md): Does nothing since this tabular estimator uses a pre-defined tabular transformer.
- [decode(from:)](tabulartransformertoestimatoradaptor/decode%28from_%29.md): Returns the pre-defined tabular transformer.

### Fitting

- [fitted(to:eventHandler:)](tabulartransformertoestimatoradaptor/fitted%28to_eventhandler_%29.md): Returns the pre-defined tabular transformer.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [TabularEstimator](tabularestimator.md)

## See Also

### Tabular adaptors

- [TabularEstimatorToSupervisedAdaptor](tabularestimatortosupervisedadaptor.md): An adaptor that exposes a tabular estimator as a tabular supervised estimator.
- [TabularTransformerToUpdatableEstimatorAdaptor](tabulartransformertoupdatableestimatoradaptor.md): An updatable tabular estimator that always returns a predefined transformer.
- [UpdatableTabularEstimatorToSupervisedAdaptor](updatabletabularestimatortosupervisedadaptor.md): An adaptor that exposes an updatable tabular estimator as an updatable supervised tabular estimator.
