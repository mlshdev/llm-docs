> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspasteboard-detection-patterns](https://developer.apple.com/documentation/appkit/nspasteboard-detection-patterns)

# Pasteboard detection patterns (Swift)

**Framework:** AppKit  
**Kind:** API Collection

Common types of data that the data detection system matches for a pasteboard.

## Topics

### Email and web values

- [emailAddresses](nspasteboard/detectedvalues/emailaddresses.md): An array of email addresses that the data detection system identifies.
- [links](nspasteboard/detectedvalues/links.md): An array of web links that the data detection system identifies.
- [probableWebSearch](nspasteboard/detectedvalues/probablewebsearch.md): A string that the data detection system identifies as a probable web search item, suitable for implementing “Paste and Search”.
- [probableWebURL](nspasteboard/detectedvalues/probableweburl.md): A string that the data detection system identifies as a probable web URL, suitable for implementing “Paste and Go”.

### Contact values

- [phoneNumbers](nspasteboard/detectedvalues/phonenumbers.md): An array of phone numbers that the data detection system identifies.
- [postalAddresses](nspasteboard/detectedvalues/postaladdresses.md): An array of postal addresses that the data detection system identifies.

### Calendar values

- [calendarEvents](nspasteboard/detectedvalues/calendarevents.md): An array of calendar events that the data detection system identifies.

### Numeric values

- [moneyAmounts](nspasteboard/detectedvalues/moneyamounts.md): An array of money amounts and currencies that the data detection system identifies.
- [number](nspasteboard/detectedvalues/number.md): A number that the data detection system identifies.

### Transportation-related values

- [flightNumbers](nspasteboard/detectedvalues/flightnumbers.md): An array of flight numbers that the data detection system identifies.
- [shipmentTrackingNumbers](nspasteboard/detectedvalues/shipmenttrackingnumbers.md): An array of parcel tracking numbers and carriers that the data detection system identifies.

### Patterns

- [patterns](nspasteboard/detectedvalues/patterns.md): A set of key paths that represent patterns that the data detection system identifies.

### Pattern type

- [NSPasteboard.DetectedValues](nspasteboard/detectedvalues.md): A type that contains common types of data that the data detection system matches for a pasteboard.

## See Also

### Detecting patterns and metadata in pasteboard items

- [detectedPatterns(for:)](nspasteboard/detectedpatterns%28for_%29.md): Determines whether the first pasteboard item matches the specified patterns, without notifying the person using the app.
- [detectedValues(for:)](nspasteboard/detectedvalues%28for_%29.md): Determines whether the first pasteboard item matches the specified patterns, reading the contents if it finds a match.
- [NSPasteboard.DetectedValues](nspasteboard/detectedvalues.md): A type that contains common types of data that the data detection system matches for a pasteboard.
- [detectedMetadata(for:)](nspasteboard/detectedmetadata%28for_%29.md): Determines available metadata from the specified metadata types for the first pasteboard item, without notifying the person using the app.
- [NSPasteboard.DetectedMetadata](nspasteboard/detectedmetadata.md): An object that contains common types of metadata that the data detection system matches for a pasteboard.
- [Pasteboard detection metadata types](nspasteboard-detection-metadata-types.md): Common types of metadata that the data detection system matches for a pasteboard.

# Pasteboard detection patterns (Objective-C)

**Framework:** AppKit  
**Kind:** API Collection

Common types of data that the data detection system matches for a pasteboard.

## Topics

### Email and web values

- [NSPasteboardDetectionPatternEmailAddress](nspasteboarddetectionpatternemailaddress.md): A pattern that indicates the pasteboard detects a string that contains an email address.
- [NSPasteboardDetectionPatternLink](nspasteboarddetectionpatternlink.md): A pattern that indicates the pasteboard detects a string that contains a URL.
- [NSPasteboardDetectionPatternProbableWebSearch](nspasteboarddetectionpatternprobablewebsearch.md): A pattern that indicates the pasteboard detects a string suitable for use as a web search term.
- [NSPasteboardDetectionPatternProbableWebURL](nspasteboarddetectionpatternprobableweburl.md): A pattern that indicates the pasteboard detects a string that consists of a web URL.

### Contact values

- [NSPasteboardDetectionPatternPhoneNumber](nspasteboarddetectionpatternphonenumber.md): A pattern that indicates the pasteboard detects a string that contains a phone number.
- [NSPasteboardDetectionPatternPostalAddress](nspasteboarddetectionpatternpostaladdress.md): A pattern that indicates the pasteboard detects a string that contains a postal address.

### Calendar values

- [NSPasteboardDetectionPatternCalendarEvent](nspasteboarddetectionpatterncalendarevent.md): A pattern that indicates the pasteboard detects a string that contains a calendar event.

### Numeric values

- [NSPasteboardDetectionPatternMoneyAmount](nspasteboarddetectionpatternmoneyamount.md): A pattern that indicates the pasteboard detects a string that contains an amount of money.
- [NSPasteboardDetectionPatternNumber](nspasteboarddetectionpatternnumber.md): A pattern that indicates the pasteboard detects a string that consists of a numeric value.

### Transportation-related values

- [NSPasteboardDetectionPatternFlightNumber](nspasteboarddetectionpatternflightnumber.md): A pattern that indicates the pasteboard detects a string that contains a flight number.
- [NSPasteboardDetectionPatternShipmentTrackingNumber](nspasteboarddetectionpatternshipmenttrackingnumber.md): A pattern that indicates the pasteboard detects a string that contains a parcel tracking number and carrier.

### Pattern type

- [NSPasteboardDetectionPattern](nspasteboarddetectionpattern.md): A pattern to detect on the pasteboard, such as a URL, text, or a number.

## See Also

### Detecting patterns and metadata in pasteboard items

- [detectPatternsForPatterns:completionHandler:](nspasteboard/detectpatternsforpatterns_completionhandler_.md): Determines whether the first pasteboard item matches the specified patterns, without notifying the person using the app.
- [detectValuesForPatterns:completionHandler:](nspasteboard/detectvaluesforpatterns_completionhandler_.md): Determines whether the first pasteboard item matches the specified patterns, reading the contents if it finds a match.
- [detectMetadataForTypes:completionHandler:](nspasteboard/detectmetadatafortypes_completionhandler_.md): Determines available metadata from the specified metadata types for the first pasteboard item, without notifying the person using the app.
- [Pasteboard detection metadata types](nspasteboard-detection-metadata-types.md): Common types of metadata that the data detection system matches for a pasteboard.
