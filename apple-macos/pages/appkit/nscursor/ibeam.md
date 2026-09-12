> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscursor/ibeam](https://developer.apple.com/documentation/appkit/nscursor/ibeam)

# iBeam (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.0+

Returns a cursor that looks like a capital I with a tiny crossbeam at its middle.

## Declaration

```swift
class var iBeam: NSCursor { get }
```

<a id="return-value"></a>

## Return Value

The I-beam cursor. This is the cursor that you’re used to seeing over editable or selectable text. The I-beam cursor’s default hot spot is where the crossbeam intersects the I.

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
- [iBeamCursorForVerticalLayout](ibeamcursorforverticallayout.md): Returns the cursor for editing vertical layout text.
- [openHand](openhand.md): Returns the open-hand system cursor.
- [operationNotAllowed](operationnotallowed.md): Returns the operation not allowed cursor.
- [pointingHand](pointinghand.md): Returns the pointing-hand system cursor.
- [zoomIn](zoomin.md): Returns the zoom-in cursor.
- [zoomOut](zoomout.md): Returns the zoom-out cursor.

# IBeamCursor (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** Mac Catalyst 13.1+ · macOS 10.0+

Returns a cursor that looks like a capital I with a tiny crossbeam at its middle.

## Declaration

```objectivec
@property (class, strong, readonly) NSCursor * IBeamCursor;
```

<a id="return-value"></a>

## Return Value

The I-beam cursor. This is the cursor that you’re used to seeing over editable or selectable text. The I-beam cursor’s default hot spot is where the crossbeam intersects the I.

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
- [IBeamCursorForVerticalLayout](ibeamcursorforverticallayout.md): Returns the cursor for editing vertical layout text.
- [openHandCursor](openhand.md): Returns the open-hand system cursor.
- [operationNotAllowedCursor](operationnotallowed.md): Returns the operation not allowed cursor.
- [pointingHandCursor](pointinghand.md): Returns the pointing-hand system cursor.
- [zoomInCursor](zoomin.md): Returns the zoom-in cursor.
- [zoomOutCursor](zoomout.md): Returns the zoom-out cursor.
