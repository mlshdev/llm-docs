> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/2d-convolution](https://developer.apple.com/documentation/accelerate/2d-convolution)

# 2D convolution (Swift)

**Framework:** Accelerate  
**Kind:** API Collection

Perform convolution operations on matrices of real data.

<a id="overview"></a>

## Overview

Use the functions in this group to apply a convolution kernel to a 2D matrix. The vDSP library provides functions to convolve with fixed-sized kernels and kernels with an arbitrary size.

> **Important**

>  The functions in this group don’t support in-place operation.

## Topics

### Fixed-Size Kernel

- [convolve(\_:rowCount:columnCount:with3x3Kernel:)](vdsp/convolve%28__rowcount_columncount_with3x3kernel_%29-1r5oa.md): Returns the 2D convolution of a double-precision vector with a 3 x 3 kernel.
- [convolve(\_:rowCount:columnCount:with3x3Kernel:)](vdsp/convolve%28__rowcount_columncount_with3x3kernel_%29-7qjgw.md): Returns the 2D convolution of a single-precision vector with a 3 x 3 kernel.
- [convolve(\_:rowCount:columnCount:with3x3Kernel:result:)](vdsp/convolve%28__rowcount_columncount_with3x3kernel_result_%29-34k76.md): Calculates the 2D convolution of a double-precision vector with a 3 x 3 kernel.
- [convolve(\_:rowCount:columnCount:with3x3Kernel:result:)](vdsp/convolve%28__rowcount_columncount_with3x3kernel_result_%29-2worq.md): Calculates the 2D convolution of a single-precision vector with a 3 x 3 kernel.
- [convolve(\_:rowCount:columnCount:with5x5Kernel:)](vdsp/convolve%28__rowcount_columncount_with5x5kernel_%29-7cvh9.md): Returns the 2D convolution of a double-precision vector with a 5 x 5 kernel.
- [convolve(\_:rowCount:columnCount:with5x5Kernel:)](vdsp/convolve%28__rowcount_columncount_with5x5kernel_%29-101d6.md): Returns the 2D convolution of a single-precision vector with a 5 x 5 kernel.
- [convolve(\_:rowCount:columnCount:with5x5Kernel:result:)](vdsp/convolve%28__rowcount_columncount_with5x5kernel_result_%29-g68r.md): Calculates the 2D convolution of a double-precision vector with a 5 x 5 kernel.
- [convolve(\_:rowCount:columnCount:with5x5Kernel:result:)](vdsp/convolve%28__rowcount_columncount_with5x5kernel_result_%29-76h85.md): Calculates the 2D convolution of a single-precision vector with a 5 x 5 kernel.

### Arbitrary-Size Kernel

- [convolve(\_:rowCount:columnCount:withKernel:kernelRowCount:kernelColumnCount:)](vdsp/convolve%28__rowcount_columncount_withkernel_kernelrowcount_kernelcolumncount_%29-1sswe.md): Returns the 2D convolution of a double-precision vector with an arbitrarily sized kernel.
- [convolve(\_:rowCount:columnCount:withKernel:kernelRowCount:kernelColumnCount:)](vdsp/convolve%28__rowcount_columncount_withkernel_kernelrowcount_kernelcolumncount_%29-267yl.md): Returns the 2D convolution of a single-precision vector with an arbitrarily sized kernel.
- [convolve(\_:rowCount:columnCount:withKernel:kernelRowCount:kernelColumnCount:result:)](vdsp/convolve%28__rowcount_columncount_withkernel_kernelrowcount_kernelcolumncount_result_%29-4211m.md): Calculates the 2D convolution of a double-precision vector with an arbitrarily sized kernel.
- [convolve(\_:rowCount:columnCount:withKernel:kernelRowCount:kernelColumnCount:result:)](vdsp/convolve%28__rowcount_columncount_withkernel_kernelrowcount_kernelcolumncount_result_%29-5hiro.md): Calculates the 2D convolution of a single-precision vector with an arbitrarily sized kernel.

## See Also

### Vector and matrix correlation and convolution

- [1D correlation and convolution](1d-correlation-and-convolution.md): Use correlation to compare and convolution to combine vectors of real or complex data.

# 2D convolution (Objective-C)

**Framework:** Accelerate  
**Kind:** API Collection

Perform convolution operations on matrices of real data.

<a id="overview"></a>

## Overview

Use the functions in this group to apply a convolution kernel to a 2D matrix. The vDSP library provides functions to convolve with fixed-sized kernels and kernels with an arbitrary size.

> **Important**

>  The functions in this group don’t support in-place operation.

## Topics

### Fixed-Size Kernel

- [vDSP_f3x3](vdsp_f3x3.md): Filters a single-precision image by performing a 2D convolution with a 3 x 3 kernel.
- [vDSP_f3x3D](vdsp_f3x3d.md): Filters a double-precision image by performing a 2D convolution with a 3 x 3 kernel.
- [vDSP_f5x5](vdsp_f5x5.md): Filters a single-precision image by performing a 2D convolution with a 5 x 5 kernel.
- [vDSP_f5x5D](vdsp_f5x5d.md): Filters a double-precision image by performing a 2D convolution with a 5 x 5 kernel.

### Arbitrary-Size Kernel

- [vDSP_imgfir](vdsp_imgfir.md): Filters a single-precision image by performing a 2D convolution with an arbitrarily sized kernel.
- [vDSP_imgfirD](vdsp_imgfird.md): Filters a double-precision image by performing a 2D convolution with an arbitrarily sized kernel.

## See Also

### Vector and matrix correlation and convolution

- [1D correlation and convolution](1d-correlation-and-convolution.md): Use correlation to compare and convolution to combine vectors of real or complex data.
