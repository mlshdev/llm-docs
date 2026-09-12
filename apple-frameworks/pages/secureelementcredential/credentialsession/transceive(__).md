> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/secureelementcredential/credentialsession/transceive(_:)](https://developer.apple.com/documentation/secureelementcredential/credentialsession/transceive(_:))

# transceive(\_:)

**Framework:** SecureElementCredential  
**Kind:** Instance Method  
**Availability:** iOS 18.1+ · iPadOS 18.1+

Send a wired command Application Protocol Data Unit (APDU) to the credential to complete a transaction or a card content management task.

## Declaration

```swift
func transceive(_ data: Data) async throws -> Data
```

## Parameters

- `data`: The APDU as a [Data](../../foundation/data.md) instance.

<a id="return-value"></a>

## Return Value

A response APDU.

## Mentioned In

- [Accessing and using secure element credentials](../accessing-and-using-secure-element-credentials.md)

<a id="discussion"></a>

## Discussion

Before calling this method, make sure the credential session state is [CredentialSession.State.wired(credential:)](state-swift.enum/wired%28credential_%29.md). The state transitions to [CredentialSession.State.management](state-swift.enum/management.md) if the call encounters a [CredentialSession.ErrorCode.resourceUnavailable](errorcode/resourceunavailable.md) error; otherwise the state remains unchanged.

Use this method to perform the web presentment transaction after calling `performWiredTransaction(using:over:instanceaid:)`.

> **Note**

> When performing a [transceive(\_:)](transceive%28__%29.md) call, the system grants your app a 15-second grace period from invalidating the session, in the event your app goes into the background.

- The most common errors are:

  - [CredentialSession.ErrorCode.invalidSessionState](errorcode/invalidsessionstate.md): The session isn’t in the [CredentialSession.State.wired(credential:)](state-swift.enum/wired%28credential_%29.md) state.
  - [CredentialSession.ErrorCode.commandNotSupported](errorcode/commandnotsupported.md): The APDU represents an unsupported Secure Element command.
  - [CredentialSession.ErrorCode.resourceUnavailable](errorcode/resourceunavailable.md): The system resource is unavailable. The session transitions to [CredentialSession.State.management](state-swift.enum/management.md).
  - [CredentialSession.ErrorCode.acquiredResourceRelinquished](errorcode/acquiredresourcerelinquished.md): The shared system resource was relinquished during the operation.

## See Also

### Performing wired mode actions

- [performWiredTransaction(using:over:instanceAID:)](performwiredtransaction%28using_over_instanceaid_%29.md): Enters wired mode with user authentication.
- [enterWiredMode(using:)](enterwiredmode%28using_%29.md): Enters wired mode to perform maintenance operations with the given credential.
- [endWiredMode()](endwiredmode%28%29.md): Ends wired mode and returns to management state.
