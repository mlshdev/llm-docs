> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/secureelementcredential/credentialsession/credential/instanceinfo/instancetype-swift.enum/headapplication](https://developer.apple.com/documentation/secureelementcredential/credentialsession/credential/instanceinfo/instancetype-swift.enum/headapplication)

# CredentialSession.Credential.InstanceInfo.InstanceType.headApplication

**Framework:** SecureElementCredential  
**Kind:** Case  
**Availability:** iOS 18.1+ · iPadOS 18.1+

A type that indicates an instance is the head application of a group.

## Declaration

```swift
case headApplication
```

<a id="discussion"></a>

## Discussion

Use the [instanceAID](../instanceaid.md) of this object when calling [performTransactionInWiredMode(using:instanceAID:)](../../../../credentialtransaction/performtransactioninwiredmode%28using_instanceaid_%29.md). Doing so delivers the authentication token to all of the [CredentialSession.Credential.InstanceInfo.InstanceType.groupApplication](groupapplication.md) members through the broker interface on the Secure Element, as described in the [Apple Business Register](https://register.apple.com) Secure Element (ABR SE) documents.

## See Also

### Instance types

- [CredentialSession.Credential.InstanceInfo.InstanceType.standalone](standalone.md): A type that indicates an instance doesn’t have any associative relationships with other instances.
- [CredentialSession.Credential.InstanceInfo.InstanceType.groupApplication](groupapplication.md): A type that indicates an instance is a member of a group of application instances.
