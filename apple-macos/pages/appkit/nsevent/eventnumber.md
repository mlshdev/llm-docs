> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsevent/eventnumber](https://developer.apple.com/documentation/appkit/nsevent/eventnumber)

# eventNumber (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The counter value of the latest mouse or tracking-rectangle event object.

## Declaration

```swift
var eventNumber: Int { get }
```

<a id="Discussion"></a>

## Discussion

Every system-generated mouse and tracking-rectangle event increments this counter. If you access this property on an event of an unsupported type, AppKit raises [internalInconsistencyException](https://developer.apple.com/documentation/foundation/nsexceptionname/internalinconsistencyexception).

## See Also

### Related Documentation

- [enterExitEvent(with:location:modifierFlags:timestamp:windowNumber:context:eventNumber:trackingNumber:userData:)](enterexitevent%28with_location_modifierflags_timestamp_windownumber_context_eventnumber_trackingnumber_userdata_%29.md): Creates and returns a new event object that describes a tracking-rectangle or cursor-update event.
- [mouseEvent(with:location:modifierFlags:timestamp:windowNumber:context:eventNumber:clickCount:pressure:)](mouseevent%28with_location_modifierflags_timestamp_windownumber_context_eventnumber_clickcount_pressure_%29.md): Creates and returns a new event object that describes a mouse-down, -up, -moved, or -dragged event.

### Getting tracking area information

- [trackingNumber](trackingnumber.md): The identifier of a mouse-tracking event.
- [trackingArea](trackingarea.md): The tracking area for the event.
- [userData](userdata.md): The data associated with a mouse-tracking event.

# eventNumber (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The counter value of the latest mouse or tracking-rectangle event object.

## Declaration

```objectivec
@property (readonly) NSInteger eventNumber;
```

<a id="Discussion"></a>

## Discussion

Every system-generated mouse and tracking-rectangle event increments this counter. If you access this property on an event of an unsupported type, AppKit raises [NSInternalInconsistencyException](https://developer.apple.com/documentation/foundation/nsexceptionname/internalinconsistencyexception).

## See Also

### Related Documentation

- [enterExitEventWithType:location:modifierFlags:timestamp:windowNumber:context:eventNumber:trackingNumber:userData:](enterexitevent%28with_location_modifierflags_timestamp_windownumber_context_eventnumber_trackingnumber_userdata_%29.md): Creates and returns a new event object that describes a tracking-rectangle or cursor-update event.
- [mouseEventWithType:location:modifierFlags:timestamp:windowNumber:context:eventNumber:clickCount:pressure:](mouseevent%28with_location_modifierflags_timestamp_windownumber_context_eventnumber_clickcount_pressure_%29.md): Creates and returns a new event object that describes a mouse-down, -up, -moved, or -dragged event.

### Getting tracking area information

- [trackingNumber](trackingnumber.md): The identifier of a mouse-tracking event.
- [trackingArea](trackingarea.md): The tracking area for the event.
- [userData](userdata.md): The data associated with a mouse-tracking event.
