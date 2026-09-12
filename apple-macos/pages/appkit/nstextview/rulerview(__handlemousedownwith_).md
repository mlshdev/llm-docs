> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextview/rulerview(_:handlemousedownwith:)](https://developer.apple.com/documentation/appkit/nstextview/rulerview(_:handlemousedownwith:))

# rulerView(\_:handleMouseDownWith:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Adds a left tab marker to the ruler at the location clicked.

## Declaration

```swift
func rulerView(_ ruler: NSRulerView, handleMouseDownWith event: NSEvent)
```

## Parameters

- `ruler`: The ruler view sending the message.
- `event`: The mouse down event.

<a id="Discussion"></a>

## Discussion

A subclass can override this method to provide other behavior, such as creating guidelines. This method is invoked once with `theEvent` when the user first clicks the ruler area of `aRulerView`, as described in the [NSRulerView](../nsrulerview.md) class specification.

## See Also

### Supporting the ruler view

- [rulerView(\_:didMove:)](rulerview%28__didmove_%29.md): Modifies the paragraph style of the paragraphs containing the selection to record the new location of the marker.
- [rulerView(\_:willMove:toLocation:)](rulerview%28__willmove_tolocation_%29.md): Returns a potentially modified location to which the marker should be moved.
- [rulerView(\_:shouldMove:)](rulerview%28__shouldmove_%29.md): Returns whether the marker should be moved.
- [rulerView(\_:didRemove:)](rulerview%28__didremove_%29.md): Modifies the paragraph style of the paragraphs containing the selection—if possible—by removing the specified marker.
- [rulerView(\_:shouldRemove:)](rulerview%28__shouldremove_%29.md): Returns whether the marker should be removed.
- [rulerView(\_:didAdd:)](rulerview%28__didadd_%29.md): Modifies the paragraph style of the paragraphs containing the selection to accommodate a new marker.
- [rulerView(\_:shouldAdd:)](rulerview%28__shouldadd_%29.md): Returns whether a new marker can be added.
- [rulerView(\_:willAdd:atLocation:)](rulerview%28__willadd_atlocation_%29.md): Returns a potentially modified location to which the marker should be added.

# rulerView:handleMouseDown: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Adds a left tab marker to the ruler at the location clicked.

## Declaration

```objectivec
- (void) rulerView:(NSRulerView *) ruler handleMouseDown:(NSEvent *) event;
```

## Parameters

- `ruler`: The ruler view sending the message.
- `event`: The mouse down event.

<a id="Discussion"></a>

## Discussion

A subclass can override this method to provide other behavior, such as creating guidelines. This method is invoked once with `theEvent` when the user first clicks the ruler area of `aRulerView`, as described in the [NSRulerView](../nsrulerview.md) class specification.

## See Also

### Supporting the ruler view

- [rulerView:didMoveMarker:](rulerview%28__didmove_%29.md): Modifies the paragraph style of the paragraphs containing the selection to record the new location of the marker.
- [rulerView:willMoveMarker:toLocation:](rulerview%28__willmove_tolocation_%29.md): Returns a potentially modified location to which the marker should be moved.
- [rulerView:shouldMoveMarker:](rulerview%28__shouldmove_%29.md): Returns whether the marker should be moved.
- [rulerView:didRemoveMarker:](rulerview%28__didremove_%29.md): Modifies the paragraph style of the paragraphs containing the selection—if possible—by removing the specified marker.
- [rulerView:shouldRemoveMarker:](rulerview%28__shouldremove_%29.md): Returns whether the marker should be removed.
- [rulerView:didAddMarker:](rulerview%28__didadd_%29.md): Modifies the paragraph style of the paragraphs containing the selection to accommodate a new marker.
- [rulerView:shouldAddMarker:](rulerview%28__shouldadd_%29.md): Returns whether a new marker can be added.
- [rulerView:willAddMarker:atLocation:](rulerview%28__willadd_atlocation_%29.md): Returns a potentially modified location to which the marker should be added.
