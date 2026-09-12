> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfdocumentdidbeginwritenotification](https://developer.apple.com/documentation/pdfkit/pdfdocumentdidbeginwritenotification)

# PDFDocumentDidBeginWriteNotification

**Interface language:** Objective-C

**Framework:** PDFKit  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

A notification that a write operation begins working on a document.

## Declaration

```objectivec
extern NSNotificationName const PDFDocumentDidBeginWriteNotification;
```

<a id="Discussion"></a>

## Discussion

The notification object is the `PDFDocument` object itself.

## See Also

### Notifications

- [PDFDocumentDidUnlockNotification](pdfdocumentdidunlocknotification.md): A notification that a document unlocks after a [unlockWithPassword:](pdfdocument/unlock%28withpassword_%29.md) message.
- [PDFDocumentDidBeginFindNotification](pdfdocumentdidbeginfindnotification.md): A notification that the [beginFindString:withOptions:](pdfdocument/beginfindstring%28__withoptions_%29.md) or [findString:withOptions:](pdfdocument/findstring%28__withoptions_%29.md) method begins finding.
- [PDFDocumentDidEndFindNotification](pdfdocumentdidendfindnotification.md): A notification that the [beginFindString:withOptions:](pdfdocument/beginfindstring%28__withoptions_%29.md) or [findString:withOptions:](pdfdocument/findstring%28__withoptions_%29.md) method returns.
- [PDFDocumentDidBeginPageFindNotification](pdfdocumentdidbeginpagefindnotification.md): A notification that a find operation begins working on a new page of a document.
- [PDFDocumentDidEndPageFindNotification](pdfdocumentdidendpagefindnotification.md): A notification that a find operation finishes working on a page in a document.
- [PDFDocumentDidFindMatchNotification](pdfdocumentdidfindmatchnotification.md): A notification that a string match is found in a document.
- [PDFDocumentDidEndWriteNotification](pdfdocumentdidendwritenotification.md): A notification that a write operation finishes working on a document.
- [PDFDocumentDidBeginPageWriteNotification](pdfdocumentdidbeginpagewritenotification.md): A notification that a write operation begins working on a page in a document.
- [PDFDocumentDidEndPageWriteNotification](pdfdocumentdidendpagewritenotification.md): A notification that a write operation finishes working on a page in a document.
