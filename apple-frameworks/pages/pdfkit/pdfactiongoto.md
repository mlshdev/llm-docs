> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfactiongoto](https://developer.apple.com/documentation/pdfkit/pdfactiongoto)

# PDFActionGoTo (Swift)

**Framework:** PDFKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 11.0+ · visionOS 1.0+

`PDFActionGoTo`, a subclass of `PDFAction`, defines methods for getting and setting the destination of a go-to action.

## Declaration

```swift
class PDFActionGoTo
```

<a id="overview"></a>

## Overview

A `PDFActionGoTo` object represents the action of going to a specific location within the PDF document.

## Topics

### Accessing the Destination

- [destination](pdfactiongoto/destination.md): Returns the destination associated with the action.

### Initializing the Action

- [init(destination:)](pdfactiongoto/init%28destination_%29.md): Initializes the go-to action.

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

- [PDFActionNamed](pdfactionnamed.md): `PDFActionNamed` defines methods used to work with actions in PDF documents, some of which are named in the Adobe PDF Specification.
- [PDFActionRemoteGoTo](pdfactionremotegoto.md): `PDFActionRemoteGoTo`, a subclass of `PDFAction`, defines methods for getting and setting the destination of a go-to action that targets another document.
- [PDFActionResetForm](pdfactionresetform.md): `PDFActionResetForm`, a subclass of `PDFAction`, defines methods for getting and clearing fields in a PDF form.
- [PDFActionURL](pdfactionurl.md): `PDFActionURL`, a subclass of `PDFAction`, defines methods for getting and setting the URL associated with a URL action.
- [PDFActionNamedName](pdfactionnamedname.md)

# PDFActionGoTo (Objective-C)

**Framework:** PDFKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 11.0+ · visionOS 1.0+

`PDFActionGoTo`, a subclass of `PDFAction`, defines methods for getting and setting the destination of a go-to action.

## Declaration

```objectivec
@interface PDFActionGoTo : PDFAction
```

<a id="overview"></a>

## Overview

A `PDFActionGoTo` object represents the action of going to a specific location within the PDF document.

## Topics

### Accessing the Destination

- [destination](pdfactiongoto/destination.md): Returns the destination associated with the action.

### Initializing the Action

- [initWithDestination:](pdfactiongoto/init%28destination_%29.md): Initializes the go-to action.

## Relationships

### Inherits From

- [PDFAction](pdfaction.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Action Types

- [PDFActionNamed](pdfactionnamed.md): `PDFActionNamed` defines methods used to work with actions in PDF documents, some of which are named in the Adobe PDF Specification.
- [PDFActionRemoteGoTo](pdfactionremotegoto.md): `PDFActionRemoteGoTo`, a subclass of `PDFAction`, defines methods for getting and setting the destination of a go-to action that targets another document.
- [PDFActionResetForm](pdfactionresetform.md): `PDFActionResetForm`, a subclass of `PDFAction`, defines methods for getting and clearing fields in a PDF form.
- [PDFActionURL](pdfactionurl.md): `PDFActionURL`, a subclass of `PDFAction`, defines methods for getting and setting the URL associated with a URL action.
- [PDFActionNamedName](pdfactionnamedname.md)
