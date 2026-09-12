> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiactionsheet/show(in:)](https://developer.apple.com/documentation/uikit/uiactionsheet/show(in:))

# show(in:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 8.3) · iPadOS 2.0+ (deprecated in 8.3) · Mac Catalyst 13.1+ (deprecated in 13.1)

Displays an action sheet that originates from the specified view.

> For more information, see [UIActionSheet](../uiactionsheet.md).

## Declaration

```swift
func show(in view: UIView)
```

## Parameters

- `view`: The view from which the action sheet originates.

<a id="Discussion"></a>

## Discussion

The appearance of the action sheet is animated.

On iPad, this method centers the action sheet in the middle of the screen. Generally, if you want to present an action sheet in an iPad application, you should use the [show(from:in:animated:)](show%28from_in_animated_%29.md) method to display the action sheet instead.

## See Also

### Presenting the action sheet

- [show(from:)](show%28from_%29-9i3tw.md): Deprecated. Displays an action sheet that originates from the specified tab bar.
- [show(from:)](show%28from_%29-1p4ap.md): Deprecated. Displays an action sheet that originates from the specified toolbar.
- [show(from:animated:)](show%28from_animated_%29.md): Deprecated. Displays an action sheet that originates from the specified bar button item.
- [show(from:in:animated:)](show%28from_in_animated_%29.md): Deprecated. Displays an action sheet that originates from the specified view.

# showInView: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 8.3) · iPadOS 2.0+ (deprecated in 8.3) · Mac Catalyst 13.1+ (deprecated in 13.1)

Displays an action sheet that originates from the specified view.

> For more information, see [UIActionSheet](../uiactionsheet.md).

## Declaration

```objectivec
- (void) showInView:(UIView *) view;
```

## Parameters

- `view`: The view from which the action sheet originates.

<a id="Discussion"></a>

## Discussion

The appearance of the action sheet is animated.

On iPad, this method centers the action sheet in the middle of the screen. Generally, if you want to present an action sheet in an iPad application, you should use the [showFromRect:inView:animated:](show%28from_in_animated_%29.md) method to display the action sheet instead.

## See Also

### Presenting the action sheet

- [showFromTabBar:](show%28from_%29-9i3tw.md): Deprecated. Displays an action sheet that originates from the specified tab bar.
- [showFromToolbar:](show%28from_%29-1p4ap.md): Deprecated. Displays an action sheet that originates from the specified toolbar.
- [showFromBarButtonItem:animated:](show%28from_animated_%29.md): Deprecated. Displays an action sheet that originates from the specified bar button item.
- [showFromRect:inView:animated:](show%28from_in_animated_%29.md): Deprecated. Displays an action sheet that originates from the specified view.
