> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_vfixru32](https://developer.apple.com/documentation/accelerate/vdsp_vfixru32)

# vDSP_vfixru32

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Converts a vector of single-precision floating-point values to unsigned 32-bit integer values, and rounds towards the nearest integer.

## Declaration

```objectivec
extern void vDSP_vfixru32(const float *__A, vDSP_Stride __IA, unsigned int *__C, vDSP_Stride __IC, vDSP_Length __N);
```

## Parameters

- `__A`: The input vector.
- `__IA`: The distance between the elements in the input vector.
- `__C`: The output vector.
- `__IC`: The distance between the elements in the output vector.
- `__N`: The number of elements that the function processes.

<a id="Discussion"></a>

## Discussion

If the resulting value is outside the bounds of the output type, the behavior is undefined. If you need to handle out-of-bounds data, you should use one of the functions in Clipping Operations on the data first.

## See Also

### Floating point to 32-bit integer conversion

- [vDSP_vfix32](vdsp_vfix32.md): Converts a vector of single-precision floating-point values to signed 32-bit integer values, and rounds towards zero.
- [vDSP_vfixr32](vdsp_vfixr32.md): Converts a vector of single-precision floating-point values to signed 32-bit integer values, and rounds towards the nearest integer.
- [vDSP_vfixu32](vdsp_vfixu32.md): Converts a vector of single-precision floating-point values to unsigned 32-bit integer values, and rounds towards zero.
