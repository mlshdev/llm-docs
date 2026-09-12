> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asimportablecredential/basicauthentication](https://developer.apple.com/documentation/authenticationservices/asimportablecredential/basicauthentication)

# ASImportableCredential.BasicAuthentication

**Framework:** Authentication Services  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

A type to represent a basic authentication password.

## Declaration

```swift
struct BasicAuthentication
```

<a id="overview"></a>

## Overview

This type is a representation of `BasicAuth` as defined in the Credential Exchange Format (CXF) specification.

## Topics

### Accessing authentication properties

- [password](basicauthentication/password.md): The password associated with the credential.
- [ASImportableEditableField](../asimportableeditablefield.md): A field that someone can edit within a credential.

### Initializers

- [init(userName:password:)](basicauthentication/init%28username_password_%29.md)

### Instance Properties

- [userName](basicauthentication/username.md): The user name associated with this credential. When instantiating from JSON, this property will be populated from the “username” field.

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
- [ASImportableCredential.passkey(\_:)](passkey%28__%29.md): A passkey credential.
- [ASImportableCredential.Passkey](passkey.md): A type to represent a passkey credential.
- [ASImportableCredential.totp(\_:)](totp%28__%29.md): A time-based one-time password (TOTP) credential.
- [ASImportableCredential.TOTP](totp.md): A type to represent a time-based one-time password generator (TOTP).
