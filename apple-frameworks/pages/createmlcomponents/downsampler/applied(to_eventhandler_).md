> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createmlcomponents/downsampler/applied(to:eventhandler:)

# applied(to:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Down samples the input sequence

## Declaration

```swift
func applied<S>(to input: S, eventHandler: EventHandler?) throws -> Downsampler<Input>.DownStreamSequence where Input == S.Feature, S : TemporalSequence
```

## Parameters

- `input`: An async sequence of inputs.
- `eventHandler`: An event handler.

<a id="return-value"></a>

## Return Value

An async sequence of down sampled outputs.

## See Also

### Performing the transformation

- [Downsampler.DownStreamSequence](downstreamsequence.md): Conforms when `Input` conforms to `Sendable`. An async sequence of down stream elements.
