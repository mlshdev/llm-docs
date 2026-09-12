> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlmultiarray/datatype](https://developer.apple.com/documentation/coreml/mlmultiarray/datatype)

# dataType (Swift)

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The underlying type of the multiarray.

## Declaration

```swift
var dataType: MLMultiArrayDataType { get }
```

## See Also

### Inspecting a multiarray

- [count](count.md): The total number of elements in the multiarray.
- [shape](shape.md): The multiarray’s multidimensional shape as a number array in which each element’s value is the size of the corresponding dimension.
- [strides](strides.md): A number array in which each element is the number of memory locations that span the length of the corresponding dimension.

# dataType (Objective-C)

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The underlying type of the multiarray.

## Declaration

```objectivec
@property (nonatomic, readonly) MLMultiArrayDataType dataType;
```

## See Also

### Inspecting a multiarray

- [count](count.md): The total number of elements in the multiarray.
- [shape](shape.md): The multiarray’s multidimensional shape as a number array in which each element’s value is the size of the corresponding dimension.
- [strides](strides.md): A number array in which each element is the number of memory locations that span the length of the corresponding dimension.
