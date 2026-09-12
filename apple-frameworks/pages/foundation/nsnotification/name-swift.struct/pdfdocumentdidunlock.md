> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsnotification/name-swift.struct/pdfdocumentdidunlock](https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/pdfdocumentdidunlock)

# PDFDocumentDidUnlock

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

A notification that a document unlocked.

## Declaration

```swift
static let PDFDocumentDidUnlock: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The document posts this notification after receiving a [unlock(withPassword:)](../../../pdfkit/pdfdocument/unlock%28withpassword_%29.md) message.

The notification object is the `PDFDocument` object itself.

## See Also

### PDFKit

- [PDFDocumentDidBeginFind](pdfdocumentdidbeginfind.md): A notification that the document began a find operation.
- [PDFDocumentDidBeginPageFind](pdfdocumentdidbeginpagefind.md): A notification that a find operation begins working on a new page of a document.
- [PDFDocumentDidBeginPageWrite](pdfdocumentdidbeginpagewrite.md): A notification that a write operation begins working on a page in a document.
- [PDFDocumentDidBeginWrite](pdfdocumentdidbeginwrite.md): A notification that a write operation begins working on a document.
- [PDFDocumentDidEndFind](pdfdocumentdidendfind.md): A notification that the document finished a find operation.
- [PDFDocumentDidEndPageFind](pdfdocumentdidendpagefind.md): A notification that a find operation finishes working on a page in a document.
- [PDFDocumentDidEndPageWrite](pdfdocumentdidendpagewrite.md): A notification that a write operation finishes working on a page in a document.
- [PDFDocumentDidEndWrite](pdfdocumentdidendwrite.md): A notification that a write operation finishes working on a document.
- [PDFDocumentDidFindMatch](pdfdocumentdidfindmatch.md): A notification that a string match is found in a document.
- [PDFThumbnailViewDocumentEdited](pdfthumbnailviewdocumentedited.md)
- [PDFViewAnnotationHit](pdfviewannotationhit.md): A notification posted when the user clicks on an annotation.
- [PDFViewAnnotationWillHit](pdfviewannotationwillhit.md): A notification posted before the user clicks an annotation.
- [PDFViewChangedHistory](pdfviewchangedhistory.md): A notification posted when the page history changes.
- [PDFViewCopyPermission](pdfviewcopypermission.md): A notification posted when the user attempts to copy to the pasteboard without the appropriate permissions.
- [PDFViewDisplayBoxChanged](pdfviewdisplayboxchanged.md): A notification posted when the display box has changed.
