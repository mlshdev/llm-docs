> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfdocumentdelegate/documentdidbeginpagefind(_:)](https://developer.apple.com/documentation/pdfkit/pdfdocumentdelegate/documentdidbeginpagefind(_:))

# documentDidBeginPageFind(\_:) (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Called when the `PDFDocumentDidBeginPageFindNotification` notification is posted.

## Declaration

```swift
optional func documentDidBeginPageFind(_ notification: Notification)
```

## See Also

### Getting Document Search Notifications

- [didMatchString(\_:)](didmatchstring%28__%29.md): Called for every match found during a find operation.
- [documentDidBeginDocumentFind(\_:)](documentdidbegindocumentfind%28__%29.md): Called when the `PDFDocumentDidBeginFindNotification` notification is posted.
- [documentDidEndDocumentFind(\_:)](documentdidenddocumentfind%28__%29.md): Called when the `PDFDocumentDidEndFindNotification` notification is posted.
- [documentDidEndPageFind(\_:)](documentdidendpagefind%28__%29.md): Called when the `PDFDocumentDidEndPageFindNotification` notification is posted.
- [documentDidFindMatch(\_:)](documentdidfindmatch%28__%29.md): Called when the `PDFDocumentDidFindMatchNotification` notification is posted.

# documentDidBeginPageFind: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.4+ · tvOS · visionOS 1.0+

Called when the `PDFDocumentDidBeginPageFindNotification` notification is posted.

## Declaration

```objectivec
- (void) documentDidBeginPageFind:(NSNotification *) notification;
```

## See Also

### Getting Document Search Notifications

- [didMatchString:](didmatchstring%28__%29.md): Called for every match found during a find operation.
- [documentDidBeginDocumentFind:](documentdidbegindocumentfind%28__%29.md): Called when the `PDFDocumentDidBeginFindNotification` notification is posted.
- [documentDidEndDocumentFind:](documentdidenddocumentfind%28__%29.md): Called when the `PDFDocumentDidEndFindNotification` notification is posted.
- [documentDidEndPageFind:](documentdidendpagefind%28__%29.md): Called when the `PDFDocumentDidEndPageFindNotification` notification is posted.
- [documentDidFindMatch:](documentdidfindmatch%28__%29.md): Called when the `PDFDocumentDidFindMatchNotification` notification is posted.
