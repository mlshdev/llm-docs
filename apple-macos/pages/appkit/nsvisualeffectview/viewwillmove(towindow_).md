> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsvisualeffectview/viewwillmove(towindow:)](https://developer.apple.com/documentation/appkit/nsvisualeffectview/viewwillmove(towindow:))

# viewWillMove(toWindow:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Notifies the view immediately before it moves to a new window (which may be `nil`).

## Declaration

```swift
func viewWillMove(toWindow newWindow: NSWindow?)
```

## Parameters

- `newWindow`: The window object that will be at the root of the view’s new view hierarchy. If the view is being removed from a window and there isn’t a new window, this parameter is `nil`.

<a id="Discussion"></a>

## Discussion

When subclassing, you can override this method and use it to perform any tasks associated with the change. You must call `super` at some point during your implementation.

## See Also

### Handling Moves to a Different Window

- [viewDidMoveToWindow()](viewdidmovetowindow%28%29.md): Notifies the view that it moved to a new window.

# viewWillMoveToWindow: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Notifies the view immediately before it moves to a new window (which may be `nil`).

## Declaration

```objectivec
- (void) viewWillMoveToWindow:(NSWindow *) newWindow;
```

## Parameters

- `newWindow`: The window object that will be at the root of the view’s new view hierarchy. If the view is being removed from a window and there isn’t a new window, this parameter is `nil`.

<a id="Discussion"></a>

## Discussion

When subclassing, you can override this method and use it to perform any tasks associated with the change. You must call `super` at some point during your implementation.

## See Also

### Handling Moves to a Different Window

- [viewDidMoveToWindow](viewdidmovetowindow%28%29.md): Notifies the view that it moved to a new window.
