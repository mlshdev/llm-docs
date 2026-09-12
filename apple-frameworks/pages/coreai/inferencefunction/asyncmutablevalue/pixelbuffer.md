> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/inferencefunction/asyncmutablevalue/pixelbuffer](https://developer.apple.com/documentation/coreai/inferencefunction/asyncmutablevalue/pixelbuffer)

# pixelBuffer

**Framework:** Core AI  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Consume this value to access the underlying pixel buffer once any pending write is complete.

## Declaration

```swift
var pixelBuffer: CVMutablePixelBuffer? { get async throws }
```

<a id="return-value"></a>

## Return Value

The underlying pixel buffer or `nil` if this was not an image value.

## See Also

### Accessing an async mutable value

- [ndArray](ndarray.md): Consume this value to access the underlying NDArray once any pending write is complete.
