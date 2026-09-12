> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextview/rulerview(_:willmove:tolocation:)](https://developer.apple.com/documentation/appkit/nstextview/rulerview(_:willmove:tolocation:))

# rulerView(\_:willMove:toLocation:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a potentially modified location to which the marker should be moved.

## Declaration

```swift
func rulerView(_ ruler: NSRulerView, willMove marker: NSRulerMarker, toLocation location: CGFloat) -> CGFloat
```

## Parameters

- `ruler`: The ruler view sending the message.
- `marker`: The marker to be moved.
- `location`: The new location for the marker, in the ruler view’s coordinates.

<a id="return-value"></a>

## Return Value

The modified location to which the marker should be moved.

<a id="Discussion"></a>

## Discussion

This method ensures that the proposed `location` of `aMarker` lies within the appropriate bounds for the receiver’s text container. Appropriate bounds are those of the text container minus its line fragment padding.

Typically, the ruler view’s width matches that of its text view.

## See Also

### Supporting the ruler view

- [rulerView(\_:didMove:)](rulerview%28__didmove_%29.md): Modifies the paragraph style of the paragraphs containing the selection to record the new location of the marker.
- [rulerView(\_:shouldMove:)](rulerview%28__shouldmove_%29.md): Returns whether the marker should be moved.
- [rulerView(\_:didRemove:)](rulerview%28__didremove_%29.md): Modifies the paragraph style of the paragraphs containing the selection—if possible—by removing the specified marker.
- [rulerView(\_:shouldRemove:)](rulerview%28__shouldremove_%29.md): Returns whether the marker should be removed.
- [rulerView(\_:didAdd:)](rulerview%28__didadd_%29.md): Modifies the paragraph style of the paragraphs containing the selection to accommodate a new marker.
- [rulerView(\_:shouldAdd:)](rulerview%28__shouldadd_%29.md): Returns whether a new marker can be added.
- [rulerView(\_:willAdd:atLocation:)](rulerview%28__willadd_atlocation_%29.md): Returns a potentially modified location to which the marker should be added.
- [rulerView(\_:handleMouseDownWith:)](rulerview%28__handlemousedownwith_%29.md): Adds a left tab marker to the ruler at the location clicked.

# rulerView:willMoveMarker:toLocation: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a potentially modified location to which the marker should be moved.

## Declaration

```objectivec
- (CGFloat) rulerView:(NSRulerView *) ruler willMoveMarker:(NSRulerMarker *) marker toLocation:(CGFloat) location;
```

## Parameters

- `ruler`: The ruler view sending the message.
- `marker`: The marker to be moved.
- `location`: The new location for the marker, in the ruler view’s coordinates.

<a id="return-value"></a>

## Return Value

The modified location to which the marker should be moved.

<a id="Discussion"></a>

## Discussion

This method ensures that the proposed `location` of `aMarker` lies within the appropriate bounds for the receiver’s text container. Appropriate bounds are those of the text container minus its line fragment padding.

Typically, the ruler view’s width matches that of its text view.

## See Also

### Supporting the ruler view

- [rulerView:didMoveMarker:](rulerview%28__didmove_%29.md): Modifies the paragraph style of the paragraphs containing the selection to record the new location of the marker.
- [rulerView:shouldMoveMarker:](rulerview%28__shouldmove_%29.md): Returns whether the marker should be moved.
- [rulerView:didRemoveMarker:](rulerview%28__didremove_%29.md): Modifies the paragraph style of the paragraphs containing the selection—if possible—by removing the specified marker.
- [rulerView:shouldRemoveMarker:](rulerview%28__shouldremove_%29.md): Returns whether the marker should be removed.
- [rulerView:didAddMarker:](rulerview%28__didadd_%29.md): Modifies the paragraph style of the paragraphs containing the selection to accommodate a new marker.
- [rulerView:shouldAddMarker:](rulerview%28__shouldadd_%29.md): Returns whether a new marker can be added.
- [rulerView:willAddMarker:atLocation:](rulerview%28__willadd_atlocation_%29.md): Returns a potentially modified location to which the marker should be added.
- [rulerView:handleMouseDown:](rulerview%28__handlemousedownwith_%29.md): Adds a left tab marker to the ruler at the location clicked.
