> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/secureelementcredential/credentialsession/enterwiredmode(using:)](https://developer.apple.com/documentation/secureelementcredential/credentialsession/enterwiredmode(using:))

# enterWiredMode(using:)

**Framework:** SecureElementCredential  
**Kind:** Instance Method  
**Availability:** iOS 18.1+ · iPadOS 18.1+

Enters wired mode to perform maintenance operations with the given credential.

## Declaration

```swift
func enterWiredMode(using credential: CredentialSession.Credential) async throws
```

## Parameters

- `credential`: The installed credential with which to enter wired mode.

<a id="discussion"></a>

## Discussion

You can call this method in any session state. If successful, the state transitions to [CredentialSession.State.wired(credential:)](state-swift.enum/wired%28credential_%29.md). The state transitions to [CredentialSession.State.management](state-swift.enum/management.md) if the call encounters a [CredentialSession.ErrorCode.resourceUnavailable](errorcode/resourceunavailable.md) error; otherwise the state remains unchanged.

- The most common errors are:

  - [CredentialSession.ErrorCode.invalidCredentialState](errorcode/invalidcredentialstate.md): The credential isn’t in the [CredentialSession.Credential.State.installed(instances:)](credential/state-swift.enum/installed%28instances_%29.md) state.
  - [CredentialSession.ErrorCode.resourceUnavailable](errorcode/resourceunavailable.md): The system resource is unavailable. The session transitions to [CredentialSession.State.management](state-swift.enum/management.md).

## See Also

### Performing wired mode actions

- [performWiredTransaction(using:over:instanceAID:)](performwiredtransaction%28using_over_instanceaid_%29.md): Enters wired mode with user authentication.
- [transceive(\_:)](transceive%28__%29.md): Send a wired command Application Protocol Data Unit (APDU) to the credential to complete a transaction or a card content management task.
- [endWiredMode()](endwiredmode%28%29.md): Ends wired mode and returns to management state.
