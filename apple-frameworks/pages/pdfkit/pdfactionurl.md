> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfactionurl](https://developer.apple.com/documentation/pdfkit/pdfactionurl)

# PDFActionURL (Swift)

**Framework:** PDFKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 11.0+ · visionOS 1.0+

`PDFActionURL`, a subclass of `PDFAction`, defines methods for getting and setting the URL associated with a URL action.

## Declaration

```swift
class PDFActionURL
```

## Topics

### Initializing a URL Action

- [init(url:)](pdfactionurl/init%28url_%29-5wtb3.md): Initializes a URL action with the specified URL.

### Accessing and Changing the URL

- [url](pdfactionurl/url.md): Returns the URL associated with the URL action.

### Initializers

- [init(URL:)](pdfactionurl/init%28url_%29-1e0qw.md)

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
- [PDFActionRemoteGoTo](pdfactionremotegoto.md): `PDFActionRemoteGoTo`, a subclass of `PDFAction`, defines methods for getting and setting the destination of a go-to action that targets another document.
- [PDFActionResetForm](pdfactionresetform.md): `PDFActionResetForm`, a subclass of `PDFAction`, defines methods for getting and clearing fields in a PDF form.
- [PDFActionNamedName](pdfactionnamedname.md)

# PDFActionURL (Objective-C)

**Framework:** PDFKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 11.0+ · visionOS 1.0+

`PDFActionURL`, a subclass of `PDFAction`, defines methods for getting and setting the URL associated with a URL action.

## Declaration

```objectivec
@interface PDFActionURL : PDFAction
```

## Topics

### Initializing a URL Action

- [initWithURL:](pdfactionurl/init%28url_%29-5wtb3.md): Initializes a URL action with the specified URL.

### Accessing and Changing the URL

- [URL](pdfactionurl/url.md): Returns the URL associated with the URL action.

## Relationships

### Inherits From

- [PDFAction](pdfaction.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Action Types

- [PDFActionGoTo](pdfactiongoto.md): `PDFActionGoTo`, a subclass of `PDFAction`, defines methods for getting and setting the destination of a go-to action.
- [PDFActionNamed](pdfactionnamed.md): `PDFActionNamed` defines methods used to work with actions in PDF documents, some of which are named in the Adobe PDF Specification.
- [PDFActionRemoteGoTo](pdfactionremotegoto.md): `PDFActionRemoteGoTo`, a subclass of `PDFAction`, defines methods for getting and setting the destination of a go-to action that targets another document.
- [PDFActionResetForm](pdfactionresetform.md): `PDFActionResetForm`, a subclass of `PDFAction`, defines methods for getting and clearing fields in a PDF form.
- [PDFActionNamedName](pdfactionnamedname.md)
