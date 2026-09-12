> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekevent/birthdaypersonid](https://developer.apple.com/documentation/eventkit/ekevent/birthdaypersonid)

# birthdayPersonID (Swift)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 9.0) · iPadOS 5.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · watchOS 2.0+ (deprecated in 2.0)

The Address Book framework record identifier of the person for this birthday event.

> Use birthdayContactIdentifier instead

## Declaration

```swift
var birthdayPersonID: Int { get }
```

<a id="Discussion"></a>

## Discussion

This property is only set if this is a birthday event; otherwise the property is `nil`.

<a id="Special-Considerations"></a>

### Special Considerations

> **Note**

>  This property is equivalent to the [birthdayPersonUniqueID](birthdaypersonuniqueid.md) property in macOS.

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
- [birthdayPersonUniqueID](birthdaypersonuniqueid.md): Deprecated. The Address Book framework record identifier of the person for this birthday event.

# birthdayPersonID (Objective-C)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 9.0) · iPadOS 5.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · watchOS 2.0+ (deprecated in 2.0)

The Address Book framework record identifier of the person for this birthday event.

> Use birthdayContactIdentifier instead

## Declaration

```objectivec
@property (nonatomic, readonly) NSInteger birthdayPersonID;
```

<a id="Discussion"></a>

## Discussion

This property is only set if this is a birthday event; otherwise the property is `nil`.

<a id="Special-Considerations"></a>

### Special Considerations

> **Note**

>  This property is equivalent to the [birthdayPersonUniqueID](birthdaypersonuniqueid.md) property in macOS.

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
- [birthdayPersonUniqueID](birthdaypersonuniqueid.md): Deprecated. The Address Book framework record identifier of the person for this birthday event.
