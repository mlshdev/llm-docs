> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/jpkipasscontents/useridentity-swift.struct](https://developer.apple.com/documentation/passkit/jpkipasscontents/useridentity-swift.struct)

# JPKIPassContents.UserIdentity

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+

The functionality for the type of user identification.

## Declaration

```swift
struct UserIdentity
```

<a id="overview"></a>

## Overview

A type of digital identity that the applet can store.

## Topics

### Identifying the pass user

- [userIdentity](useridentity-swift.property.md): Allows for access to the user identity, if present in the JPKI applet.
- [changePIN(from:to:)](useridentity-swift.struct/changepin%28from_to_%29.md): A function that allows for the change of the PIN associated with the user identity.
- [JPKIPassContents.UserIdentity.AuthenticationType](useridentity-swift.struct/authenticationtype.md): Defines valid authentication types associated with the user identity.

### Instance Properties

- [authenticationTriesRemaining](useridentity-swift.struct/authenticationtriesremaining.md): The tries remaining before the underlying credential locks itself

## Relationships

### Conforms To

- [JPKIPassContents.Identity](identity.md)

## See Also

### Defining access to the identity passes

- [JPKIPassContents.SigningIdentity](signingidentity-swift.struct.md): The authentication for signing user identification.
- [JPKIPassContents.Signature](signature.md): The resulting signed data and certificate you use to sign the pass.
- [JPKIPassContents.Certificate](certificate.md): The certificate data associated with an identity document.
- [JPKIPassContents.AuthenticationRequest](authenticationrequest.md): The user authentification request based on the generics type.
- [JPKIPassContents.Identity](identity.md): Defines the common functionality that JPKI digital identities support.
