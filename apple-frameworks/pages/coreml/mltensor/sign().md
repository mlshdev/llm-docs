> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mltensor/sign()](https://developer.apple.com/documentation/coreml/mltensor/sign())

# sign()

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Returns the sign of the tensor’s elements.

## Declaration

```swift
func sign() -> MLTensor
```

<a id="discussion"></a>

## Discussion

This operation returns `1.0` if the correspnding element is greater than `0`, `-1.0` if it is less than `0`, `-0.0` if it is equal to `-0.0`, and `+0.0` if it is equal to `+0.0`.

## See Also

### Accessing the extended tensor, sign and reciprocal

- [expandingShape(at:)](expandingshape%28at_%29.md): Returns a shape-expanded tensor with a dimension of 1 inserted at the specified shape indices.
- [bandPart(lowerBandCount:upperBandCount:)](bandpart%28lowerbandcount_upperbandcount_%29.md): Returns a new tensor with the same shape where everything outside a central band in each innermost matrix is set to zero.
- [tiled(multiples:)](tiled%28multiples_%29.md): Returns a tensor by replicating its elements multiple times.
- [reciprocal()](reciprocal%28%29.md): Computes the reciprocal of the tensor’s elements.
