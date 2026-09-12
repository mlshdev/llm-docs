> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/composedtemporaltransformer/applied(to:eventhandler:)](https://developer.apple.com/documentation/createmlcomponents/composedtemporaltransformer/applied(to:eventhandler:))

# applied(to:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Performs the composed transformation on an input sequence.

## Declaration

```swift
func applied<S>(to input: S, eventHandler: EventHandler? = nil) async throws -> ComposedTemporalTransformer<Inner, Outer>.OutputSequence where S : TemporalSequence, Inner.Input == S.Feature
```

## Parameters

- `input`: The input temporal sequence.
- `eventHandler`: An event handler.

<a id="return-value"></a>

## Return Value

An async sequence produced by applying the transformation to the input.

## See Also

### Applying a transformer

- [ComposedTemporalTransformer.Intermediate](intermediate.md): The intermediate type.
- [ComposedTemporalTransformer.Input](input.md): The input type.
- [ComposedTemporalTransformer.Output](output.md): The output type.
- [ComposedTemporalTransformer.OutputSequence](outputsequence.md): The output sequence type.
