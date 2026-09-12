> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_vmmsbd](https://developer.apple.com/documentation/accelerate/vdsp_vmmsbd)

# vDSP_vmmsbD

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Calculates the double-precision element-wise difference of the products of two pairs of vectors, using the specified stride.

## Declaration

```objectivec
extern void vDSP_vmmsbD(const double *__A, vDSP_Stride __IA, const double *__B, vDSP_Stride __IB, const double *__C, vDSP_Stride __IC, const double *__D, vDSP_Stride __ID, double *__E, vDSP_Stride __IE, vDSP_Length __N);
```

## Parameters

- `__A`: The input vector `A` in `E = (A * B) - (C * D)`.
- `__IA`: The distance between the elements in the input vector `A`.
- `__B`: The input vector `B` in `E = (A * B) - (C * D)`.
- `__IB`: The distance between the elements in the input vector `B`.
- `__C`: The input vector `C` in `E = (A * B) - (C * D)`.
- `__IC`: The distance between the elements in the input vector `C`.
- `__D`: The input vector `D` in `E = (A * B) - (C * D)`.
- `__ID`: The distance between the elements in the input vector `D`.
- `__E`: The output vector `E` in `E = (A * B) - (C * D)`.
- `__IE`: The distance between the elements in the output vector `E`.
- `__N`: The number of elements that the function processes.

<a id="Discussion"></a>

## Discussion

This function calculates the differences of the first `N` elements of the product of vectors `A` and `B` and the product of vectors `C` and `D`.

```swift
 for (n = 0; n < N; ++n)
    E[n] = A[n]*B[n] - C[n]*D[n]; 
```

![A diagram showing the operation of this function. There are four rows. The top row represents the input vectors, A, B, C, and D, with three boxes of each. The second row represents the operations that multiply vectors A and B, and multiply vectors C and D, with three boxes of each. The third row represents the subtraction operation as three boxes.  The bottom row represents the output vector E as three boxes. The diagram has connecting lines from the input vectors to the operations, and from the operations to the output vectors. ](https://developer.apple.com/images/com.apple.accelerate/media-4337026@2x.png)

The following code shows an example of using this function:

```swift
    let stride = 1
    let count = 5
    
    let a: [Double] = [ 1,  2,  3,  4,  5]
    let b: [Double] = [10, 20, 30, 40, 50]
    let c: [Double] = [ 5,  4,  3,  2,  1]
    let d: [Double] = [50, 40, 30, 20, 10]
    
    let e = [Double](unsafeUninitializedCapacity: count) {
        buffer, initializedCount in
        
        vDSP_vmmsbD(a, stride,
                    b, stride,
                    c, stride,
                    d, stride,
                    buffer.baseAddress!, stride,
                    vDSP_Length(count))
        
        initializedCount = count
    }
    
    // Prints "[-240.0, -120.0, 0.0, 120.0, 240.0]".
    print(e)

```

## See Also

### Quaternary multiply-multiply-subtract operations

- [vDSP_vmmsb](vdsp_vmmsb.md): Calculates the single-precision element-wise difference of the products of two pairs of vectors, using the specified stride.
