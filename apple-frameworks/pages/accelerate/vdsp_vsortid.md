> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_vsortid](https://developer.apple.com/documentation/accelerate/vdsp_vsortid)

# vDSP_vsortiD

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Performs an in-place sort of the indices into a double-precision vector.

## Declaration

```objectivec
extern void vDSP_vsortiD(const double *__C, vDSP_Length *__I, vDSP_Length *__Temporary, vDSP_Length __N, int __Order);
```

## Parameters

- `__C`: The input vector that defines the source values.
- `__I`: The input vector that defines the indices. On input, the values `0 ..< n`. On output, the sorted indices.
- `__Temporary`: A temporary vector that this function doesn’t use. Pass `nil`.
- `__N`: The number of elements in the vector.
- `__Order`: A value that specifies the sort order. Pass `1` to specify ascending order, or `-1` for descending order.

<a id="Discussion"></a>

## Discussion

The following code sorts the indices into an array in ascending order, followed by decending order:

```swift
    let values: [Double] = [4.0, 8.0, 3.0, 0.0, 7.0, 5.0, 9.0, 2.0, 6.0, 1.0]
    
    let n = vDSP_Length(values.count)
    
    var indices = ( 0 ..< n ).map { $0 }
    
    vDSP_vsortiD(values, &indices, nil, n, 1)
    
    // Prints "[0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0]".
    print(indices.map { values[Int($0)] })
    
    vDSP_vsortiD(values, &indices, nil, n, -1)
    
    // Prints "[9.0, 8.0, 7.0, 6.0, 5.0, 4.0, 3.0, 2.0, 1.0, 0.0]".
    print(indices.map { values[Int($0)] })
```

Note that this function doesn’t provide a stable sort. So, if the function compares two elements as equal, it may place them in any order within the sorted array.

## See Also

### Vector sorting functions

- [vDSP_vsort](vdsp_vsort.md): Performs an in-place sort of a single-precision vector.
- [vDSP_vsortD](vdsp_vsortd.md): Performs an in-place sort of a double-precision vector.
- [vDSP_vsorti](vdsp_vsorti.md): Performs an in-place sort of the indices into a single-precision vector.
