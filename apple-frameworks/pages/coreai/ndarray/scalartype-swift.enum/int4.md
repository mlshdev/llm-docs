> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/ndarray/scalartype-swift.enum/int4](https://developer.apple.com/documentation/coreai/ndarray/scalartype-swift.enum/int4)

# NDArray.ScalarType.int4

**Framework:** Core AI  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A 4-bit signed integer.

## Declaration

```swift
case int4
```

<a id="discussion"></a>

## Discussion

Four-bit signed integers can represent values in the range \[-8, 7\]. Widely used in model quantization for efficient storage and computation.

## See Also

### Defining sub-byte signed integer types

- [NDArray.ScalarType.int2](int2.md): A 2-bit signed integer.
- [NDArray.ScalarType.int3](int3.md): A 3-bit signed integer.
- [NDArray.ScalarType.int5](int5.md): A 5-bit signed integer.
- [NDArray.ScalarType.int6](int6.md): A 6-bit signed integer.
- [NDArray.ScalarType.int7](int7.md): A 7-bit signed integer.
