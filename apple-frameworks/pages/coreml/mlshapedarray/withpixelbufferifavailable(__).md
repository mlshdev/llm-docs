> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlshapedarray/withpixelbufferifavailable(_:)](https://developer.apple.com/documentation/coreml/mlshapedarray/withpixelbufferifavailable(_:))

# withPixelBufferIfAvailable(\_:)

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 1.0+ · watchOS 11.0+

Reads the underlying pixel buffer.

## Declaration

```swift
func withPixelBufferIfAvailable<R>(_ body: (CVPixelBuffer) throws -> R) rethrows -> R?
```

## Parameters

- `body`: The closure to run with the pixel buffer.

<a id="return-value"></a>

## Return Value

The value returned from body, unless the shaped array doesn’t use a pixel buffer backing, in which case the method ignores body and returns nil.

<a id="discussion"></a>

## Discussion

Use this method to read the contents of the underlying pixel buffer. The pixel buffer is read only. Do not write to it.

```swift
let array = MLShapedArray<Float16>(mutating: pixelBuffer, shape: [2, 3])
array.withPixelBuffer { backingPixelBuffer in
     // read backingPixelBuffer here.
}
```

## See Also

### Reading and writing the pixel buffer

- [withMutablePixelBufferIfAvailable(\_:)](withmutablepixelbufferifavailable%28__%29.md): Writes to the underlying pixel buffer.
