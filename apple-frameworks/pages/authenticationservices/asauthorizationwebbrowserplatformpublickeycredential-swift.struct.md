> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationwebbrowserplatformpublickeycredential-swift.struct](https://developer.apple.com/documentation/authenticationservices/asauthorizationwebbrowserplatformpublickeycredential-swift.struct)

# ASAuthorizationWebBrowserPlatformPublicKeyCredential

**Framework:** Authentication Services  
**Kind:** Structure  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 16.4+ · macOS 13.3+

A structure that describes a passkey stored in the keychain, or managed by a third-party credential manager.

## Declaration

```swift
struct ASAuthorizationWebBrowserPlatformPublicKeyCredential
```

<a id="overview"></a>

## Overview

Use [ASAuthorizationWebBrowserPlatformPublicKeyCredential](asauthorizationwebbrowserplatformpublickeycredential-swift.struct.md) to describe passkeys in your browser app’s user interface so the person can choose a passkey. Get the chosen passkey’s [credentialID](asauthorizationwebbrowserplatformpublickeycredential-swift.struct/credentialid.md) to create a [ASAuthorizationPlatformPublicKeyCredentialDescriptor](asauthorizationplatformpublickeycredentialdescriptor.md) that identifies the passkey to the operating system.

## Topics

### Describing credentials

- [customTitle](asauthorizationwebbrowserplatformpublickeycredential-swift.struct/customtitle.md): A string the person can supply to describe this credential.
- [name](asauthorizationwebbrowserplatformpublickeycredential-swift.struct/name.md): The user name for the account associated with this credential.
- [providerName](asauthorizationwebbrowserplatformpublickeycredential-swift.struct/providername.md): The name of the app that manages this credential, or “iCloud Keychain” if it’s the operating system.
- [relyingParty](asauthorizationwebbrowserplatformpublickeycredential-swift.struct/relyingparty.md): The relying party that issues challenges for this credential.
- [userHandle](asauthorizationwebbrowserplatformpublickeycredential-swift.struct/userhandle.md): A unique identifier for the user account at the relying party.

### Identifying credentials

- [credentialID](asauthorizationwebbrowserplatformpublickeycredential-swift.struct/credentialid.md): The identifier the operating system uses for this credential.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Using passkeys

- [platformCredentials(forRelyingParty:)](asauthorizationwebbrowserpublickeycredentialmanager/platformcredentials%28forrelyingparty_%29.md): Gets a list of passkeys available for authenticating with the given relying party.
