> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/uniformrandomfloatingpointparameter/applied(to:generator:eventhandler:)](https://developer.apple.com/documentation/createmlcomponents/uniformrandomfloatingpointparameter/applied(to:generator:eventhandler:))

# applied(to:generator:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 11.0+

Performs the random apply operation on the input.

## Declaration

```swift
func applied(to input: RandomTransformer.Input, generator: inout some RandomNumberGenerator, eventHandler: EventHandler? = nil) async throws -> RandomTransformer.Output
```

## Parameters

- `input`: An input.
- `generator`: A random number generator.
- `eventHandler`: An event handler.

<a id="return-value"></a>

## Return Value

The randomly transformed image.
