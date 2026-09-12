> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_vnabsd](https://developer.apple.com/documentation/accelerate/vdsp_vnabsd)

# vDSP_vnabsD

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Calculates the negative absolute value of each element in the supplied double-precision vector using the specified stride.

## Declaration

```objectivec
extern void vDSP_vnabsD(const double *__A, vDSP_Stride __IA, double *__C, vDSP_Stride __IC, vDSP_Length __N);
```

## Parameters

- `__A`: The input vector `A`.
- `__IA`: The distance between the elements in the input vector `A`.
- `__C`: On output, the negative absolute values of the elements in the input vector.
- `__IC`: The distance between the elements in the output vector `C`.
- `__N`: The number of elements that the function processes.

<a id="Discussion"></a>

## Discussion

For example, the following code calculates the negative absolute values of the elements of an array:

```swift
    let stride = 1
    
    let values: [Double] = [-1, 2, -3, 4, -5, 6, -7, 8]
    
    let negativeAbsoluteValues = [Double](unsafeUninitializedCapacity: values.count) {
        buffer, initializedCount in
        
        vDSP_vnabsD(values, stride,
                    buffer.baseAddress!, stride,
                    vDSP_Length(values.count))
        
        initializedCount = values.count
    }
    
    // Prints "[-1.0, -2.0, -3.0, -4.0, -5.0, -6.0, -7.0, -8.0]".
    print(negativeAbsoluteValues)
```

## See Also

### Vector negative absolute functions

- [vDSP_vnabs](vdsp_vnabs.md): Calculates the negative absolute value of each element in the supplied single-precision vector using the specified stride.
