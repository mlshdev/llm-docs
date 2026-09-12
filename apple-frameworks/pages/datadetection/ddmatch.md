> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/datadetection/ddmatch](https://developer.apple.com/documentation/datadetection/ddmatch)

# DDMatch (Swift)

**Framework:** DataDetection  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A base class for common types of data that the data detection system matches.

## Declaration

```swift
class DDMatch
```

<a id="overview"></a>

## Overview

The DataDetection framework returns results in objects that are subclasses of `DDMatch`, which are specific to the type of matching data. Each object contains the matched string.

## Topics

### Getting matches

- [matchedString](ddmatch/matchedstring.md): A substring that the data detection system identifies from an original string as a common type of data.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [DDMatchCalendarEvent](ddmatchcalendarevent.md)
- [DDMatchEmailAddress](ddmatchemailaddress.md)
- [DDMatchFlightNumber](ddmatchflightnumber.md)
- [DDMatchLink](ddmatchlink.md)
- [DDMatchMoneyAmount](ddmatchmoneyamount.md)
- [DDMatchPhoneNumber](ddmatchphonenumber.md)
- [DDMatchPostalAddress](ddmatchpostaladdress.md)
- [DDMatchShipmentTrackingNumber](ddmatchshipmenttrackingnumber.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Matched strings

- [DataDetector](datadetector.md): An extension to the string protocol that scans strings for semantic entities, such as email addresses, phone numbers, URLs, and flight information.

# DDMatch (Objective-C)

**Framework:** DataDetection  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A base class for common types of data that the data detection system matches.

## Declaration

```objectivec
@interface DDMatch : NSObject
```

<a id="overview"></a>

## Overview

The DataDetection framework returns results in objects that are subclasses of `DDMatch`, which are specific to the type of matching data. Each object contains the matched string.

## Topics

### Getting matches

- [matchedString](ddmatch/matchedstring.md): A substring that the data detection system identifies from an original string as a common type of data.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [DDMatchCalendarEvent](ddmatchcalendarevent.md)
- [DDMatchEmailAddress](ddmatchemailaddress.md)
- [DDMatchFlightNumber](ddmatchflightnumber.md)
- [DDMatchLink](ddmatchlink.md)
- [DDMatchMoneyAmount](ddmatchmoneyamount.md)
- [DDMatchPhoneNumber](ddmatchphonenumber.md)
- [DDMatchPostalAddress](ddmatchpostaladdress.md)
- [DDMatchShipmentTrackingNumber](ddmatchshipmenttrackingnumber.md)
