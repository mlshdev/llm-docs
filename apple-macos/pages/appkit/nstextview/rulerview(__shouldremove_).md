> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextview/rulerview(_:shouldremove:)](https://developer.apple.com/documentation/appkit/nstextview/rulerview(_:shouldremove:))

# rulerView(\_:shouldRemove:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns whether the marker should be removed.

## Declaration

```swift
func rulerView(_ ruler: NSRulerView, shouldRemove marker: NSRulerMarker) -> Bool
```

## Parameters

- `ruler`: The ruler view sending the message.
- `marker`: The marker to be removed.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `aMarker` can be removed, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

Only markers that represent tab stops can be removed. This method returns [true](https://developer.apple.com/documentation/swift/true) if `aMarker` represents an [NSTextTab](../nstexttab.md) object, [false](https://developer.apple.com/documentation/swift/false) otherwise. Because this method can be invoked repeatedly as the user drags a ruler marker, it returns that value immediately. If the change is allowed and the user actually removes the marker, the receiver is also sent a [rulerView(\_:didRemove:)](rulerview%28__didremove_%29.md) message.

## See Also

### Supporting the ruler view

- [rulerView(\_:didMove:)](rulerview%28__didmove_%29.md): Modifies the paragraph style of the paragraphs containing the selection to record the new location of the marker.
- [rulerView(\_:willMove:toLocation:)](rulerview%28__willmove_tolocation_%29.md): Returns a potentially modified location to which the marker should be moved.
- [rulerView(\_:shouldMove:)](rulerview%28__shouldmove_%29.md): Returns whether the marker should be moved.
- [rulerView(\_:didRemove:)](rulerview%28__didremove_%29.md): Modifies the paragraph style of the paragraphs containing the selection—if possible—by removing the specified marker.
- [rulerView(\_:didAdd:)](rulerview%28__didadd_%29.md): Modifies the paragraph style of the paragraphs containing the selection to accommodate a new marker.
- [rulerView(\_:shouldAdd:)](rulerview%28__shouldadd_%29.md): Returns whether a new marker can be added.
- [rulerView(\_:willAdd:atLocation:)](rulerview%28__willadd_atlocation_%29.md): Returns a potentially modified location to which the marker should be added.
- [rulerView(\_:handleMouseDownWith:)](rulerview%28__handlemousedownwith_%29.md): Adds a left tab marker to the ruler at the location clicked.

# rulerView:shouldRemoveMarker: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns whether the marker should be removed.

## Declaration

```objectivec
- (BOOL) rulerView:(NSRulerView *) ruler shouldRemoveMarker:(NSRulerMarker *) marker;
```

## Parameters

- `ruler`: The ruler view sending the message.
- `marker`: The marker to be removed.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `aMarker` can be removed, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

Only markers that represent tab stops can be removed. This method returns [true](https://developer.apple.com/documentation/swift/true) if `aMarker` represents an [NSTextTab](../nstexttab.md) object, [false](https://developer.apple.com/documentation/swift/false) otherwise. Because this method can be invoked repeatedly as the user drags a ruler marker, it returns that value immediately. If the change is allowed and the user actually removes the marker, the receiver is also sent a [rulerView:didRemoveMarker:](rulerview%28__didremove_%29.md) message.

## See Also

### Supporting the ruler view

- [rulerView:didMoveMarker:](rulerview%28__didmove_%29.md): Modifies the paragraph style of the paragraphs containing the selection to record the new location of the marker.
- [rulerView:willMoveMarker:toLocation:](rulerview%28__willmove_tolocation_%29.md): Returns a potentially modified location to which the marker should be moved.
- [rulerView:shouldMoveMarker:](rulerview%28__shouldmove_%29.md): Returns whether the marker should be moved.
- [rulerView:didRemoveMarker:](rulerview%28__didremove_%29.md): Modifies the paragraph style of the paragraphs containing the selection—if possible—by removing the specified marker.
- [rulerView:didAddMarker:](rulerview%28__didadd_%29.md): Modifies the paragraph style of the paragraphs containing the selection to accommodate a new marker.
- [rulerView:shouldAddMarker:](rulerview%28__shouldadd_%29.md): Returns whether a new marker can be added.
- [rulerView:willAddMarker:atLocation:](rulerview%28__willadd_atlocation_%29.md): Returns a potentially modified location to which the marker should be added.
- [rulerView:handleMouseDown:](rulerview%28__handlemousedownwith_%29.md): Adds a left tab marker to the ruler at the location clicked.
