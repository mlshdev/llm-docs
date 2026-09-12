> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsvisualeffectview/viewdidmovetowindow()](https://developer.apple.com/documentation/appkit/nsvisualeffectview/viewdidmovetowindow())

# viewDidMoveToWindow() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Notifies the view that it moved to a new window.

## Declaration

```swift
func viewDidMoveToWindow()
```

<a id="Discussion"></a>

## Discussion

When subclassing, you can override this method and use it to perform any tasks associated with the change. You must call `super` at some point during your implementation.

## See Also

### Handling Moves to a Different Window

- [viewWillMove(toWindow:)](viewwillmove%28towindow_%29.md): Notifies the view immediately before it moves to a new window (which may be `nil`).

# viewDidMoveToWindow (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Notifies the view that it moved to a new window.

## Declaration

```objectivec
- (void) viewDidMoveToWindow;
```

<a id="Discussion"></a>

## Discussion

When subclassing, you can override this method and use it to perform any tasks associated with the change. You must call `super` at some point during your implementation.

## See Also

### Handling Moves to a Different Window

- [viewWillMoveToWindow:](viewwillmove%28towindow_%29.md): Notifies the view immediately before it moves to a new window (which may be `nil`).
