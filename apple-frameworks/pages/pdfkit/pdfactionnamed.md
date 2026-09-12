> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfactionnamed](https://developer.apple.com/documentation/pdfkit/pdfactionnamed)

# PDFActionNamed (Swift)

**Framework:** PDFKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 11.0+ · visionOS 1.0+

`PDFActionNamed` defines methods used to work with actions in PDF documents, some of which are named in the Adobe PDF Specification.

## Declaration

```swift
class PDFActionNamed
```

<a id="overview"></a>

## Overview

A `PDFActionNamed` object represents an action with a defined name, such as “Go back” or “Zoom in.”

## Topics

### Accessing the Name of the Action

- [name](pdfactionnamed/name.md): Returns the name of the named action.

### Initializing the Action

- [init(name:)](pdfactionnamed/init%28name_%29.md): Initializes the `PDFActionName` object with the specified named action.

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
- [PDFActionRemoteGoTo](pdfactionremotegoto.md): `PDFActionRemoteGoTo`, a subclass of `PDFAction`, defines methods for getting and setting the destination of a go-to action that targets another document.
- [PDFActionResetForm](pdfactionresetform.md): `PDFActionResetForm`, a subclass of `PDFAction`, defines methods for getting and clearing fields in a PDF form.
- [PDFActionURL](pdfactionurl.md): `PDFActionURL`, a subclass of `PDFAction`, defines methods for getting and setting the URL associated with a URL action.
- [PDFActionNamedName](pdfactionnamedname.md)

# PDFActionNamed (Objective-C)

**Framework:** PDFKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 11.0+ · visionOS 1.0+

`PDFActionNamed` defines methods used to work with actions in PDF documents, some of which are named in the Adobe PDF Specification.

## Declaration

```objectivec
@interface PDFActionNamed : PDFAction
```

<a id="overview"></a>

## Overview

A `PDFActionNamed` object represents an action with a defined name, such as “Go back” or “Zoom in.”

## Topics

### Accessing the Name of the Action

- [name](pdfactionnamed/name.md): Returns the name of the named action.

### Initializing the Action

- [initWithName:](pdfactionnamed/init%28name_%29.md): Initializes the `PDFActionName` object with the specified named action.

## Relationships

### Inherits From

- [PDFAction](pdfaction.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Action Types

- [PDFActionGoTo](pdfactiongoto.md): `PDFActionGoTo`, a subclass of `PDFAction`, defines methods for getting and setting the destination of a go-to action.
- [PDFActionRemoteGoTo](pdfactionremotegoto.md): `PDFActionRemoteGoTo`, a subclass of `PDFAction`, defines methods for getting and setting the destination of a go-to action that targets another document.
- [PDFActionResetForm](pdfactionresetform.md): `PDFActionResetForm`, a subclass of `PDFAction`, defines methods for getting and clearing fields in a PDF form.
- [PDFActionURL](pdfactionurl.md): `PDFActionURL`, a subclass of `PDFAction`, defines methods for getting and setting the URL associated with a URL action.
- [PDFActionNamedName](pdfactionnamedname.md)
