> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/datadetection](https://developer.apple.com/documentation/datadetection)

# DataDetection (Swift)

**Framework:** DataDetection  
**Kind:** Framework  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Access and utilize common types of data that the data detection system matches.

<a id="overview"></a>

## Overview

Data detection methods in other frameworks detect common types of data represented in text, and return  DataDetection framework classes that provide semantic meaning for matches. Get relevant, domain-specific information from matches of the following types:

- Calendar events
- Email addresses
- Flight numbers
- Web links
- Amounts of money, with currencies
- Phone numbers
- Postal addresses
- Shipment tracking numbers

Use functions, such as those in [UIPasteboard](uikit/uipasteboard.md), to detect the types of data that you specify in a particular context. For example, find email addresses in a pasteboard using [detectValues(for:completionHandler:)](uikit/uipasteboard/detectvalues%28for_completionhandler_%29-6adre.md) as this example shows:

```swift
UIPasteboard.general.detectValues(for: [\.emailAddresses]) { [self] result in
    switch result {
    case .success(let detectedValues):
        guard let firstEmailAddressMatch = detectedValues.emailAddresses.first else {
            return
        }
        let newEmailAddress = firstEmailAddressMatch.emailAddress
        let newLabel = firstEmailAddressMatch.label
        addNewEmail(for: contact, address: newEmailAddress, label: newLabel)
    case .failure(let error):
        print("Error detecting email addresses: \(error.localizedDescription)")
    }
}
```

Then, inspect and use the data from objects that the data detection system returns.

## Topics

### Matched strings

- [DDMatch](datadetection/ddmatch.md): A base class for common types of data that the data detection system matches.
- [DataDetector](datadetection/datadetector.md): An extension to the string protocol that scans strings for semantic entities, such as email addresses, phone numbers, URLs, and flight information.

### Matched data types

- [DDMatchCalendarEvent](datadetection/ddmatchcalendarevent.md): An object that represents a calendar date or date range that the data detection system matches.
- [DDMatchEmailAddress](datadetection/ddmatchemailaddress.md): An object that contains an email address that the data detection system matches.
- [DDMatchFlightNumber](datadetection/ddmatchflightnumber.md): An object that contains a flight number that the data detection system matches.
- [DDMatchLink](datadetection/ddmatchlink.md): An object that contains a web link that the data detection system matches.
- [DDMatchMoneyAmount](datadetection/ddmatchmoneyamount.md): An object that contains an amount of money that the data detection system matches.
- [DDMatchPhoneNumber](datadetection/ddmatchphonenumber.md): An object that contains a phone number that the data detection system matches.
- [DDMatchPostalAddress](datadetection/ddmatchpostaladdress.md): An object that contains a postal address that the data detection system matches.
- [DDMatchShipmentTrackingNumber](datadetection/ddmatchshipmenttrackingnumber.md): An object that contains parcel tracking information that the data detection system matches.

### Pasteboard detectors

- [detectPatterns(for:completionHandler:)](uikit/uipasteboard/detectpatterns%28for_completionhandler_%29-23vwn.md): Requests that the data detection system identify the patterns that you specify for the pasteboard, and provide the patterns that it matches to your closure.
- [detectedPatterns(for:)](uikit/uipasteboard/detectedpatterns%28for_%29.md): Requests that the data detection system asynchronously identify the patterns that you specify for the pasteboard, and return the patterns that it matches.
- [detectPatterns(for:inItemSet:completionHandler:)](uikit/uipasteboard/detectpatterns%28for_initemset_completionhandler_%29-7ubl1.md): Requests that the data detection system identify the patterns that you specify for the pasteboard items, and provide the patterns that it matches to your closure.
- [detectedPatterns(for:inItemSet:)](uikit/uipasteboard/detectedpatterns%28for_initemset_%29.md): Requests that the data detection system asynchronously identify the patterns that you specify for the pasteboard items, and return the patterns that it matches.
- [detectValues(for:completionHandler:)](uikit/uipasteboard/detectvalues%28for_completionhandler_%29-6adre.md): Requests that the data detection system identify the types of data that you specify for the pasteboard, and provide the values that it matches to your closure.
- [detectedValues(for:)](uikit/uipasteboard/detectedvalues%28for_%29.md): Requests that the data detection system asynchronously identify the types of values that you specify for the pasteboard, and return the values that it matches.
- [detectValues(for:inItemSet:completionHandler:)](uikit/uipasteboard/detectvalues%28for_initemset_completionhandler_%29-pm9l.md): Requests that the data detection system identify the types of data that you specify for the pasteboard items, and provide the values that it matches to your closure.
- [detectedValues(for:inItemSet:)](uikit/uipasteboard/detectedvalues%28for_initemset_%29.md): Requests that the data detection system asynchronously identify the types of values that you specify for the pasteboard item, and return the values that it matches for each pasteboard.

# DataDetection (Objective-C)

**Framework:** DataDetection  
**Kind:** Framework  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Access and utilize common types of data that the data detection system matches.

<a id="overview"></a>

## Overview

Data detection methods in other frameworks detect common types of data represented in text, and return  DataDetection framework classes that provide semantic meaning for matches. Get relevant, domain-specific information from matches of the following types:

- Calendar events
- Email addresses
- Flight numbers
- Web links
- Amounts of money, with currencies
- Phone numbers
- Postal addresses
- Shipment tracking numbers

Use functions, such as those in [UIPasteboard](uikit/uipasteboard.md), to detect the types of data that you specify in a particular context. For example, find email addresses in a pasteboard using [detectValues(for:completionHandler:)](uikit/uipasteboard/detectvalues%28for_completionhandler_%29-6adre.md) as this example shows:

```swift
UIPasteboard.general.detectValues(for: [\.emailAddresses]) { [self] result in
    switch result {
    case .success(let detectedValues):
        guard let firstEmailAddressMatch = detectedValues.emailAddresses.first else {
            return
        }
        let newEmailAddress = firstEmailAddressMatch.emailAddress
        let newLabel = firstEmailAddressMatch.label
        addNewEmail(for: contact, address: newEmailAddress, label: newLabel)
    case .failure(let error):
        print("Error detecting email addresses: \(error.localizedDescription)")
    }
}
```

Then, inspect and use the data from objects that the data detection system returns.

## Topics

### Matched strings

- [DDMatch](datadetection/ddmatch.md): A base class for common types of data that the data detection system matches.

### Matched data types

- [DDMatchCalendarEvent](datadetection/ddmatchcalendarevent.md): An object that represents a calendar date or date range that the data detection system matches.
- [DDMatchEmailAddress](datadetection/ddmatchemailaddress.md): An object that contains an email address that the data detection system matches.
- [DDMatchFlightNumber](datadetection/ddmatchflightnumber.md): An object that contains a flight number that the data detection system matches.
- [DDMatchLink](datadetection/ddmatchlink.md): An object that contains a web link that the data detection system matches.
- [DDMatchMoneyAmount](datadetection/ddmatchmoneyamount.md): An object that contains an amount of money that the data detection system matches.
- [DDMatchPhoneNumber](datadetection/ddmatchphonenumber.md): An object that contains a phone number that the data detection system matches.
- [DDMatchPostalAddress](datadetection/ddmatchpostaladdress.md): An object that contains a postal address that the data detection system matches.
- [DDMatchShipmentTrackingNumber](datadetection/ddmatchshipmenttrackingnumber.md): An object that contains parcel tracking information that the data detection system matches.
