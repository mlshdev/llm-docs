> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/inferencefunction/asyncvalue/ndarray](https://developer.apple.com/documentation/coreai/inferencefunction/asyncvalue/ndarray)

# ndArray

**Framework:** Core AI  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Waits for any pending write access on the underlying ndArray to complete, then returns it.

## Declaration

```swift
final var ndArray: NDArray? { get async throws }
```

<a id="discussion"></a>

## Discussion

> **Note**

> If this value was constructed from a provided MTLBuffer directly, then this will return a copy of the data to avoid unsafe aliasing. If aliasing is desired, you can work with the original MTLBuffer directly.

Returns `nil` if `kind` is not `.ndArray`.

## See Also

### Accessing an async value

- [kind](kind.md): The kind of inference value held by this async value.
- [pixelBuffer](pixelbuffer.md): Waits for any pending write access on the underlying pixel buffer to complete, then returns it.
