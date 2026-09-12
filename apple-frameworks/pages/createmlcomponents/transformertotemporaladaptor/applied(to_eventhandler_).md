> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/transformertotemporaladaptor/applied(to:eventhandler:)](https://developer.apple.com/documentation/createmlcomponents/transformertotemporaladaptor/applied(to:eventhandler:))

# applied(to:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ (deprecated in 18.0) · iPadOS 16.0+ (deprecated in 18.0) · Mac Catalyst 16.0+ (deprecated in 18.0) · macOS 13.0+ (deprecated in 15.0) · tvOS 16.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Performs the transformation on each element of the input sequence.

## Declaration

```swift
func applied<S>(to input: S, eventHandler: EventHandler? = nil) async throws -> AnyTemporalSequence<TransformerToTemporalAdaptor<Base>.Output> where S : TemporalSequence, Base.Input == S.Feature
```

## See Also

### Applying

- [TransformerToTemporalAdaptor.Input](input.md): Deprecated. The input type.
- [TransformerToTemporalAdaptor.Output](output.md): Deprecated. The output type.
- [TransformerToTemporalAdaptor.OutputSequence](outputsequence.md): Deprecated. The output sequence type.
