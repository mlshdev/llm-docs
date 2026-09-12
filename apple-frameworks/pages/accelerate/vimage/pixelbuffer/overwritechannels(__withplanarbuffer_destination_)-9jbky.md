> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage/pixelbuffer/overwritechannels(_:withplanarbuffer:destination:)-9jbky](https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/overwritechannels(_:withplanarbuffer:destination:)-9jbky)

# overwriteChannels(\_:withPlanarBuffer:destination:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Overwrites the pixels of one or more channels of the pixel buffer with the provided 8-bit planar pixel buffer.

## Declaration

```swift
func overwriteChannels(_ channels: [UInt8], withPlanarBuffer buffer: vImage.PixelBuffer<vImage.Planar8>, destination: vImage.PixelBuffer<Format>)
```

## Parameters

- `channels`: An array that contains the indices of the channels that the function overwrites.
- `buffer`: The planar buffer that the function writes to the channels.
- `destination`: The destination pixel buffer.

<a id="Discussion"></a>

## Discussion

Use this function to overwrite one or more channels of an interleaved buffer with a planar buffer. The following code overwrites channels `1` and `3` with the values in `overwriteValues`:

```swift
let pixelValues: [Pixel_8] = [ 1, 2, 3, 4,
                               5, 6, 7, 8 ]
let buffer = vImage.PixelBuffer(pixelValues: pixelValues,
                                size: vImage.Size(width: 1,
                                                  height: 2),
                                pixelFormat: vImage.Interleaved8x4.self)

let destination = vImage.PixelBuffer(size: vImage.Size(width: 1,
                                                       height: 2),
                                     pixelFormat: vImage.Interleaved8x4.self)

let overwriteValues: [Pixel_8] = [ 101,
                                   102 ]

let overwriteBuffer = vImage.PixelBuffer<vImage.Planar8>(pixelValues: overwriteValues,
                                                         size: vImage.Size(width: 1,
                                                                           height: 2))

buffer.overwriteChannels([3, 1],
                         withPlanarBuffer: overwriteBuffer,
                         destination: destination)
```

On return, `destination.array` contains the following values:

```swift
[ 1, 101, 3, 101,
  5, 102, 7, 102 ]
```

## See Also

### Overwriting Channels

- [overwriteChannels(withScalar:)](overwritechannels%28withscalar_%29-3zb93.md): Conforms when `Format` is `vImage.Planar8`. Overwrites the pixels of the pixel buffer with the provided 8-bit scalar value.
- [overwriteChannels(withScalar:)](overwritechannels%28withscalar_%29-1hrrg.md): Conforms when `Format` is `vImage.Planar16F`. Overwrites the pixels of the pixel buffer with the provided floating-point 16-bit scalar value.
- [overwriteChannels(withScalar:)](overwritechannels%28withscalar_%29-1wm1o.md): Conforms when `Format` is `vImage.PlanarF`. Overwrites the pixels of the pixel buffer with the provided 32-bit scalar value.
- [overwriteChannels(\_:withScalar:destination:)](overwritechannels%28__withscalar_destination_%29-57ov2.md): Conforms when `Format` is `vImage.Interleaved8x4`. Overwrites the pixels of one or more channels of the pixel buffer with the provided 8-bit scalar value.
- [overwriteChannels(\_:withScalar:destination:)](overwritechannels%28__withscalar_destination_%29-ev8q.md): Conforms when `Format` is `vImage.InterleavedFx4`. Overwrites the pixels of one or more channels of the pixel buffer with the provided 32-bit scalar value.
- [overwriteChannels(\_:withPixel:destination:)](overwritechannels%28__withpixel_destination_%29-6fab6.md): Conforms when `Format` is `vImage.Interleaved8x4`. Overwrites the pixels of one or more channels of the pixel buffer with the provided 8-bit, 4-channel pixel value.
- [overwriteChannels(\_:withPixel:destination:)](overwritechannels%28__withpixel_destination_%29-6zw3o.md): Conforms when `Format` is `vImage.Interleaved16Ux4`. Overwrites the pixels of one or more channels of the pixel buffer with the provided unsigned 16-bit, 4-channel pixel value.
- [overwriteChannels(\_:withPixel:destination:)](overwritechannels%28__withpixel_destination_%29-6pbz8.md): Conforms when `Format` is `vImage.InterleavedFx4`. Overwrites the pixels of one or more channels of the pixel buffer with the provided 32-bit, 4-channel pixel value.
- [overwriteChannels(\_:withPlanarBuffer:destination:)](overwritechannels%28__withplanarbuffer_destination_%29-hiw0.md): Conforms when `Format` is `vImage.InterleavedFx4`. Overwrites the pixels of one or more channels of the pixel buffer with the provided 32-bit planar pixel buffer.
- [overwriteChannels(\_:withInterleavedBuffer:destination:)](overwritechannels%28__withinterleavedbuffer_destination_%29-74hah.md): Conforms when `Format` is `vImage.Interleaved8x4`. Overwrites the pixels of one or more channels of the pixel buffer with the provided 8-bit interleaved pixel buffer.
- [overwriteChannels(\_:withInterleavedBuffer:destination:)](overwritechannels%28__withinterleavedbuffer_destination_%29-8xkd1.md): Conforms when `Format` is `vImage.InterleavedFx4`. Overwrites the pixels of one or more channels of the pixel buffer with the provided 32-bit interleaved pixel buffer.
