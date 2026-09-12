> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/secureelementcredential/credentialsession/credential/state-swift.enum/installationfailed](https://developer.apple.com/documentation/secureelementcredential/credentialsession/credential/state-swift.enum/installationfailed)

# CredentialSession.Credential.State.installationFailed

**Framework:** SecureElementCredential  
**Kind:** Case  
**Availability:** iOS 18.1+ · iPadOS 18.1+

The credential installation failed.

## Declaration

```swift
case installationFailed
```

<a id="discussion"></a>

## Discussion

A credential is only in this state following a failed installation. Prior to success or failure, the state is [CredentialSession.Credential.State.installationPending](installationpending.md).

## See Also

### Credential states

- [CredentialSession.Credential.State.installationPending](installationpending.md): The credential installation is pending but isn’t complete.
- [CredentialSession.Credential.State.installed(instances:)](installed%28instances_%29.md): The credential installation is complete for one or more instances.
- [CredentialSession.Credential.InstanceInfo](../instanceinfo.md): Information about an applet instance associated with a specific credential.
