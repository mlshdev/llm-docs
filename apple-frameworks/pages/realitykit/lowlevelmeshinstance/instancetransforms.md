> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelmeshinstance/instancetransforms](https://developer.apple.com/documentation/realitykit/lowlevelmeshinstance/instancetransforms)

# instanceTransforms

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The transform buffer for GPU instancing, or `nil` for single-instance rendering.

## Declaration

```swift
final var instanceTransforms: LowLevelInstanceTransformResource? { get }
```

<a id="discussion"></a>

## Discussion

When non-`nil`, the renderer issues a single instanced draw call with `instanceTransforms.instanceCount` instances. Each entry is a model-to-local transform; the renderer multiplies it by `transform` to produce the final world transform: `transform * instanceTransforms[i]`.

## See Also

### Positioning instances

- [setInstanceTransforms(\_:)](setinstancetransforms%28__%29.md): Assigns or clears the transform buffer for GPU instancing.
