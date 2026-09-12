> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspasteboard/detectedvalues](https://developer.apple.com/documentation/appkit/nspasteboard/detectedvalues)

# NSPasteboard.DetectedValues

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS 15.4+

A type that contains common types of data that the data detection system matches for a pasteboard.

## Declaration

```swift
struct DetectedValues
```

## Topics

### Email and web values

- [emailAddresses](detectedvalues/emailaddresses.md): An array of email addresses that the data detection system identifies.
- [links](detectedvalues/links.md): An array of web links that the data detection system identifies.
- [probableWebSearch](detectedvalues/probablewebsearch.md): A string that the data detection system identifies as a probable web search item, suitable for implementing “Paste and Search”.
- [probableWebURL](detectedvalues/probableweburl.md): A string that the data detection system identifies as a probable web URL, suitable for implementing “Paste and Go”.

### Contact values

- [phoneNumbers](detectedvalues/phonenumbers.md): An array of phone numbers that the data detection system identifies.
- [postalAddresses](detectedvalues/postaladdresses.md): An array of postal addresses that the data detection system identifies.

### Calendar values

- [calendarEvents](detectedvalues/calendarevents.md): An array of calendar events that the data detection system identifies.

### Numeric values

- [moneyAmounts](detectedvalues/moneyamounts.md): An array of money amounts and currencies that the data detection system identifies.
- [number](detectedvalues/number.md): A number that the data detection system identifies.

### Transportation-related values

- [flightNumbers](detectedvalues/flightnumbers.md): An array of flight numbers that the data detection system identifies.
- [shipmentTrackingNumbers](detectedvalues/shipmenttrackingnumbers.md): An array of parcel tracking numbers and carriers that the data detection system identifies.

### Patterns

- [patterns](detectedvalues/patterns.md): A set of key paths that represent patterns that the data detection system identifies.

## See Also

### Detecting patterns and metadata in pasteboard items

- [detectedPatterns(for:)](detectedpatterns%28for_%29.md): Determines whether the first pasteboard item matches the specified patterns, without notifying the person using the app.
- [detectedValues(for:)](detectedvalues%28for_%29.md): Determines whether the first pasteboard item matches the specified patterns, reading the contents if it finds a match.
- [Pasteboard detection patterns](../nspasteboard-detection-patterns.md): Common types of data that the data detection system matches for a pasteboard.
- [detectedMetadata(for:)](detectedmetadata%28for_%29.md): Determines available metadata from the specified metadata types for the first pasteboard item, without notifying the person using the app.
- [NSPasteboard.DetectedMetadata](detectedmetadata.md): An object that contains common types of metadata that the data detection system matches for a pasteboard.
- [Pasteboard detection metadata types](../nspasteboard-detection-metadata-types.md): Common types of metadata that the data detection system matches for a pasteboard.
