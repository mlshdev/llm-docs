> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_vflt8](https://developer.apple.com/documentation/accelerate/vdsp_vflt8)

# vDSP_vflt8

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Converts a vector of signed 8-bit integers to single-precision floating-point values.

## Declaration

```objectivec
extern void vDSP_vflt8(const char *__A, vDSP_Stride __IA, float *__C, vDSP_Stride __IC, vDSP_Length __N);
```

## Parameters

- `__A`: The input vector.
- `__IA`: The distance between the elements in the input vector.
- `__C`: The output vector.
- `__IC`: The distance between the elements in the output vector.
- `__N`: The number of elements that the function processes.

## See Also

### 8-bit integer to floating point conversion

- [vDSP_vfltu8](vdsp_vfltu8.md): Converts an array of unsigned 8-bit integers to single-precision floating-point values.
