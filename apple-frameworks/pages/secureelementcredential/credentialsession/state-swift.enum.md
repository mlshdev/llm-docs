> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/secureelementcredential/credentialsession/state-swift.enum](https://developer.apple.com/documentation/secureelementcredential/credentialsession/state-swift.enum)

# CredentialSession.State

**Framework:** SecureElementCredential  
**Kind:** Enumeration  
**Availability:** iOS 18.1+ · iPadOS 18.1+

An enumeration of the possible states of a card session.

## Declaration

```swift
enum State
```

## Topics

### Credential session states

- [CredentialSession.State.management](state-swift.enum/management.md): The state for managing the credential session.
- [CredentialSession.State.wired(credential:)](state-swift.enum/wired%28credential_%29.md): The state for performing wired operations with a given credential.
- [CredentialSession.State.cardEmulation(credential:)](state-swift.enum/cardemulation%28credential_%29.md): The state for performing card emulation with a given credential.
- [CredentialSession.Credential](credential.md): Information about a credential that a credential session retrieves from the Secure Element.
- [CredentialSession.State.invalid](state-swift.enum/invalid.md): The state of an invalid credential session.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing the session state

- [state](state-swift.property.md): The current state of the session.
