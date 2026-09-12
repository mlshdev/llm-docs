> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_f3x3](https://developer.apple.com/documentation/accelerate/vdsp_f3x3)

# vDSP_f3x3

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Filters a single-precision image by performing a 2D convolution with a 3 x 3 kernel.

## Declaration

```objectivec
extern void vDSP_f3x3(const float *__A, vDSP_Length __NR, vDSP_Length __NC, const float *__F, float *__C);
```

## Parameters

- `__A`: Single-precision real input matrix.
- `__NR`: The number of rows in `A`. The value of `NR` must be greater than or equal to 3.
- `__NC`: The number of columns in `A`. The value of `NC` must be even and greater than or equal to 4.
- `__F`: Single-precision real 3x3 kernel.
- `__C`: Single-precision real result matrix.

<a id="Discussion"></a>

## Discussion

This function filters an image by performing a two-dimensional convolution with a 3x3 kernel (`F`) on the input matrix `A` and storing the resulting image in the output matrix `C`.

This function zero-pads the perimeter of the output image with a border of width 1:

![mathematical formula](https://developer.apple.com/images/com.apple.accelerate/media-2557830@2x.png)

## See Also

### Fixed-Size Kernel

- [vDSP_f3x3D](vdsp_f3x3d.md): Filters a double-precision image by performing a 2D convolution with a 3 x 3 kernel.
- [vDSP_f5x5](vdsp_f5x5.md): Filters a single-precision image by performing a 2D convolution with a 5 x 5 kernel.
- [vDSP_f5x5D](vdsp_f5x5d.md): Filters a double-precision image by performing a 2D convolution with a 5 x 5 kernel.
