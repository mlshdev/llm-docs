> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arskeleton3d/modeltransformforjointname:](https://developer.apple.com/documentation/arkit/arskeleton3d/modeltransformforjointname:)

# modelTransformForJointName:

**Interface language:** Objective-C

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+

Returns the model transform for a joint with a given name.

## Declaration

```objectivec
- (simd_float4x4) modelTransformForJointName:(ARSkeletonJointName) jointName;
```

<a id="Discussion"></a>

## Discussion

Model space refers to the joint’s position relative to its hip joint. If an invalid joint name is passed in, the returned matrix will be filled with `NaN` values.

## See Also

### Getting a Joint’s Pose

- [jointLocalTransforms](jointlocaltransforms-1m5a1.md): The local space transforms for each joint.
- [jointModelTransforms](jointmodeltransforms-dno4.md): The model space transforms for each joint.
- [localTransformForJointName:](localtransformforjointname_.md): Returns the local transform for a joint with a given name.
