> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipasteboarddetectionpatternlink](https://developer.apple.com/documentation/uikit/uipasteboarddetectionpatternlink)

# UIPasteboardDetectionPatternLink

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

A pattern that indicates the pasteboard detects of a string that contains a URL.

## Declaration

```objectivec
extern UIPasteboardDetectionPattern const UIPasteboardDetectionPatternLink;
```

<a id="Discussion"></a>

## Discussion

When you include this pattern in calls to [detectValuesForPatterns:inItemSet:completionHandler:](uipasteboard/detectvaluesforpatterns_initemset_completionhandler_.md) or [detectValuesForPatterns:completionHandler:](uipasteboard/detectvaluesforpatterns_completionhandler_.md) and the pasteboard detects a string that contains a website link, the system reports the value as an [NSURL](../foundation/nsurl.md). You can return the detected results in a paste operation with `UIPasteboardDetectionResultLink`, which contains a semantic representation of the website link values.

## See Also

### Detecting common patterns

- [UIPasteboardDetectionPatternCalendarEvent](uipasteboarddetectionpatterncalendarevent.md): A pattern that indicates the pasteboard detects a string that contains a calendar event.
- [UIPasteboardDetectionPatternEmailAddress](uipasteboarddetectionpatternemailaddress.md): A pattern that indicates the pasteboard detects a string that contains an email address.
- [UIPasteboardDetectionPatternFlightNumber](uipasteboarddetectionpatternflightnumber.md): A pattern that indicates the pasteboard detects a string that contains a flight number.
- [UIPasteboardDetectionPatternMoneyAmount](uipasteboarddetectionpatternmoneyamount.md): A pattern that indicates the pasteboard detects a string that contains an amount of money.
- [UIPasteboardDetectionPatternNumber](uipasteboard/detectionpattern/number.md): A pattern that indicates the pasteboard contains a string that consists of a numeric value.
- [UIPasteboardDetectionPatternPhoneNumber](uipasteboarddetectionpatternphonenumber.md): A pattern that indicates the pasteboard detects a string that contains a phone number.
- [UIPasteboardDetectionPatternPostalAddress](uipasteboarddetectionpatternpostaladdress.md): A pattern that indicates the pasteboard detects a string that contains a postal address.
- [UIPasteboardDetectionPatternProbableWebSearch](uipasteboard/detectionpattern/probablewebsearch.md): A pattern that indicates the pasteboard contains a string suitable for use as a web search term.
- [UIPasteboardDetectionPatternProbableWebURL](uipasteboard/detectionpattern/probableweburl.md): A pattern that indicates the pasteboard contains a string that consists of a URL.
- [UIPasteboardDetectionPatternShipmentTrackingNumber](uipasteboarddetectionpatternshipmenttrackingnumber.md): A pattern that indicates the pasteboard detects a string that contains a parcel tracking number and carrier.
