> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage/multidimensionallookuptable](https://developer.apple.com/documentation/accelerate/vimage/multidimensionallookuptable)

# vImage.MultidimensionalLookupTable

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

A multidimensional lookup table.

## Declaration

```swift
struct MultidimensionalLookupTable
```

## Mentioned In

- [Applying color transforms to images with a multidimensional lookup table](../applying-color-transforms-to-images-with-a-multidimensional-lookup-table.md)

<a id="overview"></a>

## Overview

Use a multidimensional lookup table to transform the colors in an image. The lookup table defines an output color based on the input color values. The vImage multidimensional lookup table provides interpolation to compute output color values that don’t have an explicit entry in the table for a given input color.

A [vImage.MultidimensionalLookupTable](multidimensionallookuptable.md) applies transforms to 32-bit planar pixel buffers. There are pixel buffer functions available to convert between bit depths and interleaved to planar buffers.

The following is an example of a simple lookup table that implements the Rec. 709 luma coefficients to convert from a 3-channel RGB image to a single-channel grayscale image. The lookup table is a 3D cube with 32 entries per channel.

```swift
let entriesPerChannel = UInt8(32)
let srcChannelCount = 3
let destChannelCount = 1

let lookupTableElementCount = Int(pow(Float(entriesPerChannel),
                                      Float(srcChannelCount))) *
Int(destChannelCount)

let tableData = [UInt16](unsafeUninitializedCapacity: lookupTableElementCount) {
    buffer, count in
    
    let multiplier = Float(UInt16.max)
    var bufferIndex = 0
    
    for red in ( 0 ..< entriesPerChannel) {
        for green in ( 0 ..< entriesPerChannel) {
            for blue in ( 0 ..< entriesPerChannel) {
                
                let normalizedRed = Float(red) / Float(entriesPerChannel - 1)
                let normalizedGreen = Float(green) / Float(entriesPerChannel - 1)
                let normalizedBlue = Float(blue) / Float(entriesPerChannel - 1)
                
                let gray = (normalizedRed * 0.2126) +
                           (normalizedGreen * 0.7152) +
                           (normalizedBlue * 0.0722)
                
                buffer[ bufferIndex ] = UInt16(gray * multiplier)
                bufferIndex += 1
            }
        }
    }
    
    count = lookupTableElementCount
}
```

Use the lookup table data to create a [vImage.MultidimensionalLookupTable](multidimensionallookuptable.md) structure.

```swift
let entryCountPerSourceChannel = [UInt8](repeating: entriesPerChannel,
                                         count: srcChannelCount)

let lookupTable = vImage.MultidimensionalLookupTable(
    entryCountPerSourceChannel: entryCountPerSourceChannel,
    destinationChannelCount: destChannelCount,
    data: tableData)
```

Call the \`[apply(sources:destinations:interpolation:)](multidimensionallookuptable/apply%28sources_destinations_interpolation_%29.md)\` function to transform a 3-channel RGB image to a grayscale image. In this example, the source is interleaved. The code demonstrates calling [planarBuffers()](pixelbuffer/planarbuffers%28%29-462ja.md) to deinterleave the source.

```swift
let src = vImage.PixelBuffer<vImage.InterleavedFx3>( ... )

let planarSources = src.planarBuffers()

let dest = vImage.PixelBuffer<vImage.PlanarF>(size: src.size)

lookupTable.apply(sources: planarSources,
                  destinations: [dest],
                  interpolation: .none)
```

On return, `dest` contains a grayscale representation of the source RGB image.

## Topics

### Initializers

- [init(entryCountPerSourceChannel:destinationChannelCount:data:)](multidimensionallookuptable/init%28entrycountpersourcechannel_destinationchannelcount_data_%29.md): Returns a new multidimensional lookup table.

### Instance Properties

- [destinationChannelCount](multidimensionallookuptable/destinationchannelcount.md): The number of destination channels.
- [entryCountPerSourceChannel](multidimensionallookuptable/entrycountpersourcechannel.md): An array that contains the number of table entries for each dimension of the lookup table.
- [sourceChannelCount](multidimensionallookuptable/sourcechannelcount.md): The number of source channels.

### Instance Methods

- [apply(source:destination:interpolation:)](multidimensionallookuptable/apply%28source_destination_interpolation_%29.md): Transforms a multiple plane pixel buffer using the multidimensional lookup table.
- [apply(sources:destinations:interpolation:)](multidimensionallookuptable/apply%28sources_destinations_interpolation_%29.md): Transforms an array of planar pixel buffers using the multidimensional lookup table.

### Enumerations

- [vImage.MultidimensionalLookupTable.InterpolationMethod](multidimensionallookuptable/interpolationmethod.md): Describes the method a multidimensional lookup table uses the generate interpolated values between lookup table values.

## See Also

### Related Documentation

- [Applying color transforms to images with a multidimensional lookup table](../applying-color-transforms-to-images-with-a-multidimensional-lookup-table.md): Precompute translation values to optimize color space conversion and other pointwise operations.

### Type Aliases

- [vImage.StructuringElement](structuringelement.md): A 2D matrix that represents a morphology kernel.
- [vImage.ConvolutionKernel](convolutionkernel.md): Constants that describe 1D convolution kernels.
- [vImage.ConvolutionKernel2D](convolutionkernel2d.md): A 2D matrix that represents a convolution kernel.
- [vImage.DynamicPixelFormat](dynamicpixelformat.md): A buffer that contains pixels with a data type that’s unknown at compile time.
- [vImage.Interleaved16Fx2](interleaved16fx2.md): A two-channel, 16-bit-per-channel, floating-point interleaved buffer.
- [vImage.Interleaved16Fx4](interleaved16fx4.md): A four-channel, 16-bit-per-channel, floating-point interleaved buffer.
- [vImage.Interleaved16Ux2](interleaved16ux2.md): A two-channel, 16-bit-per-channel, unsigned-integer interleaved buffer.
- [vImage.Interleaved16Ux4](interleaved16ux4.md): A four-channel, 16-bit-per-channel, unsigned-integer interleaved buffer.
- [vImage.Interleaved8x2](interleaved8x2.md): A two-channel, 8-bit-per-channel interleaved buffer.
- [vImage.Interleaved8x3](interleaved8x3.md): A three-channel, 8-bit-per-channel interleaved buffer.
- [vImage.Interleaved8x4](interleaved8x4.md): A four-channel, 8-bit-per-channel interleaved buffer.
- [vImage.InterleavedFx2](interleavedfx2.md): A two-channel, 32-bit-per-channel, floating-point interleaved buffer.
- [vImage.InterleavedFx3](interleavedfx3.md): A three-channel, 32-bit-per-channel, floating-point interleaved buffer.
- [vImage.InterleavedFx4](interleavedfx4.md): A four-channel, 32-bit-per-channel, floating-point interleaved buffer.
- [vImage.Options](options.md): Set flags on vImage operations to specify processing options.
