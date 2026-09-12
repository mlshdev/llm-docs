> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/inferencevalue/ndarray](https://developer.apple.com/documentation/coreai/inferencevalue/ndarray)

# ndArray

**Framework:** Core AI  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The array that the value wraps.

## Declaration

```swift
var ndArray: NDArray? { get }
```

<a id="discussion"></a>

## Discussion

This property is `nil` when the value contains an image instead of an array. Accessing this property consumes the value and transfers ownership of the array to the caller.

## See Also

### Inspecting a value

- [kind](kind-swift.property.md): The kind of data this value contains.
- [pixelBuffer](pixelbuffer.md): Consume this value to access the underlying pixel buffer.
