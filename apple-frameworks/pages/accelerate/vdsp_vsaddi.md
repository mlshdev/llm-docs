> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_vsaddi](https://developer.apple.com/documentation/accelerate/vdsp_vsaddi)

# vDSP_vsaddi

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Calculates the integer element-wise sum of a vector and a scalar value, using the specified stride.

## Declaration

```objectivec
extern void vDSP_vsaddi(const int *__A, vDSP_Stride __IA, const int *__B, int *__C, vDSP_Stride __IC, vDSP_Length __N);
```

## Parameters

- `__A`: The input vector, `A`.
- `__IA`: The distance between the elements in the input vector.
- `__B`: The input scalar, `B`.
- `__C`: The output vector, `C`.
- `__IC`: The distance between the elements in the output vector.
- `__N`: The number of elements that the function processes.

<a id="Discussion"></a>

## Discussion

This function calculates the element-wise sum of vector `A` and scalar value `B`, and writes the result to vector `C`.

```swift
 for (n = 0; n < N; ++n)
    C[n] = A[n] + B;
```

![A diagram showing the operation of this function. There are three rows. The top row represents the input vector A with three boxes, and the scalar value B with one box. The middle row represents the operation as three boxes with plus signs. The bottom row represents the output vector C as three boxes. The diagram has connecting lines from the input vectors to the operation, and from the operation to the output vector. ](https://developer.apple.com/images/com.apple.accelerate/media-4337167@2x.png)

The following code shows an example of using this function:

```swift
    let stride = 1
    let count = 5
    
    let a: [Int32] = [1, 2, 3, 4, 5]
    let b: Int32 = 10
    
    let c = [Int32](unsafeUninitializedCapacity: count) {
        buffer, initializedCount in
        
        vDSP_vsaddi(a, stride,
                   [b],
                   buffer.baseAddress!, stride,
                   vDSP_Length(count))
        
        initializedCount = count
    }
    
    // Prints "[11, 12, 13, 14, 15]".
    print(c)
```

## See Also

### Vector-scalar addition operations

- [vDSP_vsadd](vdsp_vsadd.md): Calculates the single-precision element-wise sum of a vector and a scalar value, using the specified stride.
- [vDSP_vsaddD](vdsp_vsaddd.md): Calculates the double-precision element-wise sum of a vector and a scalar value, using the specified stride.
