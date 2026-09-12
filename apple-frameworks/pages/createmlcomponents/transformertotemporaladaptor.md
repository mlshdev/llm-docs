> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/transformertotemporaladaptor](https://developer.apple.com/documentation/createmlcomponents/transformertotemporaladaptor)

# TransformerToTemporalAdaptor

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ (deprecated in 18.0) · iPadOS 16.0+ (deprecated in 18.0) · Mac Catalyst 16.0+ (deprecated in 18.0) · macOS 13.0+ (deprecated in 15.0) · tvOS 16.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

A temporal transformer that applies a regular transformer to each value of a temporal sequence.

## Declaration

```swift
struct TransformerToTemporalAdaptor<Base> where Base : Transformer
```

## Topics

### Creating a transformer

- [init(\_:)](transformertotemporaladaptor/init%28__%29.md): Deprecated. Creates a temporal transformer from a transformer.

### Applying

- [applied(to:eventHandler:)](transformertotemporaladaptor/applied%28to_eventhandler_%29.md): Deprecated. Performs the transformation on each element of the input sequence.
- [TransformerToTemporalAdaptor.Input](transformertotemporaladaptor/input.md): Deprecated. The input type.
- [TransformerToTemporalAdaptor.Output](transformertotemporaladaptor/output.md): Deprecated. The output type.
- [TransformerToTemporalAdaptor.OutputSequence](transformertotemporaladaptor/outputsequence.md): Deprecated. The output sequence type.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [TemporalTransformer](temporaltransformer.md)

## See Also

### Transformer adaptors

- [TransformerToEstimatorAdaptor](transformertoestimatoradaptor.md): An estimator that always returns a predefined transformer.
- [TransformerToUpdatableEstimatorAdaptor](transformertoupdatableestimatoradaptor.md): An updatable estimator that always returns a predefined transformer.
