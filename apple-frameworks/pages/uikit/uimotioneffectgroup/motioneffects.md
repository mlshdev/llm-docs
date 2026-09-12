> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uimotioneffectgroup/motioneffects](https://developer.apple.com/documentation/uikit/uimotioneffectgroup/motioneffects)

# motionEffects (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

An array of motion effect objects to apply as a group to the view.

## Declaration

```swift
var motionEffects: [UIMotionEffect]? { get set }
```

<a id="Discussion"></a>

## Discussion

The array contains one or more [UIMotionEffect](../uimotioneffect.md) objects. When the viewer offset changes, each object in the group is asked for its key paths and updated values. Those values are then applied simultaneously.

# motionEffects (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

An array of motion effect objects to apply as a group to the view.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSArray<__kindof UIMotionEffect *> * motionEffects;
```

<a id="Discussion"></a>

## Discussion

The array contains one or more [UIMotionEffect](../uimotioneffect.md) objects. When the viewer offset changes, each object in the group is asked for its key paths and updated values. Those values are then applied simultaneously.
