> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/randomtransformer/applied(to:generator:eventhandler:)](https://developer.apple.com/documentation/createmlcomponents/randomtransformer/applied(to:generator:eventhandler:))

# applied(to:generator:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 11.0+

Performs the random transformation on a single input.

## Declaration

```swift
func applied(to input: Self.Input, generator: inout some RandomNumberGenerator, eventHandler: EventHandler?) async throws -> Self.Output
```

## Parameters

- `input`: The random transformer input.
- `generator`: A random number generator.
- `eventHandler`: An event handler.

<a id="return-value"></a>

## Return Value

An output produced by applying the random transformer to the input.

## See Also

### Performing the transformation

- [Input](input.md): The input type.
- [Output](output.md): The output type.
