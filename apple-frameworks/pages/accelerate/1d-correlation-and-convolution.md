> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/1d-correlation-and-convolution](https://developer.apple.com/documentation/accelerate/1d-correlation-and-convolution)

# 1D correlation and convolution (Swift)

**Framework:** Accelerate  
**Kind:** API Collection

Use correlation to compare and convolution to combine vectors of real or complex data.

<a id="overview"></a>

## Overview

The vDSP library provides functions that calculate the convolution and correlation of a signal and a filter. Both operations compute the sliding dot product of the filter and the section of the input signal that the filter is over. What the operation produced depends on whether the stride is positive or negative:

- With a positive stride through the filter, the correlation operation computes the similarity between the signal and the filter.
- With a negative stride through the filter, the convolution operation computes the effect of the filter on the signal. For example, to apply a low-pass filter to a signal.

## Topics

### Real Vectors

- [convolve(\_:withKernel:)](vdsp/convolve%28__withkernel_%29-1nv65.md): Returns the 1D convolution of a double-precision vector.
- [convolve(\_:withKernel:)](vdsp/convolve%28__withkernel_%29-4p0rt.md): Returns the 1D convolution of a single-precision vector.
- [convolve(\_:withKernel:result:)](vdsp/convolve%28__withkernel_result_%29-8j76l.md): Calculates the 1D convolution of a double-precision vector.
- [convolve(\_:withKernel:result:)](vdsp/convolve%28__withkernel_result_%29-2z66w.md): Calculates the 1D convolution of a single-precision vector.
- [correlate(\_:withKernel:)](vdsp/correlate%28__withkernel_%29-7f6o0.md): Returns the correlation of a double-precision signal vector and a filter vector.
- [correlate(\_:withKernel:)](vdsp/correlate%28__withkernel_%29-9sol8.md): Returns the correlation of a single-precision signal vector and a filter vector.
- [correlate(\_:withKernel:result:)](vdsp/correlate%28__withkernel_result_%29-1lb82.md): Calculates the correlation of a double-precision signal vector and a filter vector.
- [correlate(\_:withKernel:result:)](vdsp/correlate%28__withkernel_result_%29-377zj.md): Calculates the correlation of a single-precision signal vector and a filter vector.

## See Also

### Vector and matrix correlation and convolution

- [2D convolution](2d-convolution.md): Perform convolution operations on matrices of real data.

# 1D correlation and convolution (Objective-C)

**Framework:** Accelerate  
**Kind:** API Collection

Use correlation to compare and convolution to combine vectors of real or complex data.

<a id="overview"></a>

## Overview

The vDSP library provides functions that calculate the convolution and correlation of a signal and a filter. Both operations compute the sliding dot product of the filter and the section of the input signal that the filter is over. What the operation produced depends on whether the stride is positive or negative:

- With a positive stride through the filter, the correlation operation computes the similarity between the signal and the filter.
- With a negative stride through the filter, the convolution operation computes the effect of the filter on the signal. For example, to apply a low-pass filter to a signal.

## Topics

### Real Vectors

- [vDSP_conv](vdsp_conv.md): Performs either correlation or convolution on two real single-precision vectors.
- [vDSP_convD](vdsp_convd.md): Performs either correlation or convolution on two real double-precision vectors.

### Complex Vectors

- [vDSP_zconv](vdsp_zconv.md): Performs either correlation or convolution on two complex single-precision vectors.
- [vDSP_zconvD](vdsp_zconvd.md): Performs either correlation or convolution on two complex double-precision vectors.

## See Also

### Vector and matrix correlation and convolution

- [2D convolution](2d-convolution.md): Perform convolution operations on matrices of real data.
