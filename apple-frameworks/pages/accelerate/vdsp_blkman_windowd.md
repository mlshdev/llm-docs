> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_blkman_windowd](https://developer.apple.com/documentation/accelerate/vdsp_blkman_windowd)

# vDSP_blkman_windowD

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a double-precision Blackman window.

## Declaration

```objectivec
extern void vDSP_blkman_windowD(double *__C, vDSP_Length __N, int __Flag);
```

## Parameters

- `__C`: The output vector.
- `__N`: The number of elements in the output vector.
- `__Flag`: A value that specifies whether the function creates a half window or a full window. Pass the [vDSP_HALF_WINDOW](https://developer.apple.com/documentation/kernel/1645052-anonymous/vdsp_half_window) flag to create only the first `(N+1)/2` points; pass `0` to create a full-size window.

<a id="Discussion"></a>

## Discussion

The [vDSP_blkman_window](vdsp_blkman_window.md) and [vDSP_blkman_windowD](vdsp_blkman_windowd.md) functions create a Blackman window vector using the following operation:

```objc
for (n=0; n < N; ++n)
{
    C[n] = 0.42 - (0.5 * cos(  2 * pi * n / N ) ) +
             (0.08 * cos( 4 * pi * n / N) );
}
```

The following code shows how to generate a Blackman window.

```swift
let n = vDSP_Length(1024)

var c = [Float](repeating: 0,
                count: Int(n))

vDSP_blkman_window(&c,
                   n,
                   0)
```

The following illustrates the values of the output vector, `c`:

![Visualization of a Blackman window.](https://developer.apple.com/images/com.apple.accelerate/media-3233529@2x.png)

## See Also

### Vector generation with window functions

- [Reducing spectral leakage with windowing](reducing-spectral-leakage-with-windowing.md): Multiply signal data by window sequence values when performing transforms with noninteger period signals.
- [vDSP_blkman_window](vdsp_blkman_window.md): Creates a single-precision Blackman window.
- [vDSP_hamm_window](vdsp_hamm_window.md): Creates a single-precision Hamming window.
- [vDSP_hamm_windowD](vdsp_hamm_windowd.md): Creates a double-precision Hamming window.
- [vDSP_hann_window](vdsp_hann_window.md): Creates a single-precision Hann window.
- [vDSP_hann_windowD](vdsp_hann_windowd.md): Creates a double-precision Hann window.
- [vDSP_HALF_WINDOW](vdsp_half_window.md): Specifies that the window should only contain the bottom half of the values (`0` to `(N+1)/2`).
- [vDSP_HANN_DENORM](vdsp_hann_denorm.md): Specifies a denormalized Hann window.
- [vDSP_HANN_NORM](vdsp_hann_norm.md): Specifies a normalized Hann window
