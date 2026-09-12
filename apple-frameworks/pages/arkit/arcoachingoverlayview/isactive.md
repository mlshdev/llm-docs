> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arcoachingoverlayview/isactive](https://developer.apple.com/documentation/arkit/arcoachingoverlayview/isactive)

# isActive (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+

A flag that indicates whether coaching is in progress.

## Declaration

```swift
var isActive: Bool { get }
```

<a id="Discussion"></a>

## Discussion

If [activatesAutomatically](activatesautomatically.md) is enabled, this flag tells you whether coaching is in progress. Assign a [delegate](delegate.md) to coordinate your actions with the coaching overlay and allow [coachingOverlayViewWillActivate(\_:)](../arcoachingoverlayviewdelegate/coachingoverlayviewwillactivate%28__%29.md) to notify you when the coaching overlay is active.

When the coaching overlay is deactivating, [isActive](isactive.md) is [false](https://developer.apple.com/documentation/swift/false). If the `animated` property of [setActive(\_:animated:)](setactive%28__animated_%29.md) is [true](https://developer.apple.com/documentation/swift/true), [isActive](isactive.md) and [isHidden](../../uikit/uiview/ishidden.md) are [false](https://developer.apple.com/documentation/swift/false) while the coaching overlay is fading out. When the coaching overlay is deactivated without animation, or when the animation finishes, ARKit notifies you by calling [coachingOverlayViewDidDeactivate(\_:)](../arcoachingoverlayviewdelegate/coachingoverlayviewdiddeactivate%28__%29.md).

## See Also

### Activating the View

- [activatesAutomatically](activatesautomatically.md): A flag that indicates whether the coaching view activates automatically, depending on the current session state.
- [setActive(\_:animated:)](setactive%28__animated_%29.md): Controls whether coaching is in progress.

# isActive (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+

A flag that indicates whether coaching is in progress.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL isActive;
```

<a id="Discussion"></a>

## Discussion

If [activatesAutomatically](activatesautomatically.md) is enabled, this flag tells you whether coaching is in progress. Assign a [delegate](delegate.md) to coordinate your actions with the coaching overlay and allow [coachingOverlayViewWillActivate:](../arcoachingoverlayviewdelegate/coachingoverlayviewwillactivate%28__%29.md) to notify you when the coaching overlay is active.

When the coaching overlay is deactivating, [isActive](isactive.md) is [false](https://developer.apple.com/documentation/swift/false). If the `animated` property of [setActive:animated:](setactive%28__animated_%29.md) is [true](https://developer.apple.com/documentation/swift/true), [isActive](isactive.md) and [hidden](../../uikit/uiview/ishidden.md) are [false](https://developer.apple.com/documentation/swift/false) while the coaching overlay is fading out. When the coaching overlay is deactivated without animation, or when the animation finishes, ARKit notifies you by calling [coachingOverlayViewDidDeactivate:](../arcoachingoverlayviewdelegate/coachingoverlayviewdiddeactivate%28__%29.md).

## See Also

### Activating the View

- [activatesAutomatically](activatesautomatically.md): A flag that indicates whether the coaching view activates automatically, depending on the current session state.
- [setActive:animated:](setactive%28__animated_%29.md): Controls whether coaching is in progress.
