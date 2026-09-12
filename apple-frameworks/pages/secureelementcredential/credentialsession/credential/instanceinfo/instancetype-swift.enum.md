> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/secureelementcredential/credentialsession/credential/instanceinfo/instancetype-swift.enum](https://developer.apple.com/documentation/secureelementcredential/credentialsession/credential/instanceinfo/instancetype-swift.enum)

# CredentialSession.Credential.InstanceInfo.InstanceType

**Framework:** SecureElementCredential  
**Kind:** Enumeration  
**Availability:** iOS 18.1+ · iPadOS 18.1+

An enumeration of Secure Element applet instance types.

## Declaration

```swift
enum InstanceType
```

## Topics

### Instance types

- [CredentialSession.Credential.InstanceInfo.InstanceType.standalone](instancetype-swift.enum/standalone.md): A type that indicates an instance doesn’t have any associative relationships with other instances.
- [CredentialSession.Credential.InstanceInfo.InstanceType.headApplication](instancetype-swift.enum/headapplication.md): A type that indicates an instance is the head application of a group.
- [CredentialSession.Credential.InstanceInfo.InstanceType.groupApplication](instancetype-swift.enum/groupapplication.md): A type that indicates an instance is a member of a group of application instances.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting the instance type

- [instanceType](instancetype-swift.property.md): The instance type of this instance.
