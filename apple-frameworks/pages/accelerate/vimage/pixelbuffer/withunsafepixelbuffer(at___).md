> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage/pixelbuffer/withunsafepixelbuffer(at:_:)](https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/withunsafepixelbuffer(at:_:))

# withUnsafePixelBuffer(at:\_:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Calls the given closure with the pixel buffer that references the individual plane at the given index.

## Declaration

```swift
func withUnsafePixelBuffer<R>(at index: Int, _ body: (vImage.PixelBuffer<Format.PlanarPixelFormat>) throws -> R) rethrows -> R
```

## Parameters

- `index`: The index of the plane.
- `body`: A closure with a [vImage.PixelBuffer](../pixelbuffer.md) parameter that points to the underlying pixel buffer at the given index.

<a id="return-value"></a>

## Return Value

The return value, if any, of the body closure parameter.

<a id="Discussion"></a>

## Discussion

Use this function to access a single planar pixel buffer from a multiple-plane pixel buffer. For example, the following code converts the 8-bit pixels at plane `2` to 32-bit and writes the result to `dest`:

```swift
 let src = vImage.PixelBuffer<vImage.Planar8x4>(size: vImage.Size(width: 32,
                                                                  height: 64))

 let dest = vImage.PixelBuffer<vImage.PlanarF>(size: src.size)

 src.withUnsafePixelBuffer(at: 2) { vImageBuffer in

     vImageBuffer.convert(to: dest)
 }
```

## See Also

### Accessing component pixel buffers

- [withUnsafePixelBuffers(\_:)](withunsafepixelbuffers%28__%29.md): Conforms when `Format` conforms to `MultiplePlanePixelFormat`. Calls the given closure with the array of pixel buffers that reference the individual planes.
