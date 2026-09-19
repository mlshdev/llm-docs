> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createmlcomponents/transformertoestimatoradaptor/fitted(to:eventhandler:)

# fitted(to:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Returns the pre-defined transformer.

## Declaration

```swift
func fitted<S>(to input: S, eventHandler: EventHandler? = nil) async throws -> Transformer where S : Sequence, Transformer.Input == S.Element
```

## Parameters

- `input`: A sequence of examples.
- `eventHandler`: An event handler.

<a id="return-value"></a>

## Return Value

The pre-defined transformer.
