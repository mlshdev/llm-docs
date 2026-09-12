> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mltensor/expandingshape(at:)](https://developer.apple.com/documentation/coreml/mltensor/expandingshape(at:))

# expandingShape(at:)

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Returns a shape-expanded tensor with a dimension of 1 inserted at the specified shape indices.

## Declaration

```swift
func expandingShape(at axes: Int...) -> MLTensor
```

## Parameters

- `axes`: The axes at which to expand the shape.

<a id="discussion"></a>

## Discussion

For example:

```swift
let x = MLTensor(shape: [2], scalars: [1, 2], scalarType: Float.self)
let y = x.expandingShape(at: 0)
y.shape // is [1, 2]
```

## See Also

### Accessing the extended tensor, sign and reciprocal

- [bandPart(lowerBandCount:upperBandCount:)](bandpart%28lowerbandcount_upperbandcount_%29.md): Returns a new tensor with the same shape where everything outside a central band in each innermost matrix is set to zero.
- [tiled(multiples:)](tiled%28multiples_%29.md): Returns a tensor by replicating its elements multiple times.
- [sign()](sign%28%29.md): Returns the sign of the tensor’s elements.
- [reciprocal()](reciprocal%28%29.md): Computes the reciprocal of the tensor’s elements.
