> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/separableconvolve(horizontalkernel:verticalkernel:bias:edgemode:destination:)-15dhm

# separableConvolve(horizontalKernel:verticalKernel:bias:edgeMode:destination:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS · watchOS 11.0+

## Declaration

```swift
func separableConvolve(horizontalKernel: [Float], verticalKernel: [Float], bias: Float = 0, edgeMode: vImage.EdgeMode<Pixel_8888>, destination: vImage.PixelBuffer<Format>)
```
