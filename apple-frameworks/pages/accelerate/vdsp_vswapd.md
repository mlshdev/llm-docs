> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_vswapd](https://developer.apple.com/documentation/accelerate/vdsp_vswapd)

# vDSP_vswapD

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Swaps the elements of two double-precision vectors using the specified stride.

## Declaration

```objectivec
extern void vDSP_vswapD(double *__A, vDSP_Stride __IA, double *__B, vDSP_Stride __IB, vDSP_Length __N);
```

## Parameters

- `__A`: The input vector.
- `__IA`: The distance between the elements in the input vector.
- `__B`: The output vector.
- `__IB`: The distance between the elements in the output vector.
- `__N`: The number of elements that the operation swaps.

<a id="Discussion"></a>

## Discussion

The following code swaps the elements in `vectorA` with those in `vectorB`:

```swift
    var vectorA: [Double] = [1, 3, 5, 7]
    var vectorB: [Double] = [2, 4, 6, 8]
    
    let stride = 1
    let n = vDSP_Length(4)
    
    vDSP_vswapD(&vectorA, stride,
                &vectorB, stride,
                n)
    
    print(vectorA) // Prints "[2.0, 4.0, 6.0, 8.0]".
    print(vectorB) // Prints "[1.0, 3.0, 5.0, 7.0]".
```

## See Also

### Vector-to-vector element swapping functions

- [vDSP_vswap](vdsp_vswap.md): Swaps the elements of two single-precision vectors using the specified stride.
