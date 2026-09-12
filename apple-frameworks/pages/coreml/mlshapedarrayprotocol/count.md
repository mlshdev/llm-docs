> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlshapedarrayprotocol/count](https://developer.apple.com/documentation/coreml/mlshapedarrayprotocol/count)

# count

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The number of elements in the shaped array’s first dimension.

## Declaration

```swift
var count: Int { get }
```

## See Also

### Inspecting a shaped array type

- [shape](shape.md): An integer array in which each element represents the size of the corresponding dimension.
- [strides](strides.md): An integer array in which each element is the number of memory locations that spans the length of the corresponding dimension.
- [isScalar](isscalar.md): A Boolean value that indicates whether the shaped array lacks a shape.
- [scalarCount](scalarcount.md): The total number of elements in the shaped array type.
- [scalar](scalar-swift.property.md): A computed property that returns the first element when the shape isn’t empty, or sets the shaped array’s underlying scalar type.
- [scalars](scalars.md): A computed property that generates a linear array that contains every element, or assigns the elements of an array to the shaped array’s elements.
- [withUnsafeShapedBufferPointer(\_:)](withunsafeshapedbufferpointer%28__%29.md): Provides read-only access of the shaped array’s underlying memory to a closure.
