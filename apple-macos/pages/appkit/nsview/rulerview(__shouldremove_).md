> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/rulerview(_:shouldremove:)](https://developer.apple.com/documentation/appkit/nsview/rulerview(_:shouldremove:))

# rulerView(\_:shouldRemove:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Requests permission for `aRulerView` to remove `aMarker`.

## Declaration

```swift
func rulerView(_ ruler: NSRulerView, shouldRemove marker: NSRulerMarker) -> Bool
```

<a id="Discussion"></a>

## Discussion

If the client returns [true](https://developer.apple.com/documentation/swift/true) the ruler view allows the user to remove the marker; if the client returns [false](https://developer.apple.com/documentation/swift/false) the marker is kept pinned to the ruler’s baseline. This message is sent as many times as needed while the user drags the marker.

The user’s ability to remove a marker is typically set on the marker itself, using NSRulerMarker’s [isRemovable](../nsrulermarker/isremovable.md) method. You should use this client view method only when the marker’s removability can vary while the user drags it (for example, if the user must press the Shift key to remove a marker).

## See Also

### Synchronizing with Ruler Views

- [rulerView(\_:didAdd:)](rulerview%28__didadd_%29.md): Informs the client that `aRulerView` allowed the user to add `aMarker`.
- [rulerView(\_:didMove:)](rulerview%28__didmove_%29.md): Informs the client that `aRulerView` allowed the user to move `aMarker`.
- [rulerView(\_:didRemove:)](rulerview%28__didremove_%29.md): Informs the client that `aRulerView` allowed the user to remove `aMarker`.
- [rulerView(\_:handleMouseDownWith:)](rulerview%28__handlemousedownwith_%29.md): Informs the client that the user has pressed the mouse button while the cursor is in the ruler area of `aRulerView`.
- [rulerView(\_:locationFor:)](rulerview%28__locationfor_%29.md)
- [rulerView(\_:pointForLocation:)](rulerview%28__pointforlocation_%29.md)
- [rulerView(\_:shouldAdd:)](rulerview%28__shouldadd_%29.md): Requests permission for `aRulerView` to add `aMarker`, an NSRulerMarker being dragged onto the ruler by the user.
- [rulerView(\_:shouldMove:)](rulerview%28__shouldmove_%29.md): Requests permission for `aRulerView` to move `aMarker`.
- [rulerView(\_:willAdd:atLocation:)](rulerview%28__willadd_atlocation_%29.md): Informs the client that `aRulerView` will add the new NSRulerMarker, `aMarker`.
- [rulerView(\_:willMove:toLocation:)](rulerview%28__willmove_tolocation_%29.md): Informs the client that `aRulerView` will move `aMarker`, an NSRulerMarker already on the ruler view.
- [rulerView(\_:willSetClientView:)](rulerview%28__willsetclientview_%29.md): Informs the client view that `aRulerView` is about to be appropriated by `newClient`.

# rulerView:shouldRemoveMarker: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Requests permission for `aRulerView` to remove `aMarker`.

## Declaration

```objectivec
- (BOOL) rulerView:(NSRulerView *) ruler shouldRemoveMarker:(NSRulerMarker *) marker;
```

<a id="Discussion"></a>

## Discussion

If the client returns [true](https://developer.apple.com/documentation/swift/true) the ruler view allows the user to remove the marker; if the client returns [false](https://developer.apple.com/documentation/swift/false) the marker is kept pinned to the ruler’s baseline. This message is sent as many times as needed while the user drags the marker.

The user’s ability to remove a marker is typically set on the marker itself, using NSRulerMarker’s [removable](../nsrulermarker/isremovable.md) method. You should use this client view method only when the marker’s removability can vary while the user drags it (for example, if the user must press the Shift key to remove a marker).

## See Also

### Synchronizing with Ruler Views

- [rulerView:didAddMarker:](rulerview%28__didadd_%29.md): Informs the client that `aRulerView` allowed the user to add `aMarker`.
- [rulerView:didMoveMarker:](rulerview%28__didmove_%29.md): Informs the client that `aRulerView` allowed the user to move `aMarker`.
- [rulerView:didRemoveMarker:](rulerview%28__didremove_%29.md): Informs the client that `aRulerView` allowed the user to remove `aMarker`.
- [rulerView:handleMouseDown:](rulerview%28__handlemousedownwith_%29.md): Informs the client that the user has pressed the mouse button while the cursor is in the ruler area of `aRulerView`.
- [rulerView:locationForPoint:](rulerview%28__locationfor_%29.md)
- [rulerView:pointForLocation:](rulerview%28__pointforlocation_%29.md)
- [rulerView:shouldAddMarker:](rulerview%28__shouldadd_%29.md): Requests permission for `aRulerView` to add `aMarker`, an NSRulerMarker being dragged onto the ruler by the user.
- [rulerView:shouldMoveMarker:](rulerview%28__shouldmove_%29.md): Requests permission for `aRulerView` to move `aMarker`.
- [rulerView:willAddMarker:atLocation:](rulerview%28__willadd_atlocation_%29.md): Informs the client that `aRulerView` will add the new NSRulerMarker, `aMarker`.
- [rulerView:willMoveMarker:toLocation:](rulerview%28__willmove_tolocation_%29.md): Informs the client that `aRulerView` will move `aMarker`, an NSRulerMarker already on the ruler view.
- [rulerView:willSetClientView:](rulerview%28__willsetclientview_%29.md): Informs the client view that `aRulerView` is about to be appropriated by `newClient`.
