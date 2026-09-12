> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/inferencevalue/pixelbuffer](https://developer.apple.com/documentation/coreai/inferencevalue/pixelbuffer)

# pixelBuffer

**Framework:** Core AI  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Consume this value to access the underlying pixel buffer.

## Declaration

```swift
var pixelBuffer: CVMutablePixelBuffer? { get }
```

<a id="return-value"></a>

## Return Value

The underlying pixel buffer or `nil` if this was not an image value.

## Mentioned In

- [Integrating on-device AI models in your app with Core AI](../integrating-on-device-ai-models-in-your-app-with-core-ai.md)

## See Also

### Inspecting a value

- [kind](kind-swift.property.md): The kind of data this value contains.
- [ndArray](ndarray.md): The array that the value wraps.
