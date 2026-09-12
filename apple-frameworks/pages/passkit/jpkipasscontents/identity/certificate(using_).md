> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/jpkipasscontents/identity/certificate(using:)](https://developer.apple.com/documentation/passkit/jpkipasscontents/identity/certificate(using:))

# certificate(using:)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+

The certificate associated with the Identity.

## Declaration

```swift
func certificate(using request: JPKIPassContents.AuthenticationRequest<Self.IdentityType>) async throws -> JPKIPassContents.Certificate<Self.IdentityType>
```

## Parameters

- `request`: The person’s authentication request used to perform the Identity certificate.

## See Also

### Data associated with the identity

- [IdentityType](identitytype.md): The type associated with the protocol.
