> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiactionsheet/show(from:animated:)](https://developer.apple.com/documentation/uikit/uiactionsheet/show(from:animated:))

# show(from:animated:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ (deprecated in 8.3) · iPadOS 3.2+ (deprecated in 8.3) · Mac Catalyst 13.1+ (deprecated in 13.1)

Displays an action sheet that originates from the specified bar button item.

## Declaration

```swift
func show(from item: UIBarButtonItem, animated: Bool)
```

## Parameters

- `item`: The bar button item from which the action sheet originates.
- `animated`: Specify [true](https://developer.apple.com/documentation/swift/true) to animate the presentation of the action sheet or [false](https://developer.apple.com/documentation/swift/false) to present it immediately without any animation effects.

<a id="Discussion"></a>

## Discussion

On iPad, this method presents the action sheet in a popover and adds the toolbar that owns the button to the popover’s list of passthrough views. Thus, taps in the toolbar result in the action methods of the corresponding toolbar items being called. If you want the popover to be dismissed when a different toolbar item is tapped, you must implement that behavior in your action handler methods.

## See Also

### Presenting the action sheet

- [show(from:)](show%28from_%29-9i3tw.md): Deprecated. Displays an action sheet that originates from the specified tab bar.
- [show(from:)](show%28from_%29-1p4ap.md): Deprecated. Displays an action sheet that originates from the specified toolbar.
- [show(in:)](show%28in_%29.md): Deprecated. Displays an action sheet that originates from the specified view.
- [show(from:in:animated:)](show%28from_in_animated_%29.md): Deprecated. Displays an action sheet that originates from the specified view.

# showFromBarButtonItem:animated: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ (deprecated in 8.3) · iPadOS 3.2+ (deprecated in 8.3) · Mac Catalyst 13.1+ (deprecated in 13.1)

Displays an action sheet that originates from the specified bar button item.

## Declaration

```objectivec
- (void) showFromBarButtonItem:(UIBarButtonItem *) item animated:(BOOL) animated;
```

## Parameters

- `item`: The bar button item from which the action sheet originates.
- `animated`: Specify [true](https://developer.apple.com/documentation/swift/true) to animate the presentation of the action sheet or [false](https://developer.apple.com/documentation/swift/false) to present it immediately without any animation effects.

<a id="Discussion"></a>

## Discussion

On iPad, this method presents the action sheet in a popover and adds the toolbar that owns the button to the popover’s list of passthrough views. Thus, taps in the toolbar result in the action methods of the corresponding toolbar items being called. If you want the popover to be dismissed when a different toolbar item is tapped, you must implement that behavior in your action handler methods.

## See Also

### Presenting the action sheet

- [showFromTabBar:](show%28from_%29-9i3tw.md): Deprecated. Displays an action sheet that originates from the specified tab bar.
- [showFromToolbar:](show%28from_%29-1p4ap.md): Deprecated. Displays an action sheet that originates from the specified toolbar.
- [showInView:](show%28in_%29.md): Deprecated. Displays an action sheet that originates from the specified view.
- [showFromRect:inView:animated:](show%28from_in_animated_%29.md): Deprecated. Displays an action sheet that originates from the specified view.
