> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsevent/trackingnumber](https://developer.apple.com/documentation/appkit/nsevent/trackingnumber)

# trackingNumber (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The identifier of a mouse-tracking event.

## Declaration

```swift
var trackingNumber: Int { get }
```

<a id="Discussion"></a>

## Discussion

This property contains either an [NSTrackingArea](../nstrackingarea.md) object or an [NSView.TrackingRectTag](../nsview/trackingrecttag.md) constant, depending on how AppKit generated the event. Valid mouse-tracking event types are [NSMouseEntered](../nsmouseentered.md), [NSMouseExited](../nsmouseexited.md), and [NSCursorUpdate](../nscursorupdate.md). For other types of events, accessing this property raises [internalInconsistencyException](https://developer.apple.com/documentation/foundation/nsexceptionname/internalinconsistencyexception).

## See Also

### Related Documentation

- [enterExitEvent(with:location:modifierFlags:timestamp:windowNumber:context:eventNumber:trackingNumber:userData:)](enterexitevent%28with_location_modifierflags_timestamp_windownumber_context_eventnumber_trackingnumber_userdata_%29.md): Creates and returns a new event object that describes a tracking-rectangle or cursor-update event.
- [addTrackingRect(\_:owner:userData:assumeInside:)](../nsview/addtrackingrect%28__owner_userdata_assumeinside_%29.md): Establishes an area for tracking mouse-entered and mouse-exited events within the view and returns a tag that identifies the tracking rectangle.

### Getting tracking area information

- [eventNumber](eventnumber.md): The counter value of the latest mouse or tracking-rectangle event object.
- [trackingArea](trackingarea.md): The tracking area for the event.
- [userData](userdata.md): The data associated with a mouse-tracking event.

# trackingNumber (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The identifier of a mouse-tracking event.

## Declaration

```objectivec
@property (readonly) NSInteger trackingNumber;
```

<a id="Discussion"></a>

## Discussion

This property contains either an [NSTrackingArea](../nstrackingarea.md) object or an [NSTrackingRectTag](../nsview/trackingrecttag.md) constant, depending on how AppKit generated the event. Valid mouse-tracking event types are [NSMouseEntered](../nsmouseentered.md), [NSMouseExited](../nsmouseexited.md), and [NSCursorUpdate](../nscursorupdate.md). For other types of events, accessing this property raises [NSInternalInconsistencyException](https://developer.apple.com/documentation/foundation/nsexceptionname/internalinconsistencyexception).

## See Also

### Related Documentation

- [enterExitEventWithType:location:modifierFlags:timestamp:windowNumber:context:eventNumber:trackingNumber:userData:](enterexitevent%28with_location_modifierflags_timestamp_windownumber_context_eventnumber_trackingnumber_userdata_%29.md): Creates and returns a new event object that describes a tracking-rectangle or cursor-update event.
- [addTrackingRect:owner:userData:assumeInside:](../nsview/addtrackingrect%28__owner_userdata_assumeinside_%29.md): Establishes an area for tracking mouse-entered and mouse-exited events within the view and returns a tag that identifies the tracking rectangle.

### Getting tracking area information

- [eventNumber](eventnumber.md): The counter value of the latest mouse or tracking-rectangle event object.
- [trackingArea](trackingarea.md): The tracking area for the event.
- [userData](userdata.md): The data associated with a mouse-tracking event.
