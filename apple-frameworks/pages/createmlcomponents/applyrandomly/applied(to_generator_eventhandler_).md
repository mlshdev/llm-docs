> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/applyrandomly/applied(to:generator:eventhandler:)](https://developer.apple.com/documentation/createmlcomponents/applyrandomly/applied(to:generator:eventhandler:))

# applied(to:generator:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 11.0+

Randomly applies a transformer on an input.

## Declaration

```swift
func applied(to input: RandomTransformer.Input, generator: inout some RandomNumberGenerator, eventHandler: EventHandler? = nil) async throws -> RandomTransformer.Output
```

## Parameters

- `input`: The input.
- `generator`: A random number generator.
- `eventHandler`: An event handler.

<a id="return-value"></a>

## Return Value

The randomly transformed input.
