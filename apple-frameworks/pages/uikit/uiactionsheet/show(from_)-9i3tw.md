> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiactionsheet/show(from:)-9i3tw](https://developer.apple.com/documentation/uikit/uiactionsheet/show(from:)-9i3tw)

# show(from:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 8.3) · iPadOS 2.0+ (deprecated in 8.3) · Mac Catalyst 13.1+ (deprecated in 13.1)

Displays an action sheet that originates from the specified tab bar.

> For more information, see [UIActionSheet](../uiactionsheet.md).

## Declaration

```swift
func show(from view: UITabBar)
```

## Parameters

- `view`: The tab bar from which the action sheet originates.

<a id="Discussion"></a>

## Discussion

The appearance of the action sheet is animated.

On iPad, this method centers the action sheet in the middle of the screen. Generally, if you want to present an action sheet relative to a tab bar in an iPad application, you should use the [show(from:in:animated:)](show%28from_in_animated_%29.md) method instead.

## See Also

### Presenting the action sheet

- [show(from:)](show%28from_%29-1p4ap.md): Deprecated. Displays an action sheet that originates from the specified toolbar.
- [show(in:)](show%28in_%29.md): Deprecated. Displays an action sheet that originates from the specified view.
- [show(from:animated:)](show%28from_animated_%29.md): Deprecated. Displays an action sheet that originates from the specified bar button item.
- [show(from:in:animated:)](show%28from_in_animated_%29.md): Deprecated. Displays an action sheet that originates from the specified view.

# showFromTabBar: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 8.3) · iPadOS 2.0+ (deprecated in 8.3) · Mac Catalyst 13.1+ (deprecated in 13.1)

Displays an action sheet that originates from the specified tab bar.

> For more information, see [UIActionSheet](../uiactionsheet.md).

## Declaration

```objectivec
- (void) showFromTabBar:(UITabBar *) view;
```

## Parameters

- `view`: The tab bar from which the action sheet originates.

<a id="Discussion"></a>

## Discussion

The appearance of the action sheet is animated.

On iPad, this method centers the action sheet in the middle of the screen. Generally, if you want to present an action sheet relative to a tab bar in an iPad application, you should use the [showFromRect:inView:animated:](show%28from_in_animated_%29.md) method instead.

## See Also

### Presenting the action sheet

- [showFromToolbar:](show%28from_%29-1p4ap.md): Deprecated. Displays an action sheet that originates from the specified toolbar.
- [showInView:](show%28in_%29.md): Deprecated. Displays an action sheet that originates from the specified view.
- [showFromBarButtonItem:animated:](show%28from_animated_%29.md): Deprecated. Displays an action sheet that originates from the specified bar button item.
- [showFromRect:inView:animated:](show%28from_in_animated_%29.md): Deprecated. Displays an action sheet that originates from the specified view.
