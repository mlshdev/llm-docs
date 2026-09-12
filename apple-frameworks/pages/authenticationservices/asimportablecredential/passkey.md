> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asimportablecredential/passkey](https://developer.apple.com/documentation/authenticationservices/asimportablecredential/passkey)

# ASImportableCredential.Passkey

**Framework:** Authentication Services  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

A type to represent a passkey credential.

## Declaration

```swift
struct Passkey
```

<a id="overview"></a>

## Overview

This type is a representation of `Passkey` as defined in the Credential Exchange Format (CXF) specification.

## Topics

### Creating a passkey instance

- [init(credentialID:relyingPartyIdentifier:userName:userDisplayName:userHandle:key:)](passkey/init%28credentialid_relyingpartyidentifier_username_userdisplayname_userhandle_key_%29.md): Creates a passkey instance.

### Accessing passkey properties

- [credentialID](passkey/credentialid.md): The credential ID associated with this passkey.
- [relyingPartyIdentifier](passkey/relyingpartyidentifier.md): The relying party identifier associated with the passkey.
- [userName](passkey/username.md): The username associated with the passkey.
- [userDisplayName](passkey/userdisplayname.md): The human-readable name associated with the passkey.
- [userHandle](passkey/userhandle.md): The user handle associated with the passkey.
- [key](passkey/key.md): The private key associated with this passkey.

### Initializers

- [init(credentialID:relyingPartyIdentifier:userName:userDisplayName:userHandle:key:fido2Extensions:)](passkey/init%28credentialid_relyingpartyidentifier_username_userdisplayname_userhandle_key_fido2extensions_%29.md)

### Instance Properties

- [fido2Extensions](passkey/fido2extensions.md): The FIDO2 extensions associated with this passkey.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Login credential types

- [ASImportableCredential.basicAuthentication(\_:)](basicauthentication%28__%29.md): A password credential.
- [ASImportableCredential.BasicAuthentication](basicauthentication.md): A type to represent a basic authentication password.
- [ASImportableCredential.passkey(\_:)](passkey%28__%29.md): A passkey credential.
- [ASImportableCredential.totp(\_:)](totp%28__%29.md): A time-based one-time password (TOTP) credential.
- [ASImportableCredential.TOTP](totp.md): A type to represent a time-based one-time password generator (TOTP).
