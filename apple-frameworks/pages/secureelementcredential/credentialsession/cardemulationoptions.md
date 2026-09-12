> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/secureelementcredential/credentialsession/cardemulationoptions](https://developer.apple.com/documentation/secureelementcredential/credentialsession/cardemulationoptions)

# CredentialSession.CardEmulationOptions

**Framework:** SecureElementCredential  
**Kind:** Structure  
**Availability:** iOS 18.1+ · iPadOS 18.1+

Options for customizing card emulation behavior.

## Declaration

```swift
struct CardEmulationOptions
```

## Topics

### Creating an options instance

- [init()](cardemulationoptions/init%28%29.md): Creates a card emulation options instance.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Performing card emulation

- [performCardEmulationTransactionWithCurrentCredential(over:options:)](performcardemulationtransactionwithcurrentcredential%28over_options_%29.md): Activate the current credential in Wired mode to enter Card Emulation mode.
- [performTransaction(using:over:options:)](performtransaction%28using_over_options_%29.md): Prompts the user for authorization and then activate a credential for card emulation.
- [endCardEmulation()](endcardemulation%28%29.md): Ends card emulation and transitions the session to management state.
