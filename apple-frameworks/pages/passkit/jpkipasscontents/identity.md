> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/jpkipasscontents/identity](https://developer.apple.com/documentation/passkit/jpkipasscontents/identity)

# JPKIPassContents.Identity

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Protocol  
**Availability:** iOS 18.0+ · iPadOS 18.0+

Defines the common functionality that JPKI digital identities support.

## Declaration

```swift
protocol Identity
```

## Topics

### Data associated with the identity

- [IdentityType](identity/identitytype.md): The type associated with the protocol.
- [certificate(using:)](identity/certificate%28using_%29.md): The certificate associated with the Identity.

### Instance Properties

- [authenticationTriesRemaining](identity/authenticationtriesremaining.md): The tries remaining before the underlying credential locks itself

### Instance Methods

- [signature(for:using:)](identity/signature%28for_using_%29-35arv.md): Signs the supplied array of data with the identity’s private key
- [signature(for:using:)](identity/signature%28for_using_%29-4l8jw.md): Signs the supplied data with the identity’s private key

## Relationships

### Conforming Types

- [JPKIPassContents.SigningIdentity](signingidentity-swift.struct.md)
- [JPKIPassContents.UserIdentity](useridentity-swift.struct.md)

## See Also

### Defining access to the identity passes

- [JPKIPassContents.UserIdentity](useridentity-swift.struct.md): The functionality for the type of user identification.
- [JPKIPassContents.SigningIdentity](signingidentity-swift.struct.md): The authentication for signing user identification.
- [JPKIPassContents.Signature](signature.md): The resulting signed data and certificate you use to sign the pass.
- [JPKIPassContents.Certificate](certificate.md): The certificate data associated with an identity document.
- [JPKIPassContents.AuthenticationRequest](authenticationrequest.md): The user authentification request based on the generics type.
