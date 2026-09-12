> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_vfrac](https://developer.apple.com/documentation/accelerate/vdsp_vfrac)

# vDSP_vfrac

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Truncates the elements of a single-precision vector to fractions.

## Declaration

```objectivec
extern void vDSP_vfrac(const float *__A, vDSP_Stride __IA, float *__C, vDSP_Stride __IC, vDSP_Length __N);
```

## Parameters

- `__A`: Single-precision real input vector
- `__IA`: Stride for `A`
- `__C`: Single-precision real output vector
- `__IC`: Stride for `C`
- `__N`: The number of elements to process

<a id="Discussion"></a>

## Discussion

Performs the following operation:

![mathematical formula](https://developer.apple.com/images/com.apple.accelerate/media-2557732@2x.png)

The “function” truncate(x) is the integer farthest from 0 but not farther than x. Thus, for example, `vDSP_vFrac(-3.25)` produces the result -0.25.

Sets each element of vector `C` to the signed fractional part of the corresponding element of `A`.

## See Also

### Single-Vector Fractional Part Extraction

- [vDSP_vfracD](vdsp_vfracd.md): Truncates the elements of a double-precision vector to fractions.
