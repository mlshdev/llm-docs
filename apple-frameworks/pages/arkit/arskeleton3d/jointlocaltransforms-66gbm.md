> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arskeleton3d/jointlocaltransforms-66gbm](https://developer.apple.com/documentation/arkit/arskeleton3d/jointlocaltransforms-66gbm)

# jointLocalTransforms

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+

The local space transforms for each joint.

## Declaration

```swift
@nonobjc var jointLocalTransforms: [simd_float4x4] { get }
```

<a id="Discussion"></a>

## Discussion

Local space refers to a joint’s position relative to its parent joint.

## See Also

### Getting a Joint’s Pose

- [jointModelTransforms](jointmodeltransforms-i6yu.md): The model space transforms for each joint.
- [localTransform(for:)](localtransform%28for_%29.md): Returns the local transform for a joint with a given name.
- [modelTransform(for:)](modeltransform%28for_%29.md): Returns the model transform for a joint with a given name.
