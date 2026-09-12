> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_vavlin](https://developer.apple.com/documentation/accelerate/vdsp_vavlin)

# vDSP_vavlin

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Recalculates the element-wise single-precision linear average of an existing vector to include a second vector.

## Declaration

```objectivec
extern void vDSP_vavlin(const float *__A, vDSP_Stride __IA, const float *__B, float *__C, vDSP_Stride __IC, vDSP_Length __N);
```

## Parameters

- `__A`: The input vector `A`.
- `__IA`: The distance between the elements in the input vector `A`.
- `__B`: The scalar value `B` that defines how many times the operation multiplies the input-output vector `C`.
- `__C`: The input-output vector `C`.
- `__IC`: The distance between the elements in the input-output vector `C`.
- `__N`: The number of elements to process.

<a id="Discussion"></a>

## Discussion

This function recalculates the single-precision linear average of an existing vector to include a second vectors, using the following operation:

```swift
for (n = 0; n < N; ++n)
    C[n] = (C[n]*B[0] + A[n]) / (B[0] + 1);
```

For example, the following code calculates the average of vector `c` four times (specified by the constant `b`) plus vector `a`:

```swift
    let stride = 1
    
    let a: [Float] = [500, 2000]
    let b = Float(4)
    var c: [Float] = [250, 1000]
    
    vDSP_vavlin(
        a, stride,
        [ b ],
        &c, stride,
        vDSP_Length(c.count))
    
    // Prints "[300.0, 1200.0]":
    //     [( 250 * 4 + 500) / ( 4 + 1),
    //      (1000 * 4 + 2000) / (4 + 1)]
    print(c)
```

## See Also

### Vector linear average recalculation

- [vDSP_vavlinD](vdsp_vavlind.md): Recalculates the element-wise double-precision linear average of an existing vector to include a second vector.
