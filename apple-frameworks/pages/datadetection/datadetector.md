> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/datadetection/datadetector](https://developer.apple.com/documentation/datadetection/datadetector)

# DataDetector

**Framework:** DataDetection  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

An extension to the string protocol that scans strings for semantic entities, such as email addresses, phone numbers, URLs, and flight information.

## Declaration

```swift
enum DataDetector
```

## Topics

### Methods that scan strings for known content types

- [dataDetectorMatches(\_:options:)](https://developer.apple.com/documentation/swift/stringprotocol/datadetectormatches%28_:options:%29): Searches for known data types in a string or a substring.

### Structures

- [DataDetector.Match](datadetector/match.md): A representation of a match that includes common properties and an enumeration that represents the match type and its specific semantic components.
- [DataDetector.MatchType](datadetector/matchtype.md): A set of types of matches that the system can find in a string.
- [DataDetector.Options](datadetector/options.md): A set of options you can use to refine the behavior of text scanning, and better interpret the semantic domain of the matches.

### Known entity types

- [all](datadetector/matchtype/all.md): A set of types that includes all publicly useable types.
- [link](datadetector/matchtype/link.md): The type that represents links, not limited to web links.
- [emailAddress](datadetector/matchtype/emailaddress.md): The type that represents email addresses.
- [phoneNumber](datadetector/matchtype/phonenumber.md): The type that represents phone numbers.
- [postalAddress](datadetector/matchtype/postaladdress.md): The type that represents postal addresses.
- [calendarEvent](datadetector/matchtype/calendarevent.md): The type that represents calendar events, such as dates and times, or date and time ranges.
- [moneyAmount](datadetector/matchtype/moneyamount.md): The type that represents monetary amounts.
- [measurement](datadetector/matchtype/measurement.md): The type that represents measurements, such as distances and weights.
- [flightNumber](datadetector/matchtype/flightnumber.md): The type that represents flight numbers.
- [shipmentTrackingNumber](datadetector/matchtype/shipmenttrackingnumber.md): The type that represents shipment tracking numbers.
- [paymentIdentifier](datadetector/matchtype/paymentidentifier.md): The type that represents payment identifiers, such as Universal Payments Interface (UPI) identifiers.

## See Also

### Matched strings

- [DDMatch](ddmatch.md): A base class for common types of data that the data detection system matches.
