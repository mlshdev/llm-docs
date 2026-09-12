> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextview/rulerview(_:willadd:atlocation:)](https://developer.apple.com/documentation/appkit/nstextview/rulerview(_:willadd:atlocation:))

# rulerView(\_:willAdd:atLocation:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a potentially modified location to which the marker should be added.

## Declaration

```swift
func rulerView(_ ruler: NSRulerView, willAdd marker: NSRulerMarker, atLocation location: CGFloat) -> CGFloat
```

## Parameters

- `ruler`: The ruler view sending the message.
- `marker`: The marker to be added.
- `location`: The new location for the marker, in the ruler view’s coordinates.

<a id="return-value"></a>

## Return Value

The modified location to which the marker should be added.

<a id="Discussion"></a>

## Discussion

This method ensures that the proposed `location` of `aMarker` lies within the appropriate bounds for the receiver’s text container, returning the modified location. Appropriate bounds are those of the text container minus its line fragment padding.

Typically, the ruler view’s width matches that of its text view.

## See Also

### Supporting the ruler view

- [rulerView(\_:didMove:)](rulerview%28__didmove_%29.md): Modifies the paragraph style of the paragraphs containing the selection to record the new location of the marker.
- [rulerView(\_:willMove:toLocation:)](rulerview%28__willmove_tolocation_%29.md): Returns a potentially modified location to which the marker should be moved.
- [rulerView(\_:shouldMove:)](rulerview%28__shouldmove_%29.md): Returns whether the marker should be moved.
- [rulerView(\_:didRemove:)](rulerview%28__didremove_%29.md): Modifies the paragraph style of the paragraphs containing the selection—if possible—by removing the specified marker.
- [rulerView(\_:shouldRemove:)](rulerview%28__shouldremove_%29.md): Returns whether the marker should be removed.
- [rulerView(\_:didAdd:)](rulerview%28__didadd_%29.md): Modifies the paragraph style of the paragraphs containing the selection to accommodate a new marker.
- [rulerView(\_:shouldAdd:)](rulerview%28__shouldadd_%29.md): Returns whether a new marker can be added.
- [rulerView(\_:handleMouseDownWith:)](rulerview%28__handlemousedownwith_%29.md): Adds a left tab marker to the ruler at the location clicked.

# rulerView:willAddMarker:atLocation: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a potentially modified location to which the marker should be added.

## Declaration

```objectivec
- (CGFloat) rulerView:(NSRulerView *) ruler willAddMarker:(NSRulerMarker *) marker atLocation:(CGFloat) location;
```

## Parameters

- `ruler`: The ruler view sending the message.
- `marker`: The marker to be added.
- `location`: The new location for the marker, in the ruler view’s coordinates.

<a id="return-value"></a>

## Return Value

The modified location to which the marker should be added.

<a id="Discussion"></a>

## Discussion

This method ensures that the proposed `location` of `aMarker` lies within the appropriate bounds for the receiver’s text container, returning the modified location. Appropriate bounds are those of the text container minus its line fragment padding.

Typically, the ruler view’s width matches that of its text view.

## See Also

### Supporting the ruler view

- [rulerView:didMoveMarker:](rulerview%28__didmove_%29.md): Modifies the paragraph style of the paragraphs containing the selection to record the new location of the marker.
- [rulerView:willMoveMarker:toLocation:](rulerview%28__willmove_tolocation_%29.md): Returns a potentially modified location to which the marker should be moved.
- [rulerView:shouldMoveMarker:](rulerview%28__shouldmove_%29.md): Returns whether the marker should be moved.
- [rulerView:didRemoveMarker:](rulerview%28__didremove_%29.md): Modifies the paragraph style of the paragraphs containing the selection—if possible—by removing the specified marker.
- [rulerView:shouldRemoveMarker:](rulerview%28__shouldremove_%29.md): Returns whether the marker should be removed.
- [rulerView:didAddMarker:](rulerview%28__didadd_%29.md): Modifies the paragraph style of the paragraphs containing the selection to accommodate a new marker.
- [rulerView:shouldAddMarker:](rulerview%28__shouldadd_%29.md): Returns whether a new marker can be added.
- [rulerView:handleMouseDown:](rulerview%28__handlemousedownwith_%29.md): Adds a left tab marker to the ruler at the location clicked.
