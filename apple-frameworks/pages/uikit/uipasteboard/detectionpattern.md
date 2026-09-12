> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipasteboard/detectionpattern](https://developer.apple.com/documentation/uikit/uipasteboard/detectionpattern)

# UIPasteboard.DetectionPattern (Swift)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

An object that represents a pattern to detect for the pasteboard, such as a URL, text, or a number.

## Declaration

```swift
struct DetectionPattern
```

## Topics

### Detecting common patterns

- [number](detectionpattern/number.md): A pattern that indicates the pasteboard contains a string that consists of a numeric value.
- [probableWebSearch](detectionpattern/probablewebsearch.md): A pattern that indicates the pasteboard contains a string suitable for use as a web search term.
- [probableWebURL](detectionpattern/probableweburl.md): A pattern that indicates the pasteboard contains a string that consists of a URL.

### Creating a detection pattern

- [init(rawValue:)](detectionpattern/init%28rawvalue_%29.md): Creates a detection pattern to detect different types of content on the pasteboard.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

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
- [UIPasteboard.DetectedValues](detectedvalues.md): An object that contains common types of data that the data detection system matches for a pasteboard.

# UIPasteboardDetectionPattern (Objective-C)

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

An object that represents a pattern to detect for the pasteboard, such as a URL, text, or a number.

## Declaration

```objectivec
typedef NSString * UIPasteboardDetectionPattern;
```

## Topics

### Detecting common patterns

- [UIPasteboardDetectionPatternCalendarEvent](../uipasteboarddetectionpatterncalendarevent.md): A pattern that indicates the pasteboard detects a string that contains a calendar event.
- [UIPasteboardDetectionPatternEmailAddress](../uipasteboarddetectionpatternemailaddress.md): A pattern that indicates the pasteboard detects a string that contains an email address.
- [UIPasteboardDetectionPatternFlightNumber](../uipasteboarddetectionpatternflightnumber.md): A pattern that indicates the pasteboard detects a string that contains a flight number.
- [UIPasteboardDetectionPatternLink](../uipasteboarddetectionpatternlink.md): A pattern that indicates the pasteboard detects of a string that contains a URL.
- [UIPasteboardDetectionPatternMoneyAmount](../uipasteboarddetectionpatternmoneyamount.md): A pattern that indicates the pasteboard detects a string that contains an amount of money.
- [UIPasteboardDetectionPatternNumber](detectionpattern/number.md): A pattern that indicates the pasteboard contains a string that consists of a numeric value.
- [UIPasteboardDetectionPatternPhoneNumber](../uipasteboarddetectionpatternphonenumber.md): A pattern that indicates the pasteboard detects a string that contains a phone number.
- [UIPasteboardDetectionPatternPostalAddress](../uipasteboarddetectionpatternpostaladdress.md): A pattern that indicates the pasteboard detects a string that contains a postal address.
- [UIPasteboardDetectionPatternProbableWebSearch](detectionpattern/probablewebsearch.md): A pattern that indicates the pasteboard contains a string suitable for use as a web search term.
- [UIPasteboardDetectionPatternProbableWebURL](detectionpattern/probableweburl.md): A pattern that indicates the pasteboard contains a string that consists of a URL.
- [UIPasteboardDetectionPatternShipmentTrackingNumber](../uipasteboarddetectionpatternshipmenttrackingnumber.md): A pattern that indicates the pasteboard detects a string that contains a parcel tracking number and carrier.

## See Also

### Detecting patterns of content in pasteboard items

- [detectPatternsForPatterns:completionHandler:](detectpatternsforpatterns_completionhandler_.md): Determines whether the first pasteboard item matches the specified patterns, without notifying the user.
- [detectPatternsForPatterns:inItemSet:completionHandler:](detectpatternsforpatterns_initemset_completionhandler_.md): Determines whether pasteboard items match the specified patterns, without notifying the user.
- [detectValuesForPatterns:completionHandler:](detectvaluesforpatterns_completionhandler_.md): Determines whether the first pasteboard item matches the specified patterns, reading the contents if it finds a match.
- [detectValuesForPatterns:inItemSet:completionHandler:](detectvaluesforpatterns_initemset_completionhandler_.md): Determines whether pasteboard items match the specified patterns, reading the contents if it finds a match.
