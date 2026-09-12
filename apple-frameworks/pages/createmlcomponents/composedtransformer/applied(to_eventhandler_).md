> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/composedtransformer/applied(to:eventhandler:)](https://developer.apple.com/documentation/createmlcomponents/composedtransformer/applied(to:eventhandler:))

# applied(to:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Performs the composed transformation on a single input.

## Declaration

```swift
func applied(to input: ComposedTransformer<Inner, Outer>.Input, eventHandler: EventHandler? = nil) async throws -> ComposedTransformer<Inner, Outer>.Output
```

## Parameters

- `input`: The transformer input.
- `eventHandler`: An event handler.

<a id="return-value"></a>

## Return Value

An output produced by applying the transformer to the input.

## See Also

### Performing the transformation

- [ComposedTransformer.Input](input.md): The input type.
- [ComposedTransformer.Intermediate](intermediate.md): The intermediate type.
- [ComposedTransformer.Output](output.md): The output type.
