> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_vsub](https://developer.apple.com/documentation/accelerate/vdsp_vsub)

# vDSP_vsub

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Calculates the single-precision element-wise subtraction of two vectors, using the specified stride.

## Declaration

```objectivec
extern void vDSP_vsub(const float *__B, vDSP_Stride __IB, const float *__A, vDSP_Stride __IA, float *__C, vDSP_Stride __IC, vDSP_Length __N);
```

## Parameters

- `__B`: The first input vector, `B`.
- `__IB`: The distance between the elements in the first input vector.
- `__A`: The second input vector, `A`.
- `__IA`: The distance between the elements in the second input vector.
- `__C`: The output vector, `C`.
- `__IC`: The distance between the elements in the output vector.
- `__N`: The number of elements that the function processes.

<a id="Discussion"></a>

## Discussion

This function calculates the differences of the first `N` elements of input vectors `A` and `B`, and writes the result to output vector `C`.

```swift
 for (n = 0; n < N; ++n)
    C[n] = A[n] - B[n];
```

![A diagram showing the operation of this function. There are three rows. The top row represents the input vectors, A and B, with three boxes of each. The middle row represents the operation as three boxes with minus signs. The bottom row represents the output vector C as three boxes. The diagram has connecting lines from the input vectors to the operation, and from the operation to the output vectors.](https://developer.apple.com/images/com.apple.accelerate/media-4336892@2x.png)

The following code shows an example of using this function:

```swift
let stride = 1
let count = 5

let a: [Float] = [10, 20, 30, 40, 50]
let b: [Float] = [ 1,  2,  3,  4,  5]

let c = [Float](unsafeUninitializedCapacity: count) {
    buffer, initializedCount in
    
    vDSP_vsub(b, stride,
              a, stride,
              buffer.baseAddress!, stride,
              vDSP_Length(count))
    
    initializedCount = count
}

// Prints "[9.0, 18.0, 27.0, 36.0, 45.0]".
print(c)
```

## See Also

### Binary subtraction operations

- [vDSP_vsubD](vdsp_vsubd.md): Calculates the double-precision element-wise subtraction of two vectors, using the specified stride.
