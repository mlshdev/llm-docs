> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsnotification/name-swift.struct/pdfdocumentdidbeginfind](https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/pdfdocumentdidbeginfind)

# PDFDocumentDidBeginFind

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

A notification that the document began a find operation.

## Declaration

```swift
static let PDFDocumentDidBeginFind: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The document posts this notification when the [beginFindString(\_:withOptions:)](../../../pdfkit/pdfdocument/beginfindstring%28__withoptions_%29.md) or [findString(\_:withOptions:)](../../../pdfkit/pdfdocument/findstring%28__withoptions_%29.md) method begins finding.

The notification object is the `PDFDocument` object itself.

## See Also

### PDFKit

- [PDFDocumentDidBeginPageFind](pdfdocumentdidbeginpagefind.md): A notification that a find operation begins working on a new page of a document.
- [PDFDocumentDidBeginPageWrite](pdfdocumentdidbeginpagewrite.md): A notification that a write operation begins working on a page in a document.
- [PDFDocumentDidBeginWrite](pdfdocumentdidbeginwrite.md): A notification that a write operation begins working on a document.
- [PDFDocumentDidEndFind](pdfdocumentdidendfind.md): A notification that the document finished a find operation.
- [PDFDocumentDidEndPageFind](pdfdocumentdidendpagefind.md): A notification that a find operation finishes working on a page in a document.
- [PDFDocumentDidEndPageWrite](pdfdocumentdidendpagewrite.md): A notification that a write operation finishes working on a page in a document.
- [PDFDocumentDidEndWrite](pdfdocumentdidendwrite.md): A notification that a write operation finishes working on a document.
- [PDFDocumentDidFindMatch](pdfdocumentdidfindmatch.md): A notification that a string match is found in a document.
- [PDFDocumentDidUnlock](pdfdocumentdidunlock.md): A notification that a document unlocked.
- [PDFThumbnailViewDocumentEdited](pdfthumbnailviewdocumentedited.md)
- [PDFViewAnnotationHit](pdfviewannotationhit.md): A notification posted when the user clicks on an annotation.
- [PDFViewAnnotationWillHit](pdfviewannotationwillhit.md): A notification posted before the user clicks an annotation.
- [PDFViewChangedHistory](pdfviewchangedhistory.md): A notification posted when the page history changes.
- [PDFViewCopyPermission](pdfviewcopypermission.md): A notification posted when the user attempts to copy to the pasteboard without the appropriate permissions.
- [PDFViewDisplayBoxChanged](pdfviewdisplayboxchanged.md): A notification posted when the display box has changed.
