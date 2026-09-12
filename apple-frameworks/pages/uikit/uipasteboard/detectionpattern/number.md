> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipasteboard/detectionpattern/number](https://developer.apple.com/documentation/uikit/uipasteboard/detectionpattern/number)

# number (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

A pattern that indicates the pasteboard contains a string that consists of a numeric value.

## Declaration

```swift
static let number: UIPasteboard.DetectionPattern
```

<a id="Discussion"></a>

## Discussion

When you include this pattern in calls to [detectValues(for:inItemSet:completionHandler:)](../detectvalues%28for_initemset_completionhandler_%29-pm9l.md) or [detectValues(for:completionHandler:)](../detectvalues%28for_completionhandler_%29-6adre.md) — [detectValuesForPatterns:inItemSet:completionHandler:](../detectvaluesforpatterns_initemset_completionhandler_.md) or [detectValuesForPatterns:completionHandler:](../detectvaluesforpatterns_completionhandler_.md) in Objective-C — and the pasteboard detects a number, it reports the value as an [NSNumber](../../../foundation/nsnumber.md).

## See Also

### Detecting common patterns

- [probableWebSearch](probablewebsearch.md): A pattern that indicates the pasteboard contains a string suitable for use as a web search term.
- [probableWebURL](probableweburl.md): A pattern that indicates the pasteboard contains a string that consists of a URL.

# UIPasteboardDetectionPatternNumber (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

A pattern that indicates the pasteboard contains a string that consists of a numeric value.

## Declaration

```objectivec
extern UIPasteboardDetectionPattern const UIPasteboardDetectionPatternNumber;
```

<a id="Discussion"></a>

## Discussion

When you include this pattern in calls to [detectValues(for:inItemSet:completionHandler:)](../detectvalues%28for_initemset_completionhandler_%29-pm9l.md) or [detectValues(for:completionHandler:)](../detectvalues%28for_completionhandler_%29-6adre.md) — [detectValuesForPatterns:inItemSet:completionHandler:](../detectvaluesforpatterns_initemset_completionhandler_.md) or [detectValuesForPatterns:completionHandler:](../detectvaluesforpatterns_completionhandler_.md) in Objective-C — and the pasteboard detects a number, it reports the value as an [NSNumber](../../../foundation/nsnumber.md).

## See Also

### Detecting common patterns

- [UIPasteboardDetectionPatternCalendarEvent](../../uipasteboarddetectionpatterncalendarevent.md): A pattern that indicates the pasteboard detects a string that contains a calendar event.
- [UIPasteboardDetectionPatternEmailAddress](../../uipasteboarddetectionpatternemailaddress.md): A pattern that indicates the pasteboard detects a string that contains an email address.
- [UIPasteboardDetectionPatternFlightNumber](../../uipasteboarddetectionpatternflightnumber.md): A pattern that indicates the pasteboard detects a string that contains a flight number.
- [UIPasteboardDetectionPatternLink](../../uipasteboarddetectionpatternlink.md): A pattern that indicates the pasteboard detects of a string that contains a URL.
- [UIPasteboardDetectionPatternMoneyAmount](../../uipasteboarddetectionpatternmoneyamount.md): A pattern that indicates the pasteboard detects a string that contains an amount of money.
- [UIPasteboardDetectionPatternPhoneNumber](../../uipasteboarddetectionpatternphonenumber.md): A pattern that indicates the pasteboard detects a string that contains a phone number.
- [UIPasteboardDetectionPatternPostalAddress](../../uipasteboarddetectionpatternpostaladdress.md): A pattern that indicates the pasteboard detects a string that contains a postal address.
- [UIPasteboardDetectionPatternProbableWebSearch](probablewebsearch.md): A pattern that indicates the pasteboard contains a string suitable for use as a web search term.
- [UIPasteboardDetectionPatternProbableWebURL](probableweburl.md): A pattern that indicates the pasteboard contains a string that consists of a URL.
- [UIPasteboardDetectionPatternShipmentTrackingNumber](../../uipasteboarddetectionpatternshipmenttrackingnumber.md): A pattern that indicates the pasteboard detects a string that contains a parcel tracking number and carrier.
