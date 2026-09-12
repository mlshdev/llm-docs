> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arskeleton3d/modeltransform(for:)](https://developer.apple.com/documentation/arkit/arskeleton3d/modeltransform(for:))

# modelTransform(for:)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+

Returns the model transform for a joint with a given name.

## Declaration

```swift
@nonobjc func modelTransform(for jointName: ARSkeleton.JointName) -> simd_float4x4?
```

<a id="Discussion"></a>

## Discussion

Model space refers to the joint’s position relative to its hip joint. If an invalid joint name is passed in, the returned matrix will be filled with `NaN` values.

## See Also

### Getting a Joint’s Pose

- [jointLocalTransforms](jointlocaltransforms-66gbm.md): The local space transforms for each joint.
- [jointModelTransforms](jointmodeltransforms-i6yu.md): The model space transforms for each joint.
- [localTransform(for:)](localtransform%28for_%29.md): Returns the local transform for a joint with a given name.
