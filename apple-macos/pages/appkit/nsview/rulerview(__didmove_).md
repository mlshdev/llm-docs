> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/rulerview(_:didmove:)](https://developer.apple.com/documentation/appkit/nsview/rulerview(_:didmove:))

# rulerView(\_:didMove:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Informs the client that `aRulerView` allowed the user to move `aMarker`.

## Declaration

```swift
func rulerView(_ ruler: NSRulerView, didMove marker: NSRulerMarker)
```

<a id="Discussion"></a>

## Discussion

The client can take whatever action it needs based on this message, such as updating the location of a tab stop in the selected paragraph, moving a layout guideline, or resizing a graphics element.

## See Also

### Related Documentation

- [representedObject](../nsrulermarker/representedobject.md): The object the receiver represents.
- [markerLocation](../nsrulermarker/markerlocation.md): The location of the receiver in the coordinate system of the ruler view’s client view.

### Synchronizing with Ruler Views

- [rulerView(\_:didAdd:)](rulerview%28__didadd_%29.md): Informs the client that `aRulerView` allowed the user to add `aMarker`.
- [rulerView(\_:didRemove:)](rulerview%28__didremove_%29.md): Informs the client that `aRulerView` allowed the user to remove `aMarker`.
- [rulerView(\_:handleMouseDownWith:)](rulerview%28__handlemousedownwith_%29.md): Informs the client that the user has pressed the mouse button while the cursor is in the ruler area of `aRulerView`.
- [rulerView(\_:locationFor:)](rulerview%28__locationfor_%29.md)
- [rulerView(\_:pointForLocation:)](rulerview%28__pointforlocation_%29.md)
- [rulerView(\_:shouldAdd:)](rulerview%28__shouldadd_%29.md): Requests permission for `aRulerView` to add `aMarker`, an NSRulerMarker being dragged onto the ruler by the user.
- [rulerView(\_:shouldMove:)](rulerview%28__shouldmove_%29.md): Requests permission for `aRulerView` to move `aMarker`.
- [rulerView(\_:shouldRemove:)](rulerview%28__shouldremove_%29.md): Requests permission for `aRulerView` to remove `aMarker`.
- [rulerView(\_:willAdd:atLocation:)](rulerview%28__willadd_atlocation_%29.md): Informs the client that `aRulerView` will add the new NSRulerMarker, `aMarker`.
- [rulerView(\_:willMove:toLocation:)](rulerview%28__willmove_tolocation_%29.md): Informs the client that `aRulerView` will move `aMarker`, an NSRulerMarker already on the ruler view.
- [rulerView(\_:willSetClientView:)](rulerview%28__willsetclientview_%29.md): Informs the client view that `aRulerView` is about to be appropriated by `newClient`.

# rulerView:didMoveMarker: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Informs the client that `aRulerView` allowed the user to move `aMarker`.

## Declaration

```objectivec
- (void) rulerView:(NSRulerView *) ruler didMoveMarker:(NSRulerMarker *) marker;
```

<a id="Discussion"></a>

## Discussion

The client can take whatever action it needs based on this message, such as updating the location of a tab stop in the selected paragraph, moving a layout guideline, or resizing a graphics element.

## See Also

### Related Documentation

- [representedObject](../nsrulermarker/representedobject.md): The object the receiver represents.
- [markerLocation](../nsrulermarker/markerlocation.md): The location of the receiver in the coordinate system of the ruler view’s client view.

### Synchronizing with Ruler Views

- [rulerView:didAddMarker:](rulerview%28__didadd_%29.md): Informs the client that `aRulerView` allowed the user to add `aMarker`.
- [rulerView:didRemoveMarker:](rulerview%28__didremove_%29.md): Informs the client that `aRulerView` allowed the user to remove `aMarker`.
- [rulerView:handleMouseDown:](rulerview%28__handlemousedownwith_%29.md): Informs the client that the user has pressed the mouse button while the cursor is in the ruler area of `aRulerView`.
- [rulerView:locationForPoint:](rulerview%28__locationfor_%29.md)
- [rulerView:pointForLocation:](rulerview%28__pointforlocation_%29.md)
- [rulerView:shouldAddMarker:](rulerview%28__shouldadd_%29.md): Requests permission for `aRulerView` to add `aMarker`, an NSRulerMarker being dragged onto the ruler by the user.
- [rulerView:shouldMoveMarker:](rulerview%28__shouldmove_%29.md): Requests permission for `aRulerView` to move `aMarker`.
- [rulerView:shouldRemoveMarker:](rulerview%28__shouldremove_%29.md): Requests permission for `aRulerView` to remove `aMarker`.
- [rulerView:willAddMarker:atLocation:](rulerview%28__willadd_atlocation_%29.md): Informs the client that `aRulerView` will add the new NSRulerMarker, `aMarker`.
- [rulerView:willMoveMarker:toLocation:](rulerview%28__willmove_tolocation_%29.md): Informs the client that `aRulerView` will move `aMarker`, an NSRulerMarker already on the ruler view.
- [rulerView:willSetClientView:](rulerview%28__willsetclientview_%29.md): Informs the client view that `aRulerView` is about to be appropriated by `newClient`.
