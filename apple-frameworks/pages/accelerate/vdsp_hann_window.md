> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_hann_window](https://developer.apple.com/documentation/accelerate/vdsp_hann_window)

# vDSP_hann_window

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a single-precision Hann window.

## Declaration

```objectivec
extern void vDSP_hann_window(float *__C, vDSP_Length __N, int __Flag);
```

## Parameters

- `__C`: The output vector.
- `__N`: The number of elements in the output vector.
- `__Flag`: A value that specifies the type of window that the function creates.

  - [vDSP_HANN_DENORM](https://developer.apple.com/documentation/kernel/1645052-anonymous/vdsp_hann_denorm) specifies that the function creates a denormalized window.
  - [vDSP_HANN_DENORM](https://developer.apple.com/documentation/kernel/1645052-anonymous/vdsp_hann_denorm) | [vDSP_HALF_WINDOW](https://developer.apple.com/documentation/kernel/1645052-anonymous/vdsp_half_window) specifies that the function creates a denormalized window with only the first `(N+1)/2` points.
  - [vDSP_HANN_NORM](https://developer.apple.com/documentation/kernel/1645052-anonymous/vdsp_hann_norm) specifies that the function creates a normalized window.
  - [vDSP_HANN_NORM](https://developer.apple.com/documentation/kernel/1645052-anonymous/vdsp_hann_norm) | [vDSP_HALF_WINDOW](https://developer.apple.com/documentation/kernel/1645052-anonymous/vdsp_half_window) specifies that the function creates a normalized window with only the first `(N+1)/2` points.

<a id="Discussion"></a>

## Discussion

The [vDSP_hann_window](vdsp_hann_window.md) and [vDSP_hann_windowD](vdsp_hann_windowd.md) functions create a Hann window vector using the following operation:

```swift
If Flag & vDSP_HALF_WINDOW:
    Length = (N+1)/2;
Else
    Length = N;

If Flag & vDSP_HANN_NORM:
    W = .8165;
Else
    W = .5;

for (n = 0; n < Length; ++n)
    C[n] = W * (1 - cos(2*pi*n/N));
```

Use [vDSP_vmul](vdsp_vmul.md) to multiply the Hann window result by a noninteger-periodic signal prior to a Fourier transform.

The following code shows how to generate a Hann window:

```swift
let n = vDSP_Length(1024)
var c = [Float](repeating: 0,
                count: Int(n))

vDSP_hann_window(&c,
                 n,
                 Int32(vDSP_HANN_DENORM))
```

The following illustrates the values of the output vector, `c`:

![Visualization of a Hann window.](https://developer.apple.com/images/com.apple.accelerate/media-3233486@2x.png)

## See Also

### Vector generation with window functions

- [Reducing spectral leakage with windowing](reducing-spectral-leakage-with-windowing.md): Multiply signal data by window sequence values when performing transforms with noninteger period signals.
- [vDSP_blkman_window](vdsp_blkman_window.md): Creates a single-precision Blackman window.
- [vDSP_blkman_windowD](vdsp_blkman_windowd.md): Creates a double-precision Blackman window.
- [vDSP_hamm_window](vdsp_hamm_window.md): Creates a single-precision Hamming window.
- [vDSP_hamm_windowD](vdsp_hamm_windowd.md): Creates a double-precision Hamming window.
- [vDSP_hann_windowD](vdsp_hann_windowd.md): Creates a double-precision Hann window.
- [vDSP_HALF_WINDOW](vdsp_half_window.md): Specifies that the window should only contain the bottom half of the values (`0` to `(N+1)/2`).
- [vDSP_HANN_DENORM](vdsp_hann_denorm.md): Specifies a denormalized Hann window.
- [vDSP_HANN_NORM](vdsp_hann_norm.md): Specifies a normalized Hann window
