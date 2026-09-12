> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_vsmsmad](https://developer.apple.com/documentation/accelerate/vdsp_vsmsmad)

# vDSP_vsmsmaD

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Calculates the double-precision element-wise addition of two vector-scalar products, using the specified stride.

## Declaration

```objectivec
extern void vDSP_vsmsmaD(const double *__A, vDSP_Stride __IA, const double *__B, const double *__C, vDSP_Stride __IC, const double *__D, double *__E, vDSP_Stride __IE, vDSP_Length __N);
```

## Parameters

- `__A`: The input vector `A` in `E = (A * B) + (C * D)`.
- `__IA`: The distance between the elements in the input vector `A`.
- `__B`: The input scalar value `B` in `E = (A * B) + (C * D)`.
- `__C`: The input vector `C` in `E = (A * B) + (C * D)`.
- `__IC`: The distance between the elements in the input vector `C`.
- `__D`: The input scalar value `D` in `E = (A * B) + (C * D)`.
- `__E`: The output vector `D` in `E = (A * B) + (C * D)`.
- `__IE`: The distance between the elements in the output vector `E`.
- `__N`: The number of elements that the function processes.

<a id="Discussion"></a>

## Discussion

This function calculates the element-wise vector-scalar products of `A` and `B`, and `C` and `D`, and writes the sum of the products to vector `D`.

```swift
for (n = 0; n < N; ++n)
    E[n] = A[n]*B + C[n]*D;
```

![A diagram showing the operation of this function. There are four rows. The top row represents the input vectors, A and C, with three boxes each, and the scalar values, B and D, with one box each. The second row represents the operations that multiply A and B, as well as the operations that multiply C and D, with three boxes each. The third row represents the addition operation as three boxes. The bottom row represents the output vector E as three boxes. The diagram has connecting lines from the input vectors to the operations, and from the operations to the output vector.  ](https://developer.apple.com/images/com.apple.accelerate/media-4389070@2x.png)

The following code shows an example of using this function:

```swift
    let stride = 1
    let count = 5
    
    let a: [Double] = [ 1,  2,  3,  4,  5]
    let b: Double = 10
    let c: [Double] = [ 5,  4,  3,  2,  1]
    let d: Double = 50
    
    let e = [Double](unsafeUninitializedCapacity: count) {
        buffer, initializedCount in
        
        vDSP_vsmsmaD(a, stride,
                     [b],
                     c, stride,
                     [d],
                     buffer.baseAddress!, stride,
                     vDSP_Length(count))
        
        initializedCount = count
    }
    
    // Prints "[260.0, 220.0, 180.0, 140.0, 100.0]".
    print(e)
```

## See Also

### Vector-scalar-vector-scalar multiply-multiply-add operations

- [vDSP_vsmsma](vdsp_vsmsma.md): Calculates the single-precision element-wise addition of two vector-scalar products, using the specified stride.
