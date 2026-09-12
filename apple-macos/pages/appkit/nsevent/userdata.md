> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsevent/userdata](https://developer.apple.com/documentation/appkit/nsevent/userdata)

# userData (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The data associated with a mouse-tracking event.

## Declaration

```swift
var userData: UnsafeMutableRawPointer? { get }
```

<a id="Discussion"></a>

## Discussion

When you call [addTrackingRect(\_:owner:userData:assumeInside:)](../nsview/addtrackingrect%28__owner_userdata_assumeinside_%29.md) to set up a tracking rectangle, you can provide custom data to store in the event. AppKit makes that custom data available to you from this property.

This property is only valid when the event is of type [NSMouseEntered](../nsmouseentered.md) or [NSMouseExited](../nsmouseexited.md). If you access this property for any other type of event, AppKit raises [internalInconsistencyException](https://developer.apple.com/documentation/foundation/nsexceptionname/internalinconsistencyexception).

## See Also

### Related Documentation

- [enterExitEvent(with:location:modifierFlags:timestamp:windowNumber:context:eventNumber:trackingNumber:userData:)](enterexitevent%28with_location_modifierflags_timestamp_windownumber_context_eventnumber_trackingnumber_userdata_%29.md): Creates and returns a new event object that describes a tracking-rectangle or cursor-update event.

### Getting tracking area information

- [eventNumber](eventnumber.md): The counter value of the latest mouse or tracking-rectangle event object.
- [trackingNumber](trackingnumber.md): The identifier of a mouse-tracking event.
- [trackingArea](trackingarea.md): The tracking area for the event.

# userData (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The data associated with a mouse-tracking event.

## Declaration

```objectivec
@property (readonly, nullable) void * userData;
```

<a id="Discussion"></a>

## Discussion

When you call [addTrackingRect:owner:userData:assumeInside:](../nsview/addtrackingrect%28__owner_userdata_assumeinside_%29.md) to set up a tracking rectangle, you can provide custom data to store in the event. AppKit makes that custom data available to you from this property.

This property is only valid when the event is of type [NSMouseEntered](../nsmouseentered.md) or [NSMouseExited](../nsmouseexited.md). If you access this property for any other type of event, AppKit raises [NSInternalInconsistencyException](https://developer.apple.com/documentation/foundation/nsexceptionname/internalinconsistencyexception).

## See Also

### Related Documentation

- [enterExitEventWithType:location:modifierFlags:timestamp:windowNumber:context:eventNumber:trackingNumber:userData:](enterexitevent%28with_location_modifierflags_timestamp_windownumber_context_eventnumber_trackingnumber_userdata_%29.md): Creates and returns a new event object that describes a tracking-rectangle or cursor-update event.

### Getting tracking area information

- [eventNumber](eventnumber.md): The counter value of the latest mouse or tracking-rectangle event object.
- [trackingNumber](trackingnumber.md): The identifier of a mouse-tracking event.
- [trackingArea](trackingarea.md): The tracking area for the event.
