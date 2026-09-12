> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_vfix16d](https://developer.apple.com/documentation/accelerate/vdsp_vfix16d)

# vDSP_vfix16D

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Converts a vector of double-precision floating-point values to signed 16-bit integer values, and rounds towards zero.

## Declaration

```objectivec
extern void vDSP_vfix16D(const double *__A, vDSP_Stride __IA, short *__C, vDSP_Stride __IC, vDSP_Length __N);
```

## Parameters

- `__A`: The input vector.
- `__IA`: The distance between the elements in the input vector.
- `__C`: The output vector.
- `__IC`: The distance between the elements in the output vector.
- `__N`: The number of elements that the function processes.

<a id="Discussion"></a>

## Discussion

This function is the same as [vDSP_vfix16](https://developer.apple.com/documentation/kernel/1532172-vdsp_vfix16), except for the type of vector `A`.

## See Also

### Floating point to 16-bit integer conversion

- [vDSP_vfixr16D](vdsp_vfixr16d.md): Converts a vector of double-precision floating-point values to signed 16-bit integer values, and rounds towards the nearest integer.
- [vDSP_vfixu16D](vdsp_vfixu16d.md): Converts a vector of double-precision floating-point values to unsigned 16-bit integer values, and rounds towards zero.
- [vDSP_vfixru16D](vdsp_vfixru16d.md): Converts a vector of double-precision floating-point values to unsigned 16-bit integer values, and rounds towards the nearest integer.
