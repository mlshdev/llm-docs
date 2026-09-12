> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlmultiarray/shape](https://developer.apple.com/documentation/coreml/mlmultiarray/shape)

# shape (Swift)

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The multiarray’s multidimensional shape as a number array in which each element’s value is the size of the corresponding dimension.

## Declaration

```swift
var shape: [NSNumber] { get }
```

## See Also

### Inspecting a multiarray

- [count](count.md): The total number of elements in the multiarray.
- [dataType](datatype.md): The underlying type of the multiarray.
- [strides](strides.md): A number array in which each element is the number of memory locations that span the length of the corresponding dimension.

# shape (Objective-C)

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The multiarray’s multidimensional shape as a number array in which each element’s value is the size of the corresponding dimension.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<NSNumber *> * shape;
```

## See Also

### Inspecting a multiarray

- [count](count.md): The total number of elements in the multiarray.
- [dataType](datatype.md): The underlying type of the multiarray.
- [strides](strides.md): A number array in which each element is the number of memory locations that span the length of the corresponding dimension.
