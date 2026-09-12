> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/secureelementcredential/credentialsession/state-swift.enum/management](https://developer.apple.com/documentation/secureelementcredential/credentialsession/state-swift.enum/management)

# CredentialSession.State.management

**Framework:** SecureElementCredential  
**Kind:** Case  
**Availability:** iOS 18.1+ · iPadOS 18.1+

The state for managing the credential session.

## Declaration

```swift
case management
```

## Mentioned In

- [Accessing and using secure element credentials](../../accessing-and-using-secure-element-credentials.md)

<a id="discussion"></a>

## Discussion

In this state, the session can list all credentials and can add and delete individual credentials.

## See Also

### Credential session states

- [CredentialSession.State.wired(credential:)](wired%28credential_%29.md): The state for performing wired operations with a given credential.
- [CredentialSession.State.cardEmulation(credential:)](cardemulation%28credential_%29.md): The state for performing card emulation with a given credential.
- [CredentialSession.Credential](../credential.md): Information about a credential that a credential session retrieves from the Secure Element.
- [CredentialSession.State.invalid](invalid.md): The state of an invalid credential session.
