> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_vfixr16](https://developer.apple.com/documentation/accelerate/vdsp_vfixr16)

# vDSP_vfixr16

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Converts a vector of single-precision floating-point values to signed 16-bit integer values, and rounds towards the nearest integer.

## Declaration

```objectivec
extern void vDSP_vfixr16(const float *__A, vDSP_Stride __IA, short *__C, vDSP_Stride __IC, vDSP_Length __N);
```

## Parameters

- `__A`: The input vector.
- `__IA`: The distance between the elements in the input vector.
- `__C`: The output vector.
- `__IC`: The distance between the elements in the output vector.
- `__N`: The number of elements that the function processes.

## See Also

### Floating point to 16-bit integer conversion

- [vDSP_vfix16](vdsp_vfix16.md): Converts a vector of single-precision floating-point values to signed 16-bit integer values, and rounds towards zero.
- [vDSP_vfixu16](vdsp_vfixu16.md): Converts a vector of single-precision floating-point values to unsigned 16-bit integer values, and rounds towards zero.
- [vDSP_vfixru16](vdsp_vfixru16.md): Converts a vector of single-precision floating-point values to unsigned 16-bit integer values, and rounds towards the nearest integer.
