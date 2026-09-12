> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiactionsheet/show(from:in:animated:)](https://developer.apple.com/documentation/uikit/uiactionsheet/show(from:in:animated:))

# show(from:in:animated:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ (deprecated in 8.3) · iPadOS 3.2+ (deprecated in 8.3) · Mac Catalyst 13.1+ (deprecated in 13.1)

Displays an action sheet that originates from the specified view.

## Declaration

```swift
func show(from rect: CGRect, in view: UIView, animated: Bool)
```

## Parameters

- `rect`: The portion of `view` from which to originate the action sheet.
- `view`: The view from which to originate the action sheet.
- `animated`: Specify [true](https://developer.apple.com/documentation/swift/true) to animate the presentation of the action sheet or [false](https://developer.apple.com/documentation/swift/false) to present it immediately without any animation effects.

<a id="Discussion"></a>

## Discussion

On iPad, this method displays the action sheet in a popover whose arrow points to the specified rectangle of the view. The popover does not overlap the specified rectangle.

## See Also

### Presenting the action sheet

- [show(from:)](show%28from_%29-9i3tw.md): Deprecated. Displays an action sheet that originates from the specified tab bar.
- [show(from:)](show%28from_%29-1p4ap.md): Deprecated. Displays an action sheet that originates from the specified toolbar.
- [show(in:)](show%28in_%29.md): Deprecated. Displays an action sheet that originates from the specified view.
- [show(from:animated:)](show%28from_animated_%29.md): Deprecated. Displays an action sheet that originates from the specified bar button item.

# showFromRect:inView:animated: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ (deprecated in 8.3) · iPadOS 3.2+ (deprecated in 8.3) · Mac Catalyst 13.1+ (deprecated in 13.1)

Displays an action sheet that originates from the specified view.

## Declaration

```objectivec
- (void) showFromRect:(CGRect) rect inView:(UIView *) view animated:(BOOL) animated;
```

## Parameters

- `rect`: The portion of `view` from which to originate the action sheet.
- `view`: The view from which to originate the action sheet.
- `animated`: Specify [true](https://developer.apple.com/documentation/swift/true) to animate the presentation of the action sheet or [false](https://developer.apple.com/documentation/swift/false) to present it immediately without any animation effects.

<a id="Discussion"></a>

## Discussion

On iPad, this method displays the action sheet in a popover whose arrow points to the specified rectangle of the view. The popover does not overlap the specified rectangle.

## See Also

### Presenting the action sheet

- [showFromTabBar:](show%28from_%29-9i3tw.md): Deprecated. Displays an action sheet that originates from the specified tab bar.
- [showFromToolbar:](show%28from_%29-1p4ap.md): Deprecated. Displays an action sheet that originates from the specified toolbar.
- [showInView:](show%28in_%29.md): Deprecated. Displays an action sheet that originates from the specified view.
- [showFromBarButtonItem:animated:](show%28from_animated_%29.md): Deprecated. Displays an action sheet that originates from the specified bar button item.
