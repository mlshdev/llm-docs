> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_maxmgvid](https://developer.apple.com/documentation/accelerate/vdsp_maxmgvid)

# vDSP_maxmgviD

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Calculates the maximum magnitude and corresponding index in a double-precision vector.

## Declaration

```objectivec
extern void vDSP_maxmgviD(const double *__A, vDSP_Stride __IA, double *__C, vDSP_Length *__I, vDSP_Length __N);
```

## Parameters

- `__A`: The input vector, `A`.
- `__IA`: The distance between the elements in the input vector.
- `__C`: The output scalar value, `C`. If `N` is zero, the function sets `C` to `0`.
- `__I`: The output scalar value, `I`. If `N` is zero, the function sets `I` to `0`.
- `__N`: The number of elements that the function processes.

<a id="Discussion"></a>

## Discussion

This function calculates the maximum magnitude and its corresponding index of the first `N` elements of the input vector and writes the results to the output scalar parameters, `C` and `I`, respectively.

![A diagram showing the operation of this function. There are three rows. The top row represents the input vector, A, with three boxes. The middle row represents the operation as two boxes that contains absolute-maximum and argmax functions. The bottom row represents the output scalar values C and I as two  boxes. The diagram has connecting lines from the input vector to the operations, and from the operations to the output scalar values.](https://developer.apple.com/images/com.apple.accelerate/media-4465960@2x.png)

The following code shows an example of using this function:

```swift
    let stride = vDSP_Stride(1)
    
    let a: [Double] = [-1.5, 2.25, 3.6,
                        0.2, -0.1, -4.3]
    let n = vDSP_Length(a.count)
    
    var c: Double = .nan
    var i: vDSP_Length = 0
    
    vDSP_maxmgviD(a,
                  stride,
                  &c,
                  &i,
                  n)
    
    print("max magnitude", c,
          "index", i)   // Prints "max magnitude 4.3 index 5".
```

## See Also

### Calculating the index of the maximum value of a vector

- [vDSP_maxvi](vdsp_maxvi.md): Calculates the maximum value and corresponding index in a single-precision vector.
- [vDSP_maxviD](vdsp_maxvid.md): Calculates the maximum value and corresponding index in a double-precision vector.
- [vDSP_maxmgvi](vdsp_maxmgvi.md): Calculates the maximum magnitude and corresponding index in a single-precision vector.
