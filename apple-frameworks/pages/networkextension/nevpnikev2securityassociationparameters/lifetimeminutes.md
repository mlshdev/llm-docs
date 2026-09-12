> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nevpnikev2securityassociationparameters/lifetimeminutes](https://developer.apple.com/documentation/networkextension/nevpnikev2securityassociationparameters/lifetimeminutes)

# lifetimeMinutes (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

The duration of the lifetime of the Security Association, in minutes.

## Declaration

```swift
var lifetimeMinutes: Int32 { get set }
```

<a id="Discussion"></a>

## Discussion

The default is 60 for IKE Security Associations, and 30 for Child Security Associations. Before the end of the lifetime is reached, IKEv2 will attempt to negotiate new keys for the Security Association in order to maintain the IKEv2 session.

## See Also

### IKEv2 Security Association parameters

- [encryptionAlgorithm](encryptionalgorithm.md): The algorithm used by the Security Association to encrypt and decrypt data.
- [NEVPNIKEv2EncryptionAlgorithm](../nevpnikev2encryptionalgorithm.md): An enumeration of encryption algorithm values.
- [integrityAlgorithm](integrityalgorithm.md): The algorithm used by the Security Association to verify the integrity of data.
- [NEVPNIKEv2IntegrityAlgorithm](../nevpnikev2integrityalgorithm.md)
- [diffieHellmanGroup](diffiehellmangroup.md): The Diffie Hellman group used by the Security Association.
- [NEVPNIKEv2DiffieHellmanGroup](../nevpnikev2diffiehellmangroup.md): An enumeration of Diffie-Hellman group values.
- [postQuantumKeyExchangeMethods](postquantumkeyexchangemethods-3173s.md): A list of the quantum-secure key exchange methods the Security Association uses.
- [NEVPNIKEv2PostQuantumKeyExchangeMethod](../nevpnikev2postquantumkeyexchangemethod.md): Quantum-secure key exchange methods you use with IKEv2 servers.

# lifetimeMinutes (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

The duration of the lifetime of the Security Association, in minutes.

## Declaration

```objectivec
@property int32_t lifetimeMinutes;
```

<a id="Discussion"></a>

## Discussion

The default is 60 for IKE Security Associations, and 30 for Child Security Associations. Before the end of the lifetime is reached, IKEv2 will attempt to negotiate new keys for the Security Association in order to maintain the IKEv2 session.

## See Also

### IKEv2 Security Association parameters

- [encryptionAlgorithm](encryptionalgorithm.md): The algorithm used by the Security Association to encrypt and decrypt data.
- [NEVPNIKEv2EncryptionAlgorithm](../nevpnikev2encryptionalgorithm.md): An enumeration of encryption algorithm values.
- [integrityAlgorithm](integrityalgorithm.md): The algorithm used by the Security Association to verify the integrity of data.
- [NEVPNIKEv2IntegrityAlgorithm](../nevpnikev2integrityalgorithm.md)
- [diffieHellmanGroup](diffiehellmangroup.md): The Diffie Hellman group used by the Security Association.
- [NEVPNIKEv2DiffieHellmanGroup](../nevpnikev2diffiehellmangroup.md): An enumeration of Diffie-Hellman group values.
- [postQuantumKeyExchangeMethods](postquantumkeyexchangemethods-56672.md): A list of the quantum-secure key exchange methods the Security Association uses.
- [NEVPNIKEv2PostQuantumKeyExchangeMethod](../nevpnikev2postquantumkeyexchangemethod.md): Quantum-secure key exchange methods you use with IKEv2 servers.
