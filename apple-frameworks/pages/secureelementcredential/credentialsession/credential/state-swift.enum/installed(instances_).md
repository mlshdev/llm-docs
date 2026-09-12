> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/secureelementcredential/credentialsession/credential/state-swift.enum/installed(instances:)](https://developer.apple.com/documentation/secureelementcredential/credentialsession/credential/state-swift.enum/installed(instances:))

# CredentialSession.Credential.State.installed(instances:)

**Framework:** SecureElementCredential  
**Kind:** Case  
**Availability:** iOS 18.1+ · iPadOS 18.1+

The credential installation is complete for one or more instances.

## Declaration

```swift
case installed(instances: [CredentialSession.Credential.InstanceInfo])
```

<a id="discussion"></a>

## Discussion

The associated value `instances` is an array of applet instances associated with the installed credential.

## See Also

### Credential states

- [CredentialSession.Credential.State.installationPending](installationpending.md): The credential installation is pending but isn’t complete.
- [CredentialSession.Credential.InstanceInfo](../instanceinfo.md): Information about an applet instance associated with a specific credential.
- [CredentialSession.Credential.State.installationFailed](installationfailed.md): The credential installation failed.
