> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage/pixelbuffer/multiply(by:prebias:postbias:destination:)-1sp5l](https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/multiply(by:prebias:postbias:destination:)-1sp5l)

# multiply(by:preBias:postBias:destination:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Multiplies each four channel pixel in a 32-bit-per channel, 4-channel pixel buffer by a four element matrix to produce a single channel result.

## Declaration

```swift
func multiply(by matrix: (Float, Float, Float, Float), preBias: (Float, Float, Float, Float), postBias: Float, destination: vImage.PixelBuffer<vImage.PlanarF>)
```

## Parameters

- `matrix`: The 4 x 4 multiplication matrix values in row-major order.
- `preBias`: Values that the function adds to the source before multiplication.
- `postBias`: A value that the function adds to the result after multiplication.
- `destination`: The destination pixel buffer.

<a id="Discussion"></a>

## Discussion

This function applies the following operation to each pixel:

```swift
p = (source.0 + preBias.0) * matrix.0 +
    (source.1 + preBias.1) * matrix.1 +
    (source.2 + preBias.2) * matrix.2 +
    (source.3 + preBias.3) * matrix.3
destination = (p + postBias)
```

## See Also

### Pixel Multiplication

- [multiply(by:divisor:preBias:postBias:destination:)](multiply%28by_divisor_prebias_postbias_destination_%29-4q614.md): Conforms when `Format` is `vImage.Interleaved8x4`. Multiplies each four channel pixel in an 8-bit-per channel, 4-channel pixel buffer by a four element matrix to produce a single channel result.
