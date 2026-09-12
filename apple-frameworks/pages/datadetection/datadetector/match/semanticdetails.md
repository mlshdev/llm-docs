> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/datadetection/datadetector/match/semanticdetails](https://developer.apple.com/documentation/datadetection/datadetector/match/semanticdetails)

# DataDetector.Match.SemanticDetails

**Framework:** DataDetection  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

An enumeration of types of matches returned by the scanner.

## Declaration

```swift
enum SemanticDetails
```

<a id="Discussion"></a>

## Discussion

The framework associates each value with an object that contains semantic information about the match.

## Topics

### Structures

- [DataDetector.Match.SemanticDetails.CalendarEvent](semanticdetails/calendarevent.md): The values the framework returns that represent date components of a calendar event.
- [DataDetector.Match.SemanticDetails.EmailAddress](semanticdetails/emailaddress.md): A match that the data detector determines represents an email address.
- [DataDetector.Match.SemanticDetails.FlightNumber](semanticdetails/flightnumber.md): The values the framework returns that represent an airline code and a flight number.
- [DataDetector.Match.SemanticDetails.Link](semanticdetails/link.md): The value the framework returns for a match of a link that contains a valid URL corresponding to the original link.
- [DataDetector.Match.SemanticDetails.Measurement](semanticdetails/measurement.md): A match that the data detector determines represents a measurement.
- [DataDetector.Match.SemanticDetails.MoneyAmount](semanticdetails/moneyamount.md): A match that the data detector determines represents an amount of money.
- [DataDetector.Match.SemanticDetails.PaymentIdentifier](semanticdetails/paymentidentifier.md): A match that the data detector determines represents a payment identifier.
- [DataDetector.Match.SemanticDetails.PhoneNumber](semanticdetails/phonenumber.md): A match that the data detector determines represents a phone number.
- [DataDetector.Match.SemanticDetails.PostalAddress](semanticdetails/postaladdress.md): A match that the data detector determines represents a postal address.
- [DataDetector.Match.SemanticDetails.ShipmentTrackingNumber](semanticdetails/shipmenttrackingnumber.md): A match that the data detector determines represents a shipment tracking number.

### Enumeration Cases

- [DataDetector.Match.SemanticDetails.calendarEvent(\_:)](semanticdetails/calendarevent%28__%29.md): A match that the data detector determines represents a calendar event.
- [DataDetector.Match.SemanticDetails.emailAddress(\_:)](semanticdetails/emailaddress%28__%29.md): A match that the data detector determines represents an email address.
- [DataDetector.Match.SemanticDetails.flightNumber(\_:)](semanticdetails/flightnumber%28__%29.md): A match that the data detector determines represents a flight number.
- [DataDetector.Match.SemanticDetails.link(\_:)](semanticdetails/link%28__%29.md): A match that the data detector determines represents a link.
- [DataDetector.Match.SemanticDetails.measurement(\_:)](semanticdetails/measurement%28__%29.md): A match that the data detector determines represents a measurement.
- [DataDetector.Match.SemanticDetails.moneyAmount(\_:)](semanticdetails/moneyamount%28__%29.md): A match that the data detector determines represents an amount of money.
- [DataDetector.Match.SemanticDetails.paymentIdentifier(\_:)](semanticdetails/paymentidentifier%28__%29.md): A match that the data detector determines represents a payment identifier.
- [DataDetector.Match.SemanticDetails.phoneNumber(\_:)](semanticdetails/phonenumber%28__%29.md): A match that the data detector determines represents a phone number.
- [DataDetector.Match.SemanticDetails.postalAddress(\_:)](semanticdetails/postaladdress%28__%29.md): A match that the data detector determines represents a postal address.
- [DataDetector.Match.SemanticDetails.shipmentTrackingNumber(\_:)](semanticdetails/shipmenttrackingnumber%28__%29.md): A match that the data detector determines represents a shipping tracking number.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Values that describe highlighting and semantic details of matches

- [DataDetector.Match.HighlightStyle](highlightstyle.md): Values that suggest how to style a highlighted item.
