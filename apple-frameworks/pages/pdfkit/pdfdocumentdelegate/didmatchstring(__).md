> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfdocumentdelegate/didmatchstring(_:)](https://developer.apple.com/documentation/pdfkit/pdfdocumentdelegate/didmatchstring(_:))

# didMatchString(\_:) (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Called for every match found during a find operation.

## Declaration

```swift
optional func didMatchString(_ instance: PDFSelection)
```

## See Also

### Getting Document Search Notifications

- [documentDidBeginDocumentFind(\_:)](documentdidbegindocumentfind%28__%29.md): Called when the `PDFDocumentDidBeginFindNotification` notification is posted.
- [documentDidBeginPageFind(\_:)](documentdidbeginpagefind%28__%29.md): Called when the `PDFDocumentDidBeginPageFindNotification` notification is posted.
- [documentDidEndDocumentFind(\_:)](documentdidenddocumentfind%28__%29.md): Called when the `PDFDocumentDidEndFindNotification` notification is posted.
- [documentDidEndPageFind(\_:)](documentdidendpagefind%28__%29.md): Called when the `PDFDocumentDidEndPageFindNotification` notification is posted.
- [documentDidFindMatch(\_:)](documentdidfindmatch%28__%29.md): Called when the `PDFDocumentDidFindMatchNotification` notification is posted.

# didMatchString: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.4+ · tvOS · visionOS 1.0+

Called for every match found during a find operation.

## Declaration

```objectivec
- (void) didMatchString:(PDFSelection *) instance;
```

## See Also

### Getting Document Search Notifications

- [documentDidBeginDocumentFind:](documentdidbegindocumentfind%28__%29.md): Called when the `PDFDocumentDidBeginFindNotification` notification is posted.
- [documentDidBeginPageFind:](documentdidbeginpagefind%28__%29.md): Called when the `PDFDocumentDidBeginPageFindNotification` notification is posted.
- [documentDidEndDocumentFind:](documentdidenddocumentfind%28__%29.md): Called when the `PDFDocumentDidEndFindNotification` notification is posted.
- [documentDidEndPageFind:](documentdidendpagefind%28__%29.md): Called when the `PDFDocumentDidEndPageFindNotification` notification is posted.
- [documentDidFindMatch:](documentdidfindmatch%28__%29.md): Called when the `PDFDocumentDidFindMatchNotification` notification is posted.
