> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inticketedevent/init(category:name:eventduration:location:)](https://developer.apple.com/documentation/intents/inticketedevent/init(category:name:eventduration:location:))

# init(category:name:eventDuration:location:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a ticketed event object with the specified contents and attributes.

## Declaration

```swift
init(category: INTicketedEventCategory, name: String, eventDuration: INDateComponentsRange, location: CLPlacemark?)
```

## Parameters

- `category`: The type of ticketed event.
- `name`: The name of the event.
- `eventDuration`: The date and time range that indicates the beginning and end of the event.
- `location`: The name and location of the venue or place for the event.

<a id="return-value"></a>

## Return Value

A new [INTicketedEvent](../inticketedevent.md) object or `nil` if one can’t be created.

# initWithCategory:name:eventDuration:location: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a ticketed event object with the specified contents and attributes.

## Declaration

```objectivec
- (instancetype) initWithCategory:(INTicketedEventCategory) category name:(NSString *) name eventDuration:(INDateComponentsRange *) eventDuration location:(CLPlacemark *) location;
```

## Parameters

- `category`: The type of ticketed event.
- `name`: The name of the event.
- `eventDuration`: The date and time range that indicates the beginning and end of the event.
- `location`: The name and location of the venue or place for the event.

<a id="return-value"></a>

## Return Value

A new [INTicketedEvent](../inticketedevent.md) object or `nil` if one can’t be created.
