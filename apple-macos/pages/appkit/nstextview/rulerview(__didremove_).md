> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextview/rulerview(_:didremove:)](https://developer.apple.com/documentation/appkit/nstextview/rulerview(_:didremove:))

# rulerView(\_:didRemove:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Modifies the paragraph style of the paragraphs containing the selection—if possible—by removing the specified marker.

## Declaration

```swift
func rulerView(_ ruler: NSRulerView, didRemove marker: NSRulerMarker)
```

## Parameters

- `ruler`: The ruler view sending the message.
- `marker`: The marker that was removed.

<a id="Discussion"></a>

## Discussion

This method records the change by invoking [didChangeText()](didchangetext%28%29.md) after removing the marker.

`NSTextView` checks for permission to move or remove a tab stop in its [rulerView(\_:shouldMove:)](rulerview%28__shouldmove_%29.md) method, which invokes [shouldChangeText(in:replacementString:)](shouldchangetext%28in_replacementstring_%29.md) to send out the proper request and notifications, and only invokes this method if permission is granted.

## See Also

### Related Documentation

- [representedObject](../nsrulermarker/representedobject.md): The object the receiver represents.
- [shouldChangeText(in:replacementString:)](shouldchangetext%28in_replacementstring_%29.md): Initiates a series of delegate messages (and general notifications) to determine whether modifications can be made to the characters and attributes of the receiver’s text.

### Supporting the ruler view

- [rulerView(\_:didMove:)](rulerview%28__didmove_%29.md): Modifies the paragraph style of the paragraphs containing the selection to record the new location of the marker.
- [rulerView(\_:willMove:toLocation:)](rulerview%28__willmove_tolocation_%29.md): Returns a potentially modified location to which the marker should be moved.
- [rulerView(\_:shouldMove:)](rulerview%28__shouldmove_%29.md): Returns whether the marker should be moved.
- [rulerView(\_:shouldRemove:)](rulerview%28__shouldremove_%29.md): Returns whether the marker should be removed.
- [rulerView(\_:didAdd:)](rulerview%28__didadd_%29.md): Modifies the paragraph style of the paragraphs containing the selection to accommodate a new marker.
- [rulerView(\_:shouldAdd:)](rulerview%28__shouldadd_%29.md): Returns whether a new marker can be added.
- [rulerView(\_:willAdd:atLocation:)](rulerview%28__willadd_atlocation_%29.md): Returns a potentially modified location to which the marker should be added.
- [rulerView(\_:handleMouseDownWith:)](rulerview%28__handlemousedownwith_%29.md): Adds a left tab marker to the ruler at the location clicked.

# rulerView:didRemoveMarker: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Modifies the paragraph style of the paragraphs containing the selection—if possible—by removing the specified marker.

## Declaration

```objectivec
- (void) rulerView:(NSRulerView *) ruler didRemoveMarker:(NSRulerMarker *) marker;
```

## Parameters

- `ruler`: The ruler view sending the message.
- `marker`: The marker that was removed.

<a id="Discussion"></a>

## Discussion

This method records the change by invoking [didChangeText](didchangetext%28%29.md) after removing the marker.

`NSTextView` checks for permission to move or remove a tab stop in its [rulerView:shouldMoveMarker:](rulerview%28__shouldmove_%29.md) method, which invokes [shouldChangeTextInRange:replacementString:](shouldchangetext%28in_replacementstring_%29.md) to send out the proper request and notifications, and only invokes this method if permission is granted.

## See Also

### Related Documentation

- [representedObject](../nsrulermarker/representedobject.md): The object the receiver represents.
- [shouldChangeTextInRange:replacementString:](shouldchangetext%28in_replacementstring_%29.md): Initiates a series of delegate messages (and general notifications) to determine whether modifications can be made to the characters and attributes of the receiver’s text.

### Supporting the ruler view

- [rulerView:didMoveMarker:](rulerview%28__didmove_%29.md): Modifies the paragraph style of the paragraphs containing the selection to record the new location of the marker.
- [rulerView:willMoveMarker:toLocation:](rulerview%28__willmove_tolocation_%29.md): Returns a potentially modified location to which the marker should be moved.
- [rulerView:shouldMoveMarker:](rulerview%28__shouldmove_%29.md): Returns whether the marker should be moved.
- [rulerView:shouldRemoveMarker:](rulerview%28__shouldremove_%29.md): Returns whether the marker should be removed.
- [rulerView:didAddMarker:](rulerview%28__didadd_%29.md): Modifies the paragraph style of the paragraphs containing the selection to accommodate a new marker.
- [rulerView:shouldAddMarker:](rulerview%28__shouldadd_%29.md): Returns whether a new marker can be added.
- [rulerView:willAddMarker:atLocation:](rulerview%28__willadd_atlocation_%29.md): Returns a potentially modified location to which the marker should be added.
- [rulerView:handleMouseDown:](rulerview%28__handlemousedownwith_%29.md): Adds a left tab marker to the ruler at the location clicked.
