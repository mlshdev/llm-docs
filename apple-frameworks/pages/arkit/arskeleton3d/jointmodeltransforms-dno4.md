> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arskeleton3d/jointmodeltransforms-dno4](https://developer.apple.com/documentation/arkit/arskeleton3d/jointmodeltransforms-dno4)

# jointModelTransforms

**Interface language:** Objective-C

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+

The model space transforms for each joint.

## Declaration

```objectivec
@property (nonatomic, readonly) const simd_float4x4 * jointModelTransforms;
```

<a id="Discussion"></a>

## Discussion

Model space refers to a joint’s position relative to the hip joint. Note, the hip joint is located at the body anchor’s origin.

## See Also

### Getting a Joint’s Pose

- [jointLocalTransforms](jointlocaltransforms-1m5a1.md): The local space transforms for each joint.
- [localTransformForJointName:](localtransformforjointname_.md): Returns the local transform for a joint with a given name.
- [modelTransformForJointName:](modeltransformforjointname_.md): Returns the model transform for a joint with a given name.
