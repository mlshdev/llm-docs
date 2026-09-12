> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstrackingarea/options-swift.struct](https://developer.apple.com/documentation/appkit/nstrackingarea/options-swift.struct)

# NSTrackingArea.Options (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS

The data type defined for the constants specified in the `options` parameter of [init(rect:options:owner:userInfo:)](init%28rect_options_owner_userinfo_%29.md). These constants are described below; you can specify multiple constants by performing a bitwise-OR operation with them. In particular, you must supply one or more of the tracking-type constants (that is, [mouseEnteredAndExited](options-swift.struct/mouseenteredandexited.md), [mouseMoved](options-swift.struct/mousemoved.md), and [cursorUpdate](options-swift.struct/cursorupdate.md)) and one of the active constants (that is, [activeWhenFirstResponder](options-swift.struct/activewhenfirstresponder.md), [activeInKeyWindow](options-swift.struct/activeinkeywindow.md), [activeInActiveApp](options-swift.struct/activeinactiveapp.md), and [activeAlways](options-swift.struct/activealways.md)). In addition, you may specify any of the behavior constants (that is, [assumeInside](options-swift.struct/assumeinside.md), [inVisibleRect](options-swift.struct/invisiblerect.md), and [enabledDuringMouseDrag](options-swift.struct/enabledduringmousedrag.md)).

## Declaration

```swift
struct Options
```

## Topics

### Constants

- [mouseEnteredAndExited](options-swift.struct/mouseenteredandexited.md): The owner of the tracking area receives [mouseEntered(with:)](../nsresponder/mouseentered%28with_%29.md) when the mouse cursor enters the area and [mouseExited(with:)](../nsresponder/mouseexited%28with_%29.md) events when the mouse leaves the area. This value specifies a type of tracking area.
- [mouseMoved](options-swift.struct/mousemoved.md): The owner of the tracking area receives [mouseMoved(with:)](../nsresponder/mousemoved%28with_%29.md) messages while the mouse cursor is within the area. This value specifies a type of tracking area.
- [cursorUpdate](options-swift.struct/cursorupdate.md): A tracking option that receives events when the mouse cursor enters and exits the tracking area.
- [activeWhenFirstResponder](options-swift.struct/activewhenfirstresponder.md): The owner receives messages when the view is the first responder. This value specifies when the tracking area defined by an [NSTrackingArea](../nstrackingarea.md) object is active.
- [activeInKeyWindow](options-swift.struct/activeinkeywindow.md): The owner receives messages when the view is in the key window. This value specifies when the tracking area defined by an [NSTrackingArea](../nstrackingarea.md) object is active.
- [activeInActiveApp](options-swift.struct/activeinactiveapp.md): The owner receives messages when the application is active. This value specifies when the tracking area defined by an [NSTrackingArea](../nstrackingarea.md) object is active.
- [activeAlways](options-swift.struct/activealways.md): The owner receives messages regardless of first-responder status, window status, or application status. The [cursorUpdate(with:)](../nsresponder/cursorupdate%28with_%29.md) message is *not* sent when the [cursorUpdate](options-swift.struct/cursorupdate.md) option is specified along with this constant. This value specifies when the tracking area defined by an [NSTrackingArea](../nstrackingarea.md) object is active.
- [assumeInside](options-swift.struct/assumeinside.md): The first event is generated when the cursor leaves the tracking area, regardless if the cursor is inside the area when the `NSTrackingArea` is added to a view. If this option is not specified, the first event is generated when the cursor leaves the tracking area if the cursor is initially inside the area, or when the cursor enters the area if the cursor is initially outside it. Generally, you do not want to request this behavior. This value specifies a behavior of the tracking area defined by the [NSTrackingArea](../nstrackingarea.md).
- [inVisibleRect](options-swift.struct/invisiblerect.md): Mouse tracking occurs only in the visible rectangle of the view—in other words, that region of the tracking rectangle that is unobscured. Otherwise, the entire tracking area is active regardless of overlapping views. The `NSTrackingArea` object is automatically synchronized with changes in the view’s visible area ([visibleRect](../nsview/visiblerect.md)) and the value returned from [rect](rect.md) is ignored. This value specifies a behavior of the tracking area defined by the [NSTrackingArea](../nstrackingarea.md).
- [enabledDuringMouseDrag](options-swift.struct/enabledduringmousedrag.md): The owner receives [NSMouseEntered](../nsmouseentered.md) events when the mouse cursor is dragged into the tracking area. If this option is not specified, the owner receives mouse-entered events when the mouse is moved (no buttons pressed) into the tracking area and on [NSLeftMouseUp](../nsleftmouseup.md) events after a mouse drag.

### Initializers

- [init(rawValue:)](options-swift.struct/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

# NSTrackingAreaOptions (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

The data type defined for the constants specified in the `options` parameter of [initWithRect:options:owner:userInfo:](init%28rect_options_owner_userinfo_%29.md). These constants are described below; you can specify multiple constants by performing a bitwise-OR operation with them. In particular, you must supply one or more of the tracking-type constants (that is, [NSTrackingMouseEnteredAndExited](options-swift.struct/mouseenteredandexited.md), [NSTrackingMouseMoved](options-swift.struct/mousemoved.md), and [NSTrackingCursorUpdate](options-swift.struct/cursorupdate.md)) and one of the active constants (that is, [NSTrackingActiveWhenFirstResponder](options-swift.struct/activewhenfirstresponder.md), [NSTrackingActiveInKeyWindow](options-swift.struct/activeinkeywindow.md), [NSTrackingActiveInActiveApp](options-swift.struct/activeinactiveapp.md), and [NSTrackingActiveAlways](options-swift.struct/activealways.md)). In addition, you may specify any of the behavior constants (that is, [NSTrackingAssumeInside](options-swift.struct/assumeinside.md), [NSTrackingInVisibleRect](options-swift.struct/invisiblerect.md), and [NSTrackingEnabledDuringMouseDrag](options-swift.struct/enabledduringmousedrag.md)).

## Declaration

```objectivec
enum NSTrackingAreaOptions : NSUInteger;
```

## Topics

### Constants

- [NSTrackingMouseEnteredAndExited](options-swift.struct/mouseenteredandexited.md): The owner of the tracking area receives [mouseEntered:](../nsresponder/mouseentered%28with_%29.md) when the mouse cursor enters the area and [mouseExited:](../nsresponder/mouseexited%28with_%29.md) events when the mouse leaves the area. This value specifies a type of tracking area.
- [NSTrackingMouseMoved](options-swift.struct/mousemoved.md): The owner of the tracking area receives [mouseMoved:](../nsresponder/mousemoved%28with_%29.md) messages while the mouse cursor is within the area. This value specifies a type of tracking area.
- [NSTrackingCursorUpdate](options-swift.struct/cursorupdate.md): A tracking option that receives events when the mouse cursor enters and exits the tracking area.
- [NSTrackingActiveWhenFirstResponder](options-swift.struct/activewhenfirstresponder.md): The owner receives messages when the view is the first responder. This value specifies when the tracking area defined by an [NSTrackingArea](../nstrackingarea.md) object is active.
- [NSTrackingActiveInKeyWindow](options-swift.struct/activeinkeywindow.md): The owner receives messages when the view is in the key window. This value specifies when the tracking area defined by an [NSTrackingArea](../nstrackingarea.md) object is active.
- [NSTrackingActiveInActiveApp](options-swift.struct/activeinactiveapp.md): The owner receives messages when the application is active. This value specifies when the tracking area defined by an [NSTrackingArea](../nstrackingarea.md) object is active.
- [NSTrackingActiveAlways](options-swift.struct/activealways.md): The owner receives messages regardless of first-responder status, window status, or application status. The [cursorUpdate:](../nsresponder/cursorupdate%28with_%29.md) message is *not* sent when the [NSTrackingCursorUpdate](options-swift.struct/cursorupdate.md) option is specified along with this constant. This value specifies when the tracking area defined by an [NSTrackingArea](../nstrackingarea.md) object is active.
- [NSTrackingAssumeInside](options-swift.struct/assumeinside.md): The first event is generated when the cursor leaves the tracking area, regardless if the cursor is inside the area when the `NSTrackingArea` is added to a view. If this option is not specified, the first event is generated when the cursor leaves the tracking area if the cursor is initially inside the area, or when the cursor enters the area if the cursor is initially outside it. Generally, you do not want to request this behavior. This value specifies a behavior of the tracking area defined by the [NSTrackingArea](../nstrackingarea.md).
- [NSTrackingInVisibleRect](options-swift.struct/invisiblerect.md): Mouse tracking occurs only in the visible rectangle of the view—in other words, that region of the tracking rectangle that is unobscured. Otherwise, the entire tracking area is active regardless of overlapping views. The `NSTrackingArea` object is automatically synchronized with changes in the view’s visible area ([visibleRect](../nsview/visiblerect.md)) and the value returned from [rect](rect.md) is ignored. This value specifies a behavior of the tracking area defined by the [NSTrackingArea](../nstrackingarea.md).
- [NSTrackingEnabledDuringMouseDrag](options-swift.struct/enabledduringmousedrag.md): The owner receives [NSMouseEntered](../nsmouseentered.md) events when the mouse cursor is dragged into the tracking area. If this option is not specified, the owner receives mouse-entered events when the mouse is moved (no buttons pressed) into the tracking area and on [NSLeftMouseUp](../nsleftmouseup.md) events after a mouse drag.
