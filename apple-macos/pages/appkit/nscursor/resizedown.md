> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscursor/resizedown](https://developer.apple.com/documentation/appkit/nscursor/resizedown)

# resizeDown (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.0+ (deprecated in 27.0)

Returns the resize-down system cursor.

> Use either \`+\[NSCursor rowResizeCursorInDirections:\]\` or \`+\[NSCursor frameResizeCursorFromPosition:inDirections:\]\` instead, depending on whether a divider is being re-positioned or a rectangular frame is being resized.

## Declaration

```swift
class var resizeDown: NSCursor { get }
```

<a id="return-value"></a>

## Return Value

The resize-down cursor. This cursor is used when moving or resizing an object to indicate that the user can move only in the indicated direction.

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

# resizeDownCursor (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.0+ (deprecated in 27.0)

Returns the resize-down system cursor.

> Use either \`+\[NSCursor rowResizeCursorInDirections:\]\` or \`+\[NSCursor frameResizeCursorFromPosition:inDirections:\]\` instead, depending on whether a divider is being re-positioned or a rectangular frame is being resized.

## Declaration

```objectivec
@property (class, strong, readonly) NSCursor * resizeDownCursor;
```

<a id="return-value"></a>

## Return Value

The resize-down cursor. This cursor is used when moving or resizing an object to indicate that the user can move only in the indicated direction.

## See Also

### Retrieving cursor instances

- [currentCursor](current.md): Returns the application’s current cursor.
- [currentSystemCursor](currentsystem.md): Deprecated. Returns the current system cursor.
- [arrowCursor](arrow.md): Returns the default cursor, the arrow cursor.
- [contextualMenuCursor](contextualmenu.md): Returns the contextual menu system cursor.
- [closedHandCursor](closedhand.md): Returns the closed-hand system cursor.
- [crosshairCursor](crosshair.md): Returns the cross-hair system cursor.
- [disappearingItemCursor](disappearingitem.md): Returns a cursor indicating that the current operation will result in a disappearing item.
- [dragCopyCursor](dragcopy.md): Returns a cursor indicating that the current operation will result in a copy action.
- [dragLinkCursor](draglink.md): Returns a cursor indicating that the current operation will result in a link action.
- [IBeamCursor](ibeam.md): Returns a cursor that looks like a capital I with a tiny crossbeam at its middle.
- [IBeamCursorForVerticalLayout](ibeamcursorforverticallayout.md): Returns the cursor for editing vertical layout text.
- [openHandCursor](openhand.md): Returns the open-hand system cursor.
- [operationNotAllowedCursor](operationnotallowed.md): Returns the operation not allowed cursor.
- [pointingHandCursor](pointinghand.md): Returns the pointing-hand system cursor.
- [zoomInCursor](zoomin.md): Returns the zoom-in cursor.
