> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nevpnikev2encryptionalgorithm](https://developer.apple.com/documentation/networkextension/nevpnikev2encryptionalgorithm)

# NEVPNIKEv2EncryptionAlgorithm (Swift)

**Framework:** Network Extension  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

An enumeration of encryption algorithm values.

## Declaration

```swift
enum NEVPNIKEv2EncryptionAlgorithm
```

## Topics

### Encryption algorithms

- [NEVPNIKEv2EncryptionAlgorithm.algorithmAES128](nevpnikev2encryptionalgorithm/algorithmaes128.md): Deprecated. Advanced Encryption Standard 256-bit (AES256).
- [NEVPNIKEv2EncryptionAlgorithm.algorithmAES256](nevpnikev2encryptionalgorithm/algorithmaes256.md): Advanced Encryption Standard 256 bit (AES256).
- [NEVPNIKEv2EncryptionAlgorithm.algorithmAES128GCM](nevpnikev2encryptionalgorithm/algorithmaes128gcm.md): Deprecated. Advanced Encryption Standard 128-bit Galois/Counter Mode (AES128GCM).
- [NEVPNIKEv2EncryptionAlgorithm.algorithmAES256GCM](nevpnikev2encryptionalgorithm/algorithmaes256gcm.md): Advanced Encryption Standard 256-bit Galois/Counter Mode (AES256GCM).
- [NEVPNIKEv2EncryptionAlgorithm.algorithmChaCha20Poly1305](nevpnikev2encryptionalgorithm/algorithmchacha20poly1305.md): ChaCha20 and Poly1305 (ChaCha20Poly1305).

### Initializers

- [init(rawValue:)](nevpnikev2encryptionalgorithm/init%28rawvalue_%29.md)

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
- [integrityAlgorithm](nevpnikev2securityassociationparameters/integrityalgorithm.md): The algorithm used by the Security Association to verify the integrity of data.
- [NEVPNIKEv2IntegrityAlgorithm](nevpnikev2integrityalgorithm.md)
- [diffieHellmanGroup](nevpnikev2securityassociationparameters/diffiehellmangroup.md): The Diffie Hellman group used by the Security Association.
- [NEVPNIKEv2DiffieHellmanGroup](nevpnikev2diffiehellmangroup.md): An enumeration of Diffie-Hellman group values.
- [lifetimeMinutes](nevpnikev2securityassociationparameters/lifetimeminutes.md): The duration of the lifetime of the Security Association, in minutes.
- [postQuantumKeyExchangeMethods](nevpnikev2securityassociationparameters/postquantumkeyexchangemethods-3173s.md): A list of the quantum-secure key exchange methods the Security Association uses.
- [NEVPNIKEv2PostQuantumKeyExchangeMethod](nevpnikev2postquantumkeyexchangemethod.md): Quantum-secure key exchange methods you use with IKEv2 servers.

# NEVPNIKEv2EncryptionAlgorithm (Objective-C)

**Framework:** Network Extension  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

An enumeration of encryption algorithm values.

## Declaration

```objectivec
enum NEVPNIKEv2EncryptionAlgorithm : NSInteger;
```

## Topics

### Encryption algorithms

- [NEVPNIKEv2EncryptionAlgorithmAES128](nevpnikev2encryptionalgorithm/algorithmaes128.md): Deprecated. Advanced Encryption Standard 256-bit (AES256).
- [NEVPNIKEv2EncryptionAlgorithmAES256](nevpnikev2encryptionalgorithm/algorithmaes256.md): Advanced Encryption Standard 256 bit (AES256).
- [NEVPNIKEv2EncryptionAlgorithmAES128GCM](nevpnikev2encryptionalgorithm/algorithmaes128gcm.md): Deprecated. Advanced Encryption Standard 128-bit Galois/Counter Mode (AES128GCM).
- [NEVPNIKEv2EncryptionAlgorithmAES256GCM](nevpnikev2encryptionalgorithm/algorithmaes256gcm.md): Advanced Encryption Standard 256-bit Galois/Counter Mode (AES256GCM).
- [NEVPNIKEv2EncryptionAlgorithmChaCha20Poly1305](nevpnikev2encryptionalgorithm/algorithmchacha20poly1305.md): ChaCha20 and Poly1305 (ChaCha20Poly1305).

### Enumeration Cases

- [NEVPNIKEv2EncryptionAlgorithm3DES](nevpnikev2encryptionalgorithm/nevpnikev2encryptionalgorithm3des.md): Deprecated.
- [NEVPNIKEv2EncryptionAlgorithmDES](nevpnikev2encryptionalgorithm/nevpnikev2encryptionalgorithmdes.md): Deprecated.

## See Also

### IKEv2 Security Association parameters

- [encryptionAlgorithm](nevpnikev2securityassociationparameters/encryptionalgorithm.md): The algorithm used by the Security Association to encrypt and decrypt data.
- [integrityAlgorithm](nevpnikev2securityassociationparameters/integrityalgorithm.md): The algorithm used by the Security Association to verify the integrity of data.
- [NEVPNIKEv2IntegrityAlgorithm](nevpnikev2integrityalgorithm.md)
- [diffieHellmanGroup](nevpnikev2securityassociationparameters/diffiehellmangroup.md): The Diffie Hellman group used by the Security Association.
- [NEVPNIKEv2DiffieHellmanGroup](nevpnikev2diffiehellmangroup.md): An enumeration of Diffie-Hellman group values.
- [lifetimeMinutes](nevpnikev2securityassociationparameters/lifetimeminutes.md): The duration of the lifetime of the Security Association, in minutes.
- [postQuantumKeyExchangeMethods](nevpnikev2securityassociationparameters/postquantumkeyexchangemethods-56672.md): A list of the quantum-secure key exchange methods the Security Association uses.
- [NEVPNIKEv2PostQuantumKeyExchangeMethod](nevpnikev2postquantumkeyexchangemethod.md): Quantum-secure key exchange methods you use with IKEv2 servers.
