> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextview/rulerview(_:shouldadd:)](https://developer.apple.com/documentation/appkit/nstextview/rulerview(_:shouldadd:))

# rulerView(\_:shouldAdd:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns whether a new marker can be added.

## Declaration

```swift
func rulerView(_ ruler: NSRulerView, shouldAdd marker: NSRulerMarker) -> Bool
```

## Parameters

- `ruler`: The ruler view sending the message.
- `marker`: The marker to be added.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `aMarker` can be added, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

The receiver checks for permission to make the change by invoking [shouldChangeText(in:replacementString:)](shouldchangetext%28in_replacementstring_%29.md) and returning the return value of that message. If the change is allowed, the receiver is then sent a [rulerView(\_:didAdd:)](rulerview%28__didadd_%29.md) message.

## See Also

### Supporting the ruler view

- [rulerView(\_:didMove:)](rulerview%28__didmove_%29.md): Modifies the paragraph style of the paragraphs containing the selection to record the new location of the marker.
- [rulerView(\_:willMove:toLocation:)](rulerview%28__willmove_tolocation_%29.md): Returns a potentially modified location to which the marker should be moved.
- [rulerView(\_:shouldMove:)](rulerview%28__shouldmove_%29.md): Returns whether the marker should be moved.
- [rulerView(\_:didRemove:)](rulerview%28__didremove_%29.md): Modifies the paragraph style of the paragraphs containing the selection—if possible—by removing the specified marker.
- [rulerView(\_:shouldRemove:)](rulerview%28__shouldremove_%29.md): Returns whether the marker should be removed.
- [rulerView(\_:didAdd:)](rulerview%28__didadd_%29.md): Modifies the paragraph style of the paragraphs containing the selection to accommodate a new marker.
- [rulerView(\_:willAdd:atLocation:)](rulerview%28__willadd_atlocation_%29.md): Returns a potentially modified location to which the marker should be added.
- [rulerView(\_:handleMouseDownWith:)](rulerview%28__handlemousedownwith_%29.md): Adds a left tab marker to the ruler at the location clicked.

# rulerView:shouldAddMarker: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns whether a new marker can be added.

## Declaration

```objectivec
- (BOOL) rulerView:(NSRulerView *) ruler shouldAddMarker:(NSRulerMarker *) marker;
```

## Parameters

- `ruler`: The ruler view sending the message.
- `marker`: The marker to be added.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `aMarker` can be added, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

The receiver checks for permission to make the change by invoking [shouldChangeTextInRange:replacementString:](shouldchangetext%28in_replacementstring_%29.md) and returning the return value of that message. If the change is allowed, the receiver is then sent a [rulerView:didAddMarker:](rulerview%28__didadd_%29.md) message.

## See Also

### Supporting the ruler view

- [rulerView:didMoveMarker:](rulerview%28__didmove_%29.md): Modifies the paragraph style of the paragraphs containing the selection to record the new location of the marker.
- [rulerView:willMoveMarker:toLocation:](rulerview%28__willmove_tolocation_%29.md): Returns a potentially modified location to which the marker should be moved.
- [rulerView:shouldMoveMarker:](rulerview%28__shouldmove_%29.md): Returns whether the marker should be moved.
- [rulerView:didRemoveMarker:](rulerview%28__didremove_%29.md): Modifies the paragraph style of the paragraphs containing the selection—if possible—by removing the specified marker.
- [rulerView:shouldRemoveMarker:](rulerview%28__shouldremove_%29.md): Returns whether the marker should be removed.
- [rulerView:didAddMarker:](rulerview%28__didadd_%29.md): Modifies the paragraph style of the paragraphs containing the selection to accommodate a new marker.
- [rulerView:willAddMarker:atLocation:](rulerview%28__willadd_atlocation_%29.md): Returns a potentially modified location to which the marker should be added.
- [rulerView:handleMouseDown:](rulerview%28__handlemousedownwith_%29.md): Adds a left tab marker to the ruler at the location clicked.
