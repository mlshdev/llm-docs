> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkidentitydocumentdescriptor](https://developer.apple.com/documentation/passkit/pkidentitydocumentdescriptor)

# PKIdentityDocumentDescriptor (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

A type that describes the structure and behavior of an identity document.

## Declaration

```swift
protocol PKIdentityDocumentDescriptor : NSObjectProtocol
```

<a id="overview"></a>

## Overview

A descriptor object describes the type of document that your app can request or check whether a document is available to request. For example, you use a [PKIdentityDriversLicenseDescriptor](pkidentitydriverslicensedescriptor.md) to request information from a user’s driver’s license (or equivalent document).

> **Note**

>  Different document types behave differently, requiring different properties or response formats. Don’t define your own implementation of this protocol or subclass an existing implementation.

## Topics

### Inspecting elements

- [elements](pkidentitydocumentdescriptor/elements.md): A list of identity elements to request.
- [issuerIdentifiers](pkidentitydocumentdescriptor/issueridentifiers.md): A list of X.509 authority key identifiers your app accepts.
- [PKIdentityElement](pkidentityelement.md): An object that represents the elements an app requests from identity documents.

### Adding an identity element

- [addElements(\_:intentToStore:)](pkidentitydocumentdescriptor/addelements%28__intenttostore_%29.md): Adds a list of identity element and defines the way an app, or it’s server, stores the elements.
- [PKIdentityIntentToStore](pkidentityintenttostore.md): An object that represents your intention to store an identity element or values derived from an identity element.

### Getting an elements intent

- [intentToStore(element:)](pkidentitydocumentdescriptor/intenttostore%28element_%29.md): Gets the intent to store for an identity element you specify.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [PKIdentityAnyOfDescriptor](pkidentityanyofdescriptor.md)
- [PKIdentityDriversLicenseDescriptor](pkidentitydriverslicensedescriptor.md)
- [PKIdentityNationalIDCardDescriptor](pkidentitynationalidcarddescriptor.md)
- [PKIdentityPhotoIDDescriptor](pkidentityphotoiddescriptor.md)

## See Also

### Describing a document

- [PKIdentityDriversLicenseDescriptor](pkidentitydriverslicensedescriptor.md): An object for requesting information from a user’s driver’s license or equivalent document.
- [PKIdentityIntentToStore](pkidentityintenttostore.md): An object that represents your intention to store an identity element or values derived from an identity element.

# PKIdentityDocumentDescriptor (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

A type that describes the structure and behavior of an identity document.

## Declaration

```objectivec
@protocol PKIdentityDocumentDescriptor <NSObject>
```

<a id="overview"></a>

## Overview

A descriptor object describes the type of document that your app can request or check whether a document is available to request. For example, you use a [PKIdentityDriversLicenseDescriptor](pkidentitydriverslicensedescriptor.md) to request information from a user’s driver’s license (or equivalent document).

> **Note**

>  Different document types behave differently, requiring different properties or response formats. Don’t define your own implementation of this protocol or subclass an existing implementation.

## Topics

### Inspecting elements

- [elements](pkidentitydocumentdescriptor/elements.md): A list of identity elements to request.
- [issuerIdentifiers](pkidentitydocumentdescriptor/issueridentifiers.md): A list of X.509 authority key identifiers your app accepts.
- [PKIdentityElement](pkidentityelement.md): An object that represents the elements an app requests from identity documents.

### Adding an identity element

- [addElements:withIntentToStore:](pkidentitydocumentdescriptor/addelements%28__intenttostore_%29.md): Adds a list of identity element and defines the way an app, or it’s server, stores the elements.
- [PKIdentityIntentToStore](pkidentityintenttostore.md): An object that represents your intention to store an identity element or values derived from an identity element.

### Getting an elements intent

- [intentToStoreForElement:](pkidentitydocumentdescriptor/intenttostore%28element_%29.md): Gets the intent to store for an identity element you specify.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [PKIdentityAnyOfDescriptor](pkidentityanyofdescriptor.md)
- [PKIdentityDriversLicenseDescriptor](pkidentitydriverslicensedescriptor.md)
- [PKIdentityNationalIDCardDescriptor](pkidentitynationalidcarddescriptor.md)
- [PKIdentityPhotoIDDescriptor](pkidentityphotoiddescriptor.md)

## See Also

### Describing a document

- [PKIdentityDriversLicenseDescriptor](pkidentitydriverslicensedescriptor.md): An object for requesting information from a user’s driver’s license or equivalent document.
- [PKIdentityIntentToStore](pkidentityintenttostore.md): An object that represents your intention to store an identity element or values derived from an identity element.
