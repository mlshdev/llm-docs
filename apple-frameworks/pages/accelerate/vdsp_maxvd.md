> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_maxvd](https://developer.apple.com/documentation/accelerate/vdsp_maxvd)

# vDSP_maxvD

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Calculates the double-precision maximum value of a vector.

## Declaration

```objectivec
extern void vDSP_maxvD(const double *__A, vDSP_Stride __I, double *__C, vDSP_Length __N);
```

## Parameters

- `__A`: The input vector, `A`.
- `__I`: The distance between the elements in the input vector.
- `__C`: The output scalar value, `C`. If `N` is zero, the function sets `C` to `-infinity`.
- `__N`: The number of elements that the function processes.

<a id="Discussion"></a>

## Discussion

This function calculates the maximum value of the first `N` elements of input vector `A`, and writes the result to output scalar `C`.

![A diagram showing the operation of this function. There are three rows. The top row represents the input vector, A, with three boxes. The middle row represents the operation a box that contains the maximum function. The bottom row represents the output scalar value C as a  box. The diagram has connecting lines from the input vector to the operation, and from the operation to the output scalar value.](https://developer.apple.com/images/com.apple.accelerate/media-4465881@2x.png)

The following code shows an example of using this function:

```swift
    let stride = vDSP_Stride(1)
    
    let a: [Double] = [-1.5, 2.25, 3.6,
                        0.2, -0.1, -4.3]
    let n = vDSP_Length(a.count)
    
    var c = Double()
    
    vDSP_maxvD(a,
               stride,
               &c,
               n)
    
    print("max", c) // Prints "max 3.6".
```

## See Also

### Calculating the maximum value of a vector

- [vDSP_maxv](vdsp_maxv.md): Calculates the single-precision maximum value of a vector.
- [vDSP_maxmgv](vdsp_maxmgv.md): Calculates the single-precision maximum magnitude of a vector.
- [vDSP_maxmgvD](vdsp_maxmgvd.md): Calculates the double-precision maximum magnitude of a vector.
