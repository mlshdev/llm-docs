> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arcoachingoverlayview/setactive(_:animated:)](https://developer.apple.com/documentation/arkit/arcoachingoverlayview/setactive(_:animated:))

# setActive(\_:animated:) (Swift)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+

Controls whether coaching is in progress.

## Declaration

```swift
func setActive(_ active: Bool, animated: Bool)
```

## Parameters

- `active`: A flag you set to indicate whether the coaching overlay should activate or deactivate.
- `animated`: A flag that when [true](https://developer.apple.com/documentation/swift/true), fades the coaching overlay in or out. When you pass a value of [false](https://developer.apple.com/documentation/swift/false), the coaching overlay shows or hides instantly.

<a id="Discussion"></a>

## Discussion

If the `animated` property of [setActive(\_:animated:)](setactive%28__animated_%29.md) is [true](https://developer.apple.com/documentation/swift/true), [isActive](isactive.md) and [isHidden](../../uikit/uiview/ishidden.md) are [false](https://developer.apple.com/documentation/swift/false) while the coaching overlay is fading out. When the coaching overlay is deactivated without animation, or when the animation finishes, ARKit notifies you by calling [coachingOverlayViewDidDeactivate(\_:)](../arcoachingoverlayviewdelegate/coachingoverlayviewdiddeactivate%28__%29.md).

## See Also

### Activating the View

- [activatesAutomatically](activatesautomatically.md): A flag that indicates whether the coaching view activates automatically, depending on the current session state.
- [isActive](isactive.md): A flag that indicates whether coaching is in progress.

# setActive:animated: (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+

Controls whether coaching is in progress.

## Declaration

```objectivec
- (void) setActive:(BOOL) active animated:(BOOL) animated;
```

## Parameters

- `active`: A flag you set to indicate whether the coaching overlay should activate or deactivate.
- `animated`: A flag that when [true](https://developer.apple.com/documentation/swift/true), fades the coaching overlay in or out. When you pass a value of [false](https://developer.apple.com/documentation/swift/false), the coaching overlay shows or hides instantly.

<a id="Discussion"></a>

## Discussion

If the `animated` property of [setActive:animated:](setactive%28__animated_%29.md) is [true](https://developer.apple.com/documentation/swift/true), [isActive](isactive.md) and [hidden](../../uikit/uiview/ishidden.md) are [false](https://developer.apple.com/documentation/swift/false) while the coaching overlay is fading out. When the coaching overlay is deactivated without animation, or when the animation finishes, ARKit notifies you by calling [coachingOverlayViewDidDeactivate:](../arcoachingoverlayviewdelegate/coachingoverlayviewdiddeactivate%28__%29.md).

## See Also

### Activating the View

- [activatesAutomatically](activatesautomatically.md): A flag that indicates whether the coaching view activates automatically, depending on the current session state.
- [isActive](isactive.md): A flag that indicates whether coaching is in progress.
