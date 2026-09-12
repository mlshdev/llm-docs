> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mltensor/shape](https://developer.apple.com/documentation/coreml/mltensor/shape)

# shape

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The shape of the tensor.

## Declaration

```swift
var shape: [Int] { get }
```

<a id="discussion"></a>

## Discussion

For example, 2 x 3 matrix may be represented as a tensor with the shape of `[2, 3]`.

## See Also

### Accessing tensor properties

- [isScalar](isscalar.md): A Boolean value indicating whether the tensor is a scalar (when the `rank` is equal to `0`) or not.
- [rank](rank.md): The number of dimensions of the tensor.
- [scalarCount](scalarcount.md): The number of scalar elements in the tensor.
- [scalarType](scalartype.md): The type of scalars in the tensor.
