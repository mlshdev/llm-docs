> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nevpnikev2integrityalgorithm](https://developer.apple.com/documentation/networkextension/nevpnikev2integrityalgorithm)

# NEVPNIKEv2IntegrityAlgorithm (Swift)

**Framework:** Network Extension  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

## Declaration

```swift
enum NEVPNIKEv2IntegrityAlgorithm
```

## Topics

### Integrity algorithms

- [NEVPNIKEv2IntegrityAlgorithm.SHA256](nevpnikev2integrityalgorithm/sha256.md): SHA-2 256-bit.
- [NEVPNIKEv2IntegrityAlgorithm.SHA384](nevpnikev2integrityalgorithm/sha384.md): SHA-2 384-bit.
- [NEVPNIKEv2IntegrityAlgorithm.SHA512](nevpnikev2integrityalgorithm/sha512.md): SHA-2 512-bit.

### Initializers

- [init(rawValue:)](nevpnikev2integrityalgorithm/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### IKEv2 Security Association parameters

- [encryptionAlgorithm](nevpnikev2securityassociationparameters/encryptionalgorithm.md): The algorithm used by the Security Association to encrypt and decrypt data.
- [NEVPNIKEv2EncryptionAlgorithm](nevpnikev2encryptionalgorithm.md): An enumeration of encryption algorithm values.
- [integrityAlgorithm](nevpnikev2securityassociationparameters/integrityalgorithm.md): The algorithm used by the Security Association to verify the integrity of data.
- [diffieHellmanGroup](nevpnikev2securityassociationparameters/diffiehellmangroup.md): The Diffie Hellman group used by the Security Association.
- [NEVPNIKEv2DiffieHellmanGroup](nevpnikev2diffiehellmangroup.md): An enumeration of Diffie-Hellman group values.
- [lifetimeMinutes](nevpnikev2securityassociationparameters/lifetimeminutes.md): The duration of the lifetime of the Security Association, in minutes.
- [postQuantumKeyExchangeMethods](nevpnikev2securityassociationparameters/postquantumkeyexchangemethods-3173s.md): A list of the quantum-secure key exchange methods the Security Association uses.
- [NEVPNIKEv2PostQuantumKeyExchangeMethod](nevpnikev2postquantumkeyexchangemethod.md): Quantum-secure key exchange methods you use with IKEv2 servers.

# NEVPNIKEv2IntegrityAlgorithm (Objective-C)

**Framework:** Network Extension  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

## Declaration

```objectivec
enum NEVPNIKEv2IntegrityAlgorithm : NSInteger;
```

## Topics

### Integrity algorithms

- [NEVPNIKEv2IntegrityAlgorithmSHA256](nevpnikev2integrityalgorithm/sha256.md): SHA-2 256-bit.
- [NEVPNIKEv2IntegrityAlgorithmSHA384](nevpnikev2integrityalgorithm/sha384.md): SHA-2 384-bit.
- [NEVPNIKEv2IntegrityAlgorithmSHA512](nevpnikev2integrityalgorithm/sha512.md): SHA-2 512-bit.

### Enumeration Cases

- [NEVPNIKEv2IntegrityAlgorithmSHA160](nevpnikev2integrityalgorithm/nevpnikev2integrityalgorithmsha160.md): Deprecated.
- [NEVPNIKEv2IntegrityAlgorithmSHA96](nevpnikev2integrityalgorithm/nevpnikev2integrityalgorithmsha96.md): Deprecated.

## See Also

### IKEv2 Security Association parameters

- [encryptionAlgorithm](nevpnikev2securityassociationparameters/encryptionalgorithm.md): The algorithm used by the Security Association to encrypt and decrypt data.
- [NEVPNIKEv2EncryptionAlgorithm](nevpnikev2encryptionalgorithm.md): An enumeration of encryption algorithm values.
- [integrityAlgorithm](nevpnikev2securityassociationparameters/integrityalgorithm.md): The algorithm used by the Security Association to verify the integrity of data.
- [diffieHellmanGroup](nevpnikev2securityassociationparameters/diffiehellmangroup.md): The Diffie Hellman group used by the Security Association.
- [NEVPNIKEv2DiffieHellmanGroup](nevpnikev2diffiehellmangroup.md): An enumeration of Diffie-Hellman group values.
- [lifetimeMinutes](nevpnikev2securityassociationparameters/lifetimeminutes.md): The duration of the lifetime of the Security Association, in minutes.
- [postQuantumKeyExchangeMethods](nevpnikev2securityassociationparameters/postquantumkeyexchangemethods-56672.md): A list of the quantum-secure key exchange methods the Security Association uses.
- [NEVPNIKEv2PostQuantumKeyExchangeMethod](nevpnikev2postquantumkeyexchangemethod.md): Quantum-secure key exchange methods you use with IKEv2 servers.
