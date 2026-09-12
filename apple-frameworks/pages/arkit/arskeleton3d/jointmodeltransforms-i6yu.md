> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arskeleton3d/jointmodeltransforms-i6yu](https://developer.apple.com/documentation/arkit/arskeleton3d/jointmodeltransforms-i6yu)

# jointModelTransforms

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+

The model space transforms for each joint.

## Declaration

```swift
@nonobjc var jointModelTransforms: [simd_float4x4] { get }
```

<a id="Discussion"></a>

## Discussion

Model space refers to a joint’s position relative to the hip joint. Note, the hip joint is located at the body anchor’s origin.

## See Also

### Getting a Joint’s Pose

- [jointLocalTransforms](jointlocaltransforms-66gbm.md): The local space transforms for each joint.
- [localTransform(for:)](localtransform%28for_%29.md): Returns the local transform for a joint with a given name.
- [modelTransform(for:)](modeltransform%28for_%29.md): Returns the model transform for a joint with a given name.
