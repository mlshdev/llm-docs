> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/temporaladaptor](https://developer.apple.com/documentation/createmlcomponents/temporaladaptor)

# TemporalAdaptor

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A temporal transformer that applies a regular transformer to each value of a temporal sequence.

## Declaration

```swift
struct TemporalAdaptor<Base> where Base : Transformer, Base : Sendable
```

## Topics

### Creating a temporal adaptor

- [init(\_:)](temporaladaptor/init%28__%29.md): Creates a temporal transformer from a transformer.

### Applying a temporal adapter

- [applied(to:eventHandler:)](temporaladaptor/applied%28to_eventhandler_%29.md): Performs the transformation on each element of the input sequence.

### Supporting types

- [TemporalAdaptor.Input](temporaladaptor/input.md): The input type.
- [TemporalAdaptor.Output](temporaladaptor/output.md): The output type.
- [TemporalAdaptor.OutputSequence](temporaladaptor/outputsequence.md): The output sequence type.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [TemporalTransformer](temporaltransformer.md)

## See Also

### Temporal adaptors

- [TemporalTransformerToEstimatorAdaptor](temporaltransformertoestimatoradaptor.md): Deprecated. A temporal estimator that always returns a predefined temporal transformer.
- [TemporalEstimatorToSupervisedAdaptor](temporalestimatortosupervisedadaptor.md): Deprecated. An adaptor that exposes a temporal estimator as a supervised temporal estimator.
- [TemporalTransformerToUpdatableEstimatorAdaptor](temporaltransformertoupdatableestimatoradaptor.md): Deprecated. A temporal estimator that always returns a predefined temporal transformer.
