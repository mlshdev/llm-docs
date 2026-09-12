> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/datadetection/ddmatchcalendarevent](https://developer.apple.com/documentation/datadetection/ddmatchcalendarevent)

# DDMatchCalendarEvent (Swift)

**Framework:** DataDetection  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An object that represents a calendar date or date range that the data detection system matches.

## Declaration

```swift
class DDMatchCalendarEvent
```

<a id="overview"></a>

## Overview

The DataDetection framework returns a calendar event match in a `DDMatchCalendarEvent` object, which has only a beginning date, only an end date, or both a beginning date and an end date.

## Topics

### Getting event details

- [isAllDay](ddmatchcalendarevent/isallday.md): A Boolean value that indicates whether the event is an all-day event.
- [endDate](ddmatchcalendarevent/enddate.md): A date that represents the end of the event.
- [endTimeZone](ddmatchcalendarevent/endtimezone.md): The time zone for the event’s end date.
- [startDate](ddmatchcalendarevent/startdate.md): A date that represents the start of the event.
- [startTimeZone](ddmatchcalendarevent/starttimezone.md): The time zone for the event’s start date.

## Relationships

### Inherits From

- [DDMatch](ddmatch.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Matched data types

- [DDMatchEmailAddress](ddmatchemailaddress.md): An object that contains an email address that the data detection system matches.
- [DDMatchFlightNumber](ddmatchflightnumber.md): An object that contains a flight number that the data detection system matches.
- [DDMatchLink](ddmatchlink.md): An object that contains a web link that the data detection system matches.
- [DDMatchMoneyAmount](ddmatchmoneyamount.md): An object that contains an amount of money that the data detection system matches.
- [DDMatchPhoneNumber](ddmatchphonenumber.md): An object that contains a phone number that the data detection system matches.
- [DDMatchPostalAddress](ddmatchpostaladdress.md): An object that contains a postal address that the data detection system matches.
- [DDMatchShipmentTrackingNumber](ddmatchshipmenttrackingnumber.md): An object that contains parcel tracking information that the data detection system matches.

# DDMatchCalendarEvent (Objective-C)

**Framework:** DataDetection  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An object that represents a calendar date or date range that the data detection system matches.

## Declaration

```objectivec
@interface DDMatchCalendarEvent : DDMatch
```

<a id="overview"></a>

## Overview

The DataDetection framework returns a calendar event match in a `DDMatchCalendarEvent` object, which has only a beginning date, only an end date, or both a beginning date and an end date.

## Topics

### Getting event details

- [allDay](ddmatchcalendarevent/isallday.md): A Boolean value that indicates whether the event is an all-day event.
- [endDate](ddmatchcalendarevent/enddate.md): A date that represents the end of the event.
- [endTimeZone](ddmatchcalendarevent/endtimezone.md): The time zone for the event’s end date.
- [startDate](ddmatchcalendarevent/startdate.md): A date that represents the start of the event.
- [startTimeZone](ddmatchcalendarevent/starttimezone.md): The time zone for the event’s start date.

## Relationships

### Inherits From

- [DDMatch](ddmatch.md)

## See Also

### Matched data types

- [DDMatchEmailAddress](ddmatchemailaddress.md): An object that contains an email address that the data detection system matches.
- [DDMatchFlightNumber](ddmatchflightnumber.md): An object that contains a flight number that the data detection system matches.
- [DDMatchLink](ddmatchlink.md): An object that contains a web link that the data detection system matches.
- [DDMatchMoneyAmount](ddmatchmoneyamount.md): An object that contains an amount of money that the data detection system matches.
- [DDMatchPhoneNumber](ddmatchphonenumber.md): An object that contains a phone number that the data detection system matches.
- [DDMatchPostalAddress](ddmatchpostaladdress.md): An object that contains a postal address that the data detection system matches.
- [DDMatchShipmentTrackingNumber](ddmatchshipmenttrackingnumber.md): An object that contains parcel tracking information that the data detection system matches.
