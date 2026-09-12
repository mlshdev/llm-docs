> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscursor/frameresizedirection](https://developer.apple.com/documentation/appkit/nscursor/frameresizedirection)

# NSCursor.FrameResizeDirection

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 18.0+ · macOS 15.0+

The direction in which a rectangular frame can be resized.

## Declaration

```swift
enum FrameResizeDirection
```

## Topics

### Structures

- [NSCursor.FrameResizeDirection.Set](frameresizedirection/set.md): An efficient set of frame resize directions.

### Enumeration Cases

- [NSCursor.FrameResizeDirection.inward](frameresizedirection/inward.md): Indicates that the rectangular frame can be resized inwards to be smaller.
- [NSCursor.FrameResizeDirection.outward](frameresizedirection/outward.md): Indicates that the rectangular frame can be resized outwards to be larger.

## Relationships

### Conforms To

- [CaseIterable](https://developer.apple.com/documentation/swift/caseiterable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)

## See Also

### Retrieving cursor instances

- [current](current.md): Returns the application’s current cursor.
- [currentSystem](currentsystem.md): Deprecated. Returns the current system cursor.
- [arrow](arrow.md): Returns the default cursor, the arrow cursor.
- [contextualMenu](contextualmenu.md): Returns the contextual menu system cursor.
- [closedHand](closedhand.md): Returns the closed-hand system cursor.
- [crosshair](crosshair.md): Returns the cross-hair system cursor.
- [disappearingItem](disappearingitem.md): Returns a cursor indicating that the current operation will result in a disappearing item.
- [dragCopy](dragcopy.md): Returns a cursor indicating that the current operation will result in a copy action.
- [dragLink](draglink.md): Returns a cursor indicating that the current operation will result in a link action.
- [iBeam](ibeam.md): Returns a cursor that looks like a capital I with a tiny crossbeam at its middle.
- [iBeamCursorForVerticalLayout](ibeamcursorforverticallayout.md): Returns the cursor for editing vertical layout text.
- [openHand](openhand.md): Returns the open-hand system cursor.
- [operationNotAllowed](operationnotallowed.md): Returns the operation not allowed cursor.
- [pointingHand](pointinghand.md): Returns the pointing-hand system cursor.
- [zoomIn](zoomin.md): Returns the zoom-in cursor.
