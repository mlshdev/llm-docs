> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlshapedarray/withmutablepixelbufferifavailable(_:)](https://developer.apple.com/documentation/coreml/mlshapedarray/withmutablepixelbufferifavailable(_:))

# withMutablePixelBufferIfAvailable(\_:)

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 1.0+ · watchOS 11.0+

Writes to the underlying pixel buffer.

## Declaration

```swift
mutating func withMutablePixelBufferIfAvailable<R>(_ body: (CVPixelBuffer) throws -> R) rethrows -> R?
```

## Parameters

- `body`: The closure to run with the pixel buffer.

<a id="discussion"></a>

## Discussion

Use this method to writes the contents of the underlying pixel buffer.

```swift
let array = MLShapedArray<Float16>(mutating: pixelBuffer, shape: [2, 3])
array.withMutablePixelBuffer { backingPixelBuffer in
     // write backingPixelBuffer here.
}
```

## See Also

### Reading and writing the pixel buffer

- [withPixelBufferIfAvailable(\_:)](withpixelbufferifavailable%28__%29.md): Reads the underlying pixel buffer.
