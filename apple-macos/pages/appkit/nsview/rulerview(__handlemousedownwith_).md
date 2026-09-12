> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/rulerview(_:handlemousedownwith:)](https://developer.apple.com/documentation/appkit/nsview/rulerview(_:handlemousedownwith:))

# rulerView(\_:handleMouseDownWith:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Informs the client that the user has pressed the mouse button while the cursor is in the ruler area of `aRulerView`.

## Declaration

```swift
func rulerView(_ ruler: NSRulerView, handleMouseDownWith event: NSEvent)
```

<a id="Discussion"></a>

## Discussion

`theEvent` is the mouse-down event that triggered the message. The client view can implement this method to perform an action such as adding a new marker using `NSRulerMarkerClientViewDelegation` or adding layout guidelines.

## See Also

### Synchronizing with Ruler Views

- [rulerView(\_:didAdd:)](rulerview%28__didadd_%29.md): Informs the client that `aRulerView` allowed the user to add `aMarker`.
- [rulerView(\_:didMove:)](rulerview%28__didmove_%29.md): Informs the client that `aRulerView` allowed the user to move `aMarker`.
- [rulerView(\_:didRemove:)](rulerview%28__didremove_%29.md): Informs the client that `aRulerView` allowed the user to remove `aMarker`.
- [rulerView(\_:locationFor:)](rulerview%28__locationfor_%29.md)
- [rulerView(\_:pointForLocation:)](rulerview%28__pointforlocation_%29.md)
- [rulerView(\_:shouldAdd:)](rulerview%28__shouldadd_%29.md): Requests permission for `aRulerView` to add `aMarker`, an NSRulerMarker being dragged onto the ruler by the user.
- [rulerView(\_:shouldMove:)](rulerview%28__shouldmove_%29.md): Requests permission for `aRulerView` to move `aMarker`.
- [rulerView(\_:shouldRemove:)](rulerview%28__shouldremove_%29.md): Requests permission for `aRulerView` to remove `aMarker`.
- [rulerView(\_:willAdd:atLocation:)](rulerview%28__willadd_atlocation_%29.md): Informs the client that `aRulerView` will add the new NSRulerMarker, `aMarker`.
- [rulerView(\_:willMove:toLocation:)](rulerview%28__willmove_tolocation_%29.md): Informs the client that `aRulerView` will move `aMarker`, an NSRulerMarker already on the ruler view.
- [rulerView(\_:willSetClientView:)](rulerview%28__willsetclientview_%29.md): Informs the client view that `aRulerView` is about to be appropriated by `newClient`.

# rulerView:handleMouseDown: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Informs the client that the user has pressed the mouse button while the cursor is in the ruler area of `aRulerView`.

## Declaration

```objectivec
- (void) rulerView:(NSRulerView *) ruler handleMouseDown:(NSEvent *) event;
```

<a id="Discussion"></a>

## Discussion

`theEvent` is the mouse-down event that triggered the message. The client view can implement this method to perform an action such as adding a new marker using `NSRulerMarkerClientViewDelegation` or adding layout guidelines.

## See Also

### Synchronizing with Ruler Views

- [rulerView:didAddMarker:](rulerview%28__didadd_%29.md): Informs the client that `aRulerView` allowed the user to add `aMarker`.
- [rulerView:didMoveMarker:](rulerview%28__didmove_%29.md): Informs the client that `aRulerView` allowed the user to move `aMarker`.
- [rulerView:didRemoveMarker:](rulerview%28__didremove_%29.md): Informs the client that `aRulerView` allowed the user to remove `aMarker`.
- [rulerView:locationForPoint:](rulerview%28__locationfor_%29.md)
- [rulerView:pointForLocation:](rulerview%28__pointforlocation_%29.md)
- [rulerView:shouldAddMarker:](rulerview%28__shouldadd_%29.md): Requests permission for `aRulerView` to add `aMarker`, an NSRulerMarker being dragged onto the ruler by the user.
- [rulerView:shouldMoveMarker:](rulerview%28__shouldmove_%29.md): Requests permission for `aRulerView` to move `aMarker`.
- [rulerView:shouldRemoveMarker:](rulerview%28__shouldremove_%29.md): Requests permission for `aRulerView` to remove `aMarker`.
- [rulerView:willAddMarker:atLocation:](rulerview%28__willadd_atlocation_%29.md): Informs the client that `aRulerView` will add the new NSRulerMarker, `aMarker`.
- [rulerView:willMoveMarker:toLocation:](rulerview%28__willmove_tolocation_%29.md): Informs the client that `aRulerView` will move `aMarker`, an NSRulerMarker already on the ruler view.
- [rulerView:willSetClientView:](rulerview%28__willsetclientview_%29.md): Informs the client view that `aRulerView` is about to be appropriated by `newClient`.
