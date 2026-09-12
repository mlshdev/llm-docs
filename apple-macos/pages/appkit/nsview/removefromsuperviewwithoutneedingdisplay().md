> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/removefromsuperviewwithoutneedingdisplay()](https://developer.apple.com/documentation/appkit/nsview/removefromsuperviewwithoutneedingdisplay())

# removeFromSuperviewWithoutNeedingDisplay() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Unlinks the view from its superview and its window and removes it from the responder chain, but does not invalidate its cursor rectangles to cause redrawing.

## Declaration

```swift
func removeFromSuperviewWithoutNeedingDisplay()
```

<a id="Discussion"></a>

## Discussion

The view is also released; if you plan to reuse it, be sure to retain it before sending this message and to release it as appropriate when adding it as a subview of another view.

Unlike its counterpart, [removeFromSuperview()](removefromsuperview%28%29.md), this method can be safely invoked during display.

## See Also

### Adding and Removing Subviews

- [addSubview(\_:)](addsubview%28__%29.md): Adds a view to the view’s subviews so it’s displayed above its siblings.
- [addSubview(\_:positioned:relativeTo:)](addsubview%28__positioned_relativeto_%29.md): Inserts a view among the view’s subviews so it’s displayed immediately above or below another view.
- [removeFromSuperview()](removefromsuperview%28%29.md): Unlinks the view from its superview and its window, removes it from the responder chain, and invalidates its cursor rectangles.
- [replaceSubview(\_:with:)](replacesubview%28__with_%29.md): Replaces one of the view’s subviews with another view.
- [sortSubviews(\_:context:)](sortsubviews%28__context_%29.md): Orders the view’s immediate subviews using the specified comparator function.

# removeFromSuperviewWithoutNeedingDisplay (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Unlinks the view from its superview and its window and removes it from the responder chain, but does not invalidate its cursor rectangles to cause redrawing.

## Declaration

```objectivec
- (void) removeFromSuperviewWithoutNeedingDisplay;
```

<a id="Discussion"></a>

## Discussion

The view is also released; if you plan to reuse it, be sure to retain it before sending this message and to release it as appropriate when adding it as a subview of another view.

Unlike its counterpart, [removeFromSuperview](removefromsuperview%28%29.md), this method can be safely invoked during display.

## See Also

### Adding and Removing Subviews

- [addSubview:](addsubview%28__%29.md): Adds a view to the view’s subviews so it’s displayed above its siblings.
- [addSubview:positioned:relativeTo:](addsubview%28__positioned_relativeto_%29.md): Inserts a view among the view’s subviews so it’s displayed immediately above or below another view.
- [removeFromSuperview](removefromsuperview%28%29.md): Unlinks the view from its superview and its window, removes it from the responder chain, and invalidates its cursor rectangles.
- [replaceSubview:with:](replacesubview%28__with_%29.md): Replaces one of the view’s subviews with another view.
- [sortSubviewsUsingFunction:context:](sortsubviews%28__context_%29.md): Orders the view’s immediate subviews using the specified comparator function.
