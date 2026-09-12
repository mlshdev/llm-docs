> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_vfixu8d](https://developer.apple.com/documentation/accelerate/vdsp_vfixu8d)

# vDSP_vfixu8D

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Converts a vector of double-precision floating-point values to unsigned 8-bit integer values, and rounds towards zero.

## Declaration

```objectivec
extern void vDSP_vfixu8D(const double *__A, vDSP_Stride __IA, unsigned char *__C, vDSP_Stride __IC, vDSP_Length __N);
```

## Parameters

- `__A`: The input vector.
- `__IA`: The distance between the elements in the input vector.
- `__C`: The output vector.
- `__IC`: The distance between the elements in the output vector.
- `__N`: The number of elements that the function processes.

## See Also

### Floating point to 8-bit integer conversion

- [vDSP_vfix8D](vdsp_vfix8d.md): Converts a vector of double-precision floating-point values to signed 8-bit integer values, and rounds towards zero.
- [vDSP_vfixr8D](vdsp_vfixr8d.md): Converts a vector of double-precision floating-point values to signed 8-bit integer values, and rounds towards the nearest integer.
- [vDSP_vfixru8D](vdsp_vfixru8d.md): Converts a vector of double-precision floating-point values to unsigned 8-bit integer values, and rounds towards the nearest integer.
