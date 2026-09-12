> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfaction](https://developer.apple.com/documentation/pdfkit/pdfaction)

# PDFAction (Swift)

**Framework:** PDFKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 11.0+ · visionOS 1.0+

An action that is performed when, for example, a PDF annotation is activated or an outline item is clicked.

## Declaration

```swift
class PDFAction
```

<a id="overview"></a>

## Overview

A `PDFAction` object represents an action associated with a PDF element, such as an annotation or a link, that the viewer application can perform. See the Adobe PDF Specification for more about actions and action types.

`PDFAction` is an abstract superclass of the following concrete classes:

- `PDFActionGoTo`
- `PDFActionNamed`
- `PDFActionRemoteGoTo`
- `PDFActionResetForm`
- `PDFActionURL`

## Topics

### Action Types

- [PDFActionGoTo](pdfactiongoto.md): `PDFActionGoTo`, a subclass of `PDFAction`, defines methods for getting and setting the destination of a go-to action.
- [PDFActionNamed](pdfactionnamed.md): `PDFActionNamed` defines methods used to work with actions in PDF documents, some of which are named in the Adobe PDF Specification.
- [PDFActionRemoteGoTo](pdfactionremotegoto.md): `PDFActionRemoteGoTo`, a subclass of `PDFAction`, defines methods for getting and setting the destination of a go-to action that targets another document.
- [PDFActionResetForm](pdfactionresetform.md): `PDFActionResetForm`, a subclass of `PDFAction`, defines methods for getting and clearing fields in a PDF form.
- [PDFActionURL](pdfactionurl.md): `PDFActionURL`, a subclass of `PDFAction`, defines methods for getting and setting the URL associated with a URL action.
- [PDFActionNamedName](pdfactionnamedname.md)

### Getting the Action Type

- [type](pdfaction/type.md): Returns the type of the action.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [PDFActionGoTo](pdfactiongoto.md)
- [PDFActionNamed](pdfactionnamed.md)
- [PDFActionRemoteGoTo](pdfactionremotegoto.md)
- [PDFActionResetForm](pdfactionresetform.md)
- [PDFActionURL](pdfactionurl.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Accessing Information About an Annotation

- [page](pdfannotation/page.md): Returns the page that the annotation is associated with.
- [modificationDate](pdfannotation/modificationdate.md): Returns the modification date of the annotation.
- [userName](pdfannotation/username.md): Returns the name of the user who created the annotation.
- [type](pdfannotation/type.md): Returns the type of the annotation.
- [action](pdfannotation/action.md): An object that represents an action for a PDF element, such as a link annotation.
- [PDFDestination](pdfdestination.md): A `PDFDestination` object describes a point on a PDF page.

# PDFAction (Objective-C)

**Framework:** PDFKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 11.0+ · visionOS 1.0+

An action that is performed when, for example, a PDF annotation is activated or an outline item is clicked.

## Declaration

```objectivec
@interface PDFAction : NSObject
```

<a id="overview"></a>

## Overview

A `PDFAction` object represents an action associated with a PDF element, such as an annotation or a link, that the viewer application can perform. See the Adobe PDF Specification for more about actions and action types.

`PDFAction` is an abstract superclass of the following concrete classes:

- `PDFActionGoTo`
- `PDFActionNamed`
- `PDFActionRemoteGoTo`
- `PDFActionResetForm`
- `PDFActionURL`

## Topics

### Action Types

- [PDFActionGoTo](pdfactiongoto.md): `PDFActionGoTo`, a subclass of `PDFAction`, defines methods for getting and setting the destination of a go-to action.
- [PDFActionNamed](pdfactionnamed.md): `PDFActionNamed` defines methods used to work with actions in PDF documents, some of which are named in the Adobe PDF Specification.
- [PDFActionRemoteGoTo](pdfactionremotegoto.md): `PDFActionRemoteGoTo`, a subclass of `PDFAction`, defines methods for getting and setting the destination of a go-to action that targets another document.
- [PDFActionResetForm](pdfactionresetform.md): `PDFActionResetForm`, a subclass of `PDFAction`, defines methods for getting and clearing fields in a PDF form.
- [PDFActionURL](pdfactionurl.md): `PDFActionURL`, a subclass of `PDFAction`, defines methods for getting and setting the URL associated with a URL action.
- [PDFActionNamedName](pdfactionnamedname.md)

### Getting the Action Type

- [type](pdfaction/type.md): Returns the type of the action.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [PDFActionGoTo](pdfactiongoto.md)
- [PDFActionNamed](pdfactionnamed.md)
- [PDFActionRemoteGoTo](pdfactionremotegoto.md)
- [PDFActionResetForm](pdfactionresetform.md)
- [PDFActionURL](pdfactionurl.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Accessing Information About an Annotation

- [page](pdfannotation/page.md): Returns the page that the annotation is associated with.
- [modificationDate](pdfannotation/modificationdate.md): Returns the modification date of the annotation.
- [userName](pdfannotation/username.md): Returns the name of the user who created the annotation.
- [type](pdfannotation/type.md): Returns the type of the annotation.
- [action](pdfannotation/action.md): An object that represents an action for a PDF element, such as a link annotation.
- [PDFDestination](pdfdestination.md): A `PDFDestination` object describes a point on a PDF page.
