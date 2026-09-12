> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/convolve(_:rowcount:columncount:with3x3kernel:)-7qjgw](https://developer.apple.com/documentation/accelerate/vdsp/convolve(_:rowcount:columncount:with3x3kernel:)-7qjgw)

# convolve(\_:rowCount:columnCount:with3x3Kernel:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Returns the 2D convolution of a single-precision vector with a 3 x 3 kernel.

## Declaration

```swift
static func convolve<T, U>(_ vector: T, rowCount: Int, columnCount: Int, with3x3Kernel kernel: U) -> [Float] where T : AccelerateBuffer, U : AccelerateBuffer, T.Element == Float, U.Element == Float
```

## See Also

### Fixed-Size Kernel

- [convolve(\_:rowCount:columnCount:with3x3Kernel:)](convolve%28__rowcount_columncount_with3x3kernel_%29-1r5oa.md): Returns the 2D convolution of a double-precision vector with a 3 x 3 kernel.
- [convolve(\_:rowCount:columnCount:with3x3Kernel:result:)](convolve%28__rowcount_columncount_with3x3kernel_result_%29-34k76.md): Calculates the 2D convolution of a double-precision vector with a 3 x 3 kernel.
- [convolve(\_:rowCount:columnCount:with3x3Kernel:result:)](convolve%28__rowcount_columncount_with3x3kernel_result_%29-2worq.md): Calculates the 2D convolution of a single-precision vector with a 3 x 3 kernel.
- [convolve(\_:rowCount:columnCount:with5x5Kernel:)](convolve%28__rowcount_columncount_with5x5kernel_%29-7cvh9.md): Returns the 2D convolution of a double-precision vector with a 5 x 5 kernel.
- [convolve(\_:rowCount:columnCount:with5x5Kernel:)](convolve%28__rowcount_columncount_with5x5kernel_%29-101d6.md): Returns the 2D convolution of a single-precision vector with a 5 x 5 kernel.
- [convolve(\_:rowCount:columnCount:with5x5Kernel:result:)](convolve%28__rowcount_columncount_with5x5kernel_result_%29-g68r.md): Calculates the 2D convolution of a double-precision vector with a 5 x 5 kernel.
- [convolve(\_:rowCount:columnCount:with5x5Kernel:result:)](convolve%28__rowcount_columncount_with5x5kernel_result_%29-76h85.md): Calculates the 2D convolution of a single-precision vector with a 5 x 5 kernel.
