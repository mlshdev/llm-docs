> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/slidingwindowtransformer/applied(to:eventhandler:)](https://developer.apple.com/documentation/createmlcomponents/slidingwindowtransformer/applied(to:eventhandler:))

# applied(to:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Extracts a window sequence from the input sequence

## Declaration

```swift
func applied<S>(to input: S, eventHandler: EventHandler?) throws -> SlidingWindowTransformer<Input>.WindowSequence where Input == S.Feature, S : TemporalSequence
```

## Parameters

- `input`: An async sequence of inputs.
- `eventHandler`: An event handler.

<a id="return-value"></a>

## Return Value

An async sequence of windowed outputs.

## See Also

### Performing the transformation

- [SlidingWindowTransformer.WindowSequence](windowsequence.md): Conforms when `Input` conforms to `Sendable`. An async sequence of windows.
