> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nevpnikev2securityassociationparameters/integrityalgorithm](https://developer.apple.com/documentation/networkextension/nevpnikev2securityassociationparameters/integrityalgorithm)

# integrityAlgorithm (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

The algorithm used by the Security Association to verify the integrity of data.

## Declaration

```swift
var integrityAlgorithm: NEVPNIKEv2IntegrityAlgorithm { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [NEVPNIKEv2IntegrityAlgorithm.SHA256](../nevpnikev2integrityalgorithm/sha256.md).

The system infers its IKE psedo-random number generation algorithm based on the integrity algorithm.

## See Also

### IKEv2 Security Association parameters

- [encryptionAlgorithm](encryptionalgorithm.md): The algorithm used by the Security Association to encrypt and decrypt data.
- [NEVPNIKEv2EncryptionAlgorithm](../nevpnikev2encryptionalgorithm.md): An enumeration of encryption algorithm values.
- [NEVPNIKEv2IntegrityAlgorithm](../nevpnikev2integrityalgorithm.md)
- [diffieHellmanGroup](diffiehellmangroup.md): The Diffie Hellman group used by the Security Association.
- [NEVPNIKEv2DiffieHellmanGroup](../nevpnikev2diffiehellmangroup.md): An enumeration of Diffie-Hellman group values.
- [lifetimeMinutes](lifetimeminutes.md): The duration of the lifetime of the Security Association, in minutes.
- [postQuantumKeyExchangeMethods](postquantumkeyexchangemethods-3173s.md): A list of the quantum-secure key exchange methods the Security Association uses.
- [NEVPNIKEv2PostQuantumKeyExchangeMethod](../nevpnikev2postquantumkeyexchangemethod.md): Quantum-secure key exchange methods you use with IKEv2 servers.

# integrityAlgorithm (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

The algorithm used by the Security Association to verify the integrity of data.

## Declaration

```objectivec
@property NEVPNIKEv2IntegrityAlgorithm integrityAlgorithm;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [NEVPNIKEv2IntegrityAlgorithmSHA256](../nevpnikev2integrityalgorithm/sha256.md).

The system infers its IKE psedo-random number generation algorithm based on the integrity algorithm.

## See Also

### IKEv2 Security Association parameters

- [encryptionAlgorithm](encryptionalgorithm.md): The algorithm used by the Security Association to encrypt and decrypt data.
- [NEVPNIKEv2EncryptionAlgorithm](../nevpnikev2encryptionalgorithm.md): An enumeration of encryption algorithm values.
- [NEVPNIKEv2IntegrityAlgorithm](../nevpnikev2integrityalgorithm.md)
- [diffieHellmanGroup](diffiehellmangroup.md): The Diffie Hellman group used by the Security Association.
- [NEVPNIKEv2DiffieHellmanGroup](../nevpnikev2diffiehellmangroup.md): An enumeration of Diffie-Hellman group values.
- [lifetimeMinutes](lifetimeminutes.md): The duration of the lifetime of the Security Association, in minutes.
- [postQuantumKeyExchangeMethods](postquantumkeyexchangemethods-56672.md): A list of the quantum-secure key exchange methods the Security Association uses.
- [NEVPNIKEv2PostQuantumKeyExchangeMethod](../nevpnikev2postquantumkeyexchangemethod.md): Quantum-secure key exchange methods you use with IKEv2 servers.
