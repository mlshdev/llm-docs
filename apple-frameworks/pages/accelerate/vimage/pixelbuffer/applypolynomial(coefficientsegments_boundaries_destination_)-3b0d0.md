> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage/pixelbuffer/applypolynomial(coefficientsegments:boundaries:destination:)-3b0d0](https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/applypolynomial(coefficientsegments:boundaries:destination:)-3b0d0)

# applyPolynomial(coefficientSegments:boundaries:destination:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Applies a set of piecewise polynomials to a 32-bit planar buffer and writes the result to an 8-bit planar buffer.

## Declaration

```swift
func applyPolynomial(coefficientSegments: [[Float]], boundaries: [Float], destination: vImage.PixelBuffer<vImage.Planar8>)
```

## Parameters

- `coefficientSegments`: An array that contains the polynomial coefficient array. Each polynomial must be of the same order.
- `boundaries`: An array of boundary values, in increasing order, that separates adjacent ranges of pixel values. `boundaries` must contain `coefficientSegments.count + 1` elements.
- `destination`: The destination pixel buffer.

<a id="Discussion"></a>

## Discussion

The following code shows an example of applying three polynomials to a [vImage.PlanarF](../planarf.md) buffer:

```swift
let src = vImage.PixelBuffer<vImage.PlanarF>(
    pixelValues: [0.25, 0.5, 0.75, 1.0],
    size: vImage.Size(width: 4, height: 1))

let dest = vImage.PixelBuffer<vImage.Planar8>(
    size: src.size)

let factor = Float(255)
src.applyPolynomial(coefficientSegments: [ [1 * factor, 0, 0],
                                           [0, 1 * factor, 0],
                                           [0, 0, 1 * factor] ],
                    boundaries: [0, 1/3, 2/3, 1] as [Float],
                    destination: dest)

// Prints:
//  255     ≅ factor * 0.25⁰

//  127     ≅ factor * 0.5¹

//  143     ≅ factor * 0.75²
//  255     ≅ factor * 1.0²
print(dest.array)
```

## See Also

### Related Documentation

- [Applying tone curve adjustments to images](../../applying-tone-curve-adjustments-to-images.md): Use the vImage library’s polynomial transform to apply tone curve adjustments to images.

### Appying polynomial (32-bit source, 8-bit destination)

- [applyPolynomial(coefficientSegments:boundaries:destination:)](applypolynomial%28coefficientsegments_boundaries_destination_%29-6uls3.md): Conforms when `Format` is `vImage.InterleavedFx2`. Applies a set of piecewise polynomials to a 2-channel, 32-bit interleaved buffer and writes the result to a 2-channel, 8-bit interleaved buffer.
- [applyPolynomial(coefficientSegments:boundaries:destination:)](applypolynomial%28coefficientsegments_boundaries_destination_%29-4r6nf.md): Conforms when `Format` is `vImage.InterleavedFx3`. Applies a set of piecewise polynomials to a 3-channel, 32-bit interleaved buffer and writes the result to a 3-channel, 8-bit interleaved buffer.
- [applyPolynomial(coefficientSegments:boundaries:destination:)](applypolynomial%28coefficientsegments_boundaries_destination_%29-1b2nu.md): Conforms when `Format` is `vImage.InterleavedFx4`. Applies a set of piecewise polynomials to a 4-channel, 32-bit interleaved buffer and writes the result to a 4-channel, 8-bit interleaved buffer.
