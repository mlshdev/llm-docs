> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage/pixelbuffer/multiply(by:divisor:prebias:postbias:destination:)-7jo6v](https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/multiply(by:divisor:prebias:postbias:destination:)-7jo6v)

# multiply(by:divisor:preBias:postBias:destination:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Multiplies each pixel in an 8-bit planar pixel buffer by the specified factor.

## Declaration

```swift
func multiply(by factor: Int, divisor: Int, preBias: Int, postBias: Int, destination: vImage.PixelBuffer<vImage.Planar8>)
```

## Parameters

- `factor`: The multiplication factor.
- `divisor`: A value that the function divides the result by. The function treats `0` as `1`.
- `preBias`: A value that the function adds to the source before multiplication.
- `postBias`: A value that the function adds to the result after multiplication.
- `destination`: The destination pixel buffer.

<a id="Discussion"></a>

## Discussion

This function applies the following operation to each pixel:

```swift
destination = (((source + preBias) * factor) + postBias) / divisor
```

For example, the following code multiplies each pixel value in an 8-bit planar buffer by `2` and adds `5`:

```swift
  let buffer = vImage.PixelBuffer<vImage.Planar8>(
       pixelValues: [10, 20, 30, 40,
                     50, 60, 70, 80],
       size: vImage.Size(width: 4,
                         height: 2))

   buffer.multiply(by: 2,
                   divisor: 1,
                   preBias: 0, postBias: 5,
                   destination: buffer)

   // Prints
   // [  25,  45,  65,  85,
   //   105, 125, 145, 165 ]
   print(buffer.array)
```

## See Also

### Scalar Multiplication

- [multiply(by:preBias:postBias:destination:)](multiply%28by_prebias_postbias_destination_%29-3bh2a.md): Conforms when `Format` is `vImage.PlanarF`. Multiplies each pixel in a 32-bit planar pixel buffer by the specified factor.
