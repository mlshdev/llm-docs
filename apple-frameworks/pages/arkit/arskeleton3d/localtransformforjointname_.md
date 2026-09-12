> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arskeleton3d/localtransformforjointname:](https://developer.apple.com/documentation/arkit/arskeleton3d/localtransformforjointname:)

# localTransformForJointName:

**Interface language:** Objective-C

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+

Returns the local transform for a joint with a given name.

## Declaration

```objectivec
- (simd_float4x4) localTransformForJointName:(ARSkeletonJointName) jointName;
```

<a id="Discussion"></a>

## Discussion

Local space refers to the joints position relative to its parent joint. If an invalid joint name is passed the returned matrix will be filled with `NaN` values.

## See Also

### Getting a Joint’s Pose

- [jointLocalTransforms](jointlocaltransforms-1m5a1.md): The local space transforms for each joint.
- [jointModelTransforms](jointmodeltransforms-dno4.md): The model space transforms for each joint.
- [modelTransformForJointName:](modeltransformforjointname_.md): Returns the model transform for a joint with a given name.
