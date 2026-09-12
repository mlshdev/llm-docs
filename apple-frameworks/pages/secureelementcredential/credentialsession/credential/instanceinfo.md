> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/secureelementcredential/credentialsession/credential/instanceinfo](https://developer.apple.com/documentation/secureelementcredential/credentialsession/credential/instanceinfo)

# CredentialSession.Credential.InstanceInfo

**Framework:** SecureElementCredential  
**Kind:** Structure  
**Availability:** iOS 18.1+ · iPadOS 18.1+

Information about an applet instance associated with a specific credential.

## Declaration

```swift
struct InstanceInfo
```

## Topics

### Inspecting instance identifiers

- [instanceAID](instanceinfo/instanceaid.md): The unique identifier for the applet instance.
- [packageAID](instanceinfo/packageaid.md): The unique identifier of the package you use to install the instance.
- [moduleAID](instanceinfo/moduleaid.md): The module identifier of the package with which this instance is associated.

### Inspecting the instance type

- [instanceType](instanceinfo/instancetype-swift.property.md): The instance type of this instance.
- [CredentialSession.Credential.InstanceInfo.InstanceType](instanceinfo/instancetype-swift.enum.md): An enumeration of Secure Element applet instance types.

### Creating a secure channel

- [securityDomainAID](instanceinfo/securitydomainaid.md): The unique identifier of the security domain you use to install the instance.
- [securityDomainKeyInfo](instanceinfo/securitydomainkeyinfo.md): A data blob which contains the security domain On-Board Generated Key (OBGK).

### Inspecting applet instance state

- [lifeCycleState](instanceinfo/lifecyclestate.md): Information about the state of the applet instance.

### Instance Properties

- [securityDomainCounter](instanceinfo/securitydomaincounter.md): The authentication counter of the security domain.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
