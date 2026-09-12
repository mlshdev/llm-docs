> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscursor/current](https://developer.apple.com/documentation/appkit/nscursor/current)

# current (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.0+

Returns the application’s current cursor.

## Declaration

```swift
class var current: NSCursor { get }
```

<a id="return-value"></a>

## Return Value

The top cursor on the application’s cursor stack. This cursor may not be the visible cursor on the screen if a different application is currently active.

<a id="Discussion"></a>

## Discussion

The method only returns the cursor set by your application using `NSCursor` methods. It does not return cursors set by other applications or cursors set by your application using Carbon APIs.

## See Also

### Related Documentation

- [mouseEntered(with:)](mouseentered%28with_%29.md): Deprecated. Automatically sent to the receiver when the cursor enters a cursor rectangle owned by the receiver.
- [pop()](pop%28%29-swift.method.md): Sends a [pop()](pop%28%29-swift.type.method.md) message to the receiver’s class.
- [push()](push%28%29.md): Puts the receiver on top of the cursor stack and makes it the current cursor.
- [set()](set%28%29.md): Makes the receiver the current cursor.
- [mouseExited(with:)](mouseexited%28with_%29.md): Deprecated. Automatically sent to the receiver when the cursor exits a cursor rectangle owned by the receiver.

### Retrieving cursor instances

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
- [zoomOut](zoomout.md): Returns the zoom-out cursor.

# currentCursor (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** Mac Catalyst 13.1+ · macOS 10.0+

Returns the application’s current cursor.

## Declaration

```objectivec
@property (class, strong, readonly) NSCursor * currentCursor;
```

<a id="return-value"></a>

## Return Value

The top cursor on the application’s cursor stack. This cursor may not be the visible cursor on the screen if a different application is currently active.

<a id="Discussion"></a>

## Discussion

The method only returns the cursor set by your application using `NSCursor` methods. It does not return cursors set by other applications or cursors set by your application using Carbon APIs.

## See Also

### Related Documentation

- [mouseEntered:](mouseentered%28with_%29.md): Deprecated. Automatically sent to the receiver when the cursor enters a cursor rectangle owned by the receiver.
- [pop](pop%28%29-swift.method.md): Sends a [pop](pop%28%29-swift.type.method.md) message to the receiver’s class.
- [push](push%28%29.md): Puts the receiver on top of the cursor stack and makes it the current cursor.
- [set](set%28%29.md): Makes the receiver the current cursor.
- [mouseExited:](mouseexited%28with_%29.md): Deprecated. Automatically sent to the receiver when the cursor exits a cursor rectangle owned by the receiver.

### Retrieving cursor instances

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
- [zoomOutCursor](zoomout.md): Returns the zoom-out cursor.
