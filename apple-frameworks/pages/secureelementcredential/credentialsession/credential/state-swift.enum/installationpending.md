> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/secureelementcredential/credentialsession/credential/state-swift.enum/installationpending](https://developer.apple.com/documentation/secureelementcredential/credentialsession/credential/state-swift.enum/installationpending)

# CredentialSession.Credential.State.installationPending

**Framework:** SecureElementCredential  
**Kind:** Case  
**Availability:** iOS 18.1+ · iPadOS 18.1+

The credential installation is pending but isn’t complete.

## Declaration

```swift
case installationPending
```

<a id="discussion"></a>

## Discussion

A credential is in this state after sending the provisioning request but before installation actually completes or fails.

## See Also

### Credential states

- [CredentialSession.Credential.State.installed(instances:)](installed%28instances_%29.md): The credential installation is complete for one or more instances.
- [CredentialSession.Credential.InstanceInfo](../instanceinfo.md): Information about an applet instance associated with a specific credential.
- [CredentialSession.Credential.State.installationFailed](installationfailed.md): The credential installation failed.
