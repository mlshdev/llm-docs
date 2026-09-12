> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/addsubview(_:)](https://developer.apple.com/documentation/appkit/nsview/addsubview(_:))

# addSubview(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Adds a view to the view’s subviews so it’s displayed above its siblings.

## Declaration

```swift
func addSubview(_ view: NSView)
```

## Parameters

- `view`: The view to add to the view as a subview.

<a id="Discussion"></a>

## Discussion

This method also sets the view as the next responder of `aView`.

The view retains `aView`. If you use [removeFromSuperview()](removefromsuperview%28%29.md) to remove `aView` from the view hierarchy, `aView` is released. If you want to keep using `aView` after removing it from the view hierarchy (if, for example, you are swapping through a number of views), you must retain it before invoking [removeFromSuperview()](removefromsuperview%28%29.md).

## See Also

### Related Documentation

- [viewWillMove(toSuperview:)](viewwillmove%28tosuperview_%29.md): Informs the view that its superview is about to change to the specified superview (which may be `nil`).
- [subviews](subviews.md): The array of views embedded in the current view.
- [viewWillMove(toWindow:)](viewwillmove%28towindow_%29.md): Informs the view that it’s being added to the view hierarchy of the specified window object (which may be `nil`).
- [nextResponder](../nsresponder/nextresponder.md): The next responder after this one, or `nil` if it has none.

### Adding and Removing Subviews

- [addSubview(\_:positioned:relativeTo:)](addsubview%28__positioned_relativeto_%29.md): Inserts a view among the view’s subviews so it’s displayed immediately above or below another view.
- [removeFromSuperview()](removefromsuperview%28%29.md): Unlinks the view from its superview and its window, removes it from the responder chain, and invalidates its cursor rectangles.
- [removeFromSuperviewWithoutNeedingDisplay()](removefromsuperviewwithoutneedingdisplay%28%29.md): Unlinks the view from its superview and its window and removes it from the responder chain, but does not invalidate its cursor rectangles to cause redrawing.
- [replaceSubview(\_:with:)](replacesubview%28__with_%29.md): Replaces one of the view’s subviews with another view.
- [sortSubviews(\_:context:)](sortsubviews%28__context_%29.md): Orders the view’s immediate subviews using the specified comparator function.

# addSubview: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Adds a view to the view’s subviews so it’s displayed above its siblings.

## Declaration

```objectivec
- (void) addSubview:(NSView *) view;
```

## Parameters

- `view`: The view to add to the view as a subview.

<a id="Discussion"></a>

## Discussion

This method also sets the view as the next responder of `aView`.

The view retains `aView`. If you use [removeFromSuperview](removefromsuperview%28%29.md) to remove `aView` from the view hierarchy, `aView` is released. If you want to keep using `aView` after removing it from the view hierarchy (if, for example, you are swapping through a number of views), you must retain it before invoking [removeFromSuperview](removefromsuperview%28%29.md).

## See Also

### Related Documentation

- [viewWillMoveToSuperview:](viewwillmove%28tosuperview_%29.md): Informs the view that its superview is about to change to the specified superview (which may be `nil`).
- [subviews](subviews.md): The array of views embedded in the current view.
- [viewWillMoveToWindow:](viewwillmove%28towindow_%29.md): Informs the view that it’s being added to the view hierarchy of the specified window object (which may be `nil`).
- [nextResponder](../nsresponder/nextresponder.md): The next responder after this one, or `nil` if it has none.

### Adding and Removing Subviews

- [addSubview:positioned:relativeTo:](addsubview%28__positioned_relativeto_%29.md): Inserts a view among the view’s subviews so it’s displayed immediately above or below another view.
- [removeFromSuperview](removefromsuperview%28%29.md): Unlinks the view from its superview and its window, removes it from the responder chain, and invalidates its cursor rectangles.
- [removeFromSuperviewWithoutNeedingDisplay](removefromsuperviewwithoutneedingdisplay%28%29.md): Unlinks the view from its superview and its window and removes it from the responder chain, but does not invalidate its cursor rectangles to cause redrawing.
- [replaceSubview:with:](replacesubview%28__with_%29.md): Replaces one of the view’s subviews with another view.
- [sortSubviewsUsingFunction:context:](sortsubviews%28__context_%29.md): Orders the view’s immediate subviews using the specified comparator function.
