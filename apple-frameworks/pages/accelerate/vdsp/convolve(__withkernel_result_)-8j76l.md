> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/convolve(_:withkernel:result:)-8j76l](https://developer.apple.com/documentation/accelerate/vdsp/convolve(_:withkernel:result:)-8j76l)

# convolve(\_:withKernel:result:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Calculates the 1D convolution of a double-precision vector.

## Declaration

```swift
static func convolve<T, U, V>(_ vector: T, withKernel kernel: U, result: inout V) where T : AccelerateBuffer, U : AccelerateBuffer, V : AccelerateMutableBuffer, T.Element == Double, U.Element == Double, V.Element == Double
```

## Parameters

- `vector`: The input signal vector.
- `kernel`: The filter vector.
- `result`: On output, the convolution result.

## See Also

### Real Vectors

- [convolve(\_:withKernel:)](convolve%28__withkernel_%29-1nv65.md): Returns the 1D convolution of a double-precision vector.
- [convolve(\_:withKernel:)](convolve%28__withkernel_%29-4p0rt.md): Returns the 1D convolution of a single-precision vector.
- [convolve(\_:withKernel:result:)](convolve%28__withkernel_result_%29-2z66w.md): Calculates the 1D convolution of a single-precision vector.
- [correlate(\_:withKernel:)](correlate%28__withkernel_%29-7f6o0.md): Returns the correlation of a double-precision signal vector and a filter vector.
- [correlate(\_:withKernel:)](correlate%28__withkernel_%29-9sol8.md): Returns the correlation of a single-precision signal vector and a filter vector.
- [correlate(\_:withKernel:result:)](correlate%28__withkernel_result_%29-1lb82.md): Calculates the correlation of a double-precision signal vector and a filter vector.
- [correlate(\_:withKernel:result:)](correlate%28__withkernel_result_%29-377zj.md): Calculates the correlation of a single-precision signal vector and a filter vector.
