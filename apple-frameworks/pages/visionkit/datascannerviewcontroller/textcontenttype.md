> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/datascannerviewcontroller/textcontenttype](https://developer.apple.com/documentation/visionkit/datascannerviewcontroller/textcontenttype)

# DataScannerViewController.TextContentType

**Framework:** VisionKit  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · visionOS 1.0+

Types of text that a data scanner recognizes.

## Declaration

```swift
enum TextContentType
```

## Mentioned In

- [Scanning data with the camera](../scanning-data-with-the-camera.md)

<a id="overview"></a>

## Overview

To configure a [DataScannerViewController](../datascannerviewcontroller.md), pass one or more options into its initializer. For example, the following code creates a data scanner that detects textual references to money.

```swift
let recognizedDataTypes:Set<DataScannerViewController.RecognizedDataType> = [
    .text(textContentType: .currency)
]

// Create the data scanner.
let dataScanner = DataScannerViewController(recognizedDataTypes: recognizedDataTypes)
```

## Topics

### Identifying content types

- [DataScannerViewController.TextContentType.URL](textcontenttype/url.md): The content type for a URL that appears in text.
- [DataScannerViewController.TextContentType.dateTimeDuration](textcontenttype/datetimeduration.md): The content type for dates, times, and durations that appear in text.
- [DataScannerViewController.TextContentType.emailAddress](textcontenttype/emailaddress.md): The content type for an email address that appears in text.
- [DataScannerViewController.TextContentType.flightNumber](textcontenttype/flightnumber.md): The content type for a vendor-specific flight number that appears in text.
- [DataScannerViewController.TextContentType.fullStreetAddress](textcontenttype/fullstreetaddress.md): The content type for a mailing address that appears in text.
- [DataScannerViewController.TextContentType.shipmentTrackingNumber](textcontenttype/shipmenttrackingnumber.md): The content type for a vendor-specific parcel tracking number that appears in text.
- [DataScannerViewController.TextContentType.telephoneNumber](textcontenttype/telephonenumber.md): The content type for a phone number that appears in text.
- [DataScannerViewController.TextContentType.currency](textcontenttype/currency.md): The content type for currency.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Recognizing text

- [text(languages:textContentType:)](recognizeddatatype/text%28languages_textcontenttype_%29.md): Creates a data type for text and information the scanner finds in text.
