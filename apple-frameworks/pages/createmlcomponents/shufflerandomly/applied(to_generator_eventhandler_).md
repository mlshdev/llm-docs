> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/shufflerandomly/applied(to:generator:eventhandler:)](https://developer.apple.com/documentation/createmlcomponents/shufflerandomly/applied(to:generator:eventhandler:))

# applied(to:generator:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 11.0+

Apply transformations in a random order.

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
