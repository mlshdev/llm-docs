> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/secureelementcredential/credentialsession/performcardemulationtransactionwithcurrentcredential(over:options:)](https://developer.apple.com/documentation/secureelementcredential/credentialsession/performcardemulationtransactionwithcurrentcredential(over:options:))

# performCardEmulationTransactionWithCurrentCredential(over:options:)

**Framework:** SecureElementCredential  
**Kind:** Instance Method  
**Availability:** iOS 18.1+ · iPadOS 18.1+

Activate the current credential in Wired mode to enter Card Emulation mode.

## Declaration

```swift
func performCardEmulationTransactionWithCurrentCredential(over scene: UIScene, options: CredentialSession.CardEmulationOptions = .init()) async throws
```

## Parameters

- `scene`: The [UIScene](../../uikit/uiscene.md) the authentication sheet appears over.
- `options`: Options with which to transition the credential to card emulation mode.

## Mentioned In

- [Accessing and using secure element credentials](../accessing-and-using-secure-element-credentials.md)

<a id="discussion"></a>

## Discussion

This call leads to the following sequence of events.

1. Prompts the user to authorize Card Emulation.
2. Deselects the instance on the wired interface.
3. Calls the broker interface with authorization information (if applicable). See the integration guide in the [Apple Business Register](https://register.apple.com) for more information about this interface.
4. Makes the instance available over the contactless interface and transition the session to emulation state.

This process is guaranteed to preserve contents of the Clear On Reset buffer in the operating system running on the Secure Element. This allows you to create some context in wired mode that remains valid later in card emulation mode.

Use the following flow to call this method:

1. Call [acquirePresentmentAssertion()](acquirepresentmentassertion%28%29.md) before calling this function to ensure that UI from other applications’ payment tasks don’t interfere with this transaction.
2. Relinquish the asssertion with [relinquish()](presentmentintentassertion/relinquish%28%29.md) immediately prior to calling `performCardEmulationTransactionWithCurrentCredential(over:options:)`.
3. After presenting the credential, call [endWiredMode()](endwiredmode%28%29.md) to return to management mode.
4. If you have further proprietary payment UI to perform, use [acquirePresentmentAssertion()](acquirepresentmentassertion%28%29.md) to re-acquire the assertion. Perform your tasks, then call [relinquish()](presentmentintentassertion/relinquish%28%29.md) again. Re-acquiring the assertion is subject to the limit of two assertions in an 80-second span.

The credential session state must be [CredentialSession.State.wired(credential:)](state-swift.enum/wired%28credential_%29.md) prior to calling this method. The state transitions to [CredentialSession.State.management](state-swift.enum/management.md) if the call encounters a [CredentialSession.ErrorCode.resourceUnavailable](errorcode/resourceunavailable.md) error; otherwise the state remains unchanged.

> **Important**

> Calling this method may generate a billable event to the credential provider.

> **Throws**

> An [CredentialSession.ErrorCode](errorcode.md). The most common errors are:
>
> - [CredentialSession.ErrorCode.userCanceledAuthorization](errorcode/usercanceledauthorization.md): The user dismissed the authorization sheet.

## See Also

### Performing card emulation

- [performTransaction(using:over:options:)](performtransaction%28using_over_options_%29.md): Prompts the user for authorization and then activate a credential for card emulation.
- [CredentialSession.CardEmulationOptions](cardemulationoptions.md): Options for customizing card emulation behavior.
- [endCardEmulation()](endcardemulation%28%29.md): Ends card emulation and transitions the session to management state.
