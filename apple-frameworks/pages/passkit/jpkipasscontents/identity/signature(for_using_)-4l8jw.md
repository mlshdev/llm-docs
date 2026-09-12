> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/jpkipasscontents/identity/signature(for:using:)-4l8jw](https://developer.apple.com/documentation/passkit/jpkipasscontents/identity/signature(for:using:)-4l8jw)

# signature(for:using:)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+

Signs the supplied data with the identity’s private key

## Declaration

```swift
func signature(for data: Data, using request: JPKIPassContents.AuthenticationRequest<Self.IdentityType>) async throws -> JPKIPassContents.Signature<Self.IdentityType>
```

<a id="discussion"></a>

## Discussion

- Properties:

  - data: Data to be signed with the specified identity
  - authentication: User authentication request to perform identity signature with

> **Throws**

> See Error type defined below
