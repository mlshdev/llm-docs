> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspasteboarddetectionpatternprobableweburl](https://developer.apple.com/documentation/appkit/nspasteboarddetectionpatternprobableweburl)

# NSPasteboardDetectionPatternProbableWebURL

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 15.4+

A pattern that indicates the pasteboard detects a string that consists of a web URL.

## Declaration

```objectivec
extern NSPasteboardDetectionPattern const NSPasteboardDetectionPatternProbableWebURL;
```

<a id="return-value"></a>

## Return Value

NSString value, suitable for implementing “Paste and Go”

## See Also

### Email and web values

- [NSPasteboardDetectionPatternEmailAddress](nspasteboarddetectionpatternemailaddress.md): A pattern that indicates the pasteboard detects a string that contains an email address.
- [NSPasteboardDetectionPatternLink](nspasteboarddetectionpatternlink.md): A pattern that indicates the pasteboard detects a string that contains a URL.
- [NSPasteboardDetectionPatternProbableWebSearch](nspasteboarddetectionpatternprobablewebsearch.md): A pattern that indicates the pasteboard detects a string suitable for use as a web search term.
