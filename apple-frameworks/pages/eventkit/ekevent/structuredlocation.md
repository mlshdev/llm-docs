> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekevent/structuredlocation](https://developer.apple.com/documentation/eventkit/ekevent/structuredlocation)

# structuredLocation (Swift)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

The event’s location with a potential geocoordinate.

## Declaration

```swift
@NSCopying var structuredLocation: EKStructuredLocation? { get set }
```

## See Also

### Accessing Event Properties

- [eventIdentifier](eventidentifier.md): A unique identifier for the event.
- [availability](availability.md): The availability setting for the event.
- [startDate](startdate.md): The start date of the event.
- [endDate](enddate.md): The end date for the event.
- [isAllDay](isallday.md): A Boolean value that indicates whether the event is an all-day event.
- [occurrenceDate](occurrencedate.md): The original occurrence date of an event if it is part of a recurring series.
- [isDetached](isdetached.md): A Boolean value that indicates whether an event is a detached instance of a repeating event.
- [organizer](organizer.md): The organizer associated with the event.
- [status](status.md): The status of the event.
- [birthdayContactIdentifier](birthdaycontactidentifier.md): The contact identifier of the person for this birthday event.
- [birthdayPersonID](birthdaypersonid.md): Deprecated. The Address Book framework record identifier of the person for this birthday event.
- [birthdayPersonUniqueID](birthdaypersonuniqueid.md): Deprecated. The Address Book framework record identifier of the person for this birthday event.

# structuredLocation (Objective-C)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

The event’s location with a potential geocoordinate.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) EKStructuredLocation * structuredLocation;
```

## See Also

### Accessing Event Properties

- [eventIdentifier](eventidentifier.md): A unique identifier for the event.
- [availability](availability.md): The availability setting for the event.
- [startDate](startdate.md): The start date of the event.
- [endDate](enddate.md): The end date for the event.
- [allDay](isallday.md): A Boolean value that indicates whether the event is an all-day event.
- [occurrenceDate](occurrencedate.md): The original occurrence date of an event if it is part of a recurring series.
- [isDetached](isdetached.md): A Boolean value that indicates whether an event is a detached instance of a repeating event.
- [organizer](organizer.md): The organizer associated with the event.
- [status](status.md): The status of the event.
- [birthdayContactIdentifier](birthdaycontactidentifier.md): The contact identifier of the person for this birthday event.
- [birthdayPersonID](birthdaypersonid.md): Deprecated. The Address Book framework record identifier of the person for this birthday event.
- [birthdayPersonUniqueID](birthdaypersonuniqueid.md): Deprecated. The Address Book framework record identifier of the person for this birthday event.
