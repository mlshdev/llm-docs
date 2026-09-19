> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/arkit/arskeleton/definition

# definition (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+

The particular configuration of joints that define a body’s current state.

## Declaration

```swift
var definition: ARSkeletonDefinition { get }
```

## See Also

### Getting Joint Information

- [isJointTracked(\_:)](isjointtracked%28__%29.md): Tells you whether ARKit tracks a joint at a particular index.
- [ARSkeleton.JointName](jointname.md): A name identifier for a joint.

# definition (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+

The particular configuration of joints that define a body’s current state.

## Declaration

```objectivec
@property (nonatomic, readonly) ARSkeletonDefinition * definition;
```

## See Also

### Getting Joint Information

- [jointCount](jointcount.md): The skeleton’s total number of joints.
- [isJointTracked:](isjointtracked%28__%29.md): Tells you whether ARKit tracks a joint at a particular index.
- [ARSkeletonJointName](jointname.md): A name identifier for a joint.
