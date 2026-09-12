> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_vthrsc](https://developer.apple.com/documentation/accelerate/vdsp_vthrsc)

# vDSP_vthrsc

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Calculates single-precision vector threshold with signed constant to the specified range.

## Declaration

```objectivec
extern void vDSP_vthrsc(const float *__A, vDSP_Stride __IA, const float *__B, const float *__C, float *__D, vDSP_Stride __ID, vDSP_Length __N);
```

## Parameters

- `__A`: Single-precision real input vector
- `__IA`: Stride for `A`
- `__B`: Pointer to single-precision real input scalar: lower threshold
- `__C`: Pointer to single-precision real input scalar: output constant
- `__D`: Single-precision real output vector
- `__ID`: Stride for `D`
- `__N`: The number of elements to process

<a id="Discussion"></a>

## Discussion

Performs the following operation:

```objc
for (n = 0; n < N; ++n){
    if (A[n*IA] >= *B)
        D[n*Id] = *C;
    else
        D[n*Id] = -*C;
}
```

Creates vector `D` using the plus or minus value of scalar `*C`. The sign of  the output element is determined by comparing input from vector `A` with  threshold scalar `*B`. For input values less than `*B`, the negated value of `*C` is written to vector `D`.  For input values greater than or equal to `*B`, `*C` is copied to vector `D`.

## See Also

### Threshold Operations

- [vDSP_vthres](vdsp_vthres.md): Calculates single-precision vector threshold with zero fill to the specified range.
- [vDSP_vthresD](vdsp_vthresd.md): Calculates double-precision vector threshold with zero fill to the specified range.
- [vDSP_vthrscD](vdsp_vthrscd.md): Calculates double-precision vector threshold with signed constant to the specified range.
