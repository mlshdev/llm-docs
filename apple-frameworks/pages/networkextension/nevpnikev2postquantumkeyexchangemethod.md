> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nevpnikev2postquantumkeyexchangemethod](https://developer.apple.com/documentation/networkextension/nevpnikev2postquantumkeyexchangemethod)

# NEVPNIKEv2PostQuantumKeyExchangeMethod (Swift)

**Framework:** Network Extension  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Quantum-secure key exchange methods you use with IKEv2 servers.

## Declaration

```swift
enum NEVPNIKEv2PostQuantumKeyExchangeMethod
```

## Topics

### Key exchange methods

- [NEVPNIKEv2PostQuantumKeyExchangeMethod.method36](nevpnikev2postquantumkeyexchangemethod/method36.md): Instructs the server to use the ML-KEM-768 key exchange method.
- [NEVPNIKEv2PostQuantumKeyExchangeMethod.method37](nevpnikev2postquantumkeyexchangemethod/method37.md): Instructs the server to use the ML-KEM-1024 key exchange method.
- [NEVPNIKEv2PostQuantumKeyExchangeMethod.methodNone](nevpnikev2postquantumkeyexchangemethod/methodnone.md): Instructs the server not to use a quantum-secure key exchange method.

### Initializers

- [init(rawValue:)](nevpnikev2postquantumkeyexchangemethod/init%28rawvalue_%29.md)

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
- [NEVPNIKEv2IntegrityAlgorithm](nevpnikev2integrityalgorithm.md)
- [diffieHellmanGroup](nevpnikev2securityassociationparameters/diffiehellmangroup.md): The Diffie Hellman group used by the Security Association.
- [NEVPNIKEv2DiffieHellmanGroup](nevpnikev2diffiehellmangroup.md): An enumeration of Diffie-Hellman group values.
- [lifetimeMinutes](nevpnikev2securityassociationparameters/lifetimeminutes.md): The duration of the lifetime of the Security Association, in minutes.
- [postQuantumKeyExchangeMethods](nevpnikev2securityassociationparameters/postquantumkeyexchangemethods-3173s.md): A list of the quantum-secure key exchange methods the Security Association uses.

# NEVPNIKEv2PostQuantumKeyExchangeMethod (Objective-C)

**Framework:** Network Extension  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Quantum-secure key exchange methods you use with IKEv2 servers.

## Declaration

```objectivec
enum NEVPNIKEv2PostQuantumKeyExchangeMethod : NSInteger;
```

## Topics

### Key exchange methods

- [NEVPNIKEv2PostQuantumKeyExchangeMethod36](nevpnikev2postquantumkeyexchangemethod/method36.md): Instructs the server to use the ML-KEM-768 key exchange method.
- [NEVPNIKEv2PostQuantumKeyExchangeMethod37](nevpnikev2postquantumkeyexchangemethod/method37.md): Instructs the server to use the ML-KEM-1024 key exchange method.
- [NEVPNIKEv2PostQuantumKeyExchangeMethodNone](nevpnikev2postquantumkeyexchangemethod/methodnone.md): Instructs the server not to use a quantum-secure key exchange method.

## See Also

### IKEv2 Security Association parameters

- [encryptionAlgorithm](nevpnikev2securityassociationparameters/encryptionalgorithm.md): The algorithm used by the Security Association to encrypt and decrypt data.
- [NEVPNIKEv2EncryptionAlgorithm](nevpnikev2encryptionalgorithm.md): An enumeration of encryption algorithm values.
- [integrityAlgorithm](nevpnikev2securityassociationparameters/integrityalgorithm.md): The algorithm used by the Security Association to verify the integrity of data.
- [NEVPNIKEv2IntegrityAlgorithm](nevpnikev2integrityalgorithm.md)
- [diffieHellmanGroup](nevpnikev2securityassociationparameters/diffiehellmangroup.md): The Diffie Hellman group used by the Security Association.
- [NEVPNIKEv2DiffieHellmanGroup](nevpnikev2diffiehellmangroup.md): An enumeration of Diffie-Hellman group values.
- [lifetimeMinutes](nevpnikev2securityassociationparameters/lifetimeminutes.md): The duration of the lifetime of the Security Association, in minutes.
- [postQuantumKeyExchangeMethods](nevpnikev2securityassociationparameters/postquantumkeyexchangemethods-56672.md): A list of the quantum-secure key exchange methods the Security Association uses.
