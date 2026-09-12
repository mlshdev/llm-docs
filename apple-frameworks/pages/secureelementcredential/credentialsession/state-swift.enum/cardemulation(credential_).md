> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/secureelementcredential/credentialsession/state-swift.enum/cardemulation(credential:)](https://developer.apple.com/documentation/secureelementcredential/credentialsession/state-swift.enum/cardemulation(credential:))

# CredentialSession.State.cardEmulation(credential:)

**Framework:** SecureElementCredential  
**Kind:** Case  
**Availability:** iOS 18.1+ · iPadOS 18.1+

The state for performing card emulation with a given credential.

## Declaration

```swift
case cardEmulation(credential: CredentialSession.Credential)
```

## Parameters

- `credential`: The credential currently in use by the session.

## Mentioned In

- [Accessing and using secure element credentials](../../accessing-and-using-secure-element-credentials.md)

<a id="discussion"></a>

## Discussion

In the card emulation state, the session makes the selected credential available to NFC contactless readers.

## See Also

### Credential session states

- [CredentialSession.State.management](management.md): The state for managing the credential session.
- [CredentialSession.State.wired(credential:)](wired%28credential_%29.md): The state for performing wired operations with a given credential.
- [CredentialSession.Credential](../credential.md): Information about a credential that a credential session retrieves from the Secure Element.
- [CredentialSession.State.invalid](invalid.md): The state of an invalid credential session.
