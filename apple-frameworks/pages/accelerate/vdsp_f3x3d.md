> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_f3x3d](https://developer.apple.com/documentation/accelerate/vdsp_f3x3d)

# vDSP_f3x3D

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Filters a double-precision image by performing a 2D convolution with a 3 x 3 kernel.

## Declaration

```objectivec
extern void vDSP_f3x3D(const double *__A, vDSP_Length __NR, vDSP_Length __NC, const double *__F, double *__C);
```

<a id="Discussion"></a>

## Discussion

This is the same as [vDSP_f3x3](vdsp_f3x3.md), except for the types of vectors `A`, `F`, and `C`.

## See Also

### Fixed-Size Kernel

- [vDSP_f3x3](vdsp_f3x3.md): Filters a single-precision image by performing a 2D convolution with a 3 x 3 kernel.
- [vDSP_f5x5](vdsp_f5x5.md): Filters a single-precision image by performing a 2D convolution with a 5 x 5 kernel.
- [vDSP_f5x5D](vdsp_f5x5d.md): Filters a double-precision image by performing a 2D convolution with a 5 x 5 kernel.
