> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inticketedevent](https://developer.apple.com/documentation/intents/inticketedevent)

# INTicketedEvent (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

The information that describes a ticketed event.

## Declaration

```swift
class INTicketedEvent
```

## Topics

### Creating a Ticket Event

- [init(category:name:eventDuration:location:)](inticketedevent/init%28category_name_eventduration_location_%29.md): Creates a ticketed event object with the specified contents and attributes.

### Getting Ticketed Event Information

- [category](inticketedevent/category.md): The type of ticketed event.
- [INTicketedEventCategory](inticketedeventcategory.md): Constants that define the type of ticketed event.
- [eventDuration](inticketedevent/eventduration.md): The date and time range that indicates the beginning and end of the event.
- [location](inticketedevent/location.md): The name and location of the ticketed event.
- [name](inticketedevent/name.md): The name of the event.

### Initializers

- [init(coder:)](inticketedevent/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Getting the Ticketed Event Reservation Information

- [event](inticketedeventreservation/event.md): An object containing detailed information about the ticketed event.
- [reservedSeat](inticketedeventreservation/reservedseat.md): The user’s assigned seat for the ticketed event.

# INTicketedEvent (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

The information that describes a ticketed event.

## Declaration

```objectivec
@interface INTicketedEvent : NSObject
```

## Topics

### Creating a Ticket Event

- [initWithCategory:name:eventDuration:location:](inticketedevent/init%28category_name_eventduration_location_%29.md): Creates a ticketed event object with the specified contents and attributes.

### Getting Ticketed Event Information

- [category](inticketedevent/category.md): The type of ticketed event.
- [INTicketedEventCategory](inticketedeventcategory.md): Constants that define the type of ticketed event.
- [eventDuration](inticketedevent/eventduration.md): The date and time range that indicates the beginning and end of the event.
- [location](inticketedevent/location.md): The name and location of the ticketed event.
- [name](inticketedevent/name.md): The name of the event.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Getting the Ticketed Event Reservation Information

- [event](inticketedeventreservation/event.md): An object containing detailed information about the ticketed event.
- [reservedSeat](inticketedeventreservation/reservedseat.md): The user’s assigned seat for the ticketed event.
