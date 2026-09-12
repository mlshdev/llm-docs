> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_vlim](https://developer.apple.com/documentation/accelerate/vdsp_vlim)

# vDSP_vlim

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Calculates the single-precision vector test limit using the specified stride.

## Declaration

```objectivec
extern void vDSP_vlim(const float *__A, vDSP_Stride __IA, const float *__B, const float *__C, float *__D, vDSP_Stride __ID, vDSP_Length __N);
```

## Parameters

- `__A`: Single-precision real input vector
- `__IA`: Stride for `A`
- `__B`: Pointer to single-precision real input scalar: limit
- `__C`: Pointer to single-precision real input scalar
- `__D`: Single-precision real output vector
- `__ID`: Stride for `D`
- `__N`: The number of elements to process

<a id="Discussion"></a>

## Discussion

Compares values from vector `A` to limit scalar `*B`. For inputs greater than or equal to `*B`, scalar `*C` is written to `D` . For inputs  less than `*B`, the negated value of scalar `*C` is written to vector  `D`.

This calculates the following:

```objc
    for (n = 0; n < N; ++n)
        if (*B <= A[n*IA])
            D[n*ID] = *C;
        else
            D[n*ID] = -(*C);
```

## See Also

### Limit Operations

- [vDSP_vlimD](vdsp_vlimd.md): Calculates the double-precision vector test limit using the specified stride.
