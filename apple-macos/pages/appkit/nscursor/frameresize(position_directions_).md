> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscursor/frameresize(position:directions:)](https://developer.apple.com/documentation/appkit/nscursor/frameresize(position:directions:))

# frameResize(position:directions:)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** Mac Catalyst 18.0+ · macOS 15.0+

Returns the cursor for resizing a rectangular frame from the specified edge or corner.

## Declaration

```swift
class func frameResize(position: NSCursor.FrameResizePosition, directions: NSCursor.FrameResizeDirection.Set) -> NSCursor
```

## Parameters

- `position`: The position along the perimeter of a rectangular frame (its edges and corners) from which it’s resized.
- `directions`: The directions in which a rectangular frame can be resized. This must not be empty.

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
