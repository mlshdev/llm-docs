> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/jpkipasscontents/authenticationrequest](https://developer.apple.com/documentation/passkit/jpkipasscontents/authenticationrequest)

# JPKIPassContents.AuthenticationRequest

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+

The user authentification request based on the generics type.

## Declaration

```swift
struct AuthenticationRequest<IdentityType> where IdentityType : JPKIPassContents.Identity
```

<a id="overview"></a>

## Overview

Use this structure to define valid user authentication request options for `UserIdentity` or `SigningIdentity`.

## Topics

### Creating authentication request options

- [init(type:)](authenticationrequest/init%28type_%29-hz9q.md): Conforms when `IdentityType` is `JPKIPassContents.UserIdentity`. Initializes the user authentication request options for the user identity type.
- [init(type:)](authenticationrequest/init%28type_%29-25dbn.md): Conforms when `IdentityType` is `JPKIPassContents.SigningIdentity`. Initializes the user authentication request options for the signing identity type.

## See Also

### Defining access to the identity passes

- [JPKIPassContents.UserIdentity](useridentity-swift.struct.md): The functionality for the type of user identification.
- [JPKIPassContents.SigningIdentity](signingidentity-swift.struct.md): The authentication for signing user identification.
- [JPKIPassContents.Signature](signature.md): The resulting signed data and certificate you use to sign the pass.
- [JPKIPassContents.Certificate](certificate.md): The certificate data associated with an identity document.
- [JPKIPassContents.Identity](identity.md): Defines the common functionality that JPKI digital identities support.
