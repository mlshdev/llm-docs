> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arcoachingoverlayviewdelegate/coachingoverlayviewdiddeactivate(_:)](https://developer.apple.com/documentation/arkit/arcoachingoverlayviewdelegate/coachingoverlayviewdiddeactivate(_:))

# coachingOverlayViewDidDeactivate(\_:) (Swift)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+

Tells you when the coaching experience is completely deactivated.

## Declaration

```swift
optional func coachingOverlayViewDidDeactivate(_ coachingOverlayView: ARCoachingOverlayView)
```

<a id="Discussion"></a>

## Discussion

Implement this function to do any custom actions your app requires to begin the AR experience. For example, when coaching is deactivated, your app might restore custom UI.

When the coaching overlay is deactivating, [isActive](../arcoachingoverlayview/isactive.md) is [false](https://developer.apple.com/documentation/swift/false). If the `animated` property of [setActive(\_:animated:)](../arcoachingoverlayview/setactive%28__animated_%29.md) is [true](https://developer.apple.com/documentation/swift/true), [isActive](../arcoachingoverlayview/isactive.md) and [isHidden](../../uikit/uiview/ishidden.md) are [false](https://developer.apple.com/documentation/swift/false) while the coaching overlay is fading out. When the coaching overlay is deactivated without animation, or when the animation finishes, ARKit sends a  [coachingOverlayViewDidDeactivate(\_:)](coachingoverlayviewdiddeactivate%28__%29.md) notification.

## See Also

### Enabling Coaching

- [coachingOverlayViewWillActivate(\_:)](coachingoverlayviewwillactivate%28__%29.md): Tells you when the coaching overlay view activates.

# coachingOverlayViewDidDeactivate: (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+

Tells you when the coaching experience is completely deactivated.

## Declaration

```objectivec
- (void) coachingOverlayViewDidDeactivate:(ARCoachingOverlayView *) coachingOverlayView;
```

<a id="Discussion"></a>

## Discussion

Implement this function to do any custom actions your app requires to begin the AR experience. For example, when coaching is deactivated, your app might restore custom UI.

When the coaching overlay is deactivating, [isActive](../arcoachingoverlayview/isactive.md) is [false](https://developer.apple.com/documentation/swift/false). If the `animated` property of [setActive:animated:](../arcoachingoverlayview/setactive%28__animated_%29.md) is [true](https://developer.apple.com/documentation/swift/true), [isActive](../arcoachingoverlayview/isactive.md) and [hidden](../../uikit/uiview/ishidden.md) are [false](https://developer.apple.com/documentation/swift/false) while the coaching overlay is fading out. When the coaching overlay is deactivated without animation, or when the animation finishes, ARKit sends a  [coachingOverlayViewDidDeactivate:](coachingoverlayviewdiddeactivate%28__%29.md) notification.

## See Also

### Enabling Coaching

- [coachingOverlayViewWillActivate:](coachingoverlayviewwillactivate%28__%29.md): Tells you when the coaching overlay view activates.
