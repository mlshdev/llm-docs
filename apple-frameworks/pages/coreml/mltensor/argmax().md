> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mltensor/argmax()](https://developer.apple.com/documentation/coreml/mltensor/argmax())

# argmax()

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Returns the index of the maximum value of the flattened scalars.

## Declaration

```swift
func argmax() -> MLTensor
```

<a id="discussion"></a>

## Discussion

```swift
let x = MLTensor(shape: [3, 2], scalars: [2, 3, 4, 5, 6, 7], scalarType: Float.self)
let y = x.argmax()
y.shape // is []
y.scalarType // is Int32
await y.shapedArray(of: Int32.self) // is 5
```

## See Also

### Accessing the indicies

- [argmax(alongAxis:keepRank:)](argmax%28alongaxis_keeprank_%29.md): Returns the indices of the maximum values along the specified axis.
- [argmin()](argmin%28%29.md): Returns the index of the minimum value of the flattened scalars.
- [argmin(alongAxis:keepRank:)](argmin%28alongaxis_keeprank_%29.md): Returns the indices of the minimum values along the specified axis.
- [argsort(alongAxis:descendingOrder:)](argsort%28alongaxis_descendingorder_%29.md): Returns the indices (or arguments) of a tensor that give its sorted order along the specified axis.
