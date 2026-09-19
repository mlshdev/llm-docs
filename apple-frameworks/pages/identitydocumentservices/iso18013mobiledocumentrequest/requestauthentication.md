> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/identitydocumentservices/iso18013mobiledocumentrequest/requestauthentication

# ISO18013MobileDocumentRequest.RequestAuthentication

**Framework:** IdentityDocumentServices  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst · macOS 26.0+

A type that contains information for authenticating the incoming request.

## Declaration

```swift
struct RequestAuthentication
```

## Topics

### Initializers

- [init(authenticationCertificateChain:)](requestauthentication/init%28authenticationcertificatechain_%29.md): Initializes a request authentication.

### Instance Properties

- [authenticationCertificateChain](requestauthentication/authenticationcertificatechain.md): A certificate chain that you use to authenticate the relying party.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
