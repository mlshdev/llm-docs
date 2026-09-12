> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/viewdidmovetowindow()](https://developer.apple.com/documentation/appkit/nsview/viewdidmovetowindow())

# viewDidMoveToWindow() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Informs the view that it has been added to a new view hierarchy.

## Declaration

```swift
func viewDidMoveToWindow()
```

<a id="Discussion"></a>

## Discussion

The default implementation does nothing; subclasses can override this method to perform whatever actions are necessary.

If the view’s [window](window.md) property is `nil`, that result signifies that the view was removed from its window and does not currently reside in any window.

## See Also

### Responding to View-Related Notifications

- [didAddSubview(\_:)](didaddsubview%28__%29.md): Overridden by subclasses to perform additional actions when subviews are added to the view.
- [viewDidMoveToSuperview()](viewdidmovetosuperview%28%29.md): Informs the view that its superview has changed (possibly to `nil`).
- [viewWillMove(toSuperview:)](viewwillmove%28tosuperview_%29.md): Informs the view that its superview is about to change to the specified superview (which may be `nil`).
- [viewWillMove(toWindow:)](viewwillmove%28towindow_%29.md): Informs the view that it’s being added to the view hierarchy of the specified window object (which may be `nil`).
- [willRemoveSubview(\_:)](willremovesubview%28__%29.md): Overridden by subclasses to perform additional actions before subviews are removed from the view.

# viewDidMoveToWindow (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Informs the view that it has been added to a new view hierarchy.

## Declaration

```objectivec
- (void) viewDidMoveToWindow;
```

<a id="Discussion"></a>

## Discussion

The default implementation does nothing; subclasses can override this method to perform whatever actions are necessary.

If the view’s [window](window.md) property is `nil`, that result signifies that the view was removed from its window and does not currently reside in any window.

## See Also

### Responding to View-Related Notifications

- [didAddSubview:](didaddsubview%28__%29.md): Overridden by subclasses to perform additional actions when subviews are added to the view.
- [viewDidMoveToSuperview](viewdidmovetosuperview%28%29.md): Informs the view that its superview has changed (possibly to `nil`).
- [viewWillMoveToSuperview:](viewwillmove%28tosuperview_%29.md): Informs the view that its superview is about to change to the specified superview (which may be `nil`).
- [viewWillMoveToWindow:](viewwillmove%28towindow_%29.md): Informs the view that it’s being added to the view hierarchy of the specified window object (which may be `nil`).
- [willRemoveSubview:](willremovesubview%28__%29.md): Overridden by subclasses to perform additional actions before subviews are removed from the view.
