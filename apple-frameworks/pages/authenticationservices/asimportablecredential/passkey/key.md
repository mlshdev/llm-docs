> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asimportablecredential/passkey/key](https://developer.apple.com/documentation/authenticationservices/asimportablecredential/passkey/key)

# key

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

The private key associated with this passkey.

## Declaration

```swift
var key: Data
```

<a id="discussion"></a>

## Discussion

This value must be a PKCS#8-formatted byte string, and Base64URL-encoded when encoding to JSON.

## See Also

### Accessing passkey properties

- [credentialID](credentialid.md): The credential ID associated with this passkey.
- [relyingPartyIdentifier](relyingpartyidentifier.md): The relying party identifier associated with the passkey.
- [userName](username.md): The username associated with the passkey.
- [userDisplayName](userdisplayname.md): The human-readable name associated with the passkey.
- [userHandle](userhandle.md): The user handle associated with the passkey.
