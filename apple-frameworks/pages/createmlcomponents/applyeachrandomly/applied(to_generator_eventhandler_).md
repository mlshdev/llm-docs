> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createmlcomponents/applyeachrandomly/applied(to:generator:eventhandler:)

# applied(to:generator:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 11.0+

Applies each transformer randomly in order with a probability.

## Declaration

```swift
func applied(to input: Element, generator: inout some RandomNumberGenerator, eventHandler: EventHandler? = nil) async throws -> Element
```

## Parameters

- `input`: The input to the transformer.
- `generator`: A random number generator.
- `eventHandler`: An event handler.

<a id="return-value"></a>

## Return Value

The augmented input.
