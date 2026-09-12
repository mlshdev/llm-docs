> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/tabulartransformertoupdatableestimatoradaptor](https://developer.apple.com/documentation/createmlcomponents/tabulartransformertoupdatableestimatoradaptor)

# TabularTransformerToUpdatableEstimatorAdaptor

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

An updatable tabular estimator that always returns a predefined transformer.

## Declaration

```swift
struct TabularTransformerToUpdatableEstimatorAdaptor<Transformer> where Transformer : TabularTransformer
```

## Topics

### Creating an estimator

- [init(\_:)](tabulartransformertoupdatableestimatoradaptor/init%28__%29.md): Creates an updatable tabular estimator from a tabular transformer.

### Creating a default transformer

- [makeTransformer()](tabulartransformertoupdatableestimatoradaptor/maketransformer%28%29.md): Creates a default-initialized transformer suitable for incremental fitting.

### Getting the transformer

- [transformer](tabulartransformertoupdatableestimatoradaptor/transformer.md): A pre-defined transformer.

### Encoding and decoding

- [encode(\_:to:)](tabulartransformertoupdatableestimatoradaptor/encode%28__to_%29.md): Does nothing since this estimator uses a pre-defined transformer.
- [decode(from:)](tabulartransformertoupdatableestimatoradaptor/decode%28from_%29.md): Returns the pre-defined transformer.
- [encodeWithOptimizer(\_:to:)](tabulartransformertoupdatableestimatoradaptor/encodewithoptimizer%28__to_%29.md): Does nothing since this estimator uses a pre-defined transformer.
- [decodeWithOptimizer(from:)](tabulartransformertoupdatableestimatoradaptor/decodewithoptimizer%28from_%29.md): Returns the pre-defined transformer.

### Fitting

- [fitted(to:eventHandler:)](tabulartransformertoupdatableestimatoradaptor/fitted%28to_eventhandler_%29.md): Returns the pre-defined transformer.
- [update(\_:with:eventHandler:)](tabulartransformertoupdatableestimatoradaptor/update%28__with_eventhandler_%29.md): Does nothing since this estimator uses a pre-defined transformer.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [TabularEstimator](tabularestimator.md)
- [UpdatableTabularEstimator](updatabletabularestimator.md)

## See Also

### Tabular adaptors

- [TabularEstimatorToSupervisedAdaptor](tabularestimatortosupervisedadaptor.md): An adaptor that exposes a tabular estimator as a tabular supervised estimator.
- [TabularTransformerToEstimatorAdaptor](tabulartransformertoestimatoradaptor.md): A tabular estimator that always returns a predefined tabular transformer.
- [UpdatableTabularEstimatorToSupervisedAdaptor](updatabletabularestimatortosupervisedadaptor.md): An adaptor that exposes an updatable tabular estimator as an updatable supervised tabular estimator.
