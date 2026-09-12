> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekevent/eventidentifier](https://developer.apple.com/documentation/eventkit/ekevent/eventidentifier)

# eventIdentifier (Swift)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

A unique identifier for the event.

## Declaration

```swift
var eventIdentifier: String! { get }
```

## Mentioned In

- [Retrieving events and reminders](../retrieving-events-and-reminders.md)

<a id="Discussion"></a>

## Discussion

You can use this identifier to look up an event with the EKEventStore method [event(withIdentifier:)](../ekeventstore/event%28withidentifier_%29.md).

If the calendar of an event changes, its identifier most likely changes as well.

## See Also

### Accessing Event Properties

- [availability](availability.md): The availability setting for the event.
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

# eventIdentifier (Objective-C)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

A unique identifier for the event.

## Declaration

```objectivec
@property (nonatomic, readonly, null_unspecified) NSString * eventIdentifier;
```

## Mentioned In

- [Retrieving events and reminders](../retrieving-events-and-reminders.md)

<a id="Discussion"></a>

## Discussion

You can use this identifier to look up an event with the EKEventStore method [eventWithIdentifier:](../ekeventstore/event%28withidentifier_%29.md).

If the calendar of an event changes, its identifier most likely changes as well.

## See Also

### Accessing Event Properties

- [availability](availability.md): The availability setting for the event.
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
