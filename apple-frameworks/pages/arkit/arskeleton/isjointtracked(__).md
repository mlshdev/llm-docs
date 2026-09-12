> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arskeleton/isjointtracked(_:)](https://developer.apple.com/documentation/arkit/arskeleton/isjointtracked(_:))

# isJointTracked(\_:) (Swift)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+

Tells you whether ARKit tracks a joint at a particular index.

## Declaration

```swift
func isJointTracked(_ jointIndex: Int) -> Bool
```

<a id="Discussion"></a>

## Discussion

Use this function to determine which joints ARKit tracks using a particular index.

## See Also

### Getting Joint Information

- [definition](definition.md): The particular configuration of joints that define a body’s current state.
- [ARSkeleton.JointName](jointname.md): A name identifier for a joint.

# isJointTracked: (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+

Tells you whether ARKit tracks a joint at a particular index.

## Declaration

```objectivec
- (BOOL) isJointTracked:(NSInteger) jointIndex;
```

<a id="Discussion"></a>

## Discussion

Use this function to determine which joints ARKit tracks using a particular index.

## See Also

### Getting Joint Information

- [definition](definition.md): The particular configuration of joints that define a body’s current state.
- [jointCount](jointcount.md): The skeleton’s total number of joints.
- [ARSkeletonJointName](jointname.md): A name identifier for a joint.
