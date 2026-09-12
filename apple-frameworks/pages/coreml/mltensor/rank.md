> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mltensor/rank](https://developer.apple.com/documentation/coreml/mltensor/rank)

# rank

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The number of dimensions of the tensor.

## Declaration

```swift
var rank: Int { get }
```

<a id="discussion"></a>

## Discussion

Rank is equal to the number of dimensions of the shape, i.e., `tensor.rank == tensor.shape.count`.

## See Also

### Accessing tensor properties

- [isScalar](isscalar.md): A Boolean value indicating whether the tensor is a scalar (when the `rank` is equal to `0`) or not.
- [scalarCount](scalarcount.md): The number of scalar elements in the tensor.
- [scalarType](scalartype.md): The type of scalars in the tensor.
- [shape](shape.md): The shape of the tensor.
