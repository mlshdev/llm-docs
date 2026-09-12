> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arskeleton3d/localtransform(for:)](https://developer.apple.com/documentation/arkit/arskeleton3d/localtransform(for:))

# localTransform(for:)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+

Returns the local transform for a joint with a given name.

## Declaration

```swift
@nonobjc func localTransform(for jointName: ARSkeleton.JointName) -> simd_float4x4?
```

<a id="Discussion"></a>

## Discussion

Local space refers to the joints position relative to its parent joint. If an invalid joint name is passed the returned matrix will be filled with `NaN` values.

## See Also

### Getting a Joint’s Pose

- [jointLocalTransforms](jointlocaltransforms-66gbm.md): The local space transforms for each joint.
- [jointModelTransforms](jointmodeltransforms-i6yu.md): The model space transforms for each joint.
- [modelTransform(for:)](modeltransform%28for_%29.md): Returns the model transform for a joint with a given name.
