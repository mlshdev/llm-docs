> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipasteboard/detectedvalues](https://developer.apple.com/documentation/uikit/uipasteboard/detectedvalues)

# UIPasteboard.DetectedValues

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS

An object that contains common types of data that the data detection system matches for a pasteboard.

## Declaration

```swift
struct DetectedValues
```

## Topics

### Detected patterns

- [patterns](detectedvalues/patterns.md): A set of key paths that represent patterns that the data detection system identifies.
- [probableWebSearch](detectedvalues/probablewebsearch.md): A string that the data detection system identifies as a probable web search item.
- [probableWebURL](detectedvalues/probableweburl.md): A string that the data detection system identifies as a probable web URL.

### Detected values

- [calendarEvents](detectedvalues/calendarevents.md): An array of calendar events that the data detection system identifies.
- [emailAddresses](detectedvalues/emailaddresses.md): An array of email addresses that the data detection system identifies.
- [flightNumbers](detectedvalues/flightnumbers.md): An array of flight numbers that the system data detection system identifies.
- [links](detectedvalues/links.md): An array of web links that the data detection system identifies.
- [moneyAmounts](detectedvalues/moneyamounts.md): An array of money amounts and currencies that the data detection system identifies.
- [number](detectedvalues/number.md): A number that the data detection system identifies.
- [phoneNumbers](detectedvalues/phonenumbers.md): An array of phone numbers that the data detection system identifies.
- [postalAddresses](detectedvalues/postaladdresses.md): An array of postal addresses that the data detection system identifies.
- [shipmentTrackingNumbers](detectedvalues/shipmenttrackingnumbers.md): An array of parcel tracking numbers that the data detection system identifies.

## See Also

### Detecting patterns of content in pasteboard items

- [detectPatterns(for:completionHandler:)](detectpatterns%28for_completionhandler_%29-23vwn.md): Requests that the data detection system identify the patterns that you specify for the pasteboard, and provide the patterns that it matches to your closure.
- [detectedPatterns(for:)](detectedpatterns%28for_%29.md): Requests that the data detection system asynchronously identify the patterns that you specify for the pasteboard, and return the patterns that it matches.
- [detectPatterns(for:inItemSet:completionHandler:)](detectpatterns%28for_initemset_completionhandler_%29-7ubl1.md): Requests that the data detection system identify the patterns that you specify for the pasteboard items, and provide the patterns that it matches to your closure.
- [detectedPatterns(for:inItemSet:)](detectedpatterns%28for_initemset_%29.md): Requests that the data detection system asynchronously identify the patterns that you specify for the pasteboard items, and return the patterns that it matches.
- [detectValues(for:completionHandler:)](detectvalues%28for_completionhandler_%29-6adre.md): Requests that the data detection system identify the types of data that you specify for the pasteboard, and provide the values that it matches to your closure.
- [detectedValues(for:)](detectedvalues%28for_%29.md): Requests that the data detection system asynchronously identify the types of values that you specify for the pasteboard, and return the values that it matches.
- [detectValues(for:inItemSet:completionHandler:)](detectvalues%28for_initemset_completionhandler_%29-pm9l.md): Requests that the data detection system identify the types of data that you specify for the pasteboard items, and provide the values that it matches to your closure.
- [detectedValues(for:inItemSet:)](detectedvalues%28for_initemset_%29.md): Requests that the data detection system asynchronously identify the types of values that you specify for the pasteboard item, and return the values that it matches for each pasteboard.
- [UIPasteboard.DetectionPattern](detectionpattern.md): An object that represents a pattern to detect for the pasteboard, such as a URL, text, or a number.
