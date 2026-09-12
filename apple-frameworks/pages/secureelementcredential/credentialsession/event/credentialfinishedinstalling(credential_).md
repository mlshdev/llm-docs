> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/secureelementcredential/credentialsession/event/credentialfinishedinstalling(credential:)](https://developer.apple.com/documentation/secureelementcredential/credentialsession/event/credentialfinishedinstalling(credential:))

# CredentialSession.Event.credentialFinishedInstalling(credential:)

**Framework:** SecureElementCredential  
**Kind:** Case  
**Availability:** iOS 18.1+ · iPadOS 18.1+

The session finished installing a credential.

## Declaration

```swift
case credentialFinishedInstalling(credential: CredentialSession.Credential)
```

<a id="discussion"></a>

## Discussion

The associated value `credential` indicates which credential finished installing.

The [CredentialSession.Credential](../credential.md) object returned could be in:

- [CredentialSession.Credential.State.installed(instances:)](../credential/state-swift.enum/installed%28instances_%29.md) if the installation succeeded
- [CredentialSession.Credential.State.installationFailed](../credential/state-swift.enum/installationfailed.md) if the installation failed

## See Also

### Credential events

- [CredentialSession.Credential](../credential.md): Information about a credential that a credential session retrieves from the Secure Element.
