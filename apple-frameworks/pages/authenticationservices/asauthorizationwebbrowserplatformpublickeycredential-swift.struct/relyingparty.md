> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationwebbrowserplatformpublickeycredential-swift.struct/relyingparty](https://developer.apple.com/documentation/authenticationservices/asauthorizationwebbrowserplatformpublickeycredential-swift.struct/relyingparty)

# relyingParty

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 16.4+ · macOS 13.3+

The relying party that issues challenges for this credential.

## Declaration

```swift
let relyingParty: String
```

## See Also

### Describing credentials

- [customTitle](customtitle.md): A string the person can supply to describe this credential.
- [name](name.md): The user name for the account associated with this credential.
- [providerName](providername.md): The name of the app that manages this credential, or “iCloud Keychain” if it’s the operating system.
- [userHandle](userhandle.md): A unique identifier for the user account at the relying party.
