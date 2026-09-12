> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/datadetection/datadetector/matchtype/calendarevent](https://developer.apple.com/documentation/datadetection/datadetector/matchtype/calendarevent)

# calendarEvent

**Framework:** DataDetection  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The type that represents calendar events, such as dates and times, or date and time ranges.

## Declaration

```swift
static let calendarEvent: DataDetector.MatchType
```

<a id="Discussion"></a>

## Discussion

> **Note**

> The framework doesn’t match dates if they conform to the structure of a recurring event, which is a date range that also includes a time range. For example, an event that takes place Monday to Friday from 11 a.m. to 1:30 p.m.

## See Also

### Known entity types

- [all](all.md): A set of types that includes all publicly useable types.
- [link](link.md): The type that represents links, not limited to web links.
- [emailAddress](emailaddress.md): The type that represents email addresses.
- [phoneNumber](phonenumber.md): The type that represents phone numbers.
- [postalAddress](postaladdress.md): The type that represents postal addresses.
- [moneyAmount](moneyamount.md): The type that represents monetary amounts.
- [measurement](measurement.md): The type that represents measurements, such as distances and weights.
- [flightNumber](flightnumber.md): The type that represents flight numbers.
- [shipmentTrackingNumber](shipmenttrackingnumber.md): The type that represents shipment tracking numbers.
- [paymentIdentifier](paymentidentifier.md): The type that represents payment identifiers, such as Universal Payments Interface (UPI) identifiers.
