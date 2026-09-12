> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_distancesqd](https://developer.apple.com/documentation/accelerate/vdsp_distancesqd)

# vDSP_distancesqD

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Calculates the double-precision distance squared between two points in n-dimensional space.

## Declaration

```objectivec
extern void vDSP_distancesqD(const double *__A, vDSP_Stride __IA, const double *__B, vDSP_Stride __IB, double *__C, vDSP_Length __N);
```

## Parameters

- `__A`: An array that contains the coordinates of the first point.
- `__IA`: The distance between the elements in the input vector `A`.
- `__B`: An array that contains the coordinates of the second point.
- `__IB`: The distance between the elements in the input vector `B`.
- `__C`: On output, the square of the Euclidean distance between the two points.
- `__N`: The number of elements to process.

<a id="Discussion"></a>

## Discussion

This function calculates the sum of squares of the differences of corresponding elements of vectors `A` and `B`, using the following operation:

```objc
C[0] = sum((A[n] - B[n]) ** 2, 0 <= n < N); 
```

For example, the following code calculates the distance squared between the two four-dimensional points `pointA` and `pointB`:

```swift
    let stride = 1
    
    let pointA: [Double] = [-1, 0, -2, 1]
    let pointB: [Double] = [ 2, 1,  4, 3]
    
    var distanceSquared = Double()
    
    vDSP_distancesqD(pointA, stride,
                     pointB, stride,
                     &distanceSquared,
                     vDSP_Length(pointA.count))
    
    print("distance²", distanceSquared) // Prints "distance² 50.0".
```

## See Also

### Vector distance computation

- [vDSP_vdist](vdsp_vdist.md): Calculates the single-precision hypotenuses of right triangles with legs that are the lengths of corresponding elements of two pairs of vectors.
- [vDSP_vdistD](vdsp_vdistd.md): Calculates the double-precision hypotenuses of right triangles with legs that are the lengths of corresponding elements of two pairs of vectors.
- [vDSP_distancesq](vdsp_distancesq.md): Calculates the single-precision distance squared between two points in n-dimensional space.
