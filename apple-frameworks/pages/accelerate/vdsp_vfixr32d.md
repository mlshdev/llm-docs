> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_vfixr32d](https://developer.apple.com/documentation/accelerate/vdsp_vfixr32d)

# vDSP_vfixr32D

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Converts a vector of double-precision floating-point values to signed 32-bit integer values, and rounds towards the nearest integer.

## Declaration

```objectivec
extern void vDSP_vfixr32D(const double *__A, vDSP_Stride __IA, int *__C, vDSP_Stride __IC, vDSP_Length __N);
```

## Parameters

- `__A`: The input vector.
- `__IA`: The distance between the elements in the input vector.
- `__C`: The output vector.
- `__IC`: The distance between the elements in the output vector.
- `__N`: The number of elements that the function processes.

<a id="Discussion"></a>

## Discussion

This function is the same as [vDSP_vfixr16](vdsp_vfixr16.md), except for the type of vector `A`.

## See Also

### Floating point to 32-bit integer conversion

- [vDSP_vfix32D](vdsp_vfix32d.md): Converts a vector of double-precision floating-point values to signed 32-bit integer values, and rounds towards zero.
- [vDSP_vfixu32D](vdsp_vfixu32d.md): Converts a vector of double-precision floating-point values to unsigned 32-bit integer values, and rounds towards zero.
- [vDSP_vfixru32D](vdsp_vfixru32d.md): Converts a vector of double-precision floating-point values to unsigned 32-bit integer values, and rounds towards the nearest integer.
