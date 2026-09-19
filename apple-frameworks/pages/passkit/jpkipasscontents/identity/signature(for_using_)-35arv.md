> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/passkit/jpkipasscontents/identity/signature(for:using:)-35arv

# signature(for:using:)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+

Signs the supplied array of data with the identity’s private key

## Declaration

```swift
func signature(for data: [Data], using request: JPKIPassContents.AuthenticationRequest<Self.IdentityType>) async throws -> [JPKIPassContents.Signature<Self.IdentityType>]
```

<a id="discussion"></a>

## Discussion

- Properties:

  - data: Data array to be signed with the specified identity
  - authentication: User authentication request to perform identity signature with

> **Throws**

> See Error type defined below
