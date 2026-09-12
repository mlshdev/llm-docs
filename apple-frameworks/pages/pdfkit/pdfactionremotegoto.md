> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfactionremotegoto](https://developer.apple.com/documentation/pdfkit/pdfactionremotegoto)

# PDFActionRemoteGoTo (Swift)

**Framework:** PDFKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 11.0+ · visionOS 1.0+

`PDFActionRemoteGoTo`, a subclass of `PDFAction`, defines methods for getting and setting the destination of a go-to action that targets another document.

## Declaration

```swift
class PDFActionRemoteGoTo
```

## Topics

### Initializing the Remote Go-to Action

- [init(pageIndex:at:fileURL:)](pdfactionremotegoto/init%28pageindex_at_fileurl_%29.md): Initializes the remote go-to action with the specified page index, point, and document URL.

### Accessing the Page Index of the Referenced Document

- [pageIndex](pdfactionremotegoto/pageindex.md): Returns the zero-based page index referenced by the remote go-to action.

### Accessing a Point on the Referenced Page

- [point](pdfactionremotegoto/point.md): Sets the point, in page space, on the page referenced by the remote go-to action.

### Accessing the URL of the Referenced Document

- [url](pdfactionremotegoto/url.md): Returns the URL of the document referenced by the remote go-to action.

### Initializers

- [init(pageIndex:atPoint:fileURL:)](pdfactionremotegoto/init%28pageindex_atpoint_fileurl_%29.md)

## Relationships

### Inherits From

- [PDFAction](pdfaction.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Action Types

- [PDFActionGoTo](pdfactiongoto.md): `PDFActionGoTo`, a subclass of `PDFAction`, defines methods for getting and setting the destination of a go-to action.
- [PDFActionNamed](pdfactionnamed.md): `PDFActionNamed` defines methods used to work with actions in PDF documents, some of which are named in the Adobe PDF Specification.
- [PDFActionResetForm](pdfactionresetform.md): `PDFActionResetForm`, a subclass of `PDFAction`, defines methods for getting and clearing fields in a PDF form.
- [PDFActionURL](pdfactionurl.md): `PDFActionURL`, a subclass of `PDFAction`, defines methods for getting and setting the URL associated with a URL action.
- [PDFActionNamedName](pdfactionnamedname.md)

# PDFActionRemoteGoTo (Objective-C)

**Framework:** PDFKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 11.0+ · visionOS 1.0+

`PDFActionRemoteGoTo`, a subclass of `PDFAction`, defines methods for getting and setting the destination of a go-to action that targets another document.

## Declaration

```objectivec
@interface PDFActionRemoteGoTo : PDFAction
```

## Topics

### Initializing the Remote Go-to Action

- [initWithPageIndex:atPoint:fileURL:](pdfactionremotegoto/init%28pageindex_at_fileurl_%29.md): Initializes the remote go-to action with the specified page index, point, and document URL.

### Accessing the Page Index of the Referenced Document

- [pageIndex](pdfactionremotegoto/pageindex.md): Returns the zero-based page index referenced by the remote go-to action.

### Accessing a Point on the Referenced Page

- [point](pdfactionremotegoto/point.md): Sets the point, in page space, on the page referenced by the remote go-to action.

### Accessing the URL of the Referenced Document

- [URL](pdfactionremotegoto/url.md): Returns the URL of the document referenced by the remote go-to action.

## Relationships

### Inherits From

- [PDFAction](pdfaction.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Action Types

- [PDFActionGoTo](pdfactiongoto.md): `PDFActionGoTo`, a subclass of `PDFAction`, defines methods for getting and setting the destination of a go-to action.
- [PDFActionNamed](pdfactionnamed.md): `PDFActionNamed` defines methods used to work with actions in PDF documents, some of which are named in the Adobe PDF Specification.
- [PDFActionResetForm](pdfactionresetform.md): `PDFActionResetForm`, a subclass of `PDFAction`, defines methods for getting and clearing fields in a PDF form.
- [PDFActionURL](pdfactionurl.md): `PDFActionURL`, a subclass of `PDFAction`, defines methods for getting and setting the URL associated with a URL action.
- [PDFActionNamedName](pdfactionnamedname.md)
