> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/secureelementcredential/credentialsession/credential/instanceinfo/instancetype-swift.enum/groupapplication](https://developer.apple.com/documentation/secureelementcredential/credentialsession/credential/instanceinfo/instancetype-swift.enum/groupapplication)

# CredentialSession.Credential.InstanceInfo.InstanceType.groupApplication

**Framework:** SecureElementCredential  
**Kind:** Case  
**Availability:** iOS 18.1+ · iPadOS 18.1+

A type that indicates an instance is a member of a group of application instances.

## Declaration

```swift
case groupApplication
```

<a id="discussion"></a>

## Discussion

An instance with this type is a member of a group that’s associated with a [CredentialSession.Credential.InstanceInfo.InstanceType.headApplication](headapplication.md) instance.

If you use use the [instanceAID](../instanceaid.md) of the group member when calling [performTransactionInWiredMode(using:instanceAID:)](../../../../credentialtransaction/performtransactioninwiredmode%28using_instanceaid_%29.md), only the group member receives the authorization token for activation. To activate all members of the group, use the [instanceAID](../instanceaid.md) of the [CredentialSession.Credential.InstanceInfo.InstanceType.headApplication](headapplication.md) instead.

## See Also

### Instance types

- [CredentialSession.Credential.InstanceInfo.InstanceType.standalone](standalone.md): A type that indicates an instance doesn’t have any associative relationships with other instances.
- [CredentialSession.Credential.InstanceInfo.InstanceType.headApplication](headapplication.md): A type that indicates an instance is the head application of a group.
