> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/inferencefunction/asyncvalue/pixelbuffer](https://developer.apple.com/documentation/coreai/inferencefunction/asyncvalue/pixelbuffer)

# pixelBuffer

**Framework:** Core AI  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Waits for any pending write access on the underlying pixel buffer to complete, then returns it.

## Declaration

```swift
final var pixelBuffer: CVReadOnlyPixelBuffer? { get async throws }
```

<a id="discussion"></a>

## Discussion

Returns `nil` if `kind` is not `.image`.

## See Also

### Accessing an async value

- [kind](kind.md): The kind of inference value held by this async value.
- [ndArray](ndarray.md): Waits for any pending write access on the underlying ndArray to complete, then returns it.
