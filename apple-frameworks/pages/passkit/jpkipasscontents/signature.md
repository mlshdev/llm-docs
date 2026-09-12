> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/jpkipasscontents/signature](https://developer.apple.com/documentation/passkit/jpkipasscontents/signature)

# JPKIPassContents.Signature

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+

The resulting signed data and certificate you use to sign the pass.

## Declaration

```swift
struct Signature<IdentityType> where IdentityType : JPKIPassContents.Identity
```

<a id="overview"></a>

## Overview

Use this structure to access the signature associated with digital identities.

## Topics

### Defining the certificate and signed data

- [certificate](signature/certificate.md): The certificate associated with an identity document.
- [signatureData](signature/signaturedata.md): The result of signing the data provided by the caller using the requested digital identity.

## See Also

### Defining access to the identity passes

- [JPKIPassContents.UserIdentity](useridentity-swift.struct.md): The functionality for the type of user identification.
- [JPKIPassContents.SigningIdentity](signingidentity-swift.struct.md): The authentication for signing user identification.
- [JPKIPassContents.Certificate](certificate.md): The certificate data associated with an identity document.
- [JPKIPassContents.AuthenticationRequest](authenticationrequest.md): The user authentification request based on the generics type.
- [JPKIPassContents.Identity](identity.md): Defines the common functionality that JPKI digital identities support.
