> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/viewwillmove(tosuperview:)](https://developer.apple.com/documentation/appkit/nsview/viewwillmove(tosuperview:))

# viewWillMove(toSuperview:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Informs the view that its superview is about to change to the specified superview (which may be `nil`).

## Declaration

```swift
func viewWillMove(toSuperview newSuperview: NSView?)
```

## Parameters

- `newSuperview`: A view object that will be the new superview of the view.

<a id="Discussion"></a>

## Discussion

Subclasses can override this method to perform whatever actions are necessary.

## See Also

### Responding to View-Related Notifications

- [didAddSubview(\_:)](didaddsubview%28__%29.md): Overridden by subclasses to perform additional actions when subviews are added to the view.
- [viewDidMoveToSuperview()](viewdidmovetosuperview%28%29.md): Informs the view that its superview has changed (possibly to `nil`).
- [viewDidMoveToWindow()](viewdidmovetowindow%28%29.md): Informs the view that it has been added to a new view hierarchy.
- [viewWillMove(toWindow:)](viewwillmove%28towindow_%29.md): Informs the view that it’s being added to the view hierarchy of the specified window object (which may be `nil`).
- [willRemoveSubview(\_:)](willremovesubview%28__%29.md): Overridden by subclasses to perform additional actions before subviews are removed from the view.

# viewWillMoveToSuperview: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Informs the view that its superview is about to change to the specified superview (which may be `nil`).

## Declaration

```objectivec
- (void) viewWillMoveToSuperview:(NSView *) newSuperview;
```

## Parameters

- `newSuperview`: A view object that will be the new superview of the view.

<a id="Discussion"></a>

## Discussion

Subclasses can override this method to perform whatever actions are necessary.

## See Also

### Responding to View-Related Notifications

- [didAddSubview:](didaddsubview%28__%29.md): Overridden by subclasses to perform additional actions when subviews are added to the view.
- [viewDidMoveToSuperview](viewdidmovetosuperview%28%29.md): Informs the view that its superview has changed (possibly to `nil`).
- [viewDidMoveToWindow](viewdidmovetowindow%28%29.md): Informs the view that it has been added to a new view hierarchy.
- [viewWillMoveToWindow:](viewwillmove%28towindow_%29.md): Informs the view that it’s being added to the view hierarchy of the specified window object (which may be `nil`).
- [willRemoveSubview:](willremovesubview%28__%29.md): Overridden by subclasses to perform additional actions before subviews are removed from the view.
