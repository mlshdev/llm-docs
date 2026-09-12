> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/datadetection/ddmatchshipmenttrackingnumber](https://developer.apple.com/documentation/datadetection/ddmatchshipmenttrackingnumber)

# DDMatchShipmentTrackingNumber (Swift)

**Framework:** DataDetection  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An object that contains parcel tracking information that the data detection system matches.

## Declaration

```swift
class DDMatchShipmentTrackingNumber
```

<a id="overview"></a>

## Overview

The DataDetection framework returns a shipment tracking number match in a `DDMatchShipmentTrackingNumber` object, which contains a carrier name and tracking identifier.

## Topics

### Getting tracking information

- [carrier](ddmatchshipmenttrackingnumber/carrier.md): The name of a parcel carrier.
- [trackingNumber](ddmatchshipmenttrackingnumber/trackingnumber.md): A string that represents a carrier’s tracking identifier for a parcel.

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
- [DDMatchLink](ddmatchlink.md): An object that contains a web link that the data detection system matches.
- [DDMatchMoneyAmount](ddmatchmoneyamount.md): An object that contains an amount of money that the data detection system matches.
- [DDMatchPhoneNumber](ddmatchphonenumber.md): An object that contains a phone number that the data detection system matches.
- [DDMatchPostalAddress](ddmatchpostaladdress.md): An object that contains a postal address that the data detection system matches.

# DDMatchShipmentTrackingNumber (Objective-C)

**Framework:** DataDetection  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An object that contains parcel tracking information that the data detection system matches.

## Declaration

```objectivec
@interface DDMatchShipmentTrackingNumber : DDMatch
```

<a id="overview"></a>

## Overview

The DataDetection framework returns a shipment tracking number match in a `DDMatchShipmentTrackingNumber` object, which contains a carrier name and tracking identifier.

## Topics

### Getting tracking information

- [carrier](ddmatchshipmenttrackingnumber/carrier.md): The name of a parcel carrier.
- [trackingNumber](ddmatchshipmenttrackingnumber/trackingnumber.md): A string that represents a carrier’s tracking identifier for a parcel.

## Relationships

### Inherits From

- [DDMatch](ddmatch.md)

## See Also

### Matched data types

- [DDMatchCalendarEvent](ddmatchcalendarevent.md): An object that represents a calendar date or date range that the data detection system matches.
- [DDMatchEmailAddress](ddmatchemailaddress.md): An object that contains an email address that the data detection system matches.
- [DDMatchFlightNumber](ddmatchflightnumber.md): An object that contains a flight number that the data detection system matches.
- [DDMatchLink](ddmatchlink.md): An object that contains a web link that the data detection system matches.
- [DDMatchMoneyAmount](ddmatchmoneyamount.md): An object that contains an amount of money that the data detection system matches.
- [DDMatchPhoneNumber](ddmatchphonenumber.md): An object that contains a phone number that the data detection system matches.
- [DDMatchPostalAddress](ddmatchpostaladdress.md): An object that contains a postal address that the data detection system matches.
