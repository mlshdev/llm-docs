> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/didaddsubview(_:)](https://developer.apple.com/documentation/appkit/nsview/didaddsubview(_:))

# didAddSubview(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Overridden by subclasses to perform additional actions when subviews are added to the view.

## Declaration

```swift
func didAddSubview(_ subview: NSView)
```

## Parameters

- `subview`: The view that was added as a subview.

<a id="Discussion"></a>

## Discussion

This method is invoked by [addSubview(\_:)](addsubview%28__%29.md).

## See Also

### Responding to View-Related Notifications

- [viewDidMoveToSuperview()](viewdidmovetosuperview%28%29.md): Informs the view that its superview has changed (possibly to `nil`).
- [viewDidMoveToWindow()](viewdidmovetowindow%28%29.md): Informs the view that it has been added to a new view hierarchy.
- [viewWillMove(toSuperview:)](viewwillmove%28tosuperview_%29.md): Informs the view that its superview is about to change to the specified superview (which may be `nil`).
- [viewWillMove(toWindow:)](viewwillmove%28towindow_%29.md): Informs the view that it’s being added to the view hierarchy of the specified window object (which may be `nil`).
- [willRemoveSubview(\_:)](willremovesubview%28__%29.md): Overridden by subclasses to perform additional actions before subviews are removed from the view.

# didAddSubview: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Overridden by subclasses to perform additional actions when subviews are added to the view.

## Declaration

```objectivec
- (void) didAddSubview:(NSView *) subview;
```

## Parameters

- `subview`: The view that was added as a subview.

<a id="Discussion"></a>

## Discussion

This method is invoked by [addSubview:](addsubview%28__%29.md).

## See Also

### Responding to View-Related Notifications

- [viewDidMoveToSuperview](viewdidmovetosuperview%28%29.md): Informs the view that its superview has changed (possibly to `nil`).
- [viewDidMoveToWindow](viewdidmovetowindow%28%29.md): Informs the view that it has been added to a new view hierarchy.
- [viewWillMoveToSuperview:](viewwillmove%28tosuperview_%29.md): Informs the view that its superview is about to change to the specified superview (which may be `nil`).
- [viewWillMoveToWindow:](viewwillmove%28towindow_%29.md): Informs the view that it’s being added to the view hierarchy of the specified window object (which may be `nil`).
- [willRemoveSubview:](willremovesubview%28__%29.md): Overridden by subclasses to perform additional actions before subviews are removed from the view.
