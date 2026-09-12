> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscursor](https://developer.apple.com/documentation/appkit/nscursor)

# NSCursor (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.0+

A pointer (also called a cursor).

## Declaration

```swift
class NSCursor
```

<a id="overview"></a>

## Overview

The following table shows and describes the system cursors, and indicates the class method for obtaining them:

| Cursor | Description |
| --- | --- |
| ![arrow cursor](https://developer.apple.com/images/com.apple.appkit/media-2555572@2x.png) | The arrow cursor ([arrow](nscursor/arrow.md)) |
| ![I-beam cursor](https://developer.apple.com/images/com.apple.appkit/media-2555577@2x.png) | The I-beam cursor for indicating insertion points ([iBeam](nscursor/ibeam.md)) |
| ![cross-hair cursor](https://developer.apple.com/images/com.apple.appkit/media-2555579@2x.png) | The cross-hair cursor ([crosshair](nscursor/crosshair.md)) |
| ![closed-hand cursor](https://developer.apple.com/images/com.apple.appkit/media-2555583@2x.png) | The closed-hand cursor ([closedHand](nscursor/closedhand.md)) |
| ![open-hand cursor](https://developer.apple.com/images/com.apple.appkit/media-2555589@2x.png) | The open-hand cursor ([openHand](nscursor/openhand.md)) |
| ![pointing hand cursor](https://developer.apple.com/images/com.apple.appkit/media-2555596@2x.png) | The pointing-hand cursor ([pointingHand](nscursor/pointinghand.md)) |
| ![resize-left cursor](https://developer.apple.com/images/com.apple.appkit/media-2555601@2x.png) | The resize-left cursor ([resizeLeft](nscursor/resizeleft.md)) |
| ![resize-right cursor](https://developer.apple.com/images/com.apple.appkit/media-2555605@2x.png) | The resize-right cursor ([resizeRight](nscursor/resizeright.md)) |
| ![resize-left-and-right cursor](https://developer.apple.com/images/com.apple.appkit/media-2555610@2x.png) | The resize-left-and-right cursor ([resizeLeftRight](nscursor/resizeleftright.md)) |
| ![resize-up cursor](https://developer.apple.com/images/com.apple.appkit/media-2555619@2x.png) | The resize-up cursor ([resizeUp](nscursor/resizeup.md)) |
| ![resize-down cursor](https://developer.apple.com/images/com.apple.appkit/media-2555626@2x.png) | The resize-down cursor ([resizeDown](nscursor/resizedown.md)) |
| ![resize-up-and-down cursor](https://developer.apple.com/images/com.apple.appkit/media-2555629@2x.png) | The resize-up-and-down cursor ([resizeUpDown](nscursor/resizeupdown.md)) |
| ![disappearing item cursor](https://developer.apple.com/images/com.apple.appkit/media-2555632@2x.png) | The disappearing item cursor ([disappearingItem](nscursor/disappearingitem.md)) |
| ![disappearing item cursor](https://developer.apple.com/images/com.apple.appkit/media-2555638@2x.png) | The I-Beam text cursor for vertical layout ([iBeamCursorForVerticalLayout](nscursor/ibeamcursorforverticallayout.md)). |
| ![](https://developer.apple.com/images/com.apple.appkit/media-2555643@2x.png) | The not allowed cursor ([operationNotAllowed](nscursor/operationnotallowed.md)). |
| ![](https://developer.apple.com/images/com.apple.appkit/media-2555647@2x.png) | The drag link cursor ([dragLink](nscursor/draglink.md)). |
| ![](https://developer.apple.com/images/com.apple.appkit/media-2555652@2x.png) | The drag copy cursor ([dragCopy](nscursor/dragcopy.md)). |
| ![](https://developer.apple.com/images/com.apple.appkit/media-2555658@2x.png) | The contextual menu cursor ([contextualMenu](nscursor/contextualmenu.md)). |

In macOS 10.3 and later, cursor size is no longer limited to 16 by 16 pixels.

<a id="Cursor-rectangles"></a>

### Cursor rectangles

In Cocoa, you can change the currently displayed cursor based on the position of the mouse over one of your views. You might use this technique to provide visual feedback about what actions the user can take with the mouse. For example, you might display one of the resize cursors whenever the mouse moves over a portion of your view that acts as a custom resizing handle. To set this up, you associate a cursor object with one or more cursor rectangles in the view.

Cursor rectangles are a specialized type of tracking rectangles, which are used to monitor the mouse location in a view. Views implement cursor rectangles using tracking rectangles but provide methods for setting and refreshing cursor rectangles that are distinct from the generic tracking rectangle interface. For information on mouse-tracking and cursor-update events, see [NSTrackingArea](nstrackingarea.md).

<a id="Balancing-cursor-hiding-and-unhiding"></a>

### Balancing cursor hiding and unhiding

Each call to [hide()](nscursor/hide%28%29.md) cursor must have a corresponding [unhide()](nscursor/unhide%28%29.md) call. For example,

```objc
[NSCursor hide];
[NSCursor hide];
// ...
[NSCursor unhide];
```

Will result in the cursor still being hidden because the `hide` and `unhide` method invocations are not balanced. Instead you must balance the method calls, such as in the following example:

```objc
[NSCursor hide];
[NSCursor hide];
// ...
[NSCursor unhide];
[NSCursor unhide];
```

There are corresponding cursor `hide` and `unhide` calls, thus the cursor will become visible.

## Topics

### Initializing a new cursor

- [init(image:hotSpot:)](nscursor/init%28image_hotspot_%29.md): Initializes a cursor with the given image and hot spot.
- [init(coder:)](nscursor/init%28coder_%29.md)

### Setting cursor attributes

- [image](nscursor/image.md): The cursor’s image.
- [hotSpot](nscursor/hotspot.md): The position of the click location within the cursor.
- [hide()](nscursor/hide%28%29.md): Makes the current cursor invisible.
- [unhide()](nscursor/unhide%28%29.md): Negates an earlier call to [hide()](nscursor/hide%28%29.md) by showing the current cursor.
- [setHiddenUntilMouseMoves(\_:)](nscursor/sethiddenuntilmousemoves%28__%29.md): Sets whether the cursor is hidden until the mouse moves.

### Controlling which cursor is current

- [pop()](nscursor/pop%28%29-swift.type.method.md): Pops the current cursor off the top of the stack.
- [pop()](nscursor/pop%28%29-swift.method.md): Sends a [pop()](nscursor/pop%28%29-swift.type.method.md) message to the receiver’s class.
- [push()](nscursor/push%28%29.md): Puts the receiver on top of the cursor stack and makes it the current cursor.
- [set()](nscursor/set%28%29.md): Makes the receiver the current cursor.

### Retrieving cursor instances

- [current](nscursor/current.md): Returns the application’s current cursor.
- [currentSystem](nscursor/currentsystem.md): Deprecated. Returns the current system cursor.
- [arrow](nscursor/arrow.md): Returns the default cursor, the arrow cursor.
- [contextualMenu](nscursor/contextualmenu.md): Returns the contextual menu system cursor.
- [closedHand](nscursor/closedhand.md): Returns the closed-hand system cursor.
- [crosshair](nscursor/crosshair.md): Returns the cross-hair system cursor.
- [disappearingItem](nscursor/disappearingitem.md): Returns a cursor indicating that the current operation will result in a disappearing item.
- [dragCopy](nscursor/dragcopy.md): Returns a cursor indicating that the current operation will result in a copy action.
- [dragLink](nscursor/draglink.md): Returns a cursor indicating that the current operation will result in a link action.
- [iBeam](nscursor/ibeam.md): Returns a cursor that looks like a capital I with a tiny crossbeam at its middle.
- [iBeamCursorForVerticalLayout](nscursor/ibeamcursorforverticallayout.md): Returns the cursor for editing vertical layout text.
- [openHand](nscursor/openhand.md): Returns the open-hand system cursor.
- [operationNotAllowed](nscursor/operationnotallowed.md): Returns the operation not allowed cursor.
- [pointingHand](nscursor/pointinghand.md): Returns the pointing-hand system cursor.
- [zoomIn](nscursor/zoomin.md): Returns the zoom-in cursor.
- [zoomOut](nscursor/zoomout.md): Returns the zoom-out cursor.
- [resizeDown](nscursor/resizedown.md): Deprecated. Returns the resize-down system cursor.
- [resizeLeft](nscursor/resizeleft.md): Deprecated. Returns the resize-left system cursor.
- [resizeLeftRight](nscursor/resizeleftright.md): Deprecated. Returns the resize-left-and-right system cursor.
- [resizeRight](nscursor/resizeright.md): Deprecated. Returns the resize-right system cursor.
- [resizeUp](nscursor/resizeup.md): Deprecated. Returns the resize-up system cursor.
- [resizeUpDown](nscursor/resizeupdown.md): Deprecated. Returns the resize-up-and-down system cursor.
- [columnResize](nscursor/columnresize.md): Returns the cursor for resizing a column (vertical divider) in either direction.
- [columnResize(directions:)](nscursor/columnresize%28directions_%29.md): Returns the cursor for resizing a column (vertical divider) in the specified direction.
- [rowResize](nscursor/rowresize.md): Returns the cursor for resizing a row (horizontal divider) in either direction.
- [rowResize(directions:)](nscursor/rowresize%28directions_%29.md): Returns the cursor for resizing a row (horizontal divider) in the specified direction.
- [frameResize(position:directions:)](nscursor/frameresize%28position_directions_%29.md): Returns the cursor for resizing a rectangular frame from the specified edge or corner.
- [NSCursor.FrameResizeDirection](nscursor/frameresizedirection.md): The direction in which a rectangular frame can be resized.

### Constants

- [AppKit Versions for NSCursor Bug Fixes](appkit-versions-for-nscursor-bug-fixes.md): The version of the AppKit framework containing a specific bug fix.

### Deprecated

- [init(image:foregroundColorHint:backgroundColorHint:hotSpot:)](nscursor/init%28image_foregroundcolorhint_backgroundcolorhint_hotspot_%29.md): Deprecated. Initializes the cursor with the specified image and hot spot.
- [mouseEntered(with:)](nscursor/mouseentered%28with_%29.md): Deprecated. Automatically sent to the receiver when the cursor enters a cursor rectangle owned by the receiver.
- [setOnMouseEntered(\_:)](nscursor/setonmouseentered%28__%29.md): Deprecated. Specifies whether the receiver accepts [mouseEntered(with:)](nscursor/mouseentered%28with_%29.md) events.
- [isSetOnMouseEntered](nscursor/issetonmouseentered.md): Deprecated. A Boolean value indicating whether the receiver becomes current on receiving a [mouseEntered(with:)](nscursor/mouseentered%28with_%29.md) message.
- [mouseExited(with:)](nscursor/mouseexited%28with_%29.md): Deprecated. Automatically sent to the receiver when the cursor exits a cursor rectangle owned by the receiver.
- [setOnMouseExited(\_:)](nscursor/setonmouseexited%28__%29.md): Deprecated. Sets whether the receiver accepts [mouseExited(with:)](nscursor/mouseexited%28with_%29.md) events.
- [isSetOnMouseExited](nscursor/issetonmouseexited.md): Deprecated. A Boolean value indicating whether the receiver becomes current when it receives a [mouseExited(with:)](nscursor/mouseexited%28with_%29.md) message.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Cursors

- [NSTrackingArea](nstrackingarea.md): A region of a view that generates mouse-tracking and cursor-update events when the pointer is over that region.

# NSCursor (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** Mac Catalyst 13.1+ · macOS 10.0+

A pointer (also called a cursor).

## Declaration

```objectivec
@interface NSCursor : NSObject
```

<a id="overview"></a>

## Overview

The following table shows and describes the system cursors, and indicates the class method for obtaining them:

| Cursor | Description |
| --- | --- |
| ![arrow cursor](https://developer.apple.com/images/com.apple.appkit/media-2555572@2x.png) | The arrow cursor ([arrowCursor](nscursor/arrow.md)) |
| ![I-beam cursor](https://developer.apple.com/images/com.apple.appkit/media-2555577@2x.png) | The I-beam cursor for indicating insertion points ([IBeamCursor](nscursor/ibeam.md)) |
| ![cross-hair cursor](https://developer.apple.com/images/com.apple.appkit/media-2555579@2x.png) | The cross-hair cursor ([crosshairCursor](nscursor/crosshair.md)) |
| ![closed-hand cursor](https://developer.apple.com/images/com.apple.appkit/media-2555583@2x.png) | The closed-hand cursor ([closedHandCursor](nscursor/closedhand.md)) |
| ![open-hand cursor](https://developer.apple.com/images/com.apple.appkit/media-2555589@2x.png) | The open-hand cursor ([openHandCursor](nscursor/openhand.md)) |
| ![pointing hand cursor](https://developer.apple.com/images/com.apple.appkit/media-2555596@2x.png) | The pointing-hand cursor ([pointingHandCursor](nscursor/pointinghand.md)) |
| ![resize-left cursor](https://developer.apple.com/images/com.apple.appkit/media-2555601@2x.png) | The resize-left cursor ([resizeLeftCursor](nscursor/resizeleft.md)) |
| ![resize-right cursor](https://developer.apple.com/images/com.apple.appkit/media-2555605@2x.png) | The resize-right cursor ([resizeRightCursor](nscursor/resizeright.md)) |
| ![resize-left-and-right cursor](https://developer.apple.com/images/com.apple.appkit/media-2555610@2x.png) | The resize-left-and-right cursor ([resizeLeftRightCursor](nscursor/resizeleftright.md)) |
| ![resize-up cursor](https://developer.apple.com/images/com.apple.appkit/media-2555619@2x.png) | The resize-up cursor ([resizeUpCursor](nscursor/resizeup.md)) |
| ![resize-down cursor](https://developer.apple.com/images/com.apple.appkit/media-2555626@2x.png) | The resize-down cursor ([resizeDownCursor](nscursor/resizedown.md)) |
| ![resize-up-and-down cursor](https://developer.apple.com/images/com.apple.appkit/media-2555629@2x.png) | The resize-up-and-down cursor ([resizeUpDownCursor](nscursor/resizeupdown.md)) |
| ![disappearing item cursor](https://developer.apple.com/images/com.apple.appkit/media-2555632@2x.png) | The disappearing item cursor ([disappearingItemCursor](nscursor/disappearingitem.md)) |
| ![disappearing item cursor](https://developer.apple.com/images/com.apple.appkit/media-2555638@2x.png) | The I-Beam text cursor for vertical layout ([IBeamCursorForVerticalLayout](nscursor/ibeamcursorforverticallayout.md)). |
| ![](https://developer.apple.com/images/com.apple.appkit/media-2555643@2x.png) | The not allowed cursor ([operationNotAllowedCursor](nscursor/operationnotallowed.md)). |
| ![](https://developer.apple.com/images/com.apple.appkit/media-2555647@2x.png) | The drag link cursor ([dragLinkCursor](nscursor/draglink.md)). |
| ![](https://developer.apple.com/images/com.apple.appkit/media-2555652@2x.png) | The drag copy cursor ([dragCopyCursor](nscursor/dragcopy.md)). |
| ![](https://developer.apple.com/images/com.apple.appkit/media-2555658@2x.png) | The contextual menu cursor ([contextualMenuCursor](nscursor/contextualmenu.md)). |

In macOS 10.3 and later, cursor size is no longer limited to 16 by 16 pixels.

<a id="Cursor-rectangles"></a>

### Cursor rectangles

In Cocoa, you can change the currently displayed cursor based on the position of the mouse over one of your views. You might use this technique to provide visual feedback about what actions the user can take with the mouse. For example, you might display one of the resize cursors whenever the mouse moves over a portion of your view that acts as a custom resizing handle. To set this up, you associate a cursor object with one or more cursor rectangles in the view.

Cursor rectangles are a specialized type of tracking rectangles, which are used to monitor the mouse location in a view. Views implement cursor rectangles using tracking rectangles but provide methods for setting and refreshing cursor rectangles that are distinct from the generic tracking rectangle interface. For information on mouse-tracking and cursor-update events, see [NSTrackingArea](nstrackingarea.md).

<a id="Balancing-cursor-hiding-and-unhiding"></a>

### Balancing cursor hiding and unhiding

Each call to [hide](nscursor/hide%28%29.md) cursor must have a corresponding [unhide](nscursor/unhide%28%29.md) call. For example,

```objc
[NSCursor hide];
[NSCursor hide];
// ...
[NSCursor unhide];
```

Will result in the cursor still being hidden because the `hide` and `unhide` method invocations are not balanced. Instead you must balance the method calls, such as in the following example:

```objc
[NSCursor hide];
[NSCursor hide];
// ...
[NSCursor unhide];
[NSCursor unhide];
```

There are corresponding cursor `hide` and `unhide` calls, thus the cursor will become visible.

## Topics

### Initializing a new cursor

- [initWithImage:hotSpot:](nscursor/init%28image_hotspot_%29.md): Initializes a cursor with the given image and hot spot.
- [initWithCoder:](nscursor/init%28coder_%29.md)

### Setting cursor attributes

- [image](nscursor/image.md): The cursor’s image.
- [hotSpot](nscursor/hotspot.md): The position of the click location within the cursor.
- [hide](nscursor/hide%28%29.md): Makes the current cursor invisible.
- [unhide](nscursor/unhide%28%29.md): Negates an earlier call to [hide](nscursor/hide%28%29.md) by showing the current cursor.
- [setHiddenUntilMouseMoves:](nscursor/sethiddenuntilmousemoves%28__%29.md): Sets whether the cursor is hidden until the mouse moves.

### Controlling which cursor is current

- [pop](nscursor/pop%28%29-swift.type.method.md): Pops the current cursor off the top of the stack.
- [pop](nscursor/pop%28%29-swift.method.md): Sends a [pop](nscursor/pop%28%29-swift.type.method.md) message to the receiver’s class.
- [push](nscursor/push%28%29.md): Puts the receiver on top of the cursor stack and makes it the current cursor.
- [set](nscursor/set%28%29.md): Makes the receiver the current cursor.

### Retrieving cursor instances

- [currentCursor](nscursor/current.md): Returns the application’s current cursor.
- [currentSystemCursor](nscursor/currentsystem.md): Deprecated. Returns the current system cursor.
- [arrowCursor](nscursor/arrow.md): Returns the default cursor, the arrow cursor.
- [contextualMenuCursor](nscursor/contextualmenu.md): Returns the contextual menu system cursor.
- [closedHandCursor](nscursor/closedhand.md): Returns the closed-hand system cursor.
- [crosshairCursor](nscursor/crosshair.md): Returns the cross-hair system cursor.
- [disappearingItemCursor](nscursor/disappearingitem.md): Returns a cursor indicating that the current operation will result in a disappearing item.
- [dragCopyCursor](nscursor/dragcopy.md): Returns a cursor indicating that the current operation will result in a copy action.
- [dragLinkCursor](nscursor/draglink.md): Returns a cursor indicating that the current operation will result in a link action.
- [IBeamCursor](nscursor/ibeam.md): Returns a cursor that looks like a capital I with a tiny crossbeam at its middle.
- [IBeamCursorForVerticalLayout](nscursor/ibeamcursorforverticallayout.md): Returns the cursor for editing vertical layout text.
- [openHandCursor](nscursor/openhand.md): Returns the open-hand system cursor.
- [operationNotAllowedCursor](nscursor/operationnotallowed.md): Returns the operation not allowed cursor.
- [pointingHandCursor](nscursor/pointinghand.md): Returns the pointing-hand system cursor.
- [zoomInCursor](nscursor/zoomin.md): Returns the zoom-in cursor.
- [zoomOutCursor](nscursor/zoomout.md): Returns the zoom-out cursor.
- [resizeDownCursor](nscursor/resizedown.md): Deprecated. Returns the resize-down system cursor.
- [resizeLeftCursor](nscursor/resizeleft.md): Deprecated. Returns the resize-left system cursor.
- [resizeLeftRightCursor](nscursor/resizeleftright.md): Deprecated. Returns the resize-left-and-right system cursor.
- [resizeRightCursor](nscursor/resizeright.md): Deprecated. Returns the resize-right system cursor.
- [resizeUpCursor](nscursor/resizeup.md): Deprecated. Returns the resize-up system cursor.
- [resizeUpDownCursor](nscursor/resizeupdown.md): Deprecated. Returns the resize-up-and-down system cursor.
- [columnResizeCursor](nscursor/columnresize.md): Returns the cursor for resizing a column (vertical divider) in either direction.
- [rowResizeCursor](nscursor/rowresize.md): Returns the cursor for resizing a row (horizontal divider) in either direction.

### Constants

- [AppKit Versions for NSCursor Bug Fixes](appkit-versions-for-nscursor-bug-fixes.md): The version of the AppKit framework containing a specific bug fix.

### Deprecated

- [initWithImage:foregroundColorHint:backgroundColorHint:hotSpot:](nscursor/init%28image_foregroundcolorhint_backgroundcolorhint_hotspot_%29.md): Deprecated. Initializes the cursor with the specified image and hot spot.
- [mouseEntered:](nscursor/mouseentered%28with_%29.md): Deprecated. Automatically sent to the receiver when the cursor enters a cursor rectangle owned by the receiver.
- [setOnMouseEntered:](nscursor/setonmouseentered%28__%29.md): Deprecated. Specifies whether the receiver accepts [mouseEntered:](nscursor/mouseentered%28with_%29.md) events.
- [setOnMouseEntered](nscursor/issetonmouseentered.md): Deprecated. A Boolean value indicating whether the receiver becomes current on receiving a [mouseEntered:](nscursor/mouseentered%28with_%29.md) message.
- [mouseExited:](nscursor/mouseexited%28with_%29.md): Deprecated. Automatically sent to the receiver when the cursor exits a cursor rectangle owned by the receiver.
- [setOnMouseExited:](nscursor/setonmouseexited%28__%29.md): Deprecated. Sets whether the receiver accepts [mouseExited:](nscursor/mouseexited%28with_%29.md) events.
- [setOnMouseExited](nscursor/issetonmouseexited.md): Deprecated. A Boolean value indicating whether the receiver becomes current when it receives a [mouseExited:](nscursor/mouseexited%28with_%29.md) message.

### Type Methods

- [columnResizeCursorInDirections:](nscursor/columnresizecursorindirections_.md): Returns the cursor for resizing a column (vertical divider) in the specified directions.
- [frameResizeCursorFromPosition:inDirections:](nscursor/frameresizecursorfromposition_indirections_.md): Returns the cursor for resizing a rectangular frame from the specified edge or corner.
- [rowResizeCursorInDirections:](nscursor/rowresizecursorindirections_.md): Returns the cursor for resizing a row (horizontal divider) in the specified directions.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Cursors

- [NSTrackingArea](nstrackingarea.md): A region of a view that generates mouse-tracking and cursor-update events when the pointer is over that region.
