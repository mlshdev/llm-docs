> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mltensor/reciprocal()](https://developer.apple.com/documentation/coreml/mltensor/reciprocal())

# reciprocal()

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Computes the reciprocal of the tensor’s elements.

## Declaration

```swift
func reciprocal() -> MLTensor
```

## See Also

### Accessing the extended tensor, sign and reciprocal

- [expandingShape(at:)](expandingshape%28at_%29.md): Returns a shape-expanded tensor with a dimension of 1 inserted at the specified shape indices.
- [bandPart(lowerBandCount:upperBandCount:)](bandpart%28lowerbandcount_upperbandcount_%29.md): Returns a new tensor with the same shape where everything outside a central band in each innermost matrix is set to zero.
- [tiled(multiples:)](tiled%28multiples_%29.md): Returns a tensor by replicating its elements multiple times.
- [sign()](sign%28%29.md): Returns the sign of the tensor’s elements.
