> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkdatadetectortypes](https://developer.apple.com/documentation/webkit/wkdatadetectortypes)

# WKDataDetectorTypes (Swift)

**Framework:** WebKit  
**Kind:** Structure  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The data detector types.

## Declaration

```swift
struct WKDataDetectorTypes
```

<a id="overview"></a>

## Overview

To perform no data detection, create an empty set of data detector types, indicated by the empty array literal, `[]`. For example:

```swift
let myDataDetector: WKDataDetectorTypes = []
```

## Topics

### Data Detector Types

- [phoneNumber](wkdatadetectortypes/phonenumber.md): Detect phone numbers in text and create a link to call the specified number.
- [link](wkdatadetectortypes/link.md): Detect URLs in text and turn them into links.
- [address](wkdatadetectortypes/address.md): Detect addresses in text and turn them into links to display the location.
- [calendarEvent](wkdatadetectortypes/calendarevent.md): Turn future dates and times into links to create calendar events.
- [trackingNumber](wkdatadetectortypes/trackingnumber.md): Detect tracking numbers in text and turn them into links.
- [flightNumber](wkdatadetectortypes/flightnumber.md): Detect flight numbers in text and turn them into links.
- [lookupSuggestion](wkdatadetectortypes/lookupsuggestion.md): Detect Spotlight suggestions and turn them into links.
- [all](wkdatadetectortypes/all.md): Detect all data types and turn them into links.

### Initializers

- [init(rawValue:)](wkdatadetectortypes/init%28rawvalue_%29.md)

### Deprecated Types

- [spotlightSuggestion](wkdatadetectortypes/spotlightsuggestion.md): Deprecated. Spotlight suggestions are detected and turned into links.

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

### Identifying data types

- [dataDetectorTypes](wkwebviewconfiguration/datadetectortypes.md): The types of data detectors to apply to the web view’s content.

# WKDataDetectorTypes (Objective-C)

**Framework:** WebKit  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The data detector types.

## Declaration

```objectivec
enum WKDataDetectorTypes : NSUInteger;
```

<a id="overview"></a>

## Overview

To perform no data detection, create an empty set of data detector types, indicated by the empty array literal, `[]`. For example:

```swift
let myDataDetector: WKDataDetectorTypes = []
```

## Topics

### Data Detector Types

- [WKDataDetectorTypeNone](wkdatadetectortypes/wkdatadetectortypenone.md): No data detection.
- [WKDataDetectorTypePhoneNumber](wkdatadetectortypes/phonenumber.md): Detect phone numbers in text and create a link to call the specified number.
- [WKDataDetectorTypeLink](wkdatadetectortypes/link.md): Detect URLs in text and turn them into links.
- [WKDataDetectorTypeAddress](wkdatadetectortypes/address.md): Detect addresses in text and turn them into links to display the location.
- [WKDataDetectorTypeCalendarEvent](wkdatadetectortypes/calendarevent.md): Turn future dates and times into links to create calendar events.
- [WKDataDetectorTypeTrackingNumber](wkdatadetectortypes/trackingnumber.md): Detect tracking numbers in text and turn them into links.
- [WKDataDetectorTypeFlightNumber](wkdatadetectortypes/flightnumber.md): Detect flight numbers in text and turn them into links.
- [WKDataDetectorTypeLookupSuggestion](wkdatadetectortypes/lookupsuggestion.md): Detect Spotlight suggestions and turn them into links.
- [WKDataDetectorTypeAll](wkdatadetectortypes/all.md): Detect all data types and turn them into links.

### Deprecated Types

- [WKDataDetectorTypeSpotlightSuggestion](wkdatadetectortypes/spotlightsuggestion.md): Deprecated. Spotlight suggestions are detected and turned into links.

## See Also

### Identifying data types

- [dataDetectorTypes](wkwebviewconfiguration/datadetectortypes.md): The types of data detectors to apply to the web view’s content.
