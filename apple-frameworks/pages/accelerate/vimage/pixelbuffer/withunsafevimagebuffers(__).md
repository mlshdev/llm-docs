> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage/pixelbuffer/withunsafevimagebuffers(_:)](https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/withunsafevimagebuffers(_:))

# withUnsafeVImageBuffers(\_:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Calls the given closure with the underlying vImage buffers.

## Declaration

```swift
func withUnsafeVImageBuffers<R>(_ body: ([vImage_Buffer]) throws -> R) rethrows -> R
```

## Parameters

- `body`: A closure with a [vImage_Buffer](../../vimage_buffer.md) parameter that points to the underlying vImage buffers of the pixel buffer.

<a id="return-value"></a>

## Return Value

The return value, if any, of the body closure parameter.

<a id="Discussion"></a>

## Discussion

Use this function to incorporate pixel buffer based image processing code with existing vImage code. For example, the following code accesses each multiple-plane pixel buffer’s underlying vImage buffers’ `rowBytes` property:

```swift
 let src = vImage.PixelBuffer<vImage.Planar8x4>(size: vImage.Size(width: 32,
                                                                 height: 64))

 src.withUnsafeVImageBuffers { vImageBuffers in
    for buffer in vImageBuffers {
        print(buffer.rowBytes)
     }
 }
```

## See Also

### Accessing underlying vImage buffers

- [withUnsafePointerToVImageBuffer(\_:)](withunsafepointertovimagebuffer%28__%29.md): Conforms when `Format` conforms to `SinglePlanePixelFormat`. Calls the given closure with an unsafe pointer to the underlying vImage buffer.
- [withUnsafeVImageBuffer(\_:)](withunsafevimagebuffer%28__%29.md): Conforms when `Format` conforms to `SinglePlanePixelFormat`. Calls the given closure with the underlying vImage buffer.
