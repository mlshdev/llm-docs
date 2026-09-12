> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/replacesubview(_:with:)](https://developer.apple.com/documentation/appkit/nsview/replacesubview(_:with:))

# replaceSubview(\_:with:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Replaces one of the view’s subviews with another view.

## Declaration

```swift
func replaceSubview(_ oldView: NSView, with newView: NSView)
```

## Parameters

- `oldView`: The view to be replaced by `newView`. May not be `nil`.
- `newView`: The view to replace `oldView`. May not be `nil`.

<a id="Discussion"></a>

## Discussion

This method does nothing if `oldView` is not a subview of the view.

Neither `oldView` nor `newView` may be `nil`, and the behavior is undefined if either of these parameters is `nil`.

This method causes `oldView` to be released; if you plan to reuse it, be sure to retain it before sending this message and to release it as appropriate when adding it as a subview of another NSView.

Calling this method also removes any constraints associated with `oldView` and its subtree.

## See Also

### Adding and Removing Subviews

- [addSubview(\_:)](addsubview%28__%29.md): Adds a view to the view’s subviews so it’s displayed above its siblings.
- [addSubview(\_:positioned:relativeTo:)](addsubview%28__positioned_relativeto_%29.md): Inserts a view among the view’s subviews so it’s displayed immediately above or below another view.
- [removeFromSuperview()](removefromsuperview%28%29.md): Unlinks the view from its superview and its window, removes it from the responder chain, and invalidates its cursor rectangles.
- [removeFromSuperviewWithoutNeedingDisplay()](removefromsuperviewwithoutneedingdisplay%28%29.md): Unlinks the view from its superview and its window and removes it from the responder chain, but does not invalidate its cursor rectangles to cause redrawing.
- [sortSubviews(\_:context:)](sortsubviews%28__context_%29.md): Orders the view’s immediate subviews using the specified comparator function.

# replaceSubview:with: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Replaces one of the view’s subviews with another view.

## Declaration

```objectivec
- (void) replaceSubview:(NSView *) oldView with:(NSView *) newView;
```

## Parameters

- `oldView`: The view to be replaced by `newView`. May not be `nil`.
- `newView`: The view to replace `oldView`. May not be `nil`.

<a id="Discussion"></a>

## Discussion

This method does nothing if `oldView` is not a subview of the view.

Neither `oldView` nor `newView` may be `nil`, and the behavior is undefined if either of these parameters is `nil`.

This method causes `oldView` to be released; if you plan to reuse it, be sure to retain it before sending this message and to release it as appropriate when adding it as a subview of another NSView.

Calling this method also removes any constraints associated with `oldView` and its subtree.

## See Also

### Adding and Removing Subviews

- [addSubview:](addsubview%28__%29.md): Adds a view to the view’s subviews so it’s displayed above its siblings.
- [addSubview:positioned:relativeTo:](addsubview%28__positioned_relativeto_%29.md): Inserts a view among the view’s subviews so it’s displayed immediately above or below another view.
- [removeFromSuperview](removefromsuperview%28%29.md): Unlinks the view from its superview and its window, removes it from the responder chain, and invalidates its cursor rectangles.
- [removeFromSuperviewWithoutNeedingDisplay](removefromsuperviewwithoutneedingdisplay%28%29.md): Unlinks the view from its superview and its window and removes it from the responder chain, but does not invalidate its cursor rectangles to cause redrawing.
- [sortSubviewsUsingFunction:context:](sortsubviews%28__context_%29.md): Orders the view’s immediate subviews using the specified comparator function.
