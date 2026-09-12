> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/secureelementcredential/credentialsession/credential](https://developer.apple.com/documentation/secureelementcredential/credentialsession/credential)

# CredentialSession.Credential

**Framework:** SecureElementCredential  
**Kind:** Structure  
**Availability:** iOS 18.1+ · iPadOS 18.1+

Information about a credential that a credential session retrieves from the Secure Element.

## Declaration

```swift
struct Credential
```

## Mentioned In

- [Accessing and using secure element credentials](../accessing-and-using-secure-element-credentials.md)

<a id="overview"></a>

## Overview

A credential is an abstraction of the cryptographic elements of your applet bundle installed in the Secure Element. You perform this installation with [provisionCredential(configurationUUID:name:)](provisioncredential%28configurationuuid_name_%29.md), which retrieves the applet bundle you registered with the [Apple Business Register](https://register.apple.com/login), installs it in the Secure Element, and returns a `Credential` instance.

`Credential` objects are snapshots of credential data at the time the [listCredentials()](listcredentials%28%29.md) method loads them. To ensure up-to-date metadata, reload credentials with that same method.

## Topics

### Identifying a credential

- [identifier](credential/identifier.md): A unique identifier for the credential.

### Getting a display name

- [name](credential/name.md): A readable name for the credential.

### Inspecting credential state

- [state](credential/state-swift.property.md): A snapshot of the credential’s installation state.
- [CredentialSession.Credential.State](credential/state-swift.enum.md): An enumeration of possible values of a credential’s installation state.

### Hashing

- [hash(into:)](credential/hash%28into_%29.md)

### Supporting types

- [CredentialSession.Credential.InstanceInfo](credential/instanceinfo.md): Information about an applet instance associated with a specific credential.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing credentials

- [listCredentials()](listcredentials%28%29.md): Retrieves a list of of credentials to which the app has access rights.
