> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekevent/occurrencedate](https://developer.apple.com/documentation/eventkit/ekevent/occurrencedate)

# occurrenceDate (Swift)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

The original occurrence date of an event if it is part of a recurring series.

## Declaration

```swift
var occurrenceDate: Date! { get }
```

<a id="Discussion"></a>

## Discussion

This value remains the same even when the event has been detached and its start date has changed. Floating events (such as all-day events) are returned in the default time zone.

## See Also

### Accessing Event Properties

- [eventIdentifier](eventidentifier.md): A unique identifier for the event.
- [availability](availability.md): The availability setting for the event.
- [startDate](startdate.md): The start date of the event.
- [endDate](enddate.md): The end date for the event.
- [isAllDay](isallday.md): A Boolean value that indicates whether the event is an all-day event.
- [isDetached](isdetached.md): A Boolean value that indicates whether an event is a detached instance of a repeating event.
- [organizer](organizer.md): The organizer associated with the event.
- [status](status.md): The status of the event.
- [birthdayContactIdentifier](birthdaycontactidentifier.md): The contact identifier of the person for this birthday event.
- [structuredLocation](structuredlocation.md): The event’s location with a potential geocoordinate.
- [birthdayPersonID](birthdaypersonid.md): Deprecated. The Address Book framework record identifier of the person for this birthday event.
- [birthdayPersonUniqueID](birthdaypersonuniqueid.md): Deprecated. The Address Book framework record identifier of the person for this birthday event.

# occurrenceDate (Objective-C)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

The original occurrence date of an event if it is part of a recurring series.

## Declaration

```objectivec
@property (nonatomic, readonly, null_unspecified) NSDate * occurrenceDate;
```

<a id="Discussion"></a>

## Discussion

This value remains the same even when the event has been detached and its start date has changed. Floating events (such as all-day events) are returned in the default time zone.

## See Also

### Accessing Event Properties

- [eventIdentifier](eventidentifier.md): A unique identifier for the event.
- [availability](availability.md): The availability setting for the event.
- [startDate](startdate.md): The start date of the event.
- [endDate](enddate.md): The end date for the event.
- [allDay](isallday.md): A Boolean value that indicates whether the event is an all-day event.
- [isDetached](isdetached.md): A Boolean value that indicates whether an event is a detached instance of a repeating event.
- [organizer](organizer.md): The organizer associated with the event.
- [status](status.md): The status of the event.
- [birthdayContactIdentifier](birthdaycontactidentifier.md): The contact identifier of the person for this birthday event.
- [structuredLocation](structuredlocation.md): The event’s location with a potential geocoordinate.
- [birthdayPersonID](birthdaypersonid.md): Deprecated. The Address Book framework record identifier of the person for this birthday event.
- [birthdayPersonUniqueID](birthdaypersonuniqueid.md): Deprecated. The Address Book framework record identifier of the person for this birthday event.
