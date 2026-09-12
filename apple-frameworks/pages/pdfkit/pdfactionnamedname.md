> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfactionnamedname](https://developer.apple.com/documentation/pdfkit/pdfactionnamedname)

# PDFActionNamedName (Swift)

**Framework:** PDFKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```swift
enum PDFActionNamedName
```

## Topics

### Constants

- [PDFActionNamedName.find](pdfactionnamedname/find.md): The Find action.
- [PDFActionNamedName.firstPage](pdfactionnamedname/firstpage.md): The First Page action.
- [PDFActionNamedName.goBack](pdfactionnamedname/goback.md): The Go Back action.
- [PDFActionNamedName.goForward](pdfactionnamedname/goforward.md): The Go Forward action.
- [PDFActionNamedName.goToPage](pdfactionnamedname/gotopage.md): The Go to Page action.
- [PDFActionNamedName.lastPage](pdfactionnamedname/lastpage.md): The Last Page action.
- [PDFActionNamedName.nextPage](pdfactionnamedname/nextpage.md): The Next Page action.
- [PDFActionNamedName.none](pdfactionnamedname/none.md): The action has no name.
- [PDFActionNamedName.previousPage](pdfactionnamedname/previouspage.md): The Previous Page action.
- [PDFActionNamedName.print](pdfactionnamedname/print.md): The Print action.
- [PDFActionNamedName.zoomIn](pdfactionnamedname/zoomin.md): The Zoom In action.
- [PDFActionNamedName.zoomOut](pdfactionnamedname/zoomout.md): The Zoom Out action.

### Initializers

- [init(rawValue:)](pdfactionnamedname/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Action Types

- [PDFActionGoTo](pdfactiongoto.md): `PDFActionGoTo`, a subclass of `PDFAction`, defines methods for getting and setting the destination of a go-to action.
- [PDFActionNamed](pdfactionnamed.md): `PDFActionNamed` defines methods used to work with actions in PDF documents, some of which are named in the Adobe PDF Specification.
- [PDFActionRemoteGoTo](pdfactionremotegoto.md): `PDFActionRemoteGoTo`, a subclass of `PDFAction`, defines methods for getting and setting the destination of a go-to action that targets another document.
- [PDFActionResetForm](pdfactionresetform.md): `PDFActionResetForm`, a subclass of `PDFAction`, defines methods for getting and clearing fields in a PDF form.
- [PDFActionURL](pdfactionurl.md): `PDFActionURL`, a subclass of `PDFAction`, defines methods for getting and setting the URL associated with a URL action.

# PDFActionNamedName (Objective-C)

**Framework:** PDFKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.4+ · tvOS · visionOS 1.0+

## Declaration

```objectivec
enum PDFActionNamedName : NSInteger;
```

## Topics

### Constants

- [kPDFActionNamedFind](pdfactionnamedname/find.md): The Find action.
- [kPDFActionNamedFirstPage](pdfactionnamedname/firstpage.md): The First Page action.
- [kPDFActionNamedGoBack](pdfactionnamedname/goback.md): The Go Back action.
- [kPDFActionNamedGoForward](pdfactionnamedname/goforward.md): The Go Forward action.
- [kPDFActionNamedGoToPage](pdfactionnamedname/gotopage.md): The Go to Page action.
- [kPDFActionNamedLastPage](pdfactionnamedname/lastpage.md): The Last Page action.
- [kPDFActionNamedNextPage](pdfactionnamedname/nextpage.md): The Next Page action.
- [kPDFActionNamedNone](pdfactionnamedname/none.md): The action has no name.
- [kPDFActionNamedPreviousPage](pdfactionnamedname/previouspage.md): The Previous Page action.
- [kPDFActionNamedPrint](pdfactionnamedname/print.md): The Print action.
- [kPDFActionNamedZoomIn](pdfactionnamedname/zoomin.md): The Zoom In action.
- [kPDFActionNamedZoomOut](pdfactionnamedname/zoomout.md): The Zoom Out action.

## See Also

### Action Types

- [PDFActionGoTo](pdfactiongoto.md): `PDFActionGoTo`, a subclass of `PDFAction`, defines methods for getting and setting the destination of a go-to action.
- [PDFActionNamed](pdfactionnamed.md): `PDFActionNamed` defines methods used to work with actions in PDF documents, some of which are named in the Adobe PDF Specification.
- [PDFActionRemoteGoTo](pdfactionremotegoto.md): `PDFActionRemoteGoTo`, a subclass of `PDFAction`, defines methods for getting and setting the destination of a go-to action that targets another document.
- [PDFActionResetForm](pdfactionresetform.md): `PDFActionResetForm`, a subclass of `PDFAction`, defines methods for getting and clearing fields in a PDF form.
- [PDFActionURL](pdfactionurl.md): `PDFActionURL`, a subclass of `PDFAction`, defines methods for getting and setting the URL associated with a URL action.
