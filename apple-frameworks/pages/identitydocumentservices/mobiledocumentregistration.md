> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/identitydocumentservices/mobiledocumentregistration](https://developer.apple.com/documentation/identitydocumentservices/mobiledocumentregistration)

# MobileDocumentRegistration

**Framework:** IdentityDocumentServices  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst

A type you use to register mobile documents.

## Declaration

```swift
struct MobileDocumentRegistration
```

<a id="overview"></a>

## Overview

Mobile documents, or “mdocs”, are a document format defined in ISO 18013-5.

## Topics

### Initializers

- [init(mobileDocumentType:supportedAuthorityKeyIdentifiers:documentIdentifier:invalidationDate:)](mobiledocumentregistration/init%28mobiledocumenttype_supportedauthoritykeyidentifiers_documentidentifier_invalidationdate_%29.md): Initializes a mobile document registration.
- [init(mobileDocumentType:supportedIssuerKeyIdentifiers:supportedAuthorityKeyIdentifiers:documentIdentifier:invalidationDate:)](mobiledocumentregistration/init%28mobiledocumenttype_supportedissuerkeyidentifiers_supportedauthoritykeyidentifiers_documentidentifier_invalidationdate_%29.md): Initialize a mobile document registration with issuer key identifiers.

### Instance Properties

- [invalidationDate](mobiledocumentregistration/invalidationdate.md): A date that indicates when the system needs to invalidate this registration.
- [mobileDocumentType](mobiledocumentregistration/mobiledocumenttype.md): The type of the mobile document.
- [supportedAuthorityKeyIdentifiers](mobiledocumentregistration/supportedauthoritykeyidentifiers.md): A list of authority key identifiers that correspond to relying party authorizers that are trusted by the document provider app.
- [supportedIssuerKeyIdentifiers](mobiledocumentregistration/supportedissuerkeyidentifiers.md): A list of X.509 authority key identifiers that correspond to the document signer certificate chain for the mobile document.

## Relationships

### Conforms To

- [IdentityDocumentRegistration](identitydocumentregistration.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Registering as an identity document provider

- [IdentityDocumentProviderRegistrationStore](identitydocumentproviderregistrationstore.md): A store that notifies the system which documents an app has available for presentment.
- [IdentityDocumentRegistration](identitydocumentregistration.md): A protocol that defines an identity document registration.
