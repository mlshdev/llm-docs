> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekevent/birthdaypersonuniqueid](https://developer.apple.com/documentation/eventkit/ekevent/birthdaypersonuniqueid)

# birthdayPersonUniqueID (Swift)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** macOS 10.8+ (deprecated in 10.11)

The Address Book framework record identifier of the person for this birthday event.

> Use birthdayContactIdentifier instead

## Declaration

```swift
var birthdayPersonUniqueID: String? { get }
```

<a id="Discussion"></a>

## Discussion

This property is only set if this is a birthday event; otherwise the property is `nil`.

<a id="Special-Considerations"></a>

### Special Considerations

> **Note**

>  This property is equivalent to the [birthdayPersonID](birthdaypersonid.md) property on iOS.

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
- [structuredLocation](structuredlocation.md): The event’s location with a potential geocoordinate.
- [birthdayPersonID](birthdaypersonid.md): Deprecated. The Address Book framework record identifier of the person for this birthday event.

# birthdayPersonUniqueID (Objective-C)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** macOS 10.8+ (deprecated in 10.11)

The Address Book framework record identifier of the person for this birthday event.

> Use birthdayContactIdentifier instead

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSString * birthdayPersonUniqueID;
```

<a id="Discussion"></a>

## Discussion

This property is only set if this is a birthday event; otherwise the property is `nil`.

<a id="Special-Considerations"></a>

### Special Considerations

> **Note**

>  This property is equivalent to the [birthdayPersonID](birthdaypersonid.md) property on iOS.

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
- [structuredLocation](structuredlocation.md): The event’s location with a potential geocoordinate.
- [birthdayPersonID](birthdaypersonid.md): Deprecated. The Address Book framework record identifier of the person for this birthday event.
