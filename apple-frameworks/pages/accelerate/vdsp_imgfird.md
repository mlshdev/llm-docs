> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_imgfird](https://developer.apple.com/documentation/accelerate/vdsp_imgfird)

# vDSP_imgfirD

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Filters a double-precision image by performing a 2D convolution with an arbitrarily sized kernel.

## Declaration

```objectivec
extern void vDSP_imgfirD(const double *__A, vDSP_Length __NR, vDSP_Length __NC, const double *__F, double *__C, vDSP_Length __P, vDSP_Length __Q);
```

<a id="Discussion"></a>

## Discussion

This function is the same as [vDSP_imgfir](vdsp_imgfir.md), except for the types of vectors `A`, `F`, and `C`.

## See Also

### Arbitrary-Size Kernel

- [vDSP_imgfir](vdsp_imgfir.md): Filters a single-precision image by performing a 2D convolution with an arbitrarily sized kernel.
