> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/passkit/jpkipasscontents/signingidentity-swift.property

# signingIdentity

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+

Allows access to the signing identity, if present in the JPKI applet.

## Declaration

```swift
let signingIdentity: JPKIPassContents.SigningIdentity?
```

## See Also

### Signing identity authentication

- [changePassword(from:to:)](signingidentity-swift.struct/changepassword%28from_to_%29.md): A function that allows you to change the password associated with the signing identity.
- [JPKIPassContents.SigningIdentity.AuthenticationType](signingidentity-swift.struct/authenticationtype.md): Defines the valid user authentication request options for the signing identity.
