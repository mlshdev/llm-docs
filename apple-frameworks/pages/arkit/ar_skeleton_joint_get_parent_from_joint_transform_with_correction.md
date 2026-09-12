> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/ar_skeleton_joint_get_parent_from_joint_transform_with_correction](https://developer.apple.com/documentation/arkit/ar_skeleton_joint_get_parent_from_joint_transform_with_correction)

# ar_skeleton_joint_get_parent_from_joint_transform_with_correction

**Interface language:** Objective-C

**Framework:** ARKit  
**Kind:** Function  
**Availability:** visionOS 27.0+

Get the transform from the joint to its parent joint’s coordinate system.

## Declaration

```objectivec
extern simd_float4x4 ar_skeleton_joint_get_parent_from_joint_transform_with_correction(ar_skeleton_joint_t joint, ar_transform_correction_t transform_correction);
```

## Parameters

- `joint`: The joint.
- `transform_correction`: The transform correction that should be applied.

<a id="return-value"></a>

## Return Value

The transform from the joint to its parent joint’s coordinate system. This function will return an identity matrix when called for the root joint.

<a id="discussion"></a>

## Discussion

> **Note**

> For a hand skeleton, the root of all these transforms starts at the wrist, then the next joint out (metacarpals and forearm) are relative to the wrist, then all knuckles are relative to the metacarpals and so on until the finger tips.

## See Also

### Skeleton joint functions

- [ar_skeleton_joint_get_anchor_from_joint_transform](ar_skeleton_joint_get_anchor_from_joint_transform.md)
- [ar_skeleton_joint_get_index](ar_skeleton_joint_get_index.md)
- [ar_skeleton_joint_get_parent](ar_skeleton_joint_get_parent.md)
- [ar_skeleton_joint_get_parent_from_joint_transform](ar_skeleton_joint_get_parent_from_joint_transform.md)
- [ar_skeleton_joint_is_equal_to_skeleton_joint](ar_skeleton_joint_is_equal_to_skeleton_joint.md)
- [ar_skeleton_joint_is_tracked](ar_skeleton_joint_is_tracked.md)
- [ar_skeleton_joint_get_anchor_from_joint_transform_with_correction](ar_skeleton_joint_get_anchor_from_joint_transform_with_correction.md): Get the transform from the joint to the anchor’s coordinate system.
