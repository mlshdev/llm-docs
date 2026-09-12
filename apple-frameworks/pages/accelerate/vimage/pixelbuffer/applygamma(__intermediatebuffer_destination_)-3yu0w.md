> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage/pixelbuffer/applygamma(_:intermediatebuffer:destination:)-3yu0w](https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/applygamma(_:intermediatebuffer:destination:)-3yu0w)

# applyGamma(\_:intermediateBuffer:destination:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Applies a gamma function to an 8-bit-per-channel, 3-channel interleaved pixel buffer.

## Declaration

```swift
func applyGamma(_ gamma: vImage.Gamma, intermediateBuffer: vImage.PixelBuffer<vImage.InterleavedFx3>? = nil, destination: vImage.PixelBuffer<vImage.Interleaved8x3>)
```

## Parameters

- `gamma`: An enumeration that specifies either a used-defined or constant gamma.
- `intermediateBuffer`: An optional intermediate buffer.
- `destination`: The destination pixel buffer.

<a id="Discussion"></a>

## Discussion

This operation applies gamma to an [vImage.Interleaved8x3](../interleaved8x3.md) buffer by calling the underlying function [vImageGamma_Planar8toPlanarF(\_:\_:\_:\_:)](../../vimagegamma_planar8toplanarf%28________%29.md). Therefore, it requires an intermediate [vImage.InterleavedFx3](../interleavedfx3.md) buffer. For the best performance, pass an existing [vImage.InterleavedFx3](../interleavedfx3.md) buffer to `intermediateBuffer`, alternatively, pass \``nil`\` to specify that the function creates the intermediate buffer.

For example, the following code applies a gamma of `2.0` to a one-pixel pixel buffer:

```swift
let buffer = vImage.PixelBuffer<vImage.Interleaved8x3>(
    pixelValues: [64, 128, 255],
    size: vImage.Size(width: 1,
                      height: 1))

buffer.applyGamma(.fullPrecision(2),
                  destination: buffer)

// Prints "[16, 64, 255]" ≅ [255 * 0.25², 255 * 0.5², 255 * 1²].
print(buffer.array)
```

## See Also

### Applying gamma

- [applyGamma(\_:intermediateBuffer:destination:)](applygamma%28__intermediatebuffer_destination_%29-1fif9.md): Conforms when `Format` is `vImage.Planar8`. Applies a gamma function to an 8-bit planar pixel buffer.
- [applyGamma(\_:intermediateBuffer:destination:)](applygamma%28__intermediatebuffer_destination_%29-390k5.md): Conforms when `Format` is `vImage.Interleaved8x2`. Applies a gamma function to an 8-bit-per-channel, 2-channel interleaved pixel buffer.
- [applyGamma(\_:intermediateBuffer:destination:)](applygamma%28__intermediatebuffer_destination_%29-wsww.md): Conforms when `Format` is `vImage.Interleaved8x4`. Applies a gamma function to an 8-bit-per-channel, 4-channel interleaved pixel buffer.
- [applyGamma(\_:destination:)](applygamma%28__destination_%29.md): Conforms when `Format` conforms to `StaticPixelFormat` and `Format.ComponentType` is `Float`. Applies a gamma function to a 32-bit pixel buffer.
- [vImage.Gamma](../gamma.md): Describes either a used-defined or constant gamma.
