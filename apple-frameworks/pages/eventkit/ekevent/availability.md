> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekevent/availability](https://developer.apple.com/documentation/eventkit/ekevent/availability)

# availability (Swift)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

The availability setting for the event.

## Declaration

```swift
var availability: EKEventAvailability { get set }
```

<a id="Discussion"></a>

## Discussion

This setting is used by CalDAV and Exchange servers to indicate how the event should be treated for scheduling purposes.

If the event’s calendar does not support availability settings, this property’s value is [EKEventAvailability.notSupported](../ekeventavailability/notsupported.md).

## See Also

### Related Documentation

- [EKEventAvailability](../ekeventavailability.md): The event’s availability setting for scheduling purposes.

### Accessing Event Properties

- [eventIdentifier](eventidentifier.md): A unique identifier for the event.
- [startDate](startdate.md): The start date of the event.
- [endDate](enddate.md): The end date for the event.
- [isAllDay](isallday.md): A Boolean value that indicates whether the event is an all-day event.
- [occurrenceDate](occurrencedate.md): The original occurrence date of an event if it is part of a recurring series.
- [isDetached](isdetached.md): A Boolean value that indicates whether an event is a detached instance of a repeating event.
- [organizer](organizer.md): The organizer associated with the event.
- [status](status.md): The status of the event.
- [birthdayContactIdentifier](birthdaycontactidentifier.md): The contact identifier of the person for this birthday event.
- [structuredLocation](structuredlocation.md): The event’s location with a potential geocoordinate.
- [birthdayPersonID](birthdaypersonid.md): Deprecated. The Address Book framework record identifier of the person for this birthday event.
- [birthdayPersonUniqueID](birthdaypersonuniqueid.md): Deprecated. The Address Book framework record identifier of the person for this birthday event.

# availability (Objective-C)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

The availability setting for the event.

## Declaration

```objectivec
@property (nonatomic) EKEventAvailability availability;
```

<a id="Discussion"></a>

## Discussion

This setting is used by CalDAV and Exchange servers to indicate how the event should be treated for scheduling purposes.

If the event’s calendar does not support availability settings, this property’s value is [EKEventAvailabilityNotSupported](../ekeventavailability/notsupported.md).

## See Also

### Related Documentation

- [EKEventAvailability](../ekeventavailability.md): The event’s availability setting for scheduling purposes.

### Accessing Event Properties

- [eventIdentifier](eventidentifier.md): A unique identifier for the event.
- [startDate](startdate.md): The start date of the event.
- [endDate](enddate.md): The end date for the event.
- [allDay](isallday.md): A Boolean value that indicates whether the event is an all-day event.
- [occurrenceDate](occurrencedate.md): The original occurrence date of an event if it is part of a recurring series.
- [isDetached](isdetached.md): A Boolean value that indicates whether an event is a detached instance of a repeating event.
- [organizer](organizer.md): The organizer associated with the event.
- [status](status.md): The status of the event.
- [birthdayContactIdentifier](birthdaycontactidentifier.md): The contact identifier of the person for this birthday event.
- [structuredLocation](structuredlocation.md): The event’s location with a potential geocoordinate.
- [birthdayPersonID](birthdaypersonid.md): Deprecated. The Address Book framework record identifier of the person for this birthday event.
- [birthdayPersonUniqueID](birthdaypersonuniqueid.md): Deprecated. The Address Book framework record identifier of the person for this birthday event.
