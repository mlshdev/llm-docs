> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage/pixelbuffer/applylookup(_:destination:)-5oi4o](https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/applylookup(_:destination:)-5oi4o)

# applyLookup(\_:destination:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

Applies a lookup table to transform an 8-bit planar image to a 16-bit planar image.

## Declaration

```swift
func applyLookup(_ lookupTable: [Pixel_16U], destination: vImage.PixelBuffer<vImage.Planar16U>)
```

## Parameters

- `lookupTable`: A lookup table that contains 256 [Pixel_16U](../../pixel_16u.md) values.
- `destination`: The destination pixel buffer.

<a id="Discussion"></a>

## Discussion

You can use this function to create custom response curves (that is, the value of an output pixel based on the value of the corresponding input pixel). Changing the shape of the response curve changes the brightness and contrast of an image.

The following code creates a simple lookup table that’s based on a sigmoid function. This example uses [BNNS](../../bnns.md) to create 256 `Float` values in the range `0...1` that describe a sigmoid curve. The code scales the sigmoid curve values to `0...65535` and returns [Pixel_16U](../../pixel_16u.md) values that are suitable for use as a lookup table.

```swift
let count = 256

// The following code populates the array descriptor with sigmoid
// curve values in the range 0...1:
let sigmoidSourceValues: [Float] = vDSP.ramp(in: -10 ... 10,
                                             count: count)
let descriptor = BNNSNDArrayDescriptor.allocate(initializingFrom: sigmoidSourceValues,
                                                shape: .vector(count))
defer {
    descriptor.deallocate()
}
let activationLayer = BNNS.ActivationLayer(function: .sigmoid,
                                           input: descriptor,
                                           output: descriptor,
                                           filterParameters: nil)
try? activationLayer!.apply(batchSize: 1,
                            input: descriptor,
                            output: descriptor)

let lookup = descriptor.data!.withMemoryRebound(to: Float.self,
                                                   capacity: count) {
    // Create an `UnsafeMutableBufferPointer` from the descriptor data.
    var sigmoid = UnsafeMutableBufferPointer(start: $0,
                                             count: count)
    
    // Scale the sigmoid values from 0...1 to 0...65535.
    vDSP.multiply(Float(Pixel_16U.max),
                  sigmoid,
                  result: &sigmoid)

    // Create Pixel_16U values from the Float sigmoid values.
    return vDSP.floatingPointToInteger(sigmoid,
                                       integerType: Pixel_16U.self,
                                       rounding: .towardNearestInteger)
}
```

The graph below visualizes the values in the lookup table:

![A line chart showing an s-shaped sigmoid curve.](https://developer.apple.com/images/com.apple.accelerate/media-4165167@2x.png)

Use the following code to apply the lookup table to a [vImage.Planar8](../planar8.md) source buffer and write the result to a [vImage.Planar16U](../planar16u.md) destination buffer:

```swift
let destinationBuffer = vImage.PixelBuffer(
    size: sourceBuffer.size,
    pixelFormat: vImage.Planar16U.self)

sourceBuffer.applyLookup(lookup, destination: destinationBuffer)
```

The images below show an example grayscale source image on the left and the transformed result on the right. The operation flattens the response for very dark and very bright areas and increases the contrast in the destination image.

![Two versions of a close-up image of a fruit tree. On the left is the original grayscale image, and on the right is the transformed high-contrast image.](https://developer.apple.com/images/com.apple.accelerate/media-4165165@2x.png)

## See Also

### Transforming with a lookup table

- [applyLookup(\_:destination:)](applylookup%28__destination_%29-5r7bq.md): Conforms when `Format` is `vImage.Planar8`. Applies a lookup table to transform an 8-bit planar image.
- [applyLookup(\_:destination:)](applylookup%28__destination_%29-14pjo.md): Conforms when `Format` is `vImage.PlanarF`. Applies a lookup table to transform an 8-bit planar image to a 32-bit planar image.
- [applyLookup(\_:destination:)](applylookup%28__destination_%29-3ruls.md): Conforms when `Format` is `vImage.Planar8`. Applies a lookup table to transform an 8-bit planar image to an 8-bit-per-channel, three-channel interleaved image.
- [applyLookup(\_:destination:)](applylookup%28__destination_%29-1tsb5.md): Conforms when `Format` is `vImage.Planar8`. Applies a lookup table to transform an 8-bit planar image to a 32-bit-per-channel, three-channel interleaved image.
- [applyLookup(alphaTable:redTable:greenTable:blueTable:destination:)](applylookup%28alphatable_redtable_greentable_bluetable_destination_%29.md): Conforms when `Format` is `vImage.Interleaved8x4`. Applies a set of four lookup tables to transform an interleaved, four-channel 8-bit image.
