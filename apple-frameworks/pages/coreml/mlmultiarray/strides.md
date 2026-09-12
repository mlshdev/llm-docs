> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlmultiarray/strides](https://developer.apple.com/documentation/coreml/mlmultiarray/strides)

# strides (Swift)

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A number array in which each element is the number of memory locations that span the length of the corresponding dimension.

## Declaration

```swift
var strides: [NSNumber] { get }
```

<a id="Discussion"></a>

## Discussion

See [subscript(\_:)](https://developer.apple.com/documentation/coreml/mlmultiarray/subscript%28_:%29-2hh91) and [subscript(\_:)](https://developer.apple.com/documentation/coreml/mlmultiarray/subscript%28_:%29-3d9el) for code examples that use `strides`.

## See Also

### Inspecting a multiarray

- [count](count.md): The total number of elements in the multiarray.
- [dataType](datatype.md): The underlying type of the multiarray.
- [shape](shape.md): The multiarray’s multidimensional shape as a number array in which each element’s value is the size of the corresponding dimension.

# strides (Objective-C)

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A number array in which each element is the number of memory locations that span the length of the corresponding dimension.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<NSNumber *> * strides;
```

<a id="Discussion"></a>

## Discussion

See [objectAtIndexedSubscript:](https://developer.apple.com/documentation/coreml/mlmultiarray/subscript%28_:%29-2hh91) and [objectForKeyedSubscript:](https://developer.apple.com/documentation/coreml/mlmultiarray/subscript%28_:%29-3d9el) for code examples that use `strides`.

## See Also

### Inspecting a multiarray

- [count](count.md): The total number of elements in the multiarray.
- [dataType](datatype.md): The underlying type of the multiarray.
- [shape](shape.md): The multiarray’s multidimensional shape as a number array in which each element’s value is the size of the corresponding dimension.
