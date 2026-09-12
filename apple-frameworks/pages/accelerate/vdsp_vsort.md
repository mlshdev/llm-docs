> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_vsort](https://developer.apple.com/documentation/accelerate/vdsp_vsort)

# vDSP_vsort

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Performs an in-place sort of a single-precision vector.

## Declaration

```objectivec
extern void vDSP_vsort(float *__C, vDSP_Length __N, int __Order);
```

## Parameters

- `__C`: The vector that the function sorts in-place.
- `__N`: The number of elements in the vector.
- `__Order`: A value that specifies the sort order. Pass `1` to specify ascending order, or `-1` for descending order.

<a id="Discussion"></a>

## Discussion

The following code sorts an array in ascending order, followed by decending order:

```swift
    var values: [Float] = [4.0, 8.0, 3.0, 0.0, 7.0, 5.0, 9.0, 2.0, 6.0, 1.0]

    let n = vDSP_Length(values.count)
    
    vDSP_vsort(&values, n, 1)

    // Prints "[0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0]".
    print(values)

    vDSP_vsort(&values, n, -1)

    // Prints "[9.0, 8.0, 7.0, 6.0, 5.0, 4.0, 3.0, 2.0, 1.0, 0.0]".
    print(values)
```

## See Also

### Vector sorting functions

- [vDSP_vsortD](vdsp_vsortd.md): Performs an in-place sort of a double-precision vector.
- [vDSP_vsorti](vdsp_vsorti.md): Performs an in-place sort of the indices into a single-precision vector.
- [vDSP_vsortiD](vdsp_vsortid.md): Performs an in-place sort of the indices into a double-precision vector.
