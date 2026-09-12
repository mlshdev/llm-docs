> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstrackingarea](https://developer.apple.com/documentation/appkit/nstrackingarea)

# NSTrackingArea (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.5+

A region of a view that generates mouse-tracking and cursor-update events when the pointer is over that region.

## Declaration

```swift
class NSTrackingArea
```

<a id="overview"></a>

## Overview

When creating a tracking-area object, you specify a rectangle (in the view’s coordinate system), an owning object, and one or more options, along with (optionally) a dictionary of data. After it’s created, you add the tracking-area object to a view using the [addTrackingArea(\_:)](nsview/addtrackingarea%28__%29.md) method. Depending on the options specified, the owner of the tracking area receives [mouseEntered(with:)](nsresponder/mouseentered%28with_%29.md), [mouseExited(with:)](nsresponder/mouseexited%28with_%29.md), [mouseMoved(with:)](nsresponder/mousemoved%28with_%29.md), and [cursorUpdate(with:)](nsresponder/cursorupdate%28with_%29.md) messages when the mouse cursor enters, moves within, and leaves the tracking area. Currently the tracking area is restricted to rectangles.

An [NSTrackingArea](nstrackingarea.md) object belongs to its view rather than to its window. Consequently, you can add and remove tracking rectangles without needing to worry if the view has been added to a window. In addition, this design makes it possible for the AppKit to compute the geometry of tracking areas automatically when a view moves and, in some cases, when a view changes size.

Using [NSTrackingArea](nstrackingarea.md), you can configure the scope of activity for mouse tracking. There are four options:

- The tracking area is active only when the view is first responder.
- The tracking area is active when the view is in the key window.
- The tracking area is active when the application is active.
- The tracking area is active always (even when the application is inactive).

Other options for [NSTrackingArea](nstrackingarea.md) objects include specifying that the tracking area should be synchronized with the visible rectangle of the view ([visibleRect](nsview/visiblerect.md)) and for generating `mouseEntered:` and `mouseExited`: events when the mouse is dragged.

Other [NSView](nsview.md) methods related to [NSTrackingArea](nstrackingarea.md) objects (in addition to [addTrackingArea(\_:)](nsview/addtrackingarea%28__%29.md)) include [removeTrackingArea(\_:)](nsview/removetrackingarea%28__%29.md) and [updateTrackingAreas()](nsview/updatetrackingareas%28%29.md). Views can override the latter method to recompute and replace their [NSTrackingArea](nstrackingarea.md) objects in certain situations, such as a change in the size of the `visibleRect`.

## Topics

### Initializing the Tracking-Area Object

- [init(rect:options:owner:userInfo:)](nstrackingarea/init%28rect_options_owner_userinfo_%29.md): Initializes and returns an object defining a region of a view to receive mouse-tracking events, mouse-moved events, cursor-update events, or possibly all these events.

### Getting Object Attributes

- [options](nstrackingarea/options-swift.property.md): The options specified for the receiver.
- [owner](nstrackingarea/owner.md): The object owning the receiver, which is the recipient of mouse-tracking, mouse-movement, and cursor-update messages.
- [rect](nstrackingarea/rect.md): The rectangle defining the area encompassed by the receiver.
- [userInfo](nstrackingarea/userinfo.md): The dictionary containing the data associated with the receiver when it was created.

### Constants

- [NSTrackingArea.Options](nstrackingarea/options-swift.struct.md): The data type defined for the constants specified in the `options` parameter of [init(rect:options:owner:userInfo:)](nstrackingarea/init%28rect_options_owner_userinfo_%29.md). These constants are described below; you can specify multiple constants by performing a bitwise-OR operation with them. In particular, you must supply one or more of the tracking-type constants (that is, [mouseEnteredAndExited](nstrackingarea/options-swift.struct/mouseenteredandexited.md), [mouseMoved](nstrackingarea/options-swift.struct/mousemoved.md), and [cursorUpdate](nstrackingarea/options-swift.struct/cursorupdate.md)) and one of the active constants (that is, [activeWhenFirstResponder](nstrackingarea/options-swift.struct/activewhenfirstresponder.md), [activeInKeyWindow](nstrackingarea/options-swift.struct/activeinkeywindow.md), [activeInActiveApp](nstrackingarea/options-swift.struct/activeinactiveapp.md), and [activeAlways](nstrackingarea/options-swift.struct/activealways.md)). In addition, you may specify any of the behavior constants (that is, [assumeInside](nstrackingarea/options-swift.struct/assumeinside.md), [inVisibleRect](nstrackingarea/options-swift.struct/invisiblerect.md), and [enabledDuringMouseDrag](nstrackingarea/options-swift.struct/enabledduringmousedrag.md)).

### Initializers

- [init(coder:)](nstrackingarea/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Cursors

- [NSCursor](nscursor.md): A pointer (also called a cursor).

# NSTrackingArea (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.5+

A region of a view that generates mouse-tracking and cursor-update events when the pointer is over that region.

## Declaration

```objectivec
@interface NSTrackingArea : NSObject
```

<a id="overview"></a>

## Overview

When creating a tracking-area object, you specify a rectangle (in the view’s coordinate system), an owning object, and one or more options, along with (optionally) a dictionary of data. After it’s created, you add the tracking-area object to a view using the [addTrackingArea:](nsview/addtrackingarea%28__%29.md) method. Depending on the options specified, the owner of the tracking area receives [mouseEntered:](nsresponder/mouseentered%28with_%29.md), [mouseExited:](nsresponder/mouseexited%28with_%29.md), [mouseMoved:](nsresponder/mousemoved%28with_%29.md), and [cursorUpdate:](nsresponder/cursorupdate%28with_%29.md) messages when the mouse cursor enters, moves within, and leaves the tracking area. Currently the tracking area is restricted to rectangles.

An [NSTrackingArea](nstrackingarea.md) object belongs to its view rather than to its window. Consequently, you can add and remove tracking rectangles without needing to worry if the view has been added to a window. In addition, this design makes it possible for the AppKit to compute the geometry of tracking areas automatically when a view moves and, in some cases, when a view changes size.

Using [NSTrackingArea](nstrackingarea.md), you can configure the scope of activity for mouse tracking. There are four options:

- The tracking area is active only when the view is first responder.
- The tracking area is active when the view is in the key window.
- The tracking area is active when the application is active.
- The tracking area is active always (even when the application is inactive).

Other options for [NSTrackingArea](nstrackingarea.md) objects include specifying that the tracking area should be synchronized with the visible rectangle of the view ([visibleRect](nsview/visiblerect.md)) and for generating `mouseEntered:` and `mouseExited`: events when the mouse is dragged.

Other [NSView](nsview.md) methods related to [NSTrackingArea](nstrackingarea.md) objects (in addition to [addTrackingArea:](nsview/addtrackingarea%28__%29.md)) include [removeTrackingArea:](nsview/removetrackingarea%28__%29.md) and [updateTrackingAreas](nsview/updatetrackingareas%28%29.md). Views can override the latter method to recompute and replace their [NSTrackingArea](nstrackingarea.md) objects in certain situations, such as a change in the size of the `visibleRect`.

## Topics

### Initializing the Tracking-Area Object

- [initWithRect:options:owner:userInfo:](nstrackingarea/init%28rect_options_owner_userinfo_%29.md): Initializes and returns an object defining a region of a view to receive mouse-tracking events, mouse-moved events, cursor-update events, or possibly all these events.

### Getting Object Attributes

- [options](nstrackingarea/options-swift.property.md): The options specified for the receiver.
- [owner](nstrackingarea/owner.md): The object owning the receiver, which is the recipient of mouse-tracking, mouse-movement, and cursor-update messages.
- [rect](nstrackingarea/rect.md): The rectangle defining the area encompassed by the receiver.
- [userInfo](nstrackingarea/userinfo.md): The dictionary containing the data associated with the receiver when it was created.

### Constants

- [NSTrackingAreaOptions](nstrackingarea/options-swift.struct.md): The data type defined for the constants specified in the `options` parameter of [initWithRect:options:owner:userInfo:](nstrackingarea/init%28rect_options_owner_userinfo_%29.md). These constants are described below; you can specify multiple constants by performing a bitwise-OR operation with them. In particular, you must supply one or more of the tracking-type constants (that is, [NSTrackingMouseEnteredAndExited](nstrackingarea/options-swift.struct/mouseenteredandexited.md), [NSTrackingMouseMoved](nstrackingarea/options-swift.struct/mousemoved.md), and [NSTrackingCursorUpdate](nstrackingarea/options-swift.struct/cursorupdate.md)) and one of the active constants (that is, [NSTrackingActiveWhenFirstResponder](nstrackingarea/options-swift.struct/activewhenfirstresponder.md), [NSTrackingActiveInKeyWindow](nstrackingarea/options-swift.struct/activeinkeywindow.md), [NSTrackingActiveInActiveApp](nstrackingarea/options-swift.struct/activeinactiveapp.md), and [NSTrackingActiveAlways](nstrackingarea/options-swift.struct/activealways.md)). In addition, you may specify any of the behavior constants (that is, [NSTrackingAssumeInside](nstrackingarea/options-swift.struct/assumeinside.md), [NSTrackingInVisibleRect](nstrackingarea/options-swift.struct/invisiblerect.md), and [NSTrackingEnabledDuringMouseDrag](nstrackingarea/options-swift.struct/enabledduringmousedrag.md)).

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)

## See Also

### Cursors

- [NSCursor](nscursor.md): A pointer (also called a cursor).
