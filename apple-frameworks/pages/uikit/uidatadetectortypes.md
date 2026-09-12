> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidatadetectortypes](https://developer.apple.com/documentation/uikit/uidatadetectortypes)

# UIDataDetectorTypes (Swift)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

Constants that define the types of information to detect in text-based content.

## Declaration

```swift
struct UIDataDetectorTypes
```

## Topics

### Constants

- [phoneNumber](uidatadetectortypes/phonenumber.md): An option to detect strings with the format of a phone number.
- [link](uidatadetectortypes/link.md): An option to detect strings with the format of a URL.
- [address](uidatadetectortypes/address.md): An option to detect strings with the format of an address.
- [calendarEvent](uidatadetectortypes/calendarevent.md): An option to detect strings with the format of a calendar event.
- [shipmentTrackingNumber](uidatadetectortypes/shipmenttrackingnumber.md): An option to detect strings with the format of a tracking number from a package delivery company.
- [flightNumber](uidatadetectortypes/flightnumber.md): An option to detect strings with the format of a flight number from an airline.
- [lookupSuggestion](uidatadetectortypes/lookupsuggestion.md): An option to detect strings with the format of information that a person might want to look up.
- [money](uidatadetectortypes/money.md): An option to detect strings with the format of an amount of money.
- [physicalValue](uidatadetectortypes/physicalvalue.md): An option to detect strings with the format of a physical value, such as length or temperature.
- [all](uidatadetectortypes/all.md): An option to detect all available types of data.

### Initializers

- [init(rawValue:)](uidatadetectortypes/init%28rawvalue_%29.md): Creates a data detector type with the specified raw value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Constants

- [UIWebView.NavigationType](uiwebview/navigationtype.md): Constant indicating the user’s action.
- [UIWebView.PaginationBreakingMode](uiwebview/paginationbreakingmode-swift.enum.md): The manner in which column- or page-breaking occurs.
- [UIWebView.PaginationMode](uiwebview/paginationmode-swift.enum.md): The layout of content in the web view, which determines the direction that the pages flow.

# UIDataDetectorTypes (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

Constants that define the types of information to detect in text-based content.

## Declaration

```objectivec
enum UIDataDetectorTypes : NSUInteger;
```

## Topics

### Constants

- [UIDataDetectorTypePhoneNumber](uidatadetectortypes/phonenumber.md): An option to detect strings with the format of a phone number.
- [UIDataDetectorTypeLink](uidatadetectortypes/link.md): An option to detect strings with the format of a URL.
- [UIDataDetectorTypeAddress](uidatadetectortypes/address.md): An option to detect strings with the format of an address.
- [UIDataDetectorTypeCalendarEvent](uidatadetectortypes/calendarevent.md): An option to detect strings with the format of a calendar event.
- [UIDataDetectorTypeShipmentTrackingNumber](uidatadetectortypes/shipmenttrackingnumber.md): An option to detect strings with the format of a tracking number from a package delivery company.
- [UIDataDetectorTypeFlightNumber](uidatadetectortypes/flightnumber.md): An option to detect strings with the format of a flight number from an airline.
- [UIDataDetectorTypeLookupSuggestion](uidatadetectortypes/lookupsuggestion.md): An option to detect strings with the format of information that a person might want to look up.
- [UIDataDetectorTypeMoney](uidatadetectortypes/money.md): An option to detect strings with the format of an amount of money.
- [UIDataDetectorTypePhysicalValue](uidatadetectortypes/physicalvalue.md): An option to detect strings with the format of a physical value, such as length or temperature.
- [UIDataDetectorTypeNone](uidatadetectortypes/uidatadetectortypenone.md): An option to do no data detection.
- [UIDataDetectorTypeAll](uidatadetectortypes/all.md): An option to detect all available types of data.

## See Also

### Constants

- [UIWebViewNavigationType](uiwebview/navigationtype.md): Constant indicating the user’s action.
- [UIWebPaginationBreakingMode](uiwebview/paginationbreakingmode-swift.enum.md): The manner in which column- or page-breaking occurs.
- [UIWebPaginationMode](uiwebview/paginationmode-swift.enum.md): The layout of content in the web view, which determines the direction that the pages flow.
