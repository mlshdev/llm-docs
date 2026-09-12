> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/secureelementcredential/credentialsession/endcardemulation()](https://developer.apple.com/documentation/secureelementcredential/credentialsession/endcardemulation())

# endCardEmulation()

**Framework:** SecureElementCredential  
**Kind:** Instance Method  
**Availability:** iOS 18.1+ · iPadOS 18.1+

Ends card emulation and transitions the session to management state.

## Declaration

```swift
func endCardEmulation() async throws
```

## Mentioned In

- [Accessing and using secure element credentials](../accessing-and-using-secure-element-credentials.md)

## See Also

### Performing card emulation

- [performCardEmulationTransactionWithCurrentCredential(over:options:)](performcardemulationtransactionwithcurrentcredential%28over_options_%29.md): Activate the current credential in Wired mode to enter Card Emulation mode.
- [performTransaction(using:over:options:)](performtransaction%28using_over_options_%29.md): Prompts the user for authorization and then activate a credential for card emulation.
- [CredentialSession.CardEmulationOptions](cardemulationoptions.md): Options for customizing card emulation behavior.
