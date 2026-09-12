> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nevpnikev2securityassociationparameters](https://developer.apple.com/documentation/networkextension/nevpnikev2securityassociationparameters)

# NEVPNIKEv2SecurityAssociationParameters (Swift)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

Parameters for an IKEv2 Security Association.

## Declaration

```swift
class NEVPNIKEv2SecurityAssociationParameters
```

## Topics

### IKEv2 Security Association parameters

- [encryptionAlgorithm](nevpnikev2securityassociationparameters/encryptionalgorithm.md): The algorithm used by the Security Association to encrypt and decrypt data.
- [NEVPNIKEv2EncryptionAlgorithm](nevpnikev2encryptionalgorithm.md): An enumeration of encryption algorithm values.
- [integrityAlgorithm](nevpnikev2securityassociationparameters/integrityalgorithm.md): The algorithm used by the Security Association to verify the integrity of data.
- [NEVPNIKEv2IntegrityAlgorithm](nevpnikev2integrityalgorithm.md)
- [diffieHellmanGroup](nevpnikev2securityassociationparameters/diffiehellmangroup.md): The Diffie Hellman group used by the Security Association.
- [NEVPNIKEv2DiffieHellmanGroup](nevpnikev2diffiehellmangroup.md): An enumeration of Diffie-Hellman group values.
- [lifetimeMinutes](nevpnikev2securityassociationparameters/lifetimeminutes.md): The duration of the lifetime of the Security Association, in minutes.
- [postQuantumKeyExchangeMethods](nevpnikev2securityassociationparameters/postquantumkeyexchangemethods-3173s.md): A list of the quantum-secure key exchange methods the Security Association uses.
- [NEVPNIKEv2PostQuantumKeyExchangeMethod](nevpnikev2postquantumkeyexchangemethod.md): Quantum-secure key exchange methods you use with IKEv2 servers.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Accessing IKEv2 Security Association parameters

- [ikeSecurityAssociationParameters](nevpnprotocolikev2/ikesecurityassociationparameters.md): An [NEVPNIKEv2SecurityAssociationParameters](nevpnikev2securityassociationparameters.md) object containing the parameters for the initial IKE security association to be negotiated with the IKEv2 server.
- [childSecurityAssociationParameters](nevpnprotocolikev2/childsecurityassociationparameters.md): An [NEVPNIKEv2SecurityAssociationParameters](nevpnikev2securityassociationparameters.md) object containing the parameters for the child IPSec security associations to be negotiated for each IKEv2 policy.

# NEVPNIKEv2SecurityAssociationParameters (Objective-C)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

Parameters for an IKEv2 Security Association.

## Declaration

```objectivec
@interface NEVPNIKEv2SecurityAssociationParameters : NSObject
```

## Topics

### IKEv2 Security Association parameters

- [encryptionAlgorithm](nevpnikev2securityassociationparameters/encryptionalgorithm.md): The algorithm used by the Security Association to encrypt and decrypt data.
- [NEVPNIKEv2EncryptionAlgorithm](nevpnikev2encryptionalgorithm.md): An enumeration of encryption algorithm values.
- [integrityAlgorithm](nevpnikev2securityassociationparameters/integrityalgorithm.md): The algorithm used by the Security Association to verify the integrity of data.
- [NEVPNIKEv2IntegrityAlgorithm](nevpnikev2integrityalgorithm.md)
- [diffieHellmanGroup](nevpnikev2securityassociationparameters/diffiehellmangroup.md): The Diffie Hellman group used by the Security Association.
- [NEVPNIKEv2DiffieHellmanGroup](nevpnikev2diffiehellmangroup.md): An enumeration of Diffie-Hellman group values.
- [lifetimeMinutes](nevpnikev2securityassociationparameters/lifetimeminutes.md): The duration of the lifetime of the Security Association, in minutes.
- [postQuantumKeyExchangeMethods](nevpnikev2securityassociationparameters/postquantumkeyexchangemethods-56672.md): A list of the quantum-secure key exchange methods the Security Association uses.
- [NEVPNIKEv2PostQuantumKeyExchangeMethod](nevpnikev2postquantumkeyexchangemethod.md): Quantum-secure key exchange methods you use with IKEv2 servers.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Accessing IKEv2 Security Association parameters

- [IKESecurityAssociationParameters](nevpnprotocolikev2/ikesecurityassociationparameters.md): An [NEVPNIKEv2SecurityAssociationParameters](nevpnikev2securityassociationparameters.md) object containing the parameters for the initial IKE security association to be negotiated with the IKEv2 server.
- [childSecurityAssociationParameters](nevpnprotocolikev2/childsecurityassociationparameters.md): An [NEVPNIKEv2SecurityAssociationParameters](nevpnikev2securityassociationparameters.md) object containing the parameters for the child IPSec security associations to be negotiated for each IKEv2 policy.
