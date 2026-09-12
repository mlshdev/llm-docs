> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/secureelementcredential/credentialsession/credential/state-swift.enum](https://developer.apple.com/documentation/secureelementcredential/credentialsession/credential/state-swift.enum)

# CredentialSession.Credential.State

**Framework:** SecureElementCredential  
**Kind:** Enumeration  
**Availability:** iOS 18.1+ · iPadOS 18.1+

An enumeration of possible values of a credential’s installation state.

## Declaration

```swift
enum State
```

## Topics

### Credential states

- [CredentialSession.Credential.State.installationPending](state-swift.enum/installationpending.md): The credential installation is pending but isn’t complete.
- [CredentialSession.Credential.State.installed(instances:)](state-swift.enum/installed%28instances_%29.md): The credential installation is complete for one or more instances.
- [CredentialSession.Credential.InstanceInfo](instanceinfo.md): Information about an applet instance associated with a specific credential.
- [CredentialSession.Credential.State.installationFailed](state-swift.enum/installationfailed.md): The credential installation failed.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting credential state

- [state](state-swift.property.md): A snapshot of the credential’s installation state.
