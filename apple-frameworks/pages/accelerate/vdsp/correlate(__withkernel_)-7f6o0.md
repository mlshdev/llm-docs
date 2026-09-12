> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/correlate(_:withkernel:)-7f6o0](https://developer.apple.com/documentation/accelerate/vdsp/correlate(_:withkernel:)-7f6o0)

# correlate(\_:withKernel:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Returns the correlation of a double-precision signal vector and a filter vector.

## Declaration

```swift
static func correlate<T, U>(_ vector: T, withKernel kernel: U) -> [Double] where T : AccelerateBuffer, U : AccelerateBuffer, T.Element == Double, U.Element == Double
```

## Parameters

- `vector`: The input signal vector.
- `kernel`: The filter vector.

<a id="return-value"></a>

## Return Value

The correlation result.

## See Also

### Real Vectors

- [convolve(\_:withKernel:)](convolve%28__withkernel_%29-1nv65.md): Returns the 1D convolution of a double-precision vector.
- [convolve(\_:withKernel:)](convolve%28__withkernel_%29-4p0rt.md): Returns the 1D convolution of a single-precision vector.
- [convolve(\_:withKernel:result:)](convolve%28__withkernel_result_%29-8j76l.md): Calculates the 1D convolution of a double-precision vector.
- [convolve(\_:withKernel:result:)](convolve%28__withkernel_result_%29-2z66w.md): Calculates the 1D convolution of a single-precision vector.
- [correlate(\_:withKernel:)](correlate%28__withkernel_%29-9sol8.md): Returns the correlation of a single-precision signal vector and a filter vector.
- [correlate(\_:withKernel:result:)](correlate%28__withkernel_result_%29-1lb82.md): Calculates the correlation of a double-precision signal vector and a filter vector.
- [correlate(\_:withKernel:result:)](correlate%28__withkernel_result_%29-377zj.md): Calculates the correlation of a single-precision signal vector and a filter vector.
