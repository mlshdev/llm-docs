> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/secureelementcredential/credentialsession/endwiredmode()](https://developer.apple.com/documentation/secureelementcredential/credentialsession/endwiredmode())

# endWiredMode()

**Framework:** SecureElementCredential  
**Kind:** Instance Method  
**Availability:** iOS 18.1+ · iPadOS 18.1+

Ends wired mode and returns to management state.

## Declaration

```swift
func endWiredMode() async throws
```

## Mentioned In

- [Accessing and using secure element credentials](../accessing-and-using-secure-element-credentials.md)

<a id="discussion"></a>

## Discussion

The credential session state must be [CredentialSession.State.wired(credential:)](state-swift.enum/wired%28credential_%29.md) prior to calling this method.

## See Also

### Performing wired mode actions

- [performWiredTransaction(using:over:instanceAID:)](performwiredtransaction%28using_over_instanceaid_%29.md): Enters wired mode with user authentication.
- [enterWiredMode(using:)](enterwiredmode%28using_%29.md): Enters wired mode to perform maintenance operations with the given credential.
- [transceive(\_:)](transceive%28__%29.md): Send a wired command Application Protocol Data Unit (APDU) to the credential to complete a transaction or a card content management task.
