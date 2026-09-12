> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekcalendaritem/calendaritemidentifier](https://developer.apple.com/documentation/eventkit/ekcalendaritem/calendaritemidentifier)

# calendarItemIdentifier (Swift)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

The calendar item’s unique identifier.

## Declaration

```swift
var calendarItemIdentifier: String { get }
```

<a id="Discussion"></a>

## Discussion

This property is set when the calendar item is created and can be used as a local identifier. Use [calendarItem(withIdentifier:)](../ekeventstore/calendaritem%28withidentifier_%29.md) to look up the item by this value.

A full sync with the calendar will lose this identifier. You should have a plan for dealing with a calendar whose identifier is no longer fetch-able by caching its other properties.

## See Also

### Related Documentation

- [calendarIdentifier](../ekcalendar/calendaridentifier.md): A unique identifier for the calendar.
- [Calendar and Reminders Programming Guide](https://developer.apple.com/library/archive/documentation/DataManagement/Conceptual/EventKitProgGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009765)

### Accessing Calendar Items

- [calendarItemExternalIdentifier](calendaritemexternalidentifier.md): The calendar item’s external identifier as provided by the calendar server.
- [uuid](uuid.md): Deprecated. The calendar item’s unique identifier.

# calendarItemIdentifier (Objective-C)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

The calendar item’s unique identifier.

## Declaration

```objectivec
@property (nonatomic, readonly) NSString * calendarItemIdentifier;
```

<a id="Discussion"></a>

## Discussion

This property is set when the calendar item is created and can be used as a local identifier. Use [calendarItemWithIdentifier:](../ekeventstore/calendaritem%28withidentifier_%29.md) to look up the item by this value.

A full sync with the calendar will lose this identifier. You should have a plan for dealing with a calendar whose identifier is no longer fetch-able by caching its other properties.

## See Also

### Related Documentation

- [calendarIdentifier](../ekcalendar/calendaridentifier.md): A unique identifier for the calendar.
- [Calendar and Reminders Programming Guide](https://developer.apple.com/library/archive/documentation/DataManagement/Conceptual/EventKitProgGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009765)

### Accessing Calendar Items

- [calendarItemExternalIdentifier](calendaritemexternalidentifier.md): The calendar item’s external identifier as provided by the calendar server.
- [UUID](uuid.md): Deprecated. The calendar item’s unique identifier.
