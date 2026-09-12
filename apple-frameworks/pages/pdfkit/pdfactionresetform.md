> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfactionresetform](https://developer.apple.com/documentation/pdfkit/pdfactionresetform)

# PDFActionResetForm (Swift)

**Framework:** PDFKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 11.0+ · visionOS 1.0+

`PDFActionResetForm`, a subclass of `PDFAction`, defines methods for getting and clearing fields in a PDF form.

## Declaration

```swift
class PDFActionResetForm
```

<a id="overview"></a>

## Overview

A `PDFActionResetForm` object represents an action associated with a PDF form.

## Topics

### Initializing a Reset Form Action

- [init()](pdfactionresetform/init%28%29.md): Initializes a reset form action.

### Accessing and Changing Fields

- [fields](pdfactionresetform/fields.md): Returns an array of fields associated with the reset action.

### Determining Whether Fields are Cleared When the Action is Performed

- [fieldsIncludedAreCleared](pdfactionresetform/fieldsincludedarecleared.md): Sets whether the fields associated with the reset action are cleared when the action is performed.

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
- [PDFActionURL](pdfactionurl.md): `PDFActionURL`, a subclass of `PDFAction`, defines methods for getting and setting the URL associated with a URL action.
- [PDFActionNamedName](pdfactionnamedname.md)

# PDFActionResetForm (Objective-C)

**Framework:** PDFKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 11.0+ · visionOS 1.0+

`PDFActionResetForm`, a subclass of `PDFAction`, defines methods for getting and clearing fields in a PDF form.

## Declaration

```objectivec
@interface PDFActionResetForm : PDFAction
```

<a id="overview"></a>

## Overview

A `PDFActionResetForm` object represents an action associated with a PDF form.

## Topics

### Initializing a Reset Form Action

- [init](pdfactionresetform/init%28%29.md): Initializes a reset form action.

### Accessing and Changing Fields

- [fields](pdfactionresetform/fields.md): Returns an array of fields associated with the reset action.

### Determining Whether Fields are Cleared When the Action is Performed

- [fieldsIncludedAreCleared](pdfactionresetform/fieldsincludedarecleared.md): Sets whether the fields associated with the reset action are cleared when the action is performed.

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
- [PDFActionURL](pdfactionurl.md): `PDFActionURL`, a subclass of `PDFAction`, defines methods for getting and setting the URL associated with a URL action.
- [PDFActionNamedName](pdfactionnamedname.md)
