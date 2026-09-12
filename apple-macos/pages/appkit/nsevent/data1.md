> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsevent/data1](https://developer.apple.com/documentation/appkit/nsevent/data1)

# data1 (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

Additional data associated with this event.

## Declaration

```swift
var data1: Int { get }
```

<a id="Discussion"></a>

## Discussion

The originator of the event defines the data in this property, and the data is dependent on the event type. If the type of this event isn’t  [NSAppKitDefined](../nsappkitdefined.md), [NSSystemDefined](../nssystemdefined.md), [NSApplicationDefined](../nsapplicationdefined.md), or [NSPeriodic](../nsperiodic.md), accessing this property raises [internalInconsistencyException](https://developer.apple.com/documentation/foundation/nsexceptionname/internalinconsistencyexception).

[NSPeriodic](../nsperiodic.md) events don’t use this property.

## See Also

### Related Documentation

- [subtype](subtype.md): The event’s subtype.
- [otherEvent(with:location:modifierFlags:timestamp:windowNumber:context:subtype:data1:data2:)](otherevent%28with_location_modifierflags_timestamp_windownumber_context_subtype_data1_data2_%29.md): Creates and returns a new event object that describes a custom event.

### Getting custom event information

- [data2](data2.md): Additional data associated with this event.

# data1 (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

Additional data associated with this event.

## Declaration

```objectivec
@property (readonly) NSInteger data1;
```

<a id="Discussion"></a>

## Discussion

The originator of the event defines the data in this property, and the data is dependent on the event type. If the type of this event isn’t  [NSAppKitDefined](../nsappkitdefined.md), [NSSystemDefined](../nssystemdefined.md), [NSApplicationDefined](../nsapplicationdefined.md), or [NSPeriodic](../nsperiodic.md), accessing this property raises [NSInternalInconsistencyException](https://developer.apple.com/documentation/foundation/nsexceptionname/internalinconsistencyexception).

[NSPeriodic](../nsperiodic.md) events don’t use this property.

## See Also

### Related Documentation

- [subtype](subtype.md): The event’s subtype.
- [otherEventWithType:location:modifierFlags:timestamp:windowNumber:context:subtype:data1:data2:](otherevent%28with_location_modifierflags_timestamp_windownumber_context_subtype_data1_data2_%29.md): Creates and returns a new event object that describes a custom event.

### Getting custom event information

- [data2](data2.md): Additional data associated with this event.
