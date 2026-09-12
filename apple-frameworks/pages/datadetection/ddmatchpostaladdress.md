> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/datadetection/ddmatchpostaladdress](https://developer.apple.com/documentation/datadetection/ddmatchpostaladdress)

# DDMatchPostalAddress (Swift)

**Framework:** DataDetection  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An object that contains a postal address that the data detection system matches.

## Declaration

```swift
class DDMatchPostalAddress
```

<a id="overview"></a>

## Overview

The DataDetection framework returns a postal address match in a `DDMatchPostalAddress` object, which optionally contains the matching parts of a postal address: street, city, state, postal code, and country.

## Topics

### Getting postal address information

- [street](ddmatchpostaladdress/street.md): The street name in a postal address.
- [city](ddmatchpostaladdress/city.md): The city name in a postal address.
- [state](ddmatchpostaladdress/state.md): The state name in a postal address.
- [postalCode](ddmatchpostaladdress/postalcode.md): The postal code in a postal address.
- [country](ddmatchpostaladdress/country.md): The country or region name in a postal address.

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
- [DDMatchShipmentTrackingNumber](ddmatchshipmenttrackingnumber.md): An object that contains parcel tracking information that the data detection system matches.

# DDMatchPostalAddress (Objective-C)

**Framework:** DataDetection  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An object that contains a postal address that the data detection system matches.

## Declaration

```objectivec
@interface DDMatchPostalAddress : DDMatch
```

<a id="overview"></a>

## Overview

The DataDetection framework returns a postal address match in a `DDMatchPostalAddress` object, which optionally contains the matching parts of a postal address: street, city, state, postal code, and country.

## Topics

### Getting postal address information

- [street](ddmatchpostaladdress/street.md): The street name in a postal address.
- [city](ddmatchpostaladdress/city.md): The city name in a postal address.
- [state](ddmatchpostaladdress/state.md): The state name in a postal address.
- [postalCode](ddmatchpostaladdress/postalcode.md): The postal code in a postal address.
- [country](ddmatchpostaladdress/country.md): The country or region name in a postal address.

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
- [DDMatchShipmentTrackingNumber](ddmatchshipmenttrackingnumber.md): An object that contains parcel tracking information that the data detection system matches.
