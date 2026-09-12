> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage/pixelbuffer/applymorphology(operation:destination:)-1wacj](https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/applymorphology(operation:destination:)-1wacj)

# applyMorphology(operation:destination:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Applies a morphology operation to an 8-bit-per-channel, 4-channel interleaved pixel buffer.

## Declaration

```swift
func applyMorphology(operation: vImage.MorphologyOperation<Pixel_8>, destination: vImage.PixelBuffer<Format>)
```

## Parameters

- `operation`: An enumeration that specifies the morphology operation.
- `destination`: The destination pixel buffer.

## See Also

### Related Documentation

- [Adding a bokeh effect to images](../../adding-a-bokeh-effect-to-images.md): Simulate a bokeh effect by applying dilation.

### Morphology

- [applyMorphology(operation:destination:)](applymorphology%28operation_destination_%29-2bbx4.md): Conforms when `Format` is `vImage.Planar8`. Applies a morphology operation to an 8-bit planar pixel buffer.
- [applyMorphology(operation:destination:)](applymorphology%28operation_destination_%29-9f8lh.md): Conforms when `Format` is `vImage.PlanarF`. Applies a morphology operation to a 32-bit planar pixel buffer.
- [applyMorphology(operation:destination:)](applymorphology%28operation_destination_%29-65xg3.md): Conforms when `Format` is `vImage.InterleavedFx4`. Applies a morphology operation to a 32-bit-per-channel, 4-channel interleaved pixel buffer.
- [vImage.MorphologyOperation](../morphologyoperation.md): Describes which morphology operation to perform.
- [vImage.StructuringElement](../structuringelement.md): A 2D matrix that represents a morphology kernel.
