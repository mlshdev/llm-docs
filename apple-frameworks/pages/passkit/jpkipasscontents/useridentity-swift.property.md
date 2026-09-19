> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/passkit/jpkipasscontents/useridentity-swift.property

# userIdentity

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+

Allows for access to the user identity, if present in the JPKI applet.

## Declaration

```swift
let userIdentity: JPKIPassContents.UserIdentity?
```

## See Also

### Identifying the pass user

- [changePIN(from:to:)](useridentity-swift.struct/changepin%28from_to_%29.md): A function that allows for the change of the PIN associated with the user identity.
- [JPKIPassContents.UserIdentity.AuthenticationType](useridentity-swift.struct/authenticationtype.md): Defines valid authentication types associated with the user identity.
