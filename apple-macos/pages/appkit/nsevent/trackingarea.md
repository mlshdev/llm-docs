> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsevent/trackingarea](https://developer.apple.com/documentation/appkit/nsevent/trackingarea)

# trackingArea (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The tracking area for the event.

## Declaration

```swift
var trackingArea: NSTrackingArea? { get }
```

<a id="Discussion"></a>

## Discussion

If you access this property on an event object that is not a mouse-tracking event — that is, its event type isn’t [NSMouseEntered](../nsmouseentered.md), [NSMouseExited](../nsmouseexited.md), or [NSCursorUpdate](../nscursorupdate.md) —AppKit raises an [internalInconsistencyException](https://developer.apple.com/documentation/foundation/nsexceptionname/internalinconsistencyexception).

If the event corresponds to a tracking rectangle installed with the [addTrackingRect(\_:owner:userData:assumeInside:)](../nsview/addtrackingrect%28__owner_userdata_assumeinside_%29.md) method of [NSView](../nsview.md), the value of this property is `nil`. The [trackingNumber](trackingnumber.md) property contains either an [NSTrackingArea](../nstrackingarea.md) object or [NSView.TrackingRectTag](../nsview/trackingrecttag.md), depending on how AppKit generated the event.

## See Also

### Getting tracking area information

- [eventNumber](eventnumber.md): The counter value of the latest mouse or tracking-rectangle event object.
- [trackingNumber](trackingnumber.md): The identifier of a mouse-tracking event.
- [userData](userdata.md): The data associated with a mouse-tracking event.

# trackingArea (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The tracking area for the event.

## Declaration

```objectivec
@property (strong, readonly, nullable) NSTrackingArea * trackingArea;
```

<a id="Discussion"></a>

## Discussion

If you access this property on an event object that is not a mouse-tracking event — that is, its event type isn’t [NSMouseEntered](../nsmouseentered.md), [NSMouseExited](../nsmouseexited.md), or [NSCursorUpdate](../nscursorupdate.md) —AppKit raises an [NSInternalInconsistencyException](https://developer.apple.com/documentation/foundation/nsexceptionname/internalinconsistencyexception).

If the event corresponds to a tracking rectangle installed with the [addTrackingRect:owner:userData:assumeInside:](../nsview/addtrackingrect%28__owner_userdata_assumeinside_%29.md) method of [NSView](../nsview.md), the value of this property is `nil`. The [trackingNumber](trackingnumber.md) property contains either an [NSTrackingArea](../nstrackingarea.md) object or [NSTrackingRectTag](../nsview/trackingrecttag.md), depending on how AppKit generated the event.

## See Also

### Getting tracking area information

- [eventNumber](eventnumber.md): The counter value of the latest mouse or tracking-rectangle event object.
- [trackingNumber](trackingnumber.md): The identifier of a mouse-tracking event.
- [userData](userdata.md): The data associated with a mouse-tracking event.
