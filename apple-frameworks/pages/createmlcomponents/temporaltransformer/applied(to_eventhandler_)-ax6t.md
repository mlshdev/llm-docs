> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createmlcomponents/temporaltransformer/applied(to:eventhandler:)-ax6t

# applied(to:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Performs the transformation on a sequence of input sequences.

## Declaration

```swift
func applied<S>(to input: S, eventHandler: EventHandler? = nil) async throws -> [Self.OutputSequence] where S : Sequence, Self.Input == S.Element.Feature, S.Element : TemporalSequence
```

## Parameters

- `input`: The transformer inputs.
- `eventHandler`: An event handler.

<a id="return-value"></a>

## Return Value

The outputs produced by applying the transformer to the inputs.
