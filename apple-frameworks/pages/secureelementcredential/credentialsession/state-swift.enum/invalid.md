> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/secureelementcredential/credentialsession/state-swift.enum/invalid](https://developer.apple.com/documentation/secureelementcredential/credentialsession/state-swift.enum/invalid)

# CredentialSession.State.invalid

**Framework:** SecureElementCredential  
**Kind:** Case  
**Availability:** iOS 18.1+ · iPadOS 18.1+

The state of an invalid credential session.

## Declaration

```swift
case invalid
```

<a id="discussion"></a>

## Discussion

An invalid session is no longer available for use. To resume Secure Element credential functionality, call [startSession()](../startsession%28%29.md) to create a new session.

## See Also

### Credential session states

- [CredentialSession.State.management](management.md): The state for managing the credential session.
- [CredentialSession.State.wired(credential:)](wired%28credential_%29.md): The state for performing wired operations with a given credential.
- [CredentialSession.State.cardEmulation(credential:)](cardemulation%28credential_%29.md): The state for performing card emulation with a given credential.
- [CredentialSession.Credential](../credential.md): Information about a credential that a credential session retrieves from the Secure Element.
