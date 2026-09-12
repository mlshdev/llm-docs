> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/inferencefunction/asyncmutablevalue/ndarray](https://developer.apple.com/documentation/coreai/inferencefunction/asyncmutablevalue/ndarray)

# ndArray

**Framework:** Core AI  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Consume this value to access the underlying NDArray once any pending write is complete.

## Declaration

```swift
var ndArray: NDArray? { get async throws }
```

<a id="return-value"></a>

## Return Value

The underlying ndArray or `nil` if this was not an ndArray value.

<a id="discussion"></a>

## Discussion

> **Note**

> If this value was constructed from a metal buffer directly, then the returned NDArray will be a copy of it. If aliasing is intended, you can work with the original metal buffer directly.

## See Also

### Accessing an async mutable value

- [pixelBuffer](pixelbuffer.md): Consume this value to access the underlying pixel buffer once any pending write is complete.
