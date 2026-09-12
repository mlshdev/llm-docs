> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekevent/birthdaycontactidentifier](https://developer.apple.com/documentation/eventkit/ekevent/birthdaycontactidentifier)

# birthdayContactIdentifier (Swift)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

The contact identifier of the person for this birthday event.

## Declaration

```swift
var birthdayContactIdentifier: String? { get }
```

<a id="Discussion"></a>

## Discussion

This property only applies to events in the built-in Birthdays calendar. It specifies the contact identifier (for use with the Contacts framework) of the person for whom the system created this event. For any other type of event, this property returns `nil`.

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
- [structuredLocation](structuredlocation.md): The event’s location with a potential geocoordinate.
- [birthdayPersonID](birthdaypersonid.md): Deprecated. The Address Book framework record identifier of the person for this birthday event.
- [birthdayPersonUniqueID](birthdaypersonuniqueid.md): Deprecated. The Address Book framework record identifier of the person for this birthday event.

# birthdayContactIdentifier (Objective-C)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

The contact identifier of the person for this birthday event.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSString * birthdayContactIdentifier;
```

<a id="Discussion"></a>

## Discussion

This property only applies to events in the built-in Birthdays calendar. It specifies the contact identifier (for use with the Contacts framework) of the person for whom the system created this event. For any other type of event, this property returns `nil`.

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
- [structuredLocation](structuredlocation.md): The event’s location with a potential geocoordinate.
- [birthdayPersonID](birthdaypersonid.md): Deprecated. The Address Book framework record identifier of the person for this birthday event.
- [birthdayPersonUniqueID](birthdaypersonuniqueid.md): Deprecated. The Address Book framework record identifier of the person for this birthday event.
