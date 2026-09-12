> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arskeleton/jointname](https://developer.apple.com/documentation/arkit/arskeleton/jointname)

# ARSkeleton.JointName (Swift)

**Framework:** ARKit  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+

A name identifier for a joint.

## Declaration

```swift
struct JointName
```

<a id="Discussion"></a>

## Discussion

Use this class to access information about a named joint, such as its index in a skeleton’s array of joints, or its position on the screen or in the physical environment.

When you’re tracking a body in 2D space, you get the screen-space position of a named joint by using the [landmark(for:)](../arskeleton2d/landmark%28for_%29.md) function.

When you’re tracking a body in 3D space, you get a named joint’s position in either local or model space by using the [localTransform(for:)](../arskeleton3d/localtransform%28for_%29.md) or [modelTransform(for:)](../arskeleton3d/modeltransform%28for_%29.md) functions, respectively.

## Topics

### Creating a Joint Name

- [init(rawValue:)](jointname/init%28rawvalue_%29.md): Creates a new joint name.
- [init(\_:)](jointname/init%28__%29.md): Returns a joint name that corresponds to a key point defined in a human body pose.
- [VNRecognizedPointKey](../../vision/vnrecognizedpointkey.md): The data type for all recognized point keys.

### Identifying Joints

- [root](jointname/root.md): A skeletal joint that’s the root of all other joints.
- [head](jointname/head.md): A skeletal joint that ARKit tracks representing the head.
- [leftFoot](jointname/leftfoot.md): A skeletal joint that ARKit tracks representing the left foot.
- [leftHand](jointname/lefthand.md): A skeletal joint that ARKit tracks representing the left hand.
- [leftShoulder](jointname/leftshoulder.md): A skeletal joint that ARKit tracks representing the left shoulder.
- [rightFoot](jointname/rightfoot.md): A skeletal joint that ARKit tracks representing the right foot.
- [rightHand](jointname/righthand.md): A skeletal joint that ARKit tracks representing the right hand.
- [rightShoulder](jointname/rightshoulder.md): A skeletal joint that ARKit tracks representing the right shoulder.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting Joint Information

- [definition](definition.md): The particular configuration of joints that define a body’s current state.
- [isJointTracked(\_:)](isjointtracked%28__%29.md): Tells you whether ARKit tracks a joint at a particular index.

# ARSkeletonJointName (Objective-C)

**Framework:** ARKit  
**Kind:** Type Alias  
**Availability:** iOS 13.0+ · iPadOS 13.0+

A name identifier for a joint.

## Declaration

```objectivec
typedef NSString * ARSkeletonJointName;
```

<a id="Discussion"></a>

## Discussion

Use this class to access information about a named joint, such as its index in a skeleton’s array of joints, or its position on the screen or in the physical environment.

When you’re tracking a body in 2D space, you get the screen-space position of a named joint by using the [landmark(for:)](../arskeleton2d/landmark%28for_%29.md) function.

When you’re tracking a body in 3D space, you get a named joint’s position in either local or model space by using the [localTransform(for:)](../arskeleton3d/localtransform%28for_%29.md) or [modelTransform(for:)](../arskeleton3d/modeltransform%28for_%29.md) functions, respectively.

## Topics

### Creating a Joint Name

- [ARSkeletonJointNameForRecognizedPointKey](jointname/init%28__%29.md): Returns a joint name that corresponds to a key point defined in a human body pose.
- [VNRecognizedPointKey](../../vision/vnrecognizedpointkey.md): The data type for all recognized point keys.

### Identifying Joints

- [ARSkeletonJointNameRoot](jointname/root.md): A skeletal joint that’s the root of all other joints.
- [ARSkeletonJointNameHead](jointname/head.md): A skeletal joint that ARKit tracks representing the head.
- [ARSkeletonJointNameLeftFoot](jointname/leftfoot.md): A skeletal joint that ARKit tracks representing the left foot.
- [ARSkeletonJointNameLeftHand](jointname/lefthand.md): A skeletal joint that ARKit tracks representing the left hand.
- [ARSkeletonJointNameLeftShoulder](jointname/leftshoulder.md): A skeletal joint that ARKit tracks representing the left shoulder.
- [ARSkeletonJointNameRightFoot](jointname/rightfoot.md): A skeletal joint that ARKit tracks representing the right foot.
- [ARSkeletonJointNameRightHand](jointname/righthand.md): A skeletal joint that ARKit tracks representing the right hand.
- [ARSkeletonJointNameRightShoulder](jointname/rightshoulder.md): A skeletal joint that ARKit tracks representing the right shoulder.

## See Also

### Getting Joint Information

- [definition](definition.md): The particular configuration of joints that define a body’s current state.
- [jointCount](jointcount.md): The skeleton’s total number of joints.
- [isJointTracked:](isjointtracked%28__%29.md): Tells you whether ARKit tracks a joint at a particular index.
