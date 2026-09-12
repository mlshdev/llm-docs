> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/jpkipasscontents/signingidentity-swift.struct](https://developer.apple.com/documentation/passkit/jpkipasscontents/signingidentity-swift.struct)

# JPKIPassContents.SigningIdentity

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+

The authentication for signing user identification.

## Declaration

```swift
struct SigningIdentity
```

<a id="overview"></a>

## Overview

Use this structure to define valid signature identity authentication.

## Topics

### Signing identity authentication

- [signingIdentity](signingidentity-swift.property.md): Allows access to the signing identity, if present in the JPKI applet.
- [changePassword(from:to:)](signingidentity-swift.struct/changepassword%28from_to_%29.md): A function that allows you to change the password associated with the signing identity.
- [JPKIPassContents.SigningIdentity.AuthenticationType](signingidentity-swift.struct/authenticationtype.md): Defines the valid user authentication request options for the signing identity.

## Relationships

### Conforms To

- [JPKIPassContents.Identity](identity.md)

## See Also

### Defining access to the identity passes

- [JPKIPassContents.UserIdentity](useridentity-swift.struct.md): The functionality for the type of user identification.
- [JPKIPassContents.Signature](signature.md): The resulting signed data and certificate you use to sign the pass.
- [JPKIPassContents.Certificate](certificate.md): The certificate data associated with an identity document.
- [JPKIPassContents.AuthenticationRequest](authenticationrequest.md): The user authentification request based on the generics type.
- [JPKIPassContents.Identity](identity.md): Defines the common functionality that JPKI digital identities support.
