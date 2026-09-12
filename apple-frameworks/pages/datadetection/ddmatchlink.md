> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/datadetection/ddmatchlink](https://developer.apple.com/documentation/datadetection/ddmatchlink)

# DDMatchLink (Swift)

**Framework:** DataDetection  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An object that contains a web link that the data detection system matches.

## Declaration

```swift
class DDMatchLink
```

<a id="overview"></a>

## Overview

The DataDetection framework returns a link match in a `DDMatchLink` object, which contains a [URL](../foundation/url.md).

## Topics

### Getting link information

- [url](ddmatchlink/url.md): An address for a web resource, such as a webpage or image.

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

- [DDMatchCalendarEvent](ddmatchcalendarevent.md): An object that represents a calendar date or date range that the data detection system matches.
- [DDMatchEmailAddress](ddmatchemailaddress.md): An object that contains an email address that the data detection system matches.
- [DDMatchFlightNumber](ddmatchflightnumber.md): An object that contains a flight number that the data detection system matches.
- [DDMatchMoneyAmount](ddmatchmoneyamount.md): An object that contains an amount of money that the data detection system matches.
- [DDMatchPhoneNumber](ddmatchphonenumber.md): An object that contains a phone number that the data detection system matches.
- [DDMatchPostalAddress](ddmatchpostaladdress.md): An object that contains a postal address that the data detection system matches.
- [DDMatchShipmentTrackingNumber](ddmatchshipmenttrackingnumber.md): An object that contains parcel tracking information that the data detection system matches.

# DDMatchLink (Objective-C)

**Framework:** DataDetection  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An object that contains a web link that the data detection system matches.

## Declaration

```objectivec
@interface DDMatchLink : DDMatch
```

<a id="overview"></a>

## Overview

The DataDetection framework returns a link match in a `DDMatchLink` object, which contains a [URL](../foundation/url.md).

## Topics

### Getting link information

- [URL](ddmatchlink/url.md): An address for a web resource, such as a webpage or image.

## Relationships

### Inherits From

- [DDMatch](ddmatch.md)

## See Also

### Matched data types

- [DDMatchCalendarEvent](ddmatchcalendarevent.md): An object that represents a calendar date or date range that the data detection system matches.
- [DDMatchEmailAddress](ddmatchemailaddress.md): An object that contains an email address that the data detection system matches.
- [DDMatchFlightNumber](ddmatchflightnumber.md): An object that contains a flight number that the data detection system matches.
- [DDMatchMoneyAmount](ddmatchmoneyamount.md): An object that contains an amount of money that the data detection system matches.
- [DDMatchPhoneNumber](ddmatchphonenumber.md): An object that contains a phone number that the data detection system matches.
- [DDMatchPostalAddress](ddmatchpostaladdress.md): An object that contains a postal address that the data detection system matches.
- [DDMatchShipmentTrackingNumber](ddmatchshipmenttrackingnumber.md): An object that contains parcel tracking information that the data detection system matches.
