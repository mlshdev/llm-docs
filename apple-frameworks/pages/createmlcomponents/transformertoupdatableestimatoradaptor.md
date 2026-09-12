> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/transformertoupdatableestimatoradaptor](https://developer.apple.com/documentation/createmlcomponents/transformertoupdatableestimatoradaptor)

# TransformerToUpdatableEstimatorAdaptor

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

An updatable estimator that always returns a predefined transformer.

## Declaration

```swift
struct TransformerToUpdatableEstimatorAdaptor<Transformer> where Transformer : Transformer
```

## Topics

### Creating an estimator

- [init(\_:)](transformertoupdatableestimatoradaptor/init%28__%29.md): Creates a trivial estimator.

### Getting the transformer

- [transformer](transformertoupdatableestimatoradaptor/transformer.md): A pre-defined transformer.

### Encoding and decoding

- [encode(\_:to:)](transformertoupdatableestimatoradaptor/encode%28__to_%29.md): Does nothing since this estimator uses a pre-defined transformer.
- [decode(from:)](transformertoupdatableestimatoradaptor/decode%28from_%29.md): Returns the pre-defined transformer.
- [encodeWithOptimizer(\_:to:)](transformertoupdatableestimatoradaptor/encodewithoptimizer%28__to_%29.md): Does nothing since this estimator uses a pre-defined transformer.
- [decodeWithOptimizer(from:)](transformertoupdatableestimatoradaptor/decodewithoptimizer%28from_%29.md): Returns the pre-defined transformer.

### Fitting and updating

- [fitted(to:eventHandler:)](transformertoupdatableestimatoradaptor/fitted%28to_eventhandler_%29.md): Returns the pre-defined transformer.
- [makeTransformer()](transformertoupdatableestimatoradaptor/maketransformer%28%29.md): Creates a default-initialized transformer suitable for incremental fitting.
- [update(\_:with:eventHandler:)](transformertoupdatableestimatoradaptor/update%28__with_eventhandler_%29.md): Does nothing since this estimator uses a pre-defined transformer.

## Relationships

### Conforms To

- [Estimator](estimator.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UpdatableEstimator](updatableestimator.md)

## See Also

### Transformer adaptors

- [TransformerToEstimatorAdaptor](transformertoestimatoradaptor.md): An estimator that always returns a predefined transformer.
- [TransformerToTemporalAdaptor](transformertotemporaladaptor.md): Deprecated. A temporal transformer that applies a regular transformer to each value of a temporal sequence.
