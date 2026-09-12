> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/transformertoestimatoradaptor](https://developer.apple.com/documentation/createmlcomponents/transformertoestimatoradaptor)

# TransformerToEstimatorAdaptor

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

An estimator that always returns a predefined transformer.

## Declaration

```swift
struct TransformerToEstimatorAdaptor<Transformer> where Transformer : Transformer
```

## Topics

### Creating a feature

- [init(\_:)](transformertoestimatoradaptor/init%28__%29.md): Creates a trivial estimator.

### Getting the transformer

- [transformer](transformertoestimatoradaptor/transformer.md): A pre-defined transformer.

### Encoding and Decoding

- [encode(\_:to:)](transformertoestimatoradaptor/encode%28__to_%29.md): Does nothing since this estimator uses a pre-defined transformer.
- [decode(from:)](transformertoestimatoradaptor/decode%28from_%29.md): Returns the pre-defined transformer.

### Fitting

- [fitted(to:eventHandler:)](transformertoestimatoradaptor/fitted%28to_eventhandler_%29.md): Returns the pre-defined transformer.

## Relationships

### Conforms To

- [Estimator](estimator.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Transformer adaptors

- [TransformerToTemporalAdaptor](transformertotemporaladaptor.md): Deprecated. A temporal transformer that applies a regular transformer to each value of a temporal sequence.
- [TransformerToUpdatableEstimatorAdaptor](transformertoupdatableestimatoradaptor.md): An updatable estimator that always returns a predefined transformer.
