> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/convolve(_:rowcount:columncount:withkernel:kernelrowcount:kernelcolumncount:)-267yl](https://developer.apple.com/documentation/accelerate/vdsp/convolve(_:rowcount:columncount:withkernel:kernelrowcount:kernelcolumncount:)-267yl)

# convolve(\_:rowCount:columnCount:withKernel:kernelRowCount:kernelColumnCount:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Returns the 2D convolution of a single-precision vector with an arbitrarily sized kernel.

## Declaration

```swift
static func convolve<T, U>(_ vector: T, rowCount: Int, columnCount: Int, withKernel kernel: U, kernelRowCount: Int, kernelColumnCount: Int) -> [Float] where T : AccelerateBuffer, U : AccelerateBuffer, T.Element == Float, U.Element == Float
```

## See Also

### Arbitrary-Size Kernel

- [convolve(\_:rowCount:columnCount:withKernel:kernelRowCount:kernelColumnCount:)](convolve%28__rowcount_columncount_withkernel_kernelrowcount_kernelcolumncount_%29-1sswe.md): Returns the 2D convolution of a double-precision vector with an arbitrarily sized kernel.
- [convolve(\_:rowCount:columnCount:withKernel:kernelRowCount:kernelColumnCount:result:)](convolve%28__rowcount_columncount_withkernel_kernelrowcount_kernelcolumncount_result_%29-4211m.md): Calculates the 2D convolution of a double-precision vector with an arbitrarily sized kernel.
- [convolve(\_:rowCount:columnCount:withKernel:kernelRowCount:kernelColumnCount:result:)](convolve%28__rowcount_columncount_withkernel_kernelrowcount_kernelcolumncount_result_%29-5hiro.md): Calculates the 2D convolution of a single-precision vector with an arbitrarily sized kernel.
