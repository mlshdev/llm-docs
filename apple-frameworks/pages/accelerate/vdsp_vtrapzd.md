> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_vtrapzd](https://developer.apple.com/documentation/accelerate/vdsp_vtrapzd)

# vDSP_vtrapzD

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Performs trapezoidal integration over a double-precision vector.

## Declaration

```objectivec
extern void vDSP_vtrapzD(const double *__A, vDSP_Stride __IA, const double *__B, double *__C, vDSP_Stride __IC, vDSP_Length __N);
```

<a id="Discussion"></a>

## Discussion

This function is the same as [vDSP_vtrapz](vdsp_vtrapz.md), except for the types of vectors `A` and `C` and scalar `*B`.

## See Also

### Trapezoidal Integration

- [vDSP_vtrapz](vdsp_vtrapz.md): Performs trapezoidal integration over a single-precision vector.
