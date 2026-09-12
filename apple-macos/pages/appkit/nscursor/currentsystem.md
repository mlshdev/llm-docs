> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscursor/currentsystem](https://developer.apple.com/documentation/appkit/nscursor/currentsystem)

# currentSystem (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.6+ (deprecated in 27.0)

Returns the current system cursor.

> No longer recommended. Use ScreenCaptureKit to capture the screen. Use the \`showsCursor\` property on \`SCStreamConfiguration\` to control whether or not to include the cursor in the capture. Or, use \`NSCursor.currentCursor\` if needing to just get the current cursor for this application.

## Declaration

```swift
class var currentSystem: NSCursor? { get }
```

<a id="return-value"></a>

## Return Value

A cursor whose image and hot spot match those of the currently-displayed cursor on the system

<a id="Discussion"></a>

## Discussion

This method returns the current system cursor regardless of which application set the cursor, and whether Cocoa or Carbon APIs were used to set it.

This method replaces the now deprecated QDGetCursorData function.

## See Also

### Retrieving cursor instances

- [current](current.md): Returns the application’s current cursor.
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
- [zoomOut](zoomout.md): Returns the zoom-out cursor.

# currentSystemCursor (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.6+ (deprecated in 27.0)

Returns the current system cursor.

> No longer recommended. Use ScreenCaptureKit to capture the screen. Use the \`showsCursor\` property on \`SCStreamConfiguration\` to control whether or not to include the cursor in the capture. Or, use \`NSCursor.currentCursor\` if needing to just get the current cursor for this application.

## Declaration

```objectivec
@property (class, strong, readonly, nullable) NSCursor * currentSystemCursor;
```

<a id="return-value"></a>

## Return Value

A cursor whose image and hot spot match those of the currently-displayed cursor on the system

<a id="Discussion"></a>

## Discussion

This method returns the current system cursor regardless of which application set the cursor, and whether Cocoa or Carbon APIs were used to set it.

This method replaces the now deprecated QDGetCursorData function.

## See Also

### Retrieving cursor instances

- [currentCursor](current.md): Returns the application’s current cursor.
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
- [zoomOutCursor](zoomout.md): Returns the zoom-out cursor.
