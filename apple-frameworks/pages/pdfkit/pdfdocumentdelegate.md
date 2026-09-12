> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfdocumentdelegate](https://developer.apple.com/documentation/pdfkit/pdfdocumentdelegate)

# PDFDocumentDelegate (Swift)

**Framework:** PDFKit  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.4+ · tvOS · visionOS 1.0+

The delegate for the `PDFDocument` object.

## Declaration

```swift
protocol PDFDocumentDelegate : NSObjectProtocol
```

## Mentioned In

- [Adding Custom Graphics to a PDF](adding-custom-graphics-to-a-pdf.md)

## Topics

### Managing Document Security

- [documentDidUnlock(\_:)](pdfdocumentdelegate/documentdidunlock%28__%29.md): Called when the `PDFDocumentDidUnlockNotification` notification is posted.

### Getting Document Search Notifications

- [didMatchString(\_:)](pdfdocumentdelegate/didmatchstring%28__%29.md): Called for every match found during a find operation.
- [documentDidBeginDocumentFind(\_:)](pdfdocumentdelegate/documentdidbegindocumentfind%28__%29.md): Called when the `PDFDocumentDidBeginFindNotification` notification is posted.
- [documentDidBeginPageFind(\_:)](pdfdocumentdelegate/documentdidbeginpagefind%28__%29.md): Called when the `PDFDocumentDidBeginPageFindNotification` notification is posted.
- [documentDidEndDocumentFind(\_:)](pdfdocumentdelegate/documentdidenddocumentfind%28__%29.md): Called when the `PDFDocumentDidEndFindNotification` notification is posted.
- [documentDidEndPageFind(\_:)](pdfdocumentdelegate/documentdidendpagefind%28__%29.md): Called when the `PDFDocumentDidEndPageFindNotification` notification is posted.
- [documentDidFindMatch(\_:)](pdfdocumentdelegate/documentdidfindmatch%28__%29.md): Called when the `PDFDocumentDidFindMatchNotification` notification is posted.

### Wrapping Document Elements

- [classForPage()](pdfdocumentdelegate/classforpage%28%29.md): Returns a `PDFPage` subclass for a page object.
- [class(forAnnotationClass:)](pdfdocumentdelegate/class%28forannotationclass_%29.md): Deprecated. Returns a `PDFAnnotation` subclass for a class.
- [class(forAnnotationType:)](pdfdocumentdelegate/class%28forannotationtype_%29.md): Returns a `PDFAnnotation` subclass for an annotation type.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Setting the Delegate

- [delegate](pdfdocument/delegate.md): The object acting as the delegate for the `PDFDocument` object.

# PDFDocumentDelegate (Objective-C)

**Framework:** PDFKit  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.4+ · tvOS · visionOS 1.0+

The delegate for the `PDFDocument` object.

## Declaration

```objectivec
@protocol PDFDocumentDelegate <NSObject>
```

## Mentioned In

- [Adding Custom Graphics to a PDF](adding-custom-graphics-to-a-pdf.md)

## Topics

### Managing Document Security

- [documentDidUnlock:](pdfdocumentdelegate/documentdidunlock%28__%29.md): Called when the `PDFDocumentDidUnlockNotification` notification is posted.

### Getting Document Search Notifications

- [didMatchString:](pdfdocumentdelegate/didmatchstring%28__%29.md): Called for every match found during a find operation.
- [documentDidBeginDocumentFind:](pdfdocumentdelegate/documentdidbegindocumentfind%28__%29.md): Called when the `PDFDocumentDidBeginFindNotification` notification is posted.
- [documentDidBeginPageFind:](pdfdocumentdelegate/documentdidbeginpagefind%28__%29.md): Called when the `PDFDocumentDidBeginPageFindNotification` notification is posted.
- [documentDidEndDocumentFind:](pdfdocumentdelegate/documentdidenddocumentfind%28__%29.md): Called when the `PDFDocumentDidEndFindNotification` notification is posted.
- [documentDidEndPageFind:](pdfdocumentdelegate/documentdidendpagefind%28__%29.md): Called when the `PDFDocumentDidEndPageFindNotification` notification is posted.
- [documentDidFindMatch:](pdfdocumentdelegate/documentdidfindmatch%28__%29.md): Called when the `PDFDocumentDidFindMatchNotification` notification is posted.

### Wrapping Document Elements

- [classForPage](pdfdocumentdelegate/classforpage%28%29.md): Returns a `PDFPage` subclass for a page object.
- [classForAnnotationClass:](pdfdocumentdelegate/class%28forannotationclass_%29.md): Deprecated. Returns a `PDFAnnotation` subclass for a class.
- [classForAnnotationType:](pdfdocumentdelegate/class%28forannotationtype_%29.md): Returns a `PDFAnnotation` subclass for an annotation type.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Setting the Delegate

- [delegate](pdfdocument/delegate.md): The object acting as the delegate for the `PDFDocument` object.
